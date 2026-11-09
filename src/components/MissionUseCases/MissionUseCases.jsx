"use client";

import styles from "./MissionUseCases.module.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { RiAddLine } from "react-icons/ri";

import Copy from "@/components/Copy";
import MissionSectionHeader from "@/components/MissionSectionHeader";

gsap.registerPlugin(SplitText);

const principles = [
  {
    title: "Simplify first",
    body: "Our mentor urged us to get the core sensing working before adding features. That advice now sets the order of everything we do: lock the design, prove the circuit on a breadboard, then build the first gold leaf prototype.",
  },
  {
    title: "Trends beat snapshots",
    body: "One high reading means little, whereas a rise over 24 or more hours tells the story. So we track trends rather than single readings, build a personal baseline for each patient, sample every few hours, and plan for a full day of data.",
  },
  {
    title: "Moisture is the biggest noise",
    body: "Sweat and wound exudate skew readings. We pivoted our original sensor placement because moisture interferes, and we are adding noise filtering. Placement and filtering matter as much as the sensor itself, and we are still weighing a wound-center layout against a spaced grid.",
  },
  {
    title: "Not all bacteria are bad",
    body: "A pH change can come from healthy flora, not infection. That is why we narrowed biomarker testing to oxidase testing and pH sensing, with one goal: telling harmful bacteria apart from the healthy ones.",
  },
  {
    title: "Gold leaf works",
    body: "DuoSkin showed that gold leaf circuitry is accessible, cheap and skin-friendly. It lets us put sensors on fragile, healing skin without the trauma that adhesive wearables cause.",
  },
];

export default function MissionUseCases() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const questions = root.querySelectorAll(`.${styles.question}`);
    const splits = [];
    const cleanups = [];

    const setup = () => {
      questions.forEach((question) => {
        const item = question.closest(`.${styles.item}`);
        const answer = item.querySelector(`.${styles.answer}`);
        const body = item.querySelector(`.${styles.body}`);
        const icon = question.querySelector(`.${styles.icon} svg`);

        const split = SplitText.create(body, {
          type: "lines",
          linesClass: "line",
          mask: "lines",
        });

        splits.push(split);
        gsap.set(split.lines, { yPercent: 100 });

        let isOpen = false;
        let tween;

        const onClick = () => {
          tween?.kill();

          if (isOpen) {
            isOpen = false;
            question.setAttribute("aria-expanded", "false");
            item.classList.remove(styles.open);

            gsap.to(icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });

            tween = gsap
              .timeline()
              .to(
                split.lines,
                {
                  yPercent: 100,
                  duration: 0.35,
                  stagger: -0.05,
                  ease: "power2.in",
                },
                0,
              )
              .to(
                answer,
                {
                  height: 0,
                  duration: 0.4,
                  ease: "power2.out",
                },
                0.1,
              );

            return;
          }

          isOpen = true;
          question.setAttribute("aria-expanded", "true");
          item.classList.add(styles.open);

          gsap.to(icon, {
            rotation: 45,
            duration: 0.3,
            ease: "power2.out",
          });

          answer.style.height = "auto";
          const contentHeight = answer.scrollHeight;
          answer.style.height = "0px";

          gsap.set(split.lines, { yPercent: 100 });

          tween = gsap
            .timeline()
            .to(answer, {
              height: contentHeight,
              duration: 0.5,
              ease: "power2.out",
            })
            .to(
              split.lines,
              {
                yPercent: 0,
                duration: 0.55,
                stagger: 0.08,
                ease: "power2.out",
              },
              0.12,
            );
        };

        question.addEventListener("click", onClick);
        cleanups.push(() => question.removeEventListener("click", onClick));
      });
    };

    let cancelled = false;

    // Split after fonts so line breaks are stable
    document.fonts.ready
      .then(() => {
        if (!cancelled) setup();
      })
      .catch(() => {
        if (!cancelled) setup();
      });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      splits.forEach((split) => split.revert());
      gsap.killTweensOf(
        root.querySelectorAll(`.${styles.answer}, .${styles.icon} svg, .line`),
      );
    };
  }, []);

  return (
    <section ref={rootRef} className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.row}>
          <MissionSectionHeader className={styles.label} labelId="mission-rules-label">
            What We've Learned
          </MissionSectionHeader>

          <div className={styles.list}>
            {principles.map(({ title, body }) => {
              const titleId = `mission-rule-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

              return (
                <div key={title} className={styles.item}>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded="false"
                  >
                    <Copy>
                      <h3 id={titleId} className={styles.title}>
                        {title}
                      </h3>
                    </Copy>
                    <span className={styles.icon} aria-hidden="true">
                      <RiAddLine />
                    </span>
                  </button>

                  <div className={styles.answer}>
                    <h4 className={styles.body}>{body}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
