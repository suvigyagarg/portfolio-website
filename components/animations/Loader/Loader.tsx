'use client';
import { useEffect } from 'react';
import styles from './Loader.module.css';

interface Props {
  onLoaded: () => void;
}

export default function Loader({ onLoaded }: Props) {
  useEffect(() => {
    const t = setTimeout(() => {
      document.body.classList.add('loaded');
      onLoaded();
    }, 950);

    // const safety = setTimeout(() => {
    //   if (!document.body.classList.contains('loaded')) {
    //     document.body.classList.add('loaded');
    //     onLoaded();
    //   }
    // }, 2600);

    return () => {
      clearTimeout(t);
      // clearTimeout(safety);
    };
  }, [onLoaded]);

  return (
    <div className={styles.loader} aria-hidden="true">
      <div className={styles.loaderCore} />
      <div className={styles.ring} />
    </div>
  );
}
