'use client';
import { useRef, useState } from 'react';
import styles from './DemoPlate.module.css';

interface Props {
  caption: string;
  tall?: boolean;
  videoSrc?: string;
  thumbnail?: string;
}

export default function DemoPlate({
  caption,
  tall,
  videoSrc = '/videos/synapsis_video.mov',
  thumbnail = '/Images/synapsis_thumbnail.png',
}: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    setPlaying(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <figure
      className={`${styles.plate} ${tall ? styles.tall : ''} ${playing ? styles.playing : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      {thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.thumb} src={thumbnail} alt="" aria-hidden="true" />
      )}

      <video
        ref={videoRef}
        className={styles.vid}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
      />

      <figcaption className={styles.cap}>
        <span className={styles.dot} />
        {caption}
      </figcaption>
    </figure>
  );
}
