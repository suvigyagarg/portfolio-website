'use client';
import { useEffect } from 'react';
import styles from './Loader.module.css';

interface Props {
  onLoaded: () => void;
}

export default function Loader({ onLoaded }: Props) {
  useEffect(() => {
    const LoaderTimeout = setTimeout(() => {
      document.body.classList.add('loaded');
      onLoaded();
    }, 950);

    return () => {
      clearTimeout(LoaderTimeout);
    };
  }, [onLoaded]);

  return (
    <div className={styles.loader} aria-hidden="true">
      <div className={styles.loaderCore} />
      <div className={styles.ring} />
    </div>
  );
}
