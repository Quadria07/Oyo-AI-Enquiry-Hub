'use client';
import { useState } from 'react';
import { Source } from '@/data/qa';
import { ChevronUpIcon, ChevronDownIcon } from '@/components/Icons';
import styles from './SourcesToggle.module.css';

interface Props { sources: Source[]; }

export default function SourcesToggle({ sources }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.wrap}>
            <button className={styles.toggle} onClick={() => setOpen(!open)} aria-expanded={open}>
                {open ? <ChevronUpIcon size={13} strokeWidth={2.5} /> : <ChevronDownIcon size={13} strokeWidth={2.5} />}
                {open ? 'Hide Sources' : 'View Sources'}
            </button>
            {open && (
                <div className={`${styles.list} animate-fade-in`}>
                    {sources.map((s, i) => (
                        <div key={i} className={styles.source}>
                            <span className={styles.sourceName}>{s.name}</span>
                            <span className={styles.sourceMeta}>{s.type} · {s.date}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
