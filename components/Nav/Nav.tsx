'use client';
import { useEffect, useRef } from 'react';
import styles from './Nav.module.css';

const links = [
  { n: 'I',   label: 'Works',       href: '#works'       },
  { n: 'II',  label: 'Faculties',   href: '#faculties'   },
  { n: 'III', label: 'Vocation',    href: '#vocation'    },
  { n: 'IV',  label: 'Commissions', href: '#commissions' },
  { n: 'V',   label: 'Writings',    href: '#writings'    },
  { n: 'VI',  label: 'Connect',     href: '#connect'     },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle(styles.docked, window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={navRef} className={styles.nav}>
      <a className={styles.brand} href="#top">
        <span className={styles.mono}>S·G</span>
        <span className={styles.est}>Anno MMXXVI</span>
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
  );
}
