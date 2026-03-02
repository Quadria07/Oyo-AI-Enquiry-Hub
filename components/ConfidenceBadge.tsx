import { ConfidenceLevel } from '@/data/qa';
import styles from './ConfidenceBadge.module.css';

interface Props { level: ConfidenceLevel; }

export default function ConfidenceBadge({ level }: Props) {
    const cls = level === 'High' ? styles.high : level === 'Moderate' ? styles.moderate : styles.limited;
    return <span className={`${styles.badge} ${cls}`}>{level} Confidence</span>;
}
