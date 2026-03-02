import React from 'react';
import Link from 'next/link';
import styles from './FeatureCard.module.css';

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    accentColor?: string;
}

export default function FeatureCard({ icon, title, description, ctaLabel, href, accentColor = 'var(--maroon)' }: Props) {
    return (
        <div className={styles.card} style={{ '--accent': accentColor } as React.CSSProperties}>
            <div className={styles.iconWrap}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <Link href={href} className={styles.cta}>
                {ctaLabel}
                <span className={styles.arrow}>→</span>
            </Link>
        </div>
    );
}
