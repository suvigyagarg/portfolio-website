import { jobs } from '@/data/portfolio';
import SectionHead from '@/components/base/SectionHead/SectionHead';

import styles from './Vocation.module.css';
import DemoPlate from '@/components/base/DemoPlate/DemoPlate';

export default function Vocation() {
  return (
    <section className={styles.section} id="vocation">
      <div className="wrap">
        <SectionHead
          num="III"
          title="Vocation"
          meta="Experience Gained — so far."
        />
        <div className={styles.grid}>
          <div className={styles.ledger} data-reveal>
            {jobs.map((job) => (
              <div key={job.company} className={styles.post}>
                <div className={styles.postTop}>
                  <h3 className={styles.postCo}>{job.company}</h3>
                  <span className={styles.postWhen}>{job.period}</span>
                </div>
                <div className={styles.postRole}>
                  {job.roles.map((r) => (
                    <span key={r.label} className={`${styles.badge} ${r.current ? styles.now : ''}`}>
                      {r.label}
                    </span>
                  ))}
                </div>
                <p className={styles.postDesc}>{job.desc}</p>
                {job.link && (
                  <a className={styles.postLink} href={job.link.href} target="_blank" rel="noopener noreferrer">
                    {job.link.label} <span className={styles.arr}>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className={styles.plate} data-reveal style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}>
            <DemoPlate caption="demo · olo-care" tall />
          </div>
        </div>
      </div>
    </section>
  );
}
