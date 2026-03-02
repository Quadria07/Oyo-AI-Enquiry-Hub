import Link from 'next/link';
import ChatInterface from '@/components/ChatInterface';
import { ArrowLeftIcon } from '@/components/Icons';
import styles from './page.module.css';

export default function NewsPage() {
    return (
        <div className={styles.pageShell}>
            <div className={styles.pageHead}>
                <div className={styles.pageHeadContent}>
                    <div className={styles.headTop}>
                        <Link href="/" className={styles.backBtn}>
                            <ArrowLeftIcon size={15} strokeWidth={2.2} />
                            Back
                        </Link>
                    </div>
                    <h2 className={styles.pageTitle}>News Enquiry</h2>
                    <p className={styles.pageDesc}>Political, government, culture &amp; sports updates from Oyo State.</p>
                </div>
            </div>
            <ChatInterface category="news" pageTitle="News Enquiry" modeLabel="News Enquiry" />
        </div>
    );
}
