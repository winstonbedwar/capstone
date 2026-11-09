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
                  Adhesive wearables damage healing skin. Duoband gives
                  immunocompromised adults with deep wounds a dressing that
                  watches the immune response at the wound, so infection is
                  caught at home before symptoms show.
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
