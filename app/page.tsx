import Link from 'next/link';
import FeatureCard from '@/components/FeatureCard';
import { NewsIcon, ShieldCheckIcon, ContactIcon } from '@/components/Icons';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>

        {/* Adire SVG pattern background */}
        <svg className={styles.adirePattern} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="adire" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Diamond lattice */}
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="rgba(255,195,0,0.12)" strokeWidth="1" />
              {/* Inner diamond */}
              <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="none" stroke="rgba(255,195,0,0.07)" strokeWidth="0.8" />
              {/* Cross at center */}
              <line x1="30" y1="22" x2="30" y2="38" stroke="rgba(255,195,0,0.1)" strokeWidth="1" />
              <line x1="22" y1="30" x2="38" y2="30" stroke="rgba(255,195,0,0.1)" strokeWidth="1" />
              {/* Corner dots */}
              <circle cx="30" cy="0" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="60" cy="30" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="30" cy="60" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="0" cy="30" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="30" cy="30" r="3" fill="rgba(255,195,0,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#adire)" />
        </svg>

        {/* Decorative top border stripe */}
        <div className={styles.heroTopStripe} aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className={styles.heroInner}>

          {/* Left: Text Column */}
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Ìpínlẹ̀ Ọ̀yọ́ · Oyo State
            </div>

            <h2 className={styles.heroTitle}>
              Welcome to<br />
              <span className={styles.heroAccent}>Oyo AI</span>
              <span className={styles.heroAccentSub}> Enquiry Hub</span>
            </h2>

            <p className={styles.heroSub}>
              A structured civic intelligence system for News Updates, Public Verification,
              and Trusted Contacts — rooted in the rich heritage of the ancient Oyo Empire.
            </p>

            <div className={styles.heroActions}>
              <Link href="/news" className={styles.primaryBtn}>Explore Enquiries →</Link>
              <Link href="/verification" className={styles.secondaryBtn}>Verify a Claim</Link>
            </div>

            {/* Cultural stats row */}
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>11</span>
                <span className={styles.statLabel}>Q&amp;A Entries</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Enquiry Modes</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Offline</span>
              </div>
            </div>
          </div>

          {/* Right: Decorative Shield */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.shieldOuter}>
              <div className={styles.shieldInner}>
                <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.shieldSvg}>
                  {/* Shield body */}
                  <path d="M60 5 L110 25 L110 85 C110 120 60 148 60 148 C60 148 10 120 10 85 L10 25 Z"
                    fill="rgba(139,0,0,0.4)" stroke="rgba(255,195,0,0.6)" strokeWidth="2" />
                  {/* Inner shield */}
                  <path d="M60 18 L98 35 L98 84 C98 112 60 135 60 135 C60 135 22 112 22 84 L22 35 Z"
                    fill="none" stroke="rgba(255,195,0,0.3)" strokeWidth="1.5" />
                  {/* Horizontal band */}
                  <rect x="10" y="62" width="100" height="18" fill="rgba(0,107,63,0.35)" stroke="rgba(255,195,0,0.2)" strokeWidth="0.5" />
                  {/* Center star/compass */}
                  <circle cx="60" cy="71" r="10" fill="none" stroke="rgba(255,195,0,0.5)" strokeWidth="1.5" />
                  <path d="M60 61 L62 69 L70 71 L62 73 L60 81 L58 73 L50 71 L58 69 Z"
                    fill="rgba(255,195,0,0.6)" />
                  {/* Adire dots on shield */}
                  <circle cx="40" cy="45" r="2" fill="rgba(255,195,0,0.3)" />
                  <circle cx="60" cy="40" r="2" fill="rgba(255,195,0,0.3)" />
                  <circle cx="80" cy="45" r="2" fill="rgba(255,195,0,0.3)" />
                  <circle cx="35" cy="95" r="2" fill="rgba(255,195,0,0.3)" />
                  <circle cx="85" cy="95" r="2" fill="rgba(255,195,0,0.3)" />
                </svg>
                <span className={styles.shieldLabel}>OYO</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom decorative wave */}
        <div className={styles.heroWave} aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30 C240 60 480 0 720 30 C960 60 1200 0 1440 30 L1440 60 L0 60 Z"
              fill="var(--off-white)" />
          </svg>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className={styles.cards}>
        <div className={styles.cardsInner}>
          <div className={styles.sectionLabel}>Choose an Enquiry Category</div>
          <div className={styles.grid}>
            <FeatureCard
              icon={<NewsIcon size={26} color="#8B0000" strokeWidth={1.6} />}
              title="News Enquiry"
              description="Access categorized political, government, culture, and sports updates from across Oyo State."
              ctaLabel="Start News Enquiry"
              href="/news"
              accentColor="var(--maroon)"
            />
            <FeatureCard
              icon={<ShieldCheckIcon size={26} color="#006B3F" strokeWidth={1.6} />}
              title="Verification Enquiry"
              description="Verify public claims using structured, evidence-based responses with defined confidence levels."
              ctaLabel="Verify a Claim"
              href="/verification"
              accentColor="var(--green)"
            />
            <FeatureCard
              icon={<ContactIcon size={26} color="#b38a00" strokeWidth={1.6} />}
              title="Contact &amp; Places Enquiry"
              description="Access trusted contacts and key locations within Oyo State through our knowledge index."
              ctaLabel="Find Contacts"
              href="/contact"
              accentColor="var(--gold-muted)"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
