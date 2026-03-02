'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
}

interface Props {
    category: ChatCategory;
    pageTitle: string;
    modeLabel: string;
}

function getTimestamp() {
    return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

function formatAnswer(text: string): JSX.Element {
    const parts = text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
    });
    return <p>{parts}</p>;
}

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

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, thinking]);

    const updateSuggestions = useCallback((val: string) => {
        const norm = val.toLowerCase().trim();
        if (norm.length === 0) {
            setFilteredSuggestions(categoryQuestions);
        } else {
            setFilteredSuggestions(
                categoryQuestions.filter((e) => e.question.toLowerCase().includes(norm))
            );
        }
    }, [category, categoryQuestions]);

    const handleFocus = () => {
        updateSuggestions(input);
        setShowSuggestions(true);
    };

    const handleInputChange = (val: string) => {
        setInput(val);
        updateSuggestions(val);
        setShowSuggestions(true);
    };

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

        const delay = 500 + Math.random() * 300;
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
            };
        } else if (entry) {
            aiMsg = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                text: entry.answer,
                entry,
                timestamp: getTimestamp(),
            };
        } else {
            aiMsg = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                text: FALLBACK_MSG,
                timestamp: getTimestamp(),
                isFallback: true,
            };
        }

        setThinking(false);
        setMessages((prev) => [...prev, aiMsg]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { submitQuery(input); }
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
                                        <p className={styles.systemMsg}>{msg.text}</p>
                                    ) : (
                                        <>
                                            <div className={styles.answerText}>{formatAnswer(msg.text)}</div>
                                            {msg.entry && (
                                                <div className={styles.metadata}>
                                                    <div className={styles.metaRow}>
                                                        <ConfidenceBadge level={msg.entry.confidence} />
                                                        <span className={styles.lastUpdated}>
                                                            Last Updated: {msg.entry.lastUpdated}
                                                        </span>
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
                                    <span />
                                    <span />
                                    <span />
                                    <span className={styles.thinkingLabel}>AI is analyzing…</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Input area */}
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
