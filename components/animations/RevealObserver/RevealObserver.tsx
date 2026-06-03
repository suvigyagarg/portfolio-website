'use client';
import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    els.forEach((el) => io.observe(el));

    const revealInView = () => {
      els.forEach((el) => {
        if (!el.classList.contains('visible') && el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealInView, { passive: true });
    const t1 = setTimeout(revealInView, 1500);
    const t2 = setTimeout(() => els.forEach((el) => el.classList.add('visible')), 4000);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', revealInView);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
