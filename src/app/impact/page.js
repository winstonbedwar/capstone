"use client";

import styles from "./impact.module.css";

import Btn from "@/components/Btn";
import Copy from "@/components/Copy";
import ImpactClock from "@/components/ImpactClock";
import ImpactSlider from "@/components/ImpactSlider";
import ParallaxImage from "@/components/ParallaxImage";

const impactStats = [
  {
    index: "01",
    title:
      "Mid November: lock the design. Choose the final sensors, confirm the biology, reach out to out-of-school mentors and finish remaining orders.",
  },
  {
    index: "02",
    title:
      "Late November: draw the circuit schematic, wire the sensors to the Arduino on a breadboard and test readings, including moisture noise.",
  },
  {
    index: "03",
    title:
      "December: laser cut stencils, apply gold leaf and mount electronics for prototype v1, and start sketching the app UI.",
  },
];

export default function Impact() {
  return (
    <>
      <section className={styles.impactHero}>
        <div className={`container ${styles.impactHeroInner}`}>
          <div className={`cols ${styles.impactHeroCols}`}>
            <div className="col-3">
              <Copy animateOnScroll={false} delay={1.5}>
                <h1>Progress</h1>
              </Copy>
            </div>

            <div
              className={`col-6 ${styles.impactHeroSpacer}`}
              aria-hidden="true"
            />

            <div className="col-3">
              <Copy animateOnScroll={false} delay={1.75}>
                <h4>
                  How Duoband got here, from our first check-in in May to our
                  second prototype design. Keep scrolling for the full
                  timeline.
                </h4>
              </Copy>
            </div>
          </div>
        </div>

        <div className={styles.impactHeroMedia}>
          <ParallaxImage src="/images/img2.jpg" alt="" />
        </div>
      </section>

      <section className={styles.impactInfo}>
        <div className={`container ${styles.impactInfoInner}`}>
          <div className={`cols ${styles.impactInfoHeader}`}>
            <div className={`col-3 ${styles.impactInfoLabels}`}>
              <Copy>
                <p id="impact-info-label" className="mono-sm">
                  Status update
                </p>
              </Copy>
              <Copy triggerPoint="#impact-info-label" delay={0.05}>
                <p className="mono-sm">November 2026</p>
              </Copy>
            </div>

            <div className="col-6">
              <Copy>
                <h2 id="impact-info-heading">
                  8% built, 90% confident
                </h2>
              </Copy>
            </div>

            <div className={`col-3 ${styles.impactInfoLink}`}>
              <Btn
                href="/initiatives"
                label="See the build steps"
                reveal
                triggerPoint="#impact-info-heading"
                delay={0.15}
              />
            </div>
          </div>

          <div className={`cols ${styles.impactInfoIntro}`}>
            <div className="col-9">
              <Copy triggerPoint="#impact-info-heading" delay={0.2}>
                <h2>
                  Research and planning are well underway and the physical
                  build is just starting. We are 90% confident we finish on our
                  May timeline.
                </h2>
              </Copy>
            </div>

            <div className="col-3">
              <div className={styles.impactInfoMedia}>
                <ParallaxImage src="/images/img4.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className={`cols ${styles.impactInfoStats}`}>
            {impactStats.map((stat) => {
              const statId = `impact-stat-${stat.index}`;

              return (
                <div
                  key={stat.index}
                  className={`col-4 ${styles.impactInfoStat}`}
                >
                  <Copy>
                    <h2 id={statId}>{stat.index}</h2>
                  </Copy>
                  <Copy triggerPoint={`#${statId}`} delay={0.1}>
                    <p>{stat.title}</p>
                  </Copy>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div id="impact-record">
        <ImpactSlider />
      </div>

      <ImpactClock />
    </>
  );
}
