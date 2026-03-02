# Oyo AI Enquiry Hub

A premium responsive civic intelligence web application for Oyo State, Nigeria.

## Overview

Oyo AI Enquiry Hub is a structured, offline-capable civic intelligence system that provides News Updates, Public Verification, and Trusted Contact information across Oyo State — all powered by a local structured dataset with a real AI chat experience.

## Features

- **News Enquiry** — Political, government, culture & sports updates
- **Verification Enquiry** — Evidence-based fact checking with confidence levels and sources
- **Contact Enquiry** — Trusted contacts and key locations across Oyo State
- **AI Chat Simulation** — Realistic typing indicator, fade-in responses, and smart question matching
- **Suggestion Dropdown** — Click-to-ask suggestions on every chat page
- **Confidence Badges** — High / Moderate / Limited with expandable source citations
- **Fully Offline** — No API keys, no external AI — runs entirely from local dataset
- **Responsive Design** — Works on mobile, tablet, and desktop

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules
- **Fonts**: Playfair Display + Inter (Google Fonts)

## Routes

| Route | Page |
|---|---|
| `/` | Landing Page |
| `/news` | News Enquiry Chat |
| `/verification` | Verification Enquiry Chat |
| `/contact` | Contact Enquiry Chat |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Data

All Q&A content lives in `/data/qa.ts`. The dataset covers:
- **4 Verification** questions
- **4 News** questions  
- **4 Contact** questions (including 1 out-of-scope boundary test)

## Brand

Oyo State official colours — Deep Maroon `#8B0000` · Gold `#FFC300` · Deep Green `#006B3F`

---

*Oyo State Focused Civic Intelligence System*
