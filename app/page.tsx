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
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="rgba(255,195,0,0.12)" strokeWidth="1" />
              <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="none" stroke="rgba(255,195,0,0.07)" strokeWidth="0.8" />
              <line x1="30" y1="22" x2="30" y2="38" stroke="rgba(255,195,0,0.1)" strokeWidth="1" />
              <line x1="22" y1="30" x2="38" y2="30" stroke="rgba(255,195,0,0.1)" strokeWidth="1" />
              <circle cx="30" cy="0" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="60" cy="30" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="30" cy="60" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="0" cy="30" r="2" fill="rgba(255,195,0,0.12)" />
              <circle cx="30" cy="30" r="3" fill="rgba(255,195,0,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#adire)" />
        </svg>

        {/* 5-colour top stripe */}
        <div className={styles.heroTopStripe} aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className={styles.heroInner}>

          {/* Left: Text */}
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
          </div>

          {/* Right: Oyo Cultural SVG illustration */}
          <div className={styles.heroVisual} aria-hidden="true">
            <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.culturalSvg}>
              {/* Sky / background glow */}
              <ellipse cx="140" cy="170" rx="130" ry="140" fill="rgba(139,0,0,0.25)" />

              {/* === Palace / Afin Alaafin === */}
              {/* Main tower */}
              <rect x="110" y="90" width="60" height="130" rx="2" fill="rgba(139,0,0,0.7)" stroke="rgba(255,195,0,0.6)" strokeWidth="1.5" />
              {/* Tower top cone */}
              <polygon points="140,55 170,92 110,92" fill="rgba(255,195,0,0.8)" />
              {/* Tower window */}
              <rect x="128" y="108" width="24" height="30" rx="12" fill="rgba(255,195,0,0.3)" stroke="rgba(255,195,0,0.5)" strokeWidth="1" />
              {/* Palace body */}
              <rect x="68" y="168" width="104" height="52" rx="2" fill="rgba(100,0,0,0.65)" stroke="rgba(255,195,0,0.4)" strokeWidth="1" />
              {/* Side towers */}
              <rect x="58" y="148" width="32" height="72" rx="2" fill="rgba(120,0,0,0.6)" stroke="rgba(255,195,0,0.35)" strokeWidth="1" />
              <rect x="190" y="148" width="32" height="72" rx="2" fill="rgba(120,0,0,0.6)" stroke="rgba(255,195,0,0.35)" strokeWidth="1" />
              <polygon points="74,138 90,150 58,150" fill="rgba(255,195,0,0.65)" />
              <polygon points="206,138 222,150 190,150" fill="rgba(255,195,0,0.65)" />
              {/* Gate arch */}
              <rect x="122" y="192" width="36" height="28" rx="18" fill="rgba(0,0,0,0.4)" stroke="rgba(255,195,0,0.3)" strokeWidth="1" />
              {/* Ground */}
              <rect x="40" y="218" width="200" height="8" rx="2" fill="rgba(255,195,0,0.2)" />

              {/* === Egungun Masquerade (left) === */}
              {/* Body robes — layered strips */}
              <ellipse cx="72" cy="265" rx="22" ry="50" fill="rgba(139,0,0,0.55)" />
              {/* Gold strips on robes */}
              <rect x="54" y="242" width="36" height="5" rx="2" fill="rgba(255,195,0,0.55)" transform="rotate(-5 54 242)" />
              <rect x="52" y="253" width="38" height="5" rx="2" fill="rgba(0,107,63,0.55)" transform="rotate(-3 52 253)" />
              <rect x="54" y="264" width="36" height="5" rx="2" fill="rgba(255,195,0,0.55)" transform="rotate(-5 54 264)" />
              <rect x="53" y="275" width="38" height="4" rx="2" fill="rgba(0,107,63,0.4)" transform="rotate(-2 53 275)" />
              {/* Headdress */}
              <ellipse cx="72" cy="228" rx="16" ry="18" fill="rgba(255,195,0,0.7)" />
              <ellipse cx="72" cy="220" rx="10" ry="10" fill="rgba(139,0,0,0.8)" />
              <circle cx="72" cy="213" r="5" fill="rgba(255,195,0,0.9)" />
              {/* Arms raised */}
              <line x1="72" y1="248" x2="46" y2="235" stroke="rgba(255,195,0,0.5)" strokeWidth="6" strokeLinecap="round" />
              <line x1="72" y1="248" x2="98" y2="238" stroke="rgba(255,195,0,0.5)" strokeWidth="6" strokeLinecap="round" />

              {/* === Egungun Masquerade (right) === */}
              <ellipse cx="208" cy="265" rx="22" ry="50" fill="rgba(0,107,63,0.55)" />
              <rect x="190" y="242" width="36" height="5" rx="2" fill="rgba(255,195,0,0.55)" transform="rotate(5 190 242)" />
              <rect x="192" y="253" width="36" height="5" rx="2" fill="rgba(139,0,0,0.55)" transform="rotate(3 192 253)" />
              <rect x="190" y="264" width="36" height="5" rx="2" fill="rgba(255,195,0,0.55)" transform="rotate(5 190 264)" />
              <rect x="192" y="275" width="36" height="4" rx="2" fill="rgba(139,0,0,0.4)" transform="rotate(2 192 275)" />
              <ellipse cx="208" cy="228" rx="16" ry="18" fill="rgba(255,195,0,0.7)" />
              <ellipse cx="208" cy="220" rx="10" ry="10" fill="rgba(0,107,63,0.8)" />
              <circle cx="208" cy="213" r="5" fill="rgba(255,195,0,0.9)" />
              <line x1="208" y1="248" x2="182" y2="238" stroke="rgba(255,195,0,0.5)" strokeWidth="6" strokeLinecap="round" />
              <line x1="208" y1="248" x2="234" y2="235" stroke="rgba(255,195,0,0.5)" strokeWidth="6" strokeLinecap="round" />

              {/* === Aso-oke textile border at bottom === */}
              <rect x="30" y="306" width="220" height="28" rx="4" fill="rgba(0,0,0,0.3)" stroke="rgba(255,195,0,0.35)" strokeWidth="1" />
              {/* Aso-oke geometric strip pattern */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <rect key={i} x={34 + i * 20} y="310" width="10" height="20" rx="1"
                  fill={i % 3 === 0 ? 'rgba(255,195,0,0.5)' : i % 3 === 1 ? 'rgba(139,0,0,0.5)' : 'rgba(0,107,63,0.5)'} />
              ))}

              {/* Stars / sparks around scene */}
              <circle cx="48" cy="100" r="2.5" fill="rgba(255,195,0,0.5)" />
              <circle cx="230" cy="88" r="2" fill="rgba(255,195,0,0.4)" />
              <circle cx="255" cy="150" r="1.8" fill="rgba(255,195,0,0.35)" />
              <circle cx="25" cy="185" r="2" fill="rgba(255,195,0,0.4)" />
            </svg>
          </div>

        </div>

        {/* Bottom SVG wave */}
        <div className={styles.heroWave} aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30 C240 60 480 0 720 30 C960 60 1200 0 1440 30 L1440 60 L0 60 Z" fill="var(--off-white)" />
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
