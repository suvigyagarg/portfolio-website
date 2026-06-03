'use client';
import { useState, useRef } from 'react';
import { socials } from '@/data/portfolio';
import SectionHead from '@/components/SectionHead/SectionHead';
import styles from './Connect.module.css';

type FormState = 'idle' | 'sending' | 'done' | 'error';

export default function Connect() {
  const [state,   setState]   = useState<FormState>('idle');
  const [errMsg,  setErrMsg]  = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current?.checkValidity()) { formRef.current?.reportValidity(); return; }

    setState('sending');
    setErrMsg('');

    const data = new FormData(formRef.current);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    data.get('name'),
          email:   data.get('email'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setState('done');
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setState('error');
    }
  };

  return (
    <section className={styles.section} id="connect">
      <div className="wrap">
        <SectionHead num="VI" title="Connect" center />

        <p className={styles.invite} data-reveal>
          If any of this resonates, the door is open.
        </p>

        <div className={styles.contactWrap} data-reveal style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}>
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            style={{ visibility: state === 'done' ? 'hidden' : 'visible' }}
          >
            <div className={styles.field}>
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" name="name" type="text" placeholder="e.g. Leonardo da Vinci" required />
              <span className={styles.bar} />
            </div>
            <div className={styles.field}>
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" placeholder="you@studio.com" required />
              <span className={styles.bar} />
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="cf-msg">A few words</label>
              <textarea id="cf-msg" name="message" placeholder="What shall we make together?" required />
              <span className={styles.bar} />
            </div>
            <div className={styles.formFoot}>
              <p className={styles.formNote}>I read every letter, and reply in kind.</p>
              <button className={styles.sendBtn} type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending…' : <>Send a Letter <span className={styles.arr}>→</span></>}
              </button>
            </div>
            {state === 'error' && <p className={styles.errNote}>{errMsg}</p>}
          </form>

          {state === 'done' && (
            <div className={styles.formDone}>
              <p className={styles.fdMark}>Thank you — your letter is on its way.</p>
              <p className={styles.fdSub}>I&apos;ll be in touch soon</p>
            </div>
          )}
        </div>

        <div className={styles.divider} data-reveal style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}>
          <span className={styles.ln} />
          <span>or find me elsewhere</span>
          <span className={styles.ln} />
        </div>

        <div className={styles.socials} data-reveal style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}>
          {socials.map((s) => (
            <a key={s.label} className={styles.social} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
              <span className={styles.orbit} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
