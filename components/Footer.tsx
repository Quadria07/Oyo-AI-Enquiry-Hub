import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.text}>
                    Oyo State Focused Civic Intelligence System
                </span>
            </div>
        </footer>
    );
}
