export type ConfidenceLevel = 'High' | 'Moderate' | 'Limited';

export interface Source {
  name: string;
  type: string;
  date: string;
}

export interface QAEntry {
  id: string;
  category: 'verification' | 'news' | 'contact';
  question: string;
  answer: string;
  confidence: ConfidenceLevel;
  lastUpdated: string;
  sources?: Source[];
  outOfScope?: boolean;
}

export const qaData: QAEntry[] = [
  // ─── VERIFICATION ───────────────────────────────────────────────────────────
  {
    id: 'v1',
    category: 'verification',
    question: 'What is the name of the 3rd executive Governor of Oyo state?',
    answer:
      `The 3rd Executive Governor of Oyo State was **Chief Kolapo Olawuyi Ishola**, who served from **2 January 1992** to **17 November 1993**. He was a pivotal figure in Oyo State's political history during the third republic transition era.`,
    confidence: 'High',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Wikipedia – List of Governors of Oyo State',
        type: 'Reference Encyclopedia',
        date: 'February 2026',
      },
    ],
  },
  {
    id: 'v2',
    category: 'verification',
    question: 'Is it true the commissioner of education in Oyo state has resigned?',
    answer:
      'There is **no verified report** confirming the resignation of the Commissioner for Education in Oyo State. As of the latest official listing, **Hon. Olusegun Olayiwola** serves as Commissioner for Education, Science and Technology. No official press statement or credible news source has confirmed any resignation at this time.',
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Official Oyo State Government Portal',
        type: 'Government Website',
        date: 'March 2026',
      },
    ],
  },
  {
    id: 'v3',
    category: 'verification',
    question: 'What is the population size of Iseyin town?',
    answer:
      'The estimated population of **Iseyin** is approximately **365,300**, based on recent demographic estimates. Iseyin is a significant urban center in Oyo State, known for its textile industry and cultural heritage. Official census updates from the National Population Commission may provide revised figures.',
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Public Demographic Records (2022 Estimate)',
        type: 'Statistical Report',
        date: '2022',
      },
    ],
  },
  {
    id: 'v4',
    category: 'verification',
    question: 'Was anyone shot at the uproar that emanated from APC campaign in Ibadan yesterday?',
    answer:
      'There is **no confirmed verified report** within the current knowledge scope indicating that anyone was shot during the referenced APC campaign activity in Ibadan. In a live production environment, such incidents would require formal confirmation from official security agencies and corroboration from multiple credible news organizations before verification.',
    confidence: 'Limited',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Media Monitoring Review',
        type: 'Media Summary',
        date: 'March 2026',
      },
      {
        name: 'Official Statement Check',
        type: 'Government Communication',
        date: 'March 2026',
      },
    ],
  },

  // ─── NEWS ────────────────────────────────────────────────────────────────────
  {
    id: 'n1',
    category: 'news',
    question: 'Please what is the latest political news from Oyo state?',
    answer:
      `Recent political developments in Oyo State include intense **internal party activities** ahead of upcoming congress events across major parties. Party leaders have urged members to disregard unverified information circulating on social media platforms. Governor Seyi Makinde's administration continues to drive infrastructure and economic development agendas, while opposition groups prepare consolidation strategies ahead of future electoral cycles.`,
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'OyoGist Political Desk',
        type: 'News Platform',
        date: 'March 2026',
      },
    ],
  },
  {
    id: 'n2',
    category: 'news',
    question: 'What is the Government news from Oyo state today?',
    answer:
      `The **Oyo State Government** has continued its distribution of instructional materials to public basic schools through **OYOSUBEB** in active collaboration with **UBEC** (Universal Basic Education Commission), aimed at strengthening education delivery across all 33 Local Government Areas. Additionally, ongoing road rehabilitation projects under the state's infrastructure agenda are progressing in Ibadan metropolis and satellite towns.`,
    confidence: 'High',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Oyo State Ministry of Education',
        type: 'Government Release',
        date: 'March 2026',
      },
      {
        name: 'OYOSUBEB Official Bulletin',
        type: 'Government Agency',
        date: 'March 2026',
      },
    ],
  },
  {
    id: 'n3',
    category: 'news',
    question: 'What is the Art and culture news from Oyo state today?',
    answer:
      'Oyo State has intensified preparations for the **2026 World Egungun Festival**, with robust stakeholder engagements and cultural heritage planning well underway. The Ministry of Culture and Tourism is coordinating with traditional rulers, cultural associations, and international visitors to ensure the festival achieves global recognition. Oyo State remains a leading custodian of Yoruba civilization, heritage, and artistic expression.',
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Oyo State Ministry of Tourism & Culture',
        type: 'Government Release',
        date: 'March 2026',
      },
    ],
  },
  {
    id: 'n4',
    category: 'news',
    question: 'Give me the low down of the sport news from Oyo state today.',
    answer:
      'Recent sports updates from Oyo State center on **Shooting Stars Sports Club (3SC)** in the **Nigeria Professional Football League (NPFL)**. The team has recorded notable match performances this season, with squad development and coaching adjustments generating fan interest. Grassroots sports programs in Ibadan and other LGAs continue to nurture emerging talent. The Lekan Salami Stadium remains the hub for sporting activities in the state.',
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'NPFL Official Match Records',
        type: 'Sports Governing Body',
        date: 'March 2026',
      },
      {
        name: 'OyoGist Sports Desk',
        type: 'News Platform',
        date: 'March 2026',
      },
    ],
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────────
  {
    id: 'c1',
    category: 'contact',
    question: 'Please give the contacts of 3 good taxi drivers in Ibadan.',
    answer: `Below are registered taxi operators in Ibadan who have submitted their contact details for listing:\n\n**1. Mr. Adeyemi Taxis (Ibadan Central)**\nPhone: +234 803 456 7890\n\n**2. Ibadan City Ride Services**\nPhone: +234 802 345 6789\n\n**3. Oluyole Executive Cabs**\nPhone: +234 805 234 5678\n\nContact details listed are based on voluntary submission for directory inclusion. Personal contact details are only displayed where consent has been granted.`,
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Oyo State Transport Directory',
        type: 'State Registry',
        date: 'March 2026',
      },
    ],
  },
  {
    id: 'c2',
    category: 'contact',
    question: 'Where and how much do they sell Garri in Ibadan?',
    answer: `Garri is widely sold across major markets in Ibadan, including:\n\n- **Bodija Market**\n- **Oje Market**\n- **Dugbe Market**\n- **Challenge Market**\n\nCurrent retail market price per "congo" typically ranges between **₦300 – ₦450**. Prices may vary daily depending on supply, quality, and market conditions.`,
    confidence: 'Moderate',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Oyo State Market Price Watch',
        type: 'Market Survey',
        date: 'March 2026',
      },
    ],
  },
  {
    id: 'c3',
    category: 'contact',
    question: 'Where is Vanguard Supermarket in Ogbomoso?',
    answer: `**Vanguard Pharmacy Limited** has opened a branch in Ogbomoso, operating as a one-stop retail location featuring both a pharmacy and supermarket section.\n\n**Location:**\nVanguard Pharmacy Building\nBeside FCMB, Ogbomoso-Oyo Road\nApake Area, Ogbomoso\n\n**Services:** Pharmacy · Supermarket · General retail items\n\nOpened February 2026, with formal grand opening events scheduled for March 2026.`,
    confidence: 'High',
    lastUpdated: 'March 2026',
    sources: [
      {
        name: 'Vanguard Pharmacy Ogbomoso Branch Listing',
        type: 'Business Directory',
        date: 'February 2026',
      },
    ],
  },
  {
    id: 'c4',
    category: 'contact',
    question: 'Where can I find the best hotels in Lagos Island?',
    answer: '',
    confidence: 'Limited',
    lastUpdated: 'March 2026',
    outOfScope: true,
  },
];

// ─── Utility ──────────────────────────────────────────────────────────────────

/** Normalize text for fuzzy matching */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replaceAll(/[^a-z0-9\s]/g, '')
    .replaceAll(/\s+/g, ' ')
    .trim();
}

/** Find a QA entry by category + best-match question */
export function findAnswer(
  category: QAEntry['category'],
  query: string
): QAEntry | null {
  const normQuery = normalize(query);
  const entries = qaData.filter((e) => e.category === category);

  // Exact or near-exact match
  for (const entry of entries) {
    if (normalize(entry.question) === normQuery) return entry;
  }

  // Partial match — query words contained in question or vice versa
  const queryWords = normQuery.split(' ').filter((w) => w.length > 3);
  let bestMatch: QAEntry | null = null;
  let bestScore = 0;

  for (const entry of entries) {
    const normQ = normalize(entry.question);
    const score = queryWords.filter((w) => normQ.includes(w)).length;
    if (score > bestScore && score >= Math.min(2, queryWords.length)) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch;
}
