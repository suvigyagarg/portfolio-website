import SectionHead from '@/components/SectionHead/SectionHead';
import DemoPlate from '@/components/DemoPlate/DemoPlate';
import styles from './Commissions.module.css';

export default function Commissions() {
  return (
    <section className={styles.section} id="commissions">
      <div className="wrap">
        <SectionHead
          num="IV"
          title="Commissions"
          meta="Independent work taken on for patrons — freelancing, end to end."
        />
        <div className={styles.commission}>
          <div className={styles.body} data-reveal>
            <p className={styles.lead}>Freelance · E-commerce &amp; Business Development</p>
            <h3 className={styles.name}>Bharat Electrode Company</h3>
            <p className={styles.desc}>
              Helped a small-scale business make the leap to an e-commerce platform — pairing the
              technical build with hands-on business development, so the storefront and the strategy
              grew together.
            </p>
            <div className={styles.outcome}>
              <div>
                <div className={styles.k}>Offline → Online</div>
                <div className={styles.v}>Digital storefront built end&nbsp;to&nbsp;end</div>
              </div>
              <div>
                <div className={styles.k}>Tech + Trade</div>
                <div className={styles.v}>Engineering paired with business development</div>
              </div>
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}>
            <DemoPlate caption="demo · bharat-electrode" />
          </div>
        </div>
      </div>
    </section>
  );
}
