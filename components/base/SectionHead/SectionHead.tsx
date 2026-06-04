import { SectionHeadProps } from '@/types/components';
import styles from './SectionHead.module.css';

export default function SectionHead({ num, title, meta, center }: SectionHeadProps) {
  return (
    <div
      className={styles.sectionHead}
      data-reveal
      style={center ? { justifyContent: 'center', border: 0, marginBottom: 24 } : undefined}
    >
    
      <h2 className={styles.title}>   <span className={styles.num}>{num}</span> {title}</h2>
      {meta && <p className={styles.meta}>{meta}</p>}
    </div>
  );
}
