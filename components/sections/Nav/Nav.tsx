'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';
import { links } from '@/constants';

// section-dots list: Hero (#top) + the existing nav links, in page order
const sections = [
  { label: 'Top', href: '#top' },
  ...links.map(({ label, href }) => ({ label, href })),
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(sections[0].href.slice(1));

  useEffect(() => {
    const nav = navRef.current;
    const ids = sections.map((s) => s.href.slice(1));

    const onScroll = () => {
      if (nav)
        nav.classList.toggle(
          styles.docked,
          window.scrollY > window.innerHeight * 0.5
        );

      // active = last section whose top is above scrollTop + 42% viewport
      const line = window.scrollY + window.innerHeight * 0.42;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (href: string) => {
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeLabel =
    sections.find((s) => s.href.slice(1) === activeId)?.label ?? 'Top';

  return (
    <>
      <header ref={navRef} className={styles.nav}>
        <a className={styles.brand} href="#top">
          <span className={styles.mono}>S·G</span>
          <span className={styles.est}>Anno MMIII</span>
        </a>
        <nav className={styles.navLinks}>
          {links.map(({ n, label, href }) => (
            <a key={href} href={href} className={styles.navLink}>
              <span className={styles.n}>{n}</span>
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* mobile-only bottom section dots */}
      <nav className={styles.dots} aria-label="Sections">
        <span className={styles.lbl}>{activeLabel}</span>
        {sections.map((s) => {
          const id = s.href.slice(1);
          return (
            <button
              key={s.href}
              type="button"
              className={`${styles.dot} ${activeId === id ? styles.dotActive : ''}`}
              aria-label={s.label}
              aria-current={activeId === id}
              onClick={() => jump(s.href)}
            />
          );
        })}
      </nav>
    </>
  );
}
