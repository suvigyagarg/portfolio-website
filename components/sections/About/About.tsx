'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { about, books } from '@/data/portfolio';
import SectionHead from '@/components/base/SectionHead/SectionHead';
import styles from './About.module.css';

export default function About() {
  const [activeIdx, setActiveIdx] = useState<number | null>(3);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [platePos, setPlatePos] = useState({
    top: 0,
    side: 'right' as 'left' | 'right',
    offset: '2%',
  });
  const listRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);

  const active = activeIdx !== null ? about[activeIdx] : null;

  const handleEnter = (i: number, el: HTMLElement) => {
    setActiveIdx(i);
    if (!listRef.current) return;
    const listRect = listRef.current.getBoundingClientRect();
    const rowRect = el.getBoundingClientRect();
    const top = rowRect.top - listRect.top - 40;
    const isRight = i % 2 === 0;
    setPlatePos({
      top: Math.max(-30, top),
      side: isRight ? 'right' : 'left',
      offset: isRight
        ? i % 4 === 0
          ? '2%'
          : '8%'
        : i % 4 === 1
          ? '4%'
          : '10%',
    });
  };

  const handleLeave = () => setActiveIdx(3);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  const tilt = platePos.side === 'right' ? '2.4deg' : '-2.6deg';

  return (
    <section className={styles.section} id="about">
      <div className="wrap">
        <SectionHead
          num="I"
          title="About"
          meta="A brief Glimpse at my life and Idea's."
        />

        <div
          ref={listRef}
          className={`${styles.list} ${activeIdx !== null ? styles.hovering : ''}`}
          data-reveal
          onMouseLeave={handleLeave}
        >
          {about.map((w, i) => (
            <div
              key={w.num}
              className={`${styles.item} ${openIdx === i ? styles.itemOpen : ''}`}
            >
              <button
                type="button"
                className={`${styles.entry} ${activeIdx === i ? styles.active : ''}`}
                onMouseEnter={(e) => handleEnter(i, e.currentTarget)}
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                <span className={styles.eNum}>{w.num}</span>
                <span className={styles.eTitle}>{w.title}</span>
                <span className={styles.eMeta}>{w.meta}</span>
                <span className={styles.eToggle} aria-hidden="true">
                  {openIdx === i ? '–' : '+'}
                </span>
              </button>
              <div className={styles.panel}>
                <div className={styles.panelInner}>
                  <div className={styles.pImg}>
                    {w.image && (
                      <Image
                        className={styles.pImgPhoto}
                        src={w.image}
                        alt=""
                        fill
                        sizes="(max-width: 760px) 92vw, 360px"
                      />
                    )}
                  </div>
                  <p className={styles.pExcerpt}>{w.excerpt}</p>
                  <p className={styles.pBody}>{w.body}</p>
                  <p className={styles.pTag}>{w.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={plateRef}
          className={`${styles.plate} ${activeIdx !== null && activeIdx !== 3 ? styles.show : ''}`}
          aria-hidden="true"
          style={{
            top: platePos.top,
            [platePos.side]: platePos.offset,
            ['--tilt' as string]: tilt,
          }}
        >
          <div className={styles.plImg}>
            {active?.image && (
              <Image
                className={styles.plImgPhoto}
                src={active.image}
                alt=""
                fill
                sizes="360px"
              />
            )}
          </div>
          <p className={styles.plExcerpt}>{active?.excerpt}</p>
          <p className={styles.plBody}>{active?.body}</p>
          <p className={styles.plTag}>{active?.tag}</p>
        </div>

        {/* bookshelf */}
        {/* <div className={styles.bookshelf} data-reveal>
          <div className={styles.shelfHead}>
            <span className={styles.sEyebrow}>From the Shelf</span>
            <h3 className={styles.sTitle}>Favourite Books</h3>
            <span className={styles.sLine} />
          </div>
          <div className={styles.books}>
            {books.map((b) => (
              <div key={b.title} className={styles.book}>
                <span className={styles.bDot} />
                <span className={styles.bTitle}>{b.title}</span>
                <span className={styles.bAuthor}>{b.author}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
