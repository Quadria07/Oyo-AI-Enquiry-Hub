// Shared inline SVG icon set — no external dependencies
// All icons are 24×24 viewBox, stroke-based (Heroicons-style)

import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
}

const base = (
    size: number,
    color: string,
    sw: number,
    children: React.ReactNode,
    className?: string
) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
    >
        {children}
    </svg>
);

// ── News / Newspaper
export function NewsIcon({ size = 24, color = 'currentColor', strokeWidth = 1.75, className }: IconProps) {
    return base(size, color, strokeWidth, <>
        <path d="M4 6h16M4 10h16M4 14h10M4 18h8" />
        <rect x="2" y="3" width="20" height="18" rx="2" />
    </>, className);
}

// ── Shield Check (Verification)
export function ShieldCheckIcon({ size = 24, color = 'currentColor', strokeWidth = 1.75, className }: IconProps) {
    return base(size, color, strokeWidth, <>
        <path d="M12 22C12 22 3 17 3 10V5l9-3 9 3v5c0 7-9 12-9 12Z" />
        <polyline points="9 12 11 14 15 10" />
    </>, className);
}

// ── Address Book / Contact
export function ContactIcon({ size = 24, color = 'currentColor', strokeWidth = 1.75, className }: IconProps) {
    return base(size, color, strokeWidth, <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 21c0-2.76 2.24-5 5-5s5 2.24 5 5" />
        <line x1="2" y1="7" x2="4" y2="7" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="2" y1="17" x2="4" y2="17" />
    </>, className);
}

// ── Chat Bubble
export function ChatIcon({ size = 24, color = 'currentColor', strokeWidth = 1.75, className }: IconProps) {
    return base(size, color, strokeWidth,
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        , className);
}

// ── Question Mark (suggestion)
export function QuestionIcon({ size = 16, color = 'currentColor', strokeWidth = 1.75, className }: IconProps) {
    return base(size, color, strokeWidth, <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={3} />
    </>, className);
}

// ── Send / Arrow Right
export function SendIcon({ size = 18, color = 'currentColor', strokeWidth = 2, className }: IconProps) {
    return base(size, color, strokeWidth, <>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </>, className);
}

// ── Chevron Up
export function ChevronUpIcon({ size = 14, color = 'currentColor', strokeWidth = 2.5, className }: IconProps) {
    return base(size, color, strokeWidth,
        <polyline points="18 15 12 9 6 15" />
        , className);
}

// ── Chevron Down
export function ChevronDownIcon({ size = 14, color = 'currentColor', strokeWidth = 2.5, className }: IconProps) {
    return base(size, color, strokeWidth,
        <polyline points="6 9 12 15 18 9" />
        , className);
}

// ── Arrow Left (back)
export function ArrowLeftIcon({ size = 16, color = 'currentColor', strokeWidth = 2, className }: IconProps) {
    return base(size, color, strokeWidth, <>
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </>, className);
}
