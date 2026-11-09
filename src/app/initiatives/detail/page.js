"use client";

import styles from "./detail.module.css";

import Btn from "@/components/Btn";
import Copy from "@/components/Copy";
import Minimap from "@/components/Minimap";
import ParallaxImage from "@/components/ParallaxImage";

export default function InitiativeDetailPage() {
  return (
    <>
      <section className={styles.detailsHero}>
        <div className={`container ${styles.detailsHeroInner}`}>
          <div className={styles.detailsHeroCols}>
            <div className={styles.detailsHeroLead}>
              <Copy delay={1.6} animateOnScroll={false}>
                <p className={`mono-sm ${styles.detailsHeroYear}`}>Steps 01 to 08</p>
              </Copy>
              <Copy delay={1.7} animateOnScroll={false}>
                <h3 className={styles.detailsHeroTitle}>Building Duoband</h3>
              </Copy>
            </div>

            <div className={styles.detailsHeroMeta}>
              <div className={styles.metaItem}>
                <Copy delay={1.8} animateOnScroll={false}>
                  <p className={`mono-sm ${styles.metaLabel}`}>Team</p>
                </Copy>
                <Copy delay={1.9} animateOnScroll={false}>
                  <h3 className={styles.metaValue}>Vijeta, Mahita, Winston</h3>
                </Copy>
              </div>
              <div className={styles.metaItem}>
                <Copy delay={2} animateOnScroll={false}>
                  <p className={`mono-sm ${styles.metaLabel}`}>Method</p>
                </Copy>
                <Copy delay={2.1} animateOnScroll={false}>
                  <h3 className={styles.metaValue}>DuoSkin gold leaf</h3>
                </Copy>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.detailsHeroMedia}>
          <ParallaxImage src="/images/img10.jpg" alt="" />
        </div>
      </section>

      <Minimap />

      <section className={styles.detailsInfo}>
        <div className={styles.detailsInfoBg} aria-hidden="true">
          <ParallaxImage src="/images/img9.jpg" alt="" />
        </div>

        <div className={`container ${styles.detailsInfoInner}`}>
          <div className={styles.detailsInfoGrid}>
            <div className={styles.detailsInfoSpacer} aria-hidden="true" />

            <div className={styles.detailsInfoContent}>
              <Copy>
                <h2 id="details-info-heading">
                  From a sketch to a sensor on skin
                </h2>

                <p>
                  Duoband starts as a sketch. We draw the skin circuitry in
                  graphic design software, placing sensor zones 1, 2 and 3
                  around the wound region. That design is laser cut as a vinyl
                  stencil on tattoo paper, gold leaf goes down over metal leaf
                  adhesive, and the traces are sealed under a layer of adhesive
                  and a silicone overlay. This is the DuoSkin method, and it
                  works: it is accessible, cheap and skin-friendly.
                </p>

                <p>
                  Alongside the gold leaf, we build the rigid electronics.
                  Temperature, pH and moisture sensors connect to an Arduino /
                  ESP32, and we collect sample data over plain wires before
                  anything touches the skin. The electronics are then mounted
                  onto the gold leaf sandwich with conductive fabric tape. From
                  there, data travels over NFC and Bluetooth to the app, which
                  analyzes trends over hours and days and sends a notification
                  when a reading breaks from the patient's baseline.
                </p>
              </Copy>
              <Btn
                href="/initiatives"
                label="Browse all steps"
                reveal
                triggerPoint="#details-info-heading"
                delay={1.5}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
