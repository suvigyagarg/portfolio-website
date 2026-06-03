'use client';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface Props { loaded: boolean; }

const EASING = 'cubic-bezier(.18,.74,.24,1)';

export default function Hero({ loaded }: Props) {
  const nameRef    = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const roleRef    = useRef<HTMLDivElement>(null);
  const introRef   = useRef<HTMLParagraphElement>(null);
  const cueRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      [nameRef, eyebrowRef, roleRef, introRef, cueRef].forEach((r) => {
        if (r.current) r.current.style.opacity = '1';
      });
      return;
    }

     const name = nameRef.current;
    if (name && !name.dataset.split) {
      name.dataset.split = '1';
      const words = (name.textContent ?? '').trim().split(' ');
      name.textContent = '';
      words.forEach((w, wi) => {
        const wordEl = document.createElement('span');
        wordEl.className = styles.word;
        [...w].forEach((c) => {
          const ch = document.createElement('span');
          ch.className = styles.ch;
          ch.textContent = c;
          wordEl.appendChild(ch);
        });
        name.appendChild(wordEl);
        if (wi < words.length - 1) name.appendChild(document.createTextNode(' '));
      });
    }

    // ---- name burst: scale from tiny + blur, origin slightly below centre ----
    if (name) {
      name.style.transformOrigin = '50% 58%';
      name.animate(
        [
          { opacity: 0, transform: 'scale(.46)', filter: 'blur(16px)' },
          { opacity: 1, transform: 'scale(1)',   filter: 'blur(0)'    },
        ],
        { duration: 1400, easing: EASING, fill: 'both', delay: 2150 },
      );
    }

    // ---- staggered fade-ups for the remaining hero elements ----
    const fadeUps: [React.RefObject<HTMLElement | null>, number][] = [
      [eyebrowRef, 1900],
      [roleRef,   2950],
      [introRef,  3200],
      [cueRef,    3550],
    ];

    fadeUps.forEach(([ref, delay]) => {
      ref.current?.animate(
        [
          { opacity: 0, transform: 'scale(.9)', filter: 'blur(7px)' },
          { opacity: 1, transform: 'scale(1)',  filter: 'blur(0)'   },
        ],
        { duration: 1100, easing: EASING, fill: 'both', delay },
      );
    });
  }, [loaded]);

  return (
    <section className={`${styles.hero} hero-section`} id="top">
      <div className="wrap">
        <p ref={eyebrowRef} className={`eyebrow ${styles.heroEyebrow}`}>
          A Renaissance Practice · Software &amp; Beyond
        </p>
        <h1 ref={nameRef} className={styles.heroName}>Suvigya Garg</h1>
        <div ref={roleRef} className={styles.heroRole}>
          <span className={styles.dash} />
          <span>Software Engineer</span>
          <span className={styles.dash} />
        </div>
        <p ref={introRef} className={styles.heroIntro}>
          A software engineer by profession — but a Renaissance man at heart, forever drawn to
          contribute across fields, and to keep learning.
        </p>
        <div ref={cueRef} className={styles.scrollCue}>
          <span className={styles.cueLabel}>Begin</span>
          <span className={styles.stem} />
        </div>
      </div>
    </section>
  );
}
