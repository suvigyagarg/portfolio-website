import styles from './SectionHead.module.css';

interface Props {
  num: string;
  title: string;
  meta?: string;
  center?: boolean;
}

export default function SectionHead({ num, title, meta, center }: Props) {
  return (
    <div
      className={styles.sectionHead}
      data-reveal
      style={center ? { justifyContent: 'center', border: 0, marginBottom: 24 } : undefined}
    >
      <span className={styles.num}>{num}</span>
      <h2 className={styles.title}>{title}</h2>
      {meta && <p className={styles.meta}>{meta}</p>}
    </div>
  );
}
