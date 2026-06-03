import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.colophon}>
      <div className="wrap">
        <p className={styles.sig}>
          <span> Suvigya Garg</span>
           <a href="tel:+918178029305">+91 - 8178029305</a>
            <a href="mailto:suvigya.2003.garg@gmail.com">suvigya.2003.garg@gmail.com</a>

          </p>
        <p>© {new Date().getFullYear()}<br/>
          <span>The concept of the design is inspired by The Renaissance Period</span>
        </p>
      </div>
    </footer>
  );
}
