import Link from 'next/link';
import ChatInterface from '@/components/ChatInterface';
import { ArrowLeftIcon } from '@/components/Icons';
import styles from '../news/page.module.css';

export default function ContactPage() {
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
                    <h2 className={styles.pageTitle}>Contact Enquiry</h2>
                    <p className={styles.pageDesc}>Locate trusted contacts and key institutions across Oyo State.</p>
                </div>
            </div>
            <ChatInterface category="contact" pageTitle="Contact Enquiry" modeLabel="Contact Enquiry" />
        </div>
    );
}
