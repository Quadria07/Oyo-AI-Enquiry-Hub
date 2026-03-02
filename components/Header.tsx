import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Brand Name */}
                <Link href="/" className={styles.brand}>
                    <span className={styles.brandMark}>OYO</span>
                    <span className={styles.brandName}>AI Enquiry Hub</span>
                </Link>

                {/* Demo Badge */}
                <span className={styles.demoBadge}>Demo Experience</span>
            </div>
        </header>
    );
}
