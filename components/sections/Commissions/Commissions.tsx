import DemoPlate from '@/components/base/DemoPlate/DemoPlate';
import styles from './Commissions.module.css';
import SectionHead from '@/components/base/SectionHead/SectionHead';

export default function Commissions() {
  return (
    <section className={styles.section} id="commissions">
      <div className="wrap">
        <SectionHead
          num="IV"
          title="Commissions"
          meta="Independent work taken on for freelancing."
        />
        <div className={styles.commission}>
          <div className={styles.body} data-reveal>
            <h3 className={styles.name}>Bharat Electrode Company</h3>
            <p className={styles.desc}>
              Built a complete online product catalog for a small - scale
              business, expanding their reach and generating customer inquiries.
            </p>
            <a
              className={styles.link}
              href="https://bharat-electrode-co.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website <span className={styles.arr}>→</span>
            </a>
            <div className={styles.outcome}>
              <div>
                <div className={styles.k}>Offline → Online</div>
                <div className={styles.v}>
                  Digital Catalogue and Enquiry forum built end to&nbsp;end
                </div>
              </div>
            </div>
          </div>
          <div
            data-reveal
            style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}
          >
            <DemoPlate
              caption="demo · bharat-electrode"
              thumbnail="/Images/bec_thumbnail.png"
              videoSrc="/videos/bec_video.mov"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
