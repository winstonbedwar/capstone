"use client";

import styles from "./ImpactSlider.module.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import ParallaxImage from "@/components/ParallaxImage";

gsap.registerPlugin(ScrollTrigger, SplitText);

const slides = [
  {
    title:
      "May: an EHS mentor signed on and paper research began. A Hong Kong University paper built on DuoSkin showed our idea was feasible, and our material list took shape.",
    image: "/images/img1.jpg",
  },
  {
    title:
      "June: EHS alum Mithil Mishra helped us source parts at the University of Pennsylvania, and we swapped in more powerful components. NREMT Pareen Jadav advised us on the biology.",
    image: "/images/img2.jpg",
  },
  {
    title:
      "Summer: we split up to build skills. Vijeta took on the electrical components, while Winston and Mahita focused on connecting to DuoSkin and the UI/UX.",
    image: "/images/img3.jpg",
  },
  {
    title:
      "July: Vijeta began breadboarding how the band would work, Winston studied the microbial process of healing, and Mahita refined our target audience. Early prototypes were clunky.",
    image: "/images/img4.jpg",
  },
  {
    title:
      "August: we started a rough CAD drawing, studied risks like contact dermatitis, and consulted NREMT Rohan Sharma. Every contact agreed it was possible, as long as it stays efficient and sterile.",
    image: "/images/img5.jpg",
  },
  {
    title:
      "September: with school back, the first prototype became our priority, starting as a breadboard model. Assembly got underway and we presented our progress.",
    image: "/images/img6.jpg",
  },
  {
    title:
      "October: our second prototype design is close to final. Next come the hard questions: how to prove Duoband is accurate, and who to test it with.",
    image: "/images/img7.jpg",
  },
];

export default function ImpactSlider() {
  const sliderRef = useRef(null);
  const imagesRef = useRef(null);
  const titleRef = useRef(null);
  const indicesRef = useRef(null);
  const progressRef = useRef(null);
  const firstParallaxActiveRef = useRef(true);

  useEffect(() => {
    const root = sliderRef.current;
    const imagesEl = imagesRef.current;
    const titleEl = titleRef.current;
    const indicesEl = indicesRef.current;
    const progressEl = progressRef.current;
    if (!root || !imagesEl || !titleEl || !indicesEl || !progressEl) return;

    let activeSlide = 0;
    let currentSplit = null;

    const ctx = gsap.context(() => {
      indicesEl.innerHTML = "";
      slides.forEach((_, index) => {
        const p = document.createElement("p");
        p.dataset.index = String(index);
        p.innerHTML = `<span class="${styles.marker}"></span><span class="mono-sm ${styles.index}">${String(index + 1).padStart(2, "0")}</span>`;
        indicesEl.appendChild(p);

        const indexEl = p.querySelector(`.${styles.index}`);
        const markerEl = p.querySelector(`.${styles.marker}`);
        gsap.set(indexEl, { opacity: index === 0 ? 1 : 0.35 });
        gsap.set(markerEl, { scaleX: index === 0 ? 1 : 0 });
      });

      function animateIndicators(index) {
        indicesEl.querySelectorAll("p").forEach((indicator, i) => {
          const markerEl = indicator.querySelector(`.${styles.marker}`);
          const indexEl = indicator.querySelector(`.${styles.index}`);
          const on = i === index;
          gsap.to(indexEl, {
            opacity: on ? 1 : 0.35,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(markerEl, {
            scaleX: on ? 1 : 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      function animateTitle(index) {
        if (currentSplit) currentSplit.revert();
        titleEl.innerHTML = `<h2>${slides[index].title}</h2>`;
        currentSplit = SplitText.create(titleEl.querySelector("h2"), {
          type: "lines",
          linesClass: styles.line,
          mask: "lines",
        });
        gsap.set(currentSplit.lines, { yPercent: 100, opacity: 0 });
        gsap.to(currentSplit.lines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      function animateSlide(index) {
        const img = document.createElement("img");
        img.className = styles.dynamicSlide;
        img.src = slides[index].image;
        img.alt = "";
        gsap.set(img, { opacity: 0, scale: 1.1 });
        imagesEl.appendChild(img);

        gsap.to(img, { opacity: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(img, { scale: 1, duration: 1, ease: "power2.out" });

        const all = imagesEl.querySelectorAll(`.${styles.dynamicSlide}`);
        if (all.length > 3) {
          for (let i = 0; i < all.length - 3; i++) all[i].remove();
        }

        animateTitle(index);
        animateIndicators(index);
      }

      animateTitle(0);

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(progressEl, { scaleY: self.progress });
          firstParallaxActiveRef.current = root.getBoundingClientRect().top > 0;

          const next = Math.min(
            slides.length - 1,
            Math.floor(self.progress * slides.length),
          );
          if (next !== activeSlide) {
            activeSlide = next;
            animateSlide(activeSlide);
          }
        },
      });
    }, root);

    return () => {
      if (currentSplit) currentSplit.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sliderRef}
      className={styles.slider}
      style={{ "--slide-count": slides.length }}
    >
      <div className={styles.sticky}>
        <div className={styles.images} ref={imagesRef}>
          <div className={styles.parallaxSlide}>
            <ParallaxImage
              src={slides[0].image}
              alt=""
              activeRef={firstParallaxActiveRef}
            />
          </div>
        </div>

        <div className={styles.title} ref={titleRef}>
          <h2>{slides[0].title}</h2>
        </div>

        <div className={styles.indicator}>
          <div className={styles.indices} ref={indicesRef} />
          <div className={styles.progressBar}>
            <div className={styles.progress} ref={progressRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
