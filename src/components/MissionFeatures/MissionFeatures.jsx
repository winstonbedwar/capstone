import styles from "./MissionFeatures.module.css";

import Copy from "@/components/Copy";
import MissionSectionHeader from "@/components/MissionSectionHeader";
import ParallaxImage from "@/components/ParallaxImage";

export default function MissionFeatures() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <MissionSectionHeader className={styles.label} labelId="mission-record-label">
          Why It Matters
        </MissionSectionHeader>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.heroCard}`}>
            <div className={styles.media} aria-hidden="true">
              <ParallaxImage src="/images/img6.jpg" alt="" />
            </div>

            <div className={styles.cardInner}>
              <Copy>
                <h4 id="mission-feature-restored-label" className={styles.cardLabel}>
                  Estimated Cost per Band
                </h4>
              </Copy>
              <Copy triggerPoint="#mission-feature-restored-label" delay={0.1}>
                <h1 className={styles.cardValue}>About $10</h1>
              </Copy>
            </div>
          </article>

          <div className={styles.bottomRow}>
            <article
              className={`${styles.card} ${styles.statCard} ${styles.accent}`}
            >
              <div className={styles.cardInner}>
                <Copy>
                  <h4 id="mission-feature-returned-label" className={styles.cardLabel}>
                    Septic Shock Treatment per Patient
                  </h4>
                </Copy>
                <Copy triggerPoint="#mission-feature-returned-label" delay={0.1}>
                  <h1 className={styles.cardValue}>~$32,000</h1>
                </Copy>
              </div>
            </article>

            <article
              className={`${styles.card} ${styles.statCard} ${styles.imageCard}`}
            >
              <div className={styles.media} aria-hidden="true">
                <ParallaxImage src="/images/img12.jpg" alt="" />
              </div>

              <div className={styles.cardInner}>
                <Copy>
                  <h4 id="mission-feature-verified-label" className={styles.cardLabel}>
                    Estimated E-Waste Cut
                  </h4>
                </Copy>
                <Copy triggerPoint="#mission-feature-verified-label" delay={0.1}>
                  <h1 className={styles.cardValue}>80%</h1>
                </Copy>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
