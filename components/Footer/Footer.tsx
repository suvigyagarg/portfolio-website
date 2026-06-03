import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.colophon}>
      <div className="wrap">
        <p className={styles.sig}>Suvigya Garg</p>
        <p>Set in Cormorant Garamond &amp; Helvetica · Anno MMXXVI</p>
        <p>© {new Date().getFullYear()} — A Renaissance Practice</p>
      </div>
    </footer>
  );
}
