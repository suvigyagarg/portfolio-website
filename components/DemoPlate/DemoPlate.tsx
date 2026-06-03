'use client';
import { useRef, useState } from 'react';
import styles from './DemoPlate.module.css';

interface Props {
  caption: string;
  tall?: boolean;
  videoSrc?: string;
}

export default function DemoPlate({ caption, tall, videoSrc = '/videos/demo.mov' }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (!playing) {
      setPlaying(true);
      videoRef.current?.play();
    } else {
      setPlaying(false);
      if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    }
  };

  return (
    <figure
      className={`${styles.plate} ${tall ? styles.tall : ''} ${playing ? styles.playing : ''}`}
      onClick={handleClick}
    >
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      <video
        ref={videoRef}
        className={styles.vid}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="none"
      />

      <span className={styles.play} aria-label="Play demo">
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 2 L14 8 L3 14 Z" />
        </svg>
      </span>

      <figcaption className={styles.cap}>
        <span className={styles.dot} />
        {caption}
      </figcaption>
    </figure>
  );
}
