import Link from 'next/link';
import FeatureCard from '@/components/FeatureCard';
import { NewsIcon, ShieldCheckIcon, ContactIcon } from '@/components/Icons';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Background watermark */}
      <div className={styles.watermark} aria-hidden="true">
        <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10 L180 50 L180 150 C180 200 100 250 100 250 C100 250 20 200 20 150 L20 50 Z" stroke="#8B0000" strokeWidth="2" fill="none" opacity="0.08" />
          <path d="M100 30 L165 65 L165 148 C165 190 100 232 100 232 C100 232 35 190 35 148 L35 65 Z" stroke="#FFC300" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="100" cy="130" r="40" stroke="#006B3F" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="100" cy="130" r="25" stroke="#8B0000" strokeWidth="1" fill="none" opacity="0.05" />
        </svg>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            Oyo State Civic AI
          </div>
          <h2 className={styles.heroTitle}>
            Welcome to<br />
            <span className={styles.heroAccent}>Oyo AI Enquiry Hub</span>
          </h2>
          <p className={styles.heroSub}>
            A structured civic intelligence system for News Updates, Public Verification,
            and Trusted Contacts across Oyo State.
          </p>
          <div className={styles.heroActions}>
            <Link href="/news" className={styles.primaryBtn}>Explore Enquiries →</Link>
            <Link href="/verification" className={styles.secondaryBtn}>Verify a Claim</Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
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
              title="Contact & Places Enquiry"
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
