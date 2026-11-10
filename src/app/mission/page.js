"use client";

import styles from "./mission.module.css";

import Copy from "@/components/Copy";
import MissionBenefits from "@/components/MissionBenefits";
import MissionFeatures from "@/components/MissionFeatures";
import MissionHeader from "@/components/MissionHeader";
import MissionStack from "@/components/MissionStack";
import MissionUseCases from "@/components/MissionUseCases";
import ParallaxImage from "@/components/ParallaxImage";

export default function Mission() {
  return (
    <>
      <section className={styles.missionHero}>
        <div className={`container ${styles.missionHeroInner}`}>
          <div className={styles.missionHeroCols}>
            <Copy animateOnScroll={false} delay={1.85}>
              <h4 className={styles.missionHeroIndex}>Our Mission</h4>
            </Copy>

            <div className={styles.missionHeroCopy}>
              <Copy animateOnScroll={false} delay={1.5}>
                <h2>
                  DuoBand is a medical wearable for immunocompromised or
                  vulnerable patients that constantly monitors pH, moisture, and
                  temperature during the healing process. DuoBand presents
                  potential in both home and hospital environments, including
                  active monitoring by nurses or the patient using AI-driven
                  data analysis. As such, DuoBand acts to detect and prevent
                  sepsis before it worsens by automatically dispensing
                  antibiotics to the injury site.
                </h2>
              </Copy>

              <div className={styles.missionHeroMeta}>
                <Copy animateOnScroll={false} delay={1.95}>
                  <h4>Catch Infection Early</h4>
                </Copy>

                <Copy animateOnScroll={false} delay={2.05}>
                  <h4>Gentle on Healing Skin</h4>
                </Copy>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.missionHeroMedia}>
          <ParallaxImage src="/images/img4.jpg" alt="" />
        </div>
      </section>

      <MissionStack />
      <MissionHeader />
      <MissionFeatures />
      <MissionUseCases />
      <MissionBenefits />
    </>
  );
}
