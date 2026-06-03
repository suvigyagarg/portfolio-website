import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.colophon}>
      <div className="wrap">
        <p className={styles.sig}>
          <span> Suvigya Garg</span>
           <span>+91 - 8178029305</span>
            <span>suvigya.2003.garg@gmail.com</span>
      
          </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
