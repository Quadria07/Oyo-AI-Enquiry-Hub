'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { qaData, findAnswer, QAEntry } from '@/data/qa';
import ConfidenceBadge from './ConfidenceBadge';
import SourcesToggle from './SourcesToggle';
import { ChatIcon, QuestionIcon, SendIcon } from './Icons';
import styles from './ChatInterface.module.css';

type ChatCategory = QAEntry['category'];

interface Message {
    id: string;
    role: 'user' | 'ai';
    text: string;
    entry?: QAEntry | null;
    timestamp: string;
    isOutOfScope?: boolean;
    isFallback?: boolean;
    useTypewriter?: boolean;
}

interface Props {
    category: ChatCategory;
    pageTitle: string;
    modeLabel: string;
}

function getTimestamp() {
    return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// ── Typewriter component ─────────────────────────────────────────────────────
function TypewriterText({ text, speed = 18 }: { text: string; speed?: number }) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        setDisplayed('');
        setDone(false);
        let i = 0;
        const id = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(id);
                setDone(true);
            }
        }, speed);
        return () => clearInterval(id);
    }, [text, speed]);

    // Apply bold markdown to the displayed portion
    const parts = displayed.split(/(\*\*[^*]+\*\*)/).map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={idx}>{part.slice(2, -2)}</strong>;
        }
        return <span key={idx}>{part}</span>;
    });

    return (
        <p>
            {parts}
            {!done && <span className={styles.cursor}>|</span>}
        </p>
    );
}

// ── Static formatted text (for non-typewriter messages) ──────────────────────
function FormatText({ text }: { text: string }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/).map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={idx}>{part.slice(2, -2)}</strong>;
        }
        return <span key={idx}>{part}</span>;
    });
    return <p>{parts}</p>;
}

// ── Welcome messages per category ───────────────────────────────────────────
const WELCOME: Record<ChatCategory, string> = {
    news: `Ẹ káàbọ̀! Welcome to the Oyo AI News Enquiry. I can provide structured updates on politics, government programmes, culture, and sports across Oyo State. How may I assist you today?`,
    verification: `Ẹ káàbọ̀! Welcome to the Oyo AI Verification Enquiry. I can help verify public claims and statements relating to Oyo State using evidence-based structured responses. What would you like to verify?`,
    contact: `Ẹ káàbọ̀! Welcome to the Oyo AI Contact Enquiry. I can help you locate trusted contacts, institutions, and key places across Oyo State. How can I assist you?`,
};

const OUT_OF_SCOPE_MSG = 'This question is not available within the current knowledge scope.';
const FALLBACK_MSG = 'This query is outside the current demonstration dataset.';

export default function ChatInterface({ category, pageTitle, modeLabel }: Props) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [thinking, setThinking] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<QAEntry[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const categoryQuestions = qaData.filter((e) => e.category === category);

    // ── Auto welcome message on mount ──────────────────────────────────────────
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessages([{
                id: 'welcome',
                role: 'ai',
                text: WELCOME[category],
                timestamp: getTimestamp(),
                useTypewriter: true,
            }]);
        }, 600);
        return () => clearTimeout(timer);
    }, [category]);

    // ── Scroll to bottom on new messages ───────────────────────────────────────
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, thinking]);

    // ── Suggestion filtering ────────────────────────────────────────────────────
    const updateSuggestions = useCallback((val: string) => {
        const norm = val.toLowerCase().trim();
        setFilteredSuggestions(
            norm.length === 0
                ? categoryQuestions
                : categoryQuestions.filter((e) => e.question.toLowerCase().includes(norm))
        );
    }, [categoryQuestions]);

    const handleFocus = () => {
        updateSuggestions(input);
        setShowSuggestions(true);
    };

    const handleInputChange = (val: string) => {
        setInput(val);
        updateSuggestions(val);
        setShowSuggestions(true);
    };

    // ── Submit query ────────────────────────────────────────────────────────────
    const submitQuery = async (query: string) => {
        if (!query.trim() || thinking) return;
        setShowSuggestions(false);
        setInput('');

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: query.trim(),
            timestamp: getTimestamp(),
        };
        setMessages((prev) => [...prev, userMsg]);
        setThinking(true);

        const delay = 600 + Math.random() * 400;
        await new Promise((r) => setTimeout(r, delay));

        const entry = findAnswer(category, query.trim());
        let aiMsg: Message;

        if (entry?.outOfScope) {
            aiMsg = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                text: OUT_OF_SCOPE_MSG,
                timestamp: getTimestamp(),
                isOutOfScope: true,
                useTypewriter: true,
            };
        } else if (entry) {
            aiMsg = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                text: entry.answer,
                entry,
                timestamp: getTimestamp(),
                useTypewriter: true,
            };
        } else {
            aiMsg = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                text: FALLBACK_MSG,
                timestamp: getTimestamp(),
                isFallback: true,
                useTypewriter: true,
            };
        }

        setThinking(false);
        setMessages((prev) => [...prev, aiMsg]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') submitQuery(input);
        if (e.key === 'Escape') setShowSuggestions(false);
    };

    return (
        <div className={styles.page}>
            {/* Mode indicator */}
            <div className={styles.modeBar}>
                <span className={styles.modeDot} />
                <span className={styles.modeText}>Active Mode: <strong>{modeLabel}</strong></span>
            </div>

            {/* Chat window */}
            <div className={styles.chatWrap}>
                <div className={styles.chatList}>
                    {messages.length === 0 && (
                        <div className={styles.emptyState}>
                            <ChatIcon size={40} color="var(--gray-200)" strokeWidth={1.5} />
                            <p>Select a question below or type your enquiry to begin.</p>
                        </div>
                    )}

                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`${styles.bubble} ${msg.role === 'user' ? styles.userBubble : styles.aiBubble} animate-fade-in-up`}
                        >
                            {msg.role === 'user' ? (
                                <>
                                    <div className={styles.userText}>{msg.text}</div>
                                    <span className={styles.timestamp}>{msg.timestamp}</span>
                                </>
                            ) : (
                                <div className={styles.aiCard}>
                                    <div className={styles.aiHeader}>
                                        <div className={styles.aiAvatar}>AI</div>
                                        <div className={styles.aiMeta}>
                                            <span className={styles.aiName}>Oyo AI Enquiry Hub</span>
                                            <span className={styles.timestamp}>{msg.timestamp}</span>
                                        </div>
                                    </div>

                                    {msg.isOutOfScope || msg.isFallback ? (
                                        <p className={styles.systemMsg}>
                                            {msg.useTypewriter
                                                ? <TypewriterText text={msg.text} speed={22} />
                                                : msg.text}
                                        </p>
                                    ) : (
                                        <>
                                            <div className={styles.answerText}>
                                                {msg.useTypewriter
                                                    ? <TypewriterText text={msg.text} speed={16} />
                                                    : <FormatText text={msg.text} />}
                                            </div>
                                            {msg.entry && (
                                                <div className={styles.metadata}>
                                                    <div className={styles.metaRow}>
                                                        <ConfidenceBadge level={msg.entry.confidence} />
                                                        <span className={styles.lastUpdated}>Last Updated: {msg.entry.lastUpdated}</span>
                                                    </div>
                                                    {msg.entry.sources && msg.entry.sources.length > 0 && (
                                                        <SourcesToggle sources={msg.entry.sources} />
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    {thinking && (
                        <div className={`${styles.bubble} ${styles.aiBubble} animate-fade-in`}>
                            <div className={styles.aiCard}>
                                <div className={styles.aiHeader}>
                                    <div className={styles.aiAvatar}>AI</div>
                                    <span className={styles.aiName}>Oyo AI Enquiry Hub</span>
                                </div>
                                <div className={styles.thinkingDots}>
                                    <span /><span /><span />
                                    <span className={styles.thinkingLabel}>AI is analyzing…</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className={styles.inputArea}>
                    <div className={styles.inputWrap}>
                        <input
                            ref={inputRef}
                            type="text"
                            className={styles.input}
                            value={input}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 180)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your question…"
                            disabled={thinking}
                            autoComplete="off"
                        />
                        <button
                            className={styles.sendBtn}
                            onClick={() => submitQuery(input)}
                            disabled={thinking || !input.trim()}
                            aria-label="Send"
                        >
                            <SendIcon size={17} color="currentColor" strokeWidth={2} />
                        </button>

                        {showSuggestions && filteredSuggestions.length > 0 && (
                            <div className={styles.suggestions}>
                                {filteredSuggestions.map((e) => (
                                    <button
                                        key={e.id}
                                        className={styles.suggestion}
                                        onMouseDown={() => submitQuery(e.question)}
                                    >
                                        <QuestionIcon size={14} color="var(--maroon)" strokeWidth={2} />
                                        {e.question}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
