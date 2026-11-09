"use client";

import styles from "./MissionHeader.module.css";

import Copy from "@/components/Copy";

export default function MissionHeader() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.row}>
          <Copy>
            <h1 id="mission-land-heading" className={styles.heading}>
              Trends tell the story, not snapshots
            </h1>
          </Copy>
          <div className={styles.description}>
            <Copy triggerPoint="#mission-land-heading" delay={0.1}>
              <h3>
                One high reading means little. Temperature rising for 24
                hours or more can be normal healing, as long as it falls over
                the following days. Duoband builds a personal baseline for each
                patient, samples every few hours, and flags a continuous rise as
                an anomaly.
              </h3>
            </Copy>
            <Copy triggerPoint="#mission-land-heading" delay={0.25}>
              <h3>
                pH needs the same care. Healing favors a low, acidic pH that
                keeps microbes in check, but a shift can come from healthy
                bacteria rather than infection. So we pair sensing with biology:
                a mannitol salt agar indicator in the dressing to detect
                Staphylococcus aureus, with oxidase testing as a possible second
                check.
              </h3>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
