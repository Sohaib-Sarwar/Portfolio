export const personalInfo = {
  name: 'Muhammad Sohaib Sarwar',
  firstName: 'SOHAIB',
  title: 'Software Engineer',
  subtitle: 'Full-Stack Developer | MERN Stack | Cloud & DevOps | AI/ML',
  email: 'msarwar.bese23seecs@seecs.edu.pk',
  phone: '+92-300-5544280',
  linkedin: 'https://www.linkedin.com/in/muhammadsohaibsarwar/',
  github: 'https://github.com/Sohaib-Sarwar',
  location: 'Islamabad, Pakistan',
  university: "NUST '27",
  summary:
    "Results-driven Software Engineer and Full-Stack Developer at 99 Technologies, progressed from intern to engineer delivering production-ready features in Agile/Scrum environments. Proficient in JavaScript, TypeScript, React.js, Node.js, Express.js, MongoDB, MySQL, and Google Cloud Platform. Experienced in REST API development, microservices architecture, CI/CD pipelines, and test-driven development. Passionate about AI/ML integration, cloud computing, and building scalable, user-centric web applications.",
  tagline: 'I ENGINEER AND BUILD SYSTEMS THAT',
  taglineHighlight: 'deliver real impact.',
  philosophy: 'Code you can trust.',
  philosophyDescription:
    "I sweat architecture, performance, and reliability \u2014 the foundation of great software.",
};

export const experience = [
  {
    role: 'Software Engineer',
    company: '99 Technologies',
    location: 'Islamabad',
    type: 'Full-time, Hybrid',
    period: 'Jan 2026 \u2013 Present',
    highlights: [
      'Building core modules for the Order Management System (OMS) handling order processing, tracking, and fulfillment workflows',
      'Developing scalable features using the MERN stack; participating in sprint planning, stand-ups, and code reviews',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: '99 Technologies',
    location: 'Islamabad',
    type: 'Part-time',
    period: 'Sep 2025 \u2013 Dec 2025',
    highlights: [
      'Developed web services and RESTful APIs; integrated machine learning models into production applications',
      'Optimized database queries and participated in feature development, bug fixes, and deployments',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: '99 Technologies',
    location: 'Islamabad',
    type: 'Internship',
    period: 'Jun 2025 \u2013 Aug 2025',
    highlights: [
      'Built responsive web interfaces using modern front-end frameworks; applied version control and code quality practices',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Engineering \u2014 Software Engineering (In Progress)',
  institution: 'National University of Sciences and Technology (NUST), Islamabad',
  period: '2023 \u2013 2027',
  coursework: [
    'Data Structures & Algorithms',
    'OOP',
    'Database Systems',
    'Software Engineering',
    'Information Security',
    'Operating Systems',
    'Computer Networks',
    'Artificial Intelligence',
  ],
  leadership: 'Led team ByteBuilders as Tech Lead in academic projects',
};

export const skills = {
  frontend: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React.js', icon: 'react' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'Material-UI', icon: 'mui' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Chart.js', icon: 'chartjs' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Python', icon: 'python' },
    { name: 'Flask', icon: 'flask' },
    { name: 'FastAPI', icon: 'fastapi' },
    { name: 'C/C++', icon: 'cpp' },
    { name: 'GraphQL', icon: 'graphql' },
  ],
  database: [
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'SQLAlchemy', icon: 'sqlalchemy' },
  ],
  cloud: [
    { name: 'Google Cloud', icon: 'gcp' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Nginx', icon: 'nginx' },
  ],
  aiml: [
    { name: 'ML Integration', icon: 'ml' },
    { name: 'Data Analysis', icon: 'data' },
    { name: 'NLP', icon: 'nlp' },
  ],
};

export const skillsList = [
  'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js',
  'Python', 'Flask', 'FastAPI', 'MongoDB', 'MySQL',
  'Docker', 'Google Cloud', 'Git', 'GitHub', 'Vite',
  'Material-UI', 'HTML5', 'CSS3', 'C/C++', 'GraphQL',
  'Linux', 'Nginx', 'Vercel', 'Chart.js',
];

export const projects = [
  {
    title: 'Order Management System',
    subtitle: 'OMS \u2014 99 Technologies',
    description:
      'Production OMS for logistics: order creation, real-time tracking, status updates, and fulfillment workflows. Implementing RBAC, audit trails, and third-party shipping API integrations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Real-time order tracking and status updates',
      'RBAC and audit trail implementation',
      'Third-party shipping API integrations',
    ],
    link: null,
    github: null,
  },
  {
    title: 'MoneyFlow',
    subtitle: 'Business Financial Management',
    description:
      'Unified fintech platform to track business bank accounts, inspired by QuickBooks. Data visualization dashboards; automated financial report and invoice generation (PDF/CSV export).',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Business bank account tracking and management',
      'Data visualization dashboards with Chart.js',
      'Automated PDF/CSV financial report generation',
    ],
    link: null,
    github: null,
  },
  {
    title: 'ShipNest',
    subtitle: 'Logistics & Shipping Management',
    description:
      'End-to-end logistics platform: shipment creation, carrier assignment, real-time tracking, delivery confirmation. Admin dashboards for warehouse management, inventory, and cost optimization.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    features: [
      'End-to-end shipment lifecycle management',
      'Admin dashboards for warehouse & inventory',
      'Cost optimization and analytics',
    ],
    link: null,
    github: null,
  },
  {
    title: 'Life Dashboard',
    subtitle: 'Productivity Platform',
    description:
      'Led team of 4 as Tech Lead; 6 modules: Tasks, Habits, Encrypted Journal, Expenses, Calendar, Pomodoro. E2E encryption (AES-128), JWT authentication, bcrypt hashing, SQLAlchemy ORM, Alembic migrations.',
    tech: ['React.js', 'Flask', 'MySQL', 'SQLAlchemy'],
    features: [
      '6 productivity modules in one platform',
      'E2E encryption (AES-128) for journal entries',
      'JWT auth + bcrypt password hashing',
    ],
    link: null,
    github: 'https://github.com/Sohaib-Sarwar/Life-Dashboard',
  },
  {
    title: 'Secure QR Vault',
    subtitle: 'Encrypted QR for Crypto Wallets',
    description:
      'Cryptography project: AES-256 encrypted QR codes for secure cryptocurrency seed phrase storage. Key derivation, secure encoding, and tamper-resistant QR generation pipeline.',
    tech: ['Python', 'AES-256', 'Cryptography'],
    features: [
      'AES-256 encrypted QR code generation',
      'Secure cryptocurrency seed phrase storage',
      'Tamper-resistant encoding pipeline',
    ],
    link: null,
    github: null,
  },
  {
    title: 'Search Engine',
    subtitle: 'Custom Search with Pagination',
    description:
      'Custom search engine: Python backend for web crawling, indexing, TF-IDF ranking; React frontend with pagination. Inverted index, query highlighting, relevance scoring, and real-time search suggestions.',
    tech: ['Python', 'React.js', 'TF-IDF'],
    features: [
      'Web crawling and inverted index',
      'TF-IDF ranking and relevance scoring',
      'Real-time search suggestions',
    ],
    link: null,
    github: null,
  },
];

export const certifications = [
  'Develop Serverless Applications on Cloud Run \u2014 Google Cloud Skills Boost',
  'Get Started with Cloud Storage \u2014 Google Cloud Skills Boost',
  'The Basics of Google Cloud Compute \u2014 Google Cloud Skills Boost',
];

export const volunteering = {
  role: 'Social Worker (Internship, Hybrid)',
  organization: 'Al Khidmat Foundation Lahore, Islamabad',
  period: 'Jun 2025 \u2013 Aug 2025',
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
  'SCALABLE', 'USER-FRIENDLY', 'ADAPTIVE', 'SECURE',
  'PERFORMANT', 'RELIABLE', 'FUTURE-PROOF', 'CLEAN-CODE',
  'RESPONSIVE', 'EFFICIENT', 'ROBUST', 'INNOVATIVE',
];
