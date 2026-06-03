import { faculties } from '@/data/portfolio';
import SectionHead from '@/components/base/SectionHead/SectionHead';
import styles from './Faculties.module.css';

export default function Faculties() {
  return (
    <section className={styles.section} id="faculties">
      <div className="wrap">
        <SectionHead
          num="II"
          title="Faculties"
          meta="The skills I know my way with ."
        />
        <div className={styles.faculties}>
          {faculties.map((f) => (
            <div
              key={f.rom}
              className={styles.faculty}
              data-reveal
              style={f.delay ? ({ '--reveal-delay': `${f.delay}s` } as React.CSSProperties) : undefined}
            >
              <div className={styles.fHead}>
                <span className={styles.fRom}>{f.rom}</span>
                <h3 className={styles.fName}>{f.name}</h3>
              </div>
              <div className={styles.chips}>
                {f.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
