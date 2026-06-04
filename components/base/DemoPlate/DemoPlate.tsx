'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './DemoPlate.module.css';
import { DemoPlateProps } from '@/types/components';

export default function DemoPlate({
  caption,
  videoSrc ,
  thumbnail ,
}: DemoPlateProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  const stop = () => {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') play();
  };
  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') stop();
  };
  const handleClick = (e: React.MouseEvent) => {
    if ((e.nativeEvent as PointerEvent).pointerType !== 'mouse') {
      playing ? stop() : play();
    }
  };

  return (
    <div
      className={`${styles.plate} ${playing ? styles.playing : ''}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      {thumbnail && (
        <Image
          className={styles.thumb}
          src={thumbnail}
          alt={caption}
          aria-hidden="true"
          fill
          sizes="(max-width: 820px) 100vw, 50vw"
        />
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

      <div className={styles.cap}>
        <span className={styles.dot} />
        {caption}
      </div>
    </div>
  );
}
