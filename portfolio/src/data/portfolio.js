// Single source of truth for site content.
// Text wrapped in **double asterisks** renders bold (see components/RichText.jsx).
// Bold only the metric or the single key term.

export const personalInfo = {
  name: 'Muhammad Sohaib Sarwar',
  firstName: 'SOHAIB',
  title: 'Software Engineer',
  headline: 'Software Engineer · Polyglot Developer (Node.js · React · Django) · DevOps · SQA',
  email: 'msarwar.bese23seecs@seecs.edu.pk',
  // Not rendered anywhere. Ask Sohaib before displaying it publicly.
  phone: '+92-300-5544280',
  linkedin: 'https://www.linkedin.com/in/muhammadsohaibsarwar/',
  github: 'https://github.com/Sohaib-Sarwar',
  githubOrg: 'https://github.com/transfinancial',
  location: 'Islamabad / Rawalpindi, Pakistan',
  availability: 'Open to remote, hybrid, and on-site roles.',
  university: "NUST '27",
  // Resume hosted on Google Drive: `resume` opens the viewer, `resumeDownload` downloads the file
  resume: 'https://drive.google.com/file/d/1DwgG2PXgfY46R5xKqMwTE8Lnv0sw0_iL/view',
  resumeDownload: 'https://drive.google.com/uc?export=download&id=1DwgG2PXgfY46R5xKqMwTE8Lnv0sw0_iL',
  summary:
    'Software Engineer at 99 Technologies shipping production software for US clients. Fast-tracked from intern to full-time engineer in 12 months, owning the full lifecycle (design, full-stack development, QA, deployment, launch) on 2 live platforms serving 9+ US business locations. Security-first, test-driven, documentation-driven. Final-year Software Engineering student at NUST SEECS.',
  tagline: 'I ENGINEER AND BUILD SYSTEMS THAT',
  taglineHighlight: 'deliver real impact.',
  philosophy: 'Code you can trust.',
};

export const careerHighlight = 'Intern to full-time engineer in **12 months**.';

export const experience = [
  {
    role: 'Software Engineer',
    company: '99 Technologies',
    location: 'Islamabad',
    type: 'Full-time, Hybrid',
    period: 'Jan 2026 – Present',
    highlights: [
      'Own end-to-end delivery of **2 enterprise platforms** for US clients: requirements, design review, development, deployment, and post-release support.',
      'Lead client meetings and weekly demos across time zones, translating business needs into technical specs, API contracts, and estimates with **zero missed SLAs** on Jira.',
      // TODO: confirm metric (15+ releases)
      'Lead QA across releases (unit, integration, regression, black-box, white-box), shipping **15+ releases** with zero critical defects.',
      'Enforce peer code reviews, Git workflows, .env-based configuration, and planned database migrations.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: '99 Technologies',
    location: 'Islamabad',
    type: 'Part-time',
    period: 'Sep 2025 – Dec 2025',
    highlights: [
      'Shipped production REST APIs and microservices in Node.js/Express and Django.',
      // TODO: confirm metric (30%)
      'Cut API response time by **30%** via query optimization, indexing, and connection pooling (MongoDB, PostgreSQL).',
      'Integrated ML inference into live applications through secure REST endpoints with graceful degradation.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: '99 Technologies',
    location: 'Islamabad',
    type: 'Internship',
    period: 'Jun 2025 – Aug 2025',
    highlights: [
      // TODO: confirm metric (6 weeks)
      'Shipped responsive React.js interfaces to production within **6 weeks**.',
      // TODO: confirm metric (40%)
      'Authored documentation and tooling that cut intern onboarding ramp by **40%**.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Engineering in Software Engineering',
  institution: 'NUST SEECS, Islamabad',
  period: '2023 – 2027 (expected)',
  coursework: [
    'Data Structures and Algorithms',
    'OOP',
    'Database Systems',
    'Software Engineering',
    'Operating Systems',
    'Computer Networks',
    'Information Security',
    'Artificial Intelligence',
    'HCI',
  ],
};

export const skillGroups = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'C/C++', 'Bash', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frontend',
    items: [
      'React 19', 'Next.js', 'React Native (learning via FYP)', 'Context API', 'Zustand',
      'TanStack Query', 'MUI', 'Bootstrap 5', 'PWA / Service Workers',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node.js', 'Express.js', 'Django', 'FastAPI', 'Flask',
      'REST API design', 'Microservices', 'Swagger / OpenAPI',
    ],
  },
  {
    label: 'Databases',
    items: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'SQLAlchemy / Django ORM',
      'Schema design', 'Indexing', 'Migrations',
    ],
  },
  {
    label: 'DevOps',
    items: [
      'Docker (multi-stage)', 'Nginx', 'Gunicorn', 'GitHub Actions CI/CD',
      'Google Cloud Run', 'Railway', 'Vercel', 'Linux',
    ],
  },
  {
    label: 'QA',
    items: [
      'Unit testing', 'Integration testing', 'Regression testing', 'Black-box and white-box testing',
      'TDD', 'pytest', 'Postman', 'Code review',
    ],
  },
  {
    label: 'Security',
    items: [
      'RBAC', 'JWT', 'bcrypt', 'AES / Fernet encryption', 'Row-Level Security',
      'Input validation', 'Least privilege',
    ],
  },
  {
    label: 'AI',
    items: ['ML model integration', 'NLP basics', 'LLM APIs', 'Agentic workflows (in progress)'],
  },
];

// Flat list rendered by the Skills section pills
export const skillsList = [
  'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js',
  'Python', 'Flask', 'FastAPI', 'MongoDB', 'MySQL',
  'Docker', 'Google Cloud', 'Git', 'GitHub', 'Vite',
  'Material-UI', 'HTML5', 'CSS3', 'C/C++', 'GraphQL',
  'Linux', 'Nginx', 'Vercel', 'Chart.js',
];

export const workGroups = [
  {
    id: 'production',
    label: 'Production',
    title: 'Client platforms',
    description: 'Live systems for US clients. Under NDA, built at 99 Technologies.',
  },
  {
    id: 'personal',
    label: 'Personal & Open Source',
    title: 'Products and tools',
    description: 'Independent builds, open-source services, and academic team projects.',
  },
  {
    id: 'fyp',
    label: 'Final Year Project',
    title: 'Research and product',
    description: 'Supervised jointly by 99 Technologies and NUST.',
  },
];

export const projects = [
  {
    id: 'ez-oms',
    category: 'production',
    title: 'EZ OMS',
    subtitle: 'Order Management System with CRM',
    nda: true,
    status: 'Live',
    client: { name: 'EZ on the Earth (US)' },
    description:
      'Order management and CRM platform covering the full order lifecycle, from receiving to fulfillment, on a dual-database architecture.',
    metrics: [
      { value: '88%', label: 'Engagement lift' },
      { value: '45%', label: 'Less manual effort' },
      { value: '23', label: 'Database models' },
    ],
    highlights: [
      'Engineered the order lifecycle (receiving, barcode generation, processing, shipment tracking, fulfillment) across **23 database models** on PostgreSQL + MySQL.',
      'Shipped a full CRM module lifting B2C and B2B engagement by **88%**.',
      // TODO: confirm metric (1000+ daily orders, 30+ labor hours/week)
      'Automated label printing and NetSuite integration, cutting manual effort by **45%** across 1000+ daily orders and saving 30+ labor hours/week.',
      // TODO: confirm metric (8 user roles)
      'Enforced RBAC across **8 user roles** with branch-level data isolation, plus regulatory PDF compliance reports via WeasyPrint.',
    ],
    tech: ['Django', 'PostgreSQL', 'MySQL', 'Gunicorn', 'Nginx', 'WeasyPrint', 'NetSuite REST API'],
    links: [
      { type: 'live', label: 'Client portal (login required)', url: 'https://portal.ezontheearth.com/' },
    ],
  },
  {
    id: 'greenloop',
    category: 'production',
    title: 'Greenloop',
    subtitle: 'Recycling Operations and Invoice Tracking Platform',
    nda: true,
    status: 'Live · In active development',
    client: { name: 'Lighting Resources Inc. (US)', url: 'https://www.lightingresourcesinc.com/' },
    description:
      'Operations platform for invoice tracking, complaints, and branch communication across a US recycling network.',
    metrics: [
      { value: '87%', label: 'Productivity boost' },
      { value: '55%', label: 'Less admin effort' },
      { value: '9+', label: 'US branches' },
    ],
    highlights: [
      'Rolled out invoice tracking and complaints across **9+ US branches** (ATL, AZ, CA, IN, TN, TX), boosting daily productivity by 87%.',
      // TODO: confirm metric (3x faster, 60% backlog cut)
      'Built @mention complaints with real-time notifications and priority escalation, resolving issues **3x faster** and cutting backlog 60%.',
      'Shipped intra-branch messaging that removed **100%** of third-party email dependency.',
      'Modeled the invoice lifecycle with 31 data fields, 5 composite indexes, audit trails, and exports, cutting admin effort by **55%**.',
    ],
    building:
      'Agentic-AI billing automation that drafts invoice adjustments and routes high-value changes to human approval before posting.',
    tech: ['Django', 'PostgreSQL', 'Bootstrap 5', 'DataTables.js', 'Background tasks'],
    links: [{ type: 'live', label: 'Live site', url: 'https://greenloop.ezontheearth.com/' }],
  },
  {
    id: 'fintraxa',
    category: 'personal',
    title: 'Fintraxa',
    subtitle: 'Finance and Investment PWA',
    status: 'Live',
    flagship: true,
    description:
      'Installable PWA for tracking income, expenses, mutual funds, and PSX stocks with live market data.',
    metrics: [
      { value: '4', label: 'Modules' },
      { value: '520+', label: 'Mutual funds' },
      { value: '470+', label: 'PSX stocks' },
    ],
    highlights: [
      'Shipped a full PWA covering income/expenses, mutual funds (MUFAP), and PSX stocks across **4 modules**.',
      'Tuned service-worker caching: **stale-while-revalidate** for fund data, network-first for live prices.',
      'Secured data with Supabase Auth and **Row-Level Security**; state via Zustand + TanStack Query; installable on Android and iOS.',
    ],
    tech: [
      'React 19', 'Vite', 'MUI v7', 'Supabase', 'TanStack Query v5', 'Zustand v5',
      'Framer Motion', 'Recharts', 'Workbox', 'Docker', 'Railway',
    ],
    links: [
      { type: 'live', label: 'Live app', url: 'https://fintraxa.vercel.app' },
      { type: 'repo', label: 'Source', url: 'https://github.com/transfinancial/fintraxa' },
    ],
  },
  {
    id: 'psx-mufap',
    category: 'personal',
    title: 'PSX–MUFAP Microservice',
    subtitle: 'Pakistan Finance Data API',
    status: 'Live',
    description:
      'Open-source API that scrapes Pakistan mutual fund (MUFAP) and stock exchange (PSX) data and serves it through documented REST endpoints.',
    metrics: [
      { value: '990+', label: 'Instruments' },
      { value: '<50ms', label: 'Cached reads' },
      { value: '20+', label: 'Endpoints' },
    ],
    highlights: [
      'Architected split services that auto-scrape MUFAP and PSX every 30 minutes, serving **990+ instruments** from an in-memory cache at sub-50ms.',
      'Exposed **20+ REST endpoints** with filtering, pagination, sorting, search, and auto-generated Swagger/OpenAPI docs.',
      // TODO: confirm metric (~70%)
      'Cut payload size by **~70%** with GZip compression.',
    ],
    tech: ['Python 3.12', 'FastAPI', 'BeautifulSoup4', 'lxml', 'Pandas', 'ORJSON', 'Docker (multi-stage)', 'Nginx'],
    links: [
      { type: 'live', label: 'Docs', url: 'https://sohaib-sarwar.github.io/PSX-MUFAP-MicroService/' },
      { type: 'repo', label: 'Source', url: 'https://github.com/transfinancial/PK-Finance-Microservices' },
    ],
  },
  {
    id: 'life-dashboard',
    category: 'personal',
    title: 'Life Dashboard',
    subtitle: 'Productivity and Wellness Platform',
    status: 'Tech Lead · Team of 3',
    description:
      'NUST academic project by team ByteBuilders that brings six productivity tools into one app with encrypted journaling.',
    highlights: [
      'Led a team of 3 to deliver **6 modules**: Tasks, Habits, Encrypted Journal, Expenses, Calendar, Pomodoro.',
      'Encrypted journal entries at rest with **Fernet (AES-128)**; JWT auth via Axios interceptors and Context API; bcrypt hashing; Alembic migrations.',
      'Owned QA: test plans, pytest unit/integration tests, regression sweeps, and **15+ documented API endpoints**.',
    ],
    tech: ['React 18', 'Vite', 'Flask 3', 'MySQL', 'SQLAlchemy', 'Alembic', 'JWT', 'Chart.js'],
    links: [{ type: 'repo', label: 'Source', url: 'https://github.com/Sohaib-Sarwar/Life-Dashboard' }],
  },
  {
    id: 'shipnest',
    category: 'personal',
    title: 'ShipNest',
    subtitle: 'Logistics and Shipping Management',
    status: 'Semester project',
    description:
      'MERN-stack semester project modeled on a US production logistics system used at 99 Technologies.',
    highlights: [
      'Built shipment creation, carrier assignment, **real-time tracking**, and status workflows.',
      'Designed admin dashboards for warehouse and inventory management.',
      'Enforced **role-based access** across the platform.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    links: [],
  },
  {
    id: 'secure-qr-vault',
    category: 'personal',
    title: 'Secure QR Vault',
    subtitle: 'Encrypted QR for Crypto Wallets',
    description: 'Cryptography project for storing cryptocurrency seed phrases as encrypted QR codes.',
    highlights: [
      'Generated **AES-256** encrypted QR codes for seed-phrase storage.',
      'Derived encryption keys with **PBKDF2**.',
      'Automated round-trip tests to verify encode and decode integrity.',
    ],
    tech: ['Python', 'AES-256', 'PBKDF2'],
    links: [],
  },
  {
    id: 'search-engine',
    category: 'personal',
    title: 'Custom Search Engine',
    subtitle: 'Crawler, Index and Ranked Search',
    description: 'Search engine built from the crawler up, with ranked results in a React interface.',
    highlights: [
      'Built a Python web crawler feeding an **inverted index**.',
      'Ranked results with **TF-IDF** scoring.',
      'Shipped a React frontend with pagination and query highlighting.',
    ],
    tech: ['Python', 'React', 'TF-IDF'],
    links: [],
  },
  {
    id: 'thryvena',
    category: 'fyp',
    title: 'Thryvena',
    subtitle: 'AI-enabled autism support platform',
    status: 'In progress · Proposal defense',
    description:
      'Final Year Project exploring an affordable, subscription-based AI therapy companion for the US market.',
    highlights: [
      "Built and deployed Thryvena's **Next.js** product site as the business-facing foundation for the FYP proposal defense.",
      'Co-authoring a research paper on Autism Spectrum Disorder with **Prof. Ayesha Kanwal**.',
      'Designing for affordability in a market where a single therapy session can cost **$500+**.',
    ],
    tech: ['Next.js'],
    links: [{ type: 'live', label: 'Product site', url: 'https://qa.thryvena.com/' }],
  },
];

export const certifications = [
  {
    title: 'Develop Serverless Applications on Cloud Run',
    issuer: 'Google Cloud Skills Boost',
    url: 'https://www.credly.com/badges/8a927cac-5cf0-4b83-8a37-a022872bd5ff/linked_in_profile',
  },
  {
    // Title taken from the Credly badge itself. Context.md listed this badge as
    // "Get Started with Cloud Storage". TODO: confirm which title is correct.
    title: 'Implement Cloud Storage and Data Protection Solutions',
    issuer: 'Google Cloud Skills Boost',
    url: 'https://www.credly.com/badges/4068a7c7-0a3d-4c46-86db-a76fb6929186/linked_in_profile',
  },
  {
    title: 'The Basics of Google Cloud Compute',
    issuer: 'Google Cloud Skills Boost',
    url: 'https://www.credly.com/badges/456c6380-4071-46e8-8b4c-3d5ff0cf3acf/linked_in_profile',
  },
];

export const volunteering = {
  role: 'Social Worker (Internship, Hybrid)',
  organization: 'Al Khidmat Foundation Lahore, Islamabad',
  period: 'Jun 2025 – Aug 2025',
  highlights: [
    'Organized community welfare events: food drives, health camps, and educational outreach programs',
    'Led social media marketing campaigns; coordinated event management, logistics, and volunteer teams',
    'Developed skills in public relations, fundraising, and non-profit operations',
  ],
};

export const hobbies = [
  'Open-source contribution on GitHub',
  'Competitive programming & DSA',
  'AI/ML and cloud computing exploration',
  'Tech meetups, hackathons & communities',
  'Reading: system design & architecture',
  'Sports: cricket, badminton, fitness',
];

export const languages = [
  { name: 'Urdu', level: 'Native' },
  { name: 'English', level: 'Professional Proficiency' },
  { name: 'Punjabi', level: 'Conversational' },
];

export const marqueeWords = [
  'SCALABLE', 'SECURE', 'TESTED', 'DOCUMENTED',
  'PERFORMANT', 'RELIABLE', 'ACCESSIBLE', 'MAINTAINABLE',
];
