"use client";

import styles from "./home.module.css";

import { useEffect } from "react";

import Btn from "@/components/Btn";
import Copy from "@/components/Copy";
import Preloader from "@/components/Preloader";

import {
  HOME_COPY_BASE_DELAY,
  HOME_COPY_OFFSETS,
  PRELOADER_COPY_BASE_DELAY,
  markPreloaderSeen,
  shouldShowPreloader,
} from "@/lib/preloader";

export default function Home() {
  const showPreloader = shouldShowPreloader();
  const baseDelay = showPreloader
    ? PRELOADER_COPY_BASE_DELAY
    : HOME_COPY_BASE_DELAY;

  // mark preloader as seen when leaving the home page
  useEffect(() => {
    return () => {
      markPreloaderSeen();
    };
  }, []);

  return (
    <>
      {showPreloader ? <Preloader active /> : null}

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/images/img6.jpg" alt="" />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={`cols ${styles.heroCols}`}>
            <div className={`col-4 ${styles.heroTagline}`}>
              <Copy
                delay={baseDelay + HOME_COPY_OFFSETS.tagline}
                animateOnScroll={false}
              >
                <h1>
                  Duoband catches wound infection before symptoms show.
                </h1>
              </Copy>
            </div>

            <aside className={`col-2 ${styles.heroAside}`}>
              <div className={styles.asideTop}>
                <Copy
                  delay={baseDelay + HOME_COPY_OFFSETS.aside}
                  animateOnScroll={false}
                >
                  <h5>
                    A gold leaf wound dressing that tracks temperature, pH and
                    moisture, then sends it to an app.
                  </h5>
                </Copy>

                <Btn
                  href="/initiatives"
                  label="See how it's made"
                  reveal
                  delay={baseDelay + HOME_COPY_OFFSETS.btn}
                  animateOnScroll={false}
                />
              </div>

              <div className={styles.asideBottom}>
                <Copy
                  delay={baseDelay + HOME_COPY_OFFSETS.monoStart}
                  animateOnScroll={false}
                >
                  <p className="mono-sm">Smart wound dressing</p>
                </Copy>
                <Copy
                  delay={baseDelay + HOME_COPY_OFFSETS.monoEnd}
                  animateOnScroll={false}
                >
                  <p className="mono-sm">About $10 per band</p>
                </Copy>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
