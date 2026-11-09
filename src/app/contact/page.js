"use client";

import styles from "./contact.module.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Btn from "@/components/Btn";
import Copy from "@/components/Copy";
import Logo from "@/components/Logo";
import ParallaxImage from "@/components/ParallaxImage";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const calloutLogoRef = useRef(null);

  // scale callout logo in when heading enters the viewport
  useGSAP(() => {
    const trigger = document.getElementById("contact-callout-heading");
    if (!trigger || !calloutLogoRef.current) return;

    gsap.set(calloutLogoRef.current, {
      scale: 0,
      transformOrigin: "left center",
    });
    gsap.to(calloutLogoRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power4.out",
      delay: 0.1,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <>
      <section className={styles.contactHero} id="top">
        <div className={styles.contactHeroBg}>
          <ParallaxImage src="/images/img7.jpg" alt="" />
        </div>

        <div className={styles.contactHeroContent}>
          <div className={styles.intro}>
            <Copy animateOnScroll={false} delay={1.5}>
              <p>
                Duoband is built by Vijeta, Mahita and Winston. This site
                follows our November 2026 status update, covering what Duoband
                is, how we make it, what our mentor told us and where we go
                next.
              </p>
            </Copy>
            <Copy animateOnScroll={false} delay={1.65}>
              <p>
                We are reaching out to out-of-school mentors as the build moves
                forward. If you can advise on wound biology, skin-mounted
                sensors or the app, we would love to hear from you.
              </p>
            </Copy>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.contactCol}>
              <Copy animateOnScroll={false} delay={1.8}>
                <p className="mono-sm">Team</p>
              </Copy>
              <div className={styles.contactStack}>
                <div className={styles.inquiry}>
                  <Copy animateOnScroll={false} delay={1.9}>
                    <p>Vijeta, Mahita, Winston</p>
                  </Copy>
                  <Copy animateOnScroll={false} delay={1.95}>
                    <p>The Duoband team</p>
                  </Copy>
                </div>
                <div className={styles.inquiry}>
                  <Copy animateOnScroll={false} delay={2}>
                    <p>Current status:</p>
                  </Copy>
                  <Copy animateOnScroll={false} delay={2.05}>
                    <p>8% built, 90% confident</p>
                  </Copy>
                </div>
                <div className={styles.inquiry}>
                  <Copy animateOnScroll={false} delay={2.1}>
                    <p>Next milestone:</p>
                  </Copy>
                  <Copy animateOnScroll={false} delay={2.15}>
                    <p>Gold leaf prototype v1, December</p>
                  </Copy>
                </div>
              </div>
            </div>

            <div className={styles.careersCol}>
              <Copy animateOnScroll={false} delay={1.8}>
                <p className="mono-sm">Website</p>
              </Copy>
              <Copy animateOnScroll={false} delay={1.95}>
                <a href="https://capstone.teamfaraday.com">
                  capstone.teamfaraday.com
                </a>
              </Copy>
            </div>
          </div>

          <Copy animateOnScroll={false} delay={2.25}>
            <p className={styles.closing}>
              Want to help shape Duoband? We are looking for mentors who can
              push the design forward. The best advice we have had so far:
              simplify first.
            </p>
          </Copy>
        </div>
      </section>

      <section className={styles.contactCallout}>
        <div className={`container ${styles.calloutInner}`}>
          <Copy>
            <h2 id="contact-callout-heading">
              Ready to help us catch infection sooner?
            </h2>
          </Copy>

          <div className={styles.calloutPerson}>
            <span ref={calloutLogoRef} className={styles.calloutLogoWrap}>
              <Logo className={styles.calloutLogo} aria-hidden="true" />
            </span>
            <div className={styles.calloutMeta}>
              <Copy triggerPoint="#contact-callout-heading" delay={0.1}>
                <p>The Duoband Team</p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={`container ${styles.infoInner}`}>
          <div className={`cols ${styles.infoCols}`}>
            <div className={`col-3 ${styles.infoSpacer}`} aria-hidden="true" />

            <div className={`col-3 ${styles.infoCol}`}>
              <Copy>
                <p
                  id="contact-field-office"
                  className={`mono-sm ${styles.infoLabel}`}
                >
                  Built On
                </p>
              </Copy>
              <div className={styles.infoBlock}>
                <Copy triggerPoint="#contact-field-office" delay={0.1}>
                  <p>DuoSkin gold leaf</p>
                </Copy>
                <Copy triggerPoint="#contact-field-office" delay={0.15}>
                  <p>Arduino / ESP32</p>
                </Copy>
                <Copy triggerPoint="#contact-field-office" delay={0.2}>
                  <p>NFC + Bluetooth</p>
                </Copy>
              </div>
              <div className={styles.infoBlock}>
                <Copy triggerPoint="#contact-field-office" delay={0.25}>
                  <p className={`mono-sm ${styles.infoLabel}`}>
                    Timeline
                  </p>
                </Copy>
                <Copy triggerPoint="#contact-field-office" delay={0.3}>
                  <p>Build starts November 2026</p>
                </Copy>
                <Copy triggerPoint="#contact-field-office" delay={0.35}>
                  <p>Target finish in May</p>
                </Copy>
              </div>
            </div>

            <div className={`col-3 ${styles.infoCol}`}>
              <Copy>
                <p id="contact-reach" className={`mono-sm ${styles.infoLabel}`}>
                  Tracks
                </p>
              </Copy>
              <div className={styles.infoBlock}>
                <Copy triggerPoint="#contact-reach" delay={0.1}>
                  <p>Temperature</p>
                </Copy>
                <Copy triggerPoint="#contact-reach" delay={0.15}>
                  <p>pH</p>
                </Copy>
                <Copy triggerPoint="#contact-reach" delay={0.2}>
                  <p>Moisture</p>
                </Copy>
              </div>
            </div>

            <div className={`col-3 ${styles.infoCol}`}>
              <Copy>
                <p
                  id="contact-follow"
                  className={`mono-sm ${styles.infoLabel}`}
                >
                  Website
                </p>
              </Copy>
              <div className={styles.infoBlock}>
                <Copy triggerPoint="#contact-follow" delay={0.1}>
                  <a href="https://capstone.teamfaraday.com">
                    capstone.teamfaraday.com
                  </a>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.insightSection}>
        <div className={`container ${styles.insightInner}`}>
          <div className={`cols ${styles.insightCols}`}>
            <div className={`col-2 ${styles.insightAside}`}>
              <Copy>
                <p
                  id="contact-insight-recent"
                  className={`mono-sm ${styles.infoLabel}`}
                >
                  Recent
                </p>
              </Copy>
              <Btn
                href="/impact"
                label="Read the status update"
                reveal
                triggerPoint="#contact-insight-recent"
                delay={0.15}
              />
            </div>

            <div className={`col-5 ${styles.insightCopy}`}>
              <Copy triggerPoint="#contact-insight-recent" delay={0.1}>
                <p className={`mono-sm ${styles.infoLabel}`}>Status Update</p>
              </Copy>
              <Copy triggerPoint="#contact-insight-recent" delay={0.2}>
                <h2>What Two Months of Research and Mentor Time Taught Us</h2>
              </Copy>
            </div>

            <div className={`col-5 ${styles.insightMedia}`}>
              <div className={styles.insightMediaFrame}>
                <ParallaxImage src="/images/img3.jpg" alt="" speed={0.15} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
