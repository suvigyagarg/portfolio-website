import { works } from '@/data/portfolio';
import SectionHead from '@/components/base/SectionHead/SectionHead';
import styles from './Works.module.css';
import DemoPlate from '@/components/base/DemoPlate/DemoPlate';

export default function Works() {
  return (
    <section className={styles.section} id="works">
      <div className="wrap">
        <SectionHead
          num="V"
          title="Works"
          meta="Things built out of curiosity — software made to be used."
        />
        <div className={styles.works}>
          {works.map((w, i) => (
            <article key={w.idx} className={styles.work} data-reveal>
              <div className={styles.workBody}>
                <span className={styles.idx}>{w.idx}</span>
                <h3 className={styles.workName}>{w.name}</h3>
                <p className={styles.workDesc}>{w.desc}</p>
                <a
                  className={styles.code}
                  href={w.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out Code <span className={styles.arr}>→</span>
                </a>
                <div className={styles.workTags}>
                  {w.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.workPlate}>
                <DemoPlate caption={w.caption}
                thumbnail={w.thumbnail}
                videoSrc={w.video} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
