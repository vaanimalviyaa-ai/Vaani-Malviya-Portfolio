import { ExperienceItem, ProjectItem, SkillCategory, AchievementItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Vaani Malviya',
  role: 'Marketing Professional & Aspiring Brand Manager',
  tagline: 'From brand insight to digital impact - powered by strategy, performance, and AI.',
  email: 'vaanimalviyaa@gmail.com',
  phone: '+91 8853366980',
  linkedin: 'https://linkedin.com/in/vaani-malviya',
  linkedInHandle: 'vaani-malviya',
  location: 'Gurugram, India',
  availability: 'Open to Marketing Opportunities',
  bio: `Building brands for a digital-first, AI-driven world. I combine brand management, digital and performance marketing with consumer insights, analytics, and emerging AI capabilities to create strategies that connect brands with the right audiences, strengthen market positioning, and turn marketing investments into measurable business growth.`,
};

export const experiences: ExperienceItem[] = [
  {
    id: 'great-learning',
    company: 'Great Learning',
    role: 'Learning Consultant – International Sales',
    period: 'May 2026 – Sep 2026',
    location: 'Gurugram, India',
    tagline: 'Driving high-ticket consultative growth & positioning Agentic AI across international markets.',
    bullets: [
      'Managing consultative international sales for the Latin America region, engaging with working professionals across diverse industries and leadership tiers.',
      'Advising senior professionals on continuous career transformation and AI adoption by positioning Agentic AI as a catalytic productivity and business growth enabler.',
      'Building expertise in B2C consultative selling, objection handling, value framing, and high-ticket executive education sales strategies.',
    ],
    skills: [
      'International Sales & Marketing',
      'Consultative Selling',
      'Agentic AI Positioning',
      'High-Ticket Sales Strategy',
      'Objection Handling',
      'Client Relationship Management',
    ],
    metrics: [
      { label: 'Market Scope', value: 'Latin America (LatAm)' },
      { label: 'Domain Focus', value: 'Agentic AI & Executive Upskilling' },
    ],
  },
  {
    id: 'hcl-healthcare',
    company: 'HCL Healthcare',
    role: 'Marketing Intern',
    period: 'May 2025 – Jun 2025',
    location: 'Noida, India',
    tagline: 'Worked on market intelligence and competitive analysis to support strategic growth and market expansion initiatives.',
    bullets: [
      'Analyzed 480+ Global Capability Centers (GCCs) and a 2.1 lakh+ talent ecosystem to identify high-potential expansion opportunities across Bengaluru and Hyderabad.',
      'Conducted competitive benchmarking of Pristyn Cares ₹644 Cr FY24 business model to identify strategic gaps and positioning opportunities.',
      'Translated market and competitor research into actionable insights for understanding growth opportunities.',
      'Developed practical experience in market research, competitive analysis, strategic marketing, and data-driven decision-making.',
    ],
    skills: [
      'Market Intelligence',
      'Competitive Analysis',
      'Marketing Strategy',
      'Business Model Analysis',
      'Strategic Positioning',
      'Data Visualization',
    ],
    metrics: [
      { label: 'GCCs Analyzed', value: '480+' },
      { label: 'Talent Pool Mapped', value: '2.1 Lakh+' },
      { label: 'Competitor Model Benchmarked', value: '₹644 Cr FY24' },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'gustatory-marketing',
    title: 'A Study of Gustatory Marketing in Tourism',
    subtitle: 'Master Thesis & Quantitative Consumer Research',
    category: 'Consumer Behavior & Brand Attachment',
    overview:
      'Explored how culinary experiences influence consumer perceptions and destination-related decisions, with a focus on loyalty, emotional brand attachment, and revisit intention.',
    bullets: [
      'Conducted quantitative consumer behavior research with 353 respondents to analyze how culinary experiences influence destination loyalty, emotional brand attachment, and revisit intention.',
      'Developed strategic marketing insights using Push-Pull Motivation Theory to understand the role of culinary experiences in consumer decision-making.',
      'Identified cultural authenticity and immersive food experiences as key drivers of consumer engagement and word-of-mouth advocacy.',
    ],
    framework: 'Push-Pull Motivation Theory',
    methodology: 'Quantitative consumer research with 353 respondents',
    keyInsights: [
      'Cultural authenticity emerged as an important factor influencing consumer engagement',
      'Immersive food experiences can strengthen emotional connections with destinations.',
      'Culinary experiences contribute to destination loyalty, revisit intention, and word-of-mouth advocacy.',
    ],
    tags: [
      'Consumer Insights',
      'Push-Pull Motivation Theory',
      'Quantitative Research',
      'Sensory Marketing',
      'Brand Attachment',
      'Destination Marketing',
    ],
  },
  {
    id: 'puma-brand-personality',
    title: 'Brand Portfolio & Personality Analysis of Puma',
    subtitle: 'Strategic Brand Audit & Indian Market Expansion',
    category: 'Brand Architecture & Positioning',
    overview:
      'Analyzed Puma’s brand portfolio and personality in the Indian market to understand its positioning, consumer perception, competitive differentiation, and potential growth opportunities.',
    bullets: [
      'Analyzed Puma’s multi-category brand portfolio and personality dimensions across Indian sportswear, contrasting market positioning against Nike and Adidas.',
      'Conducted consumer and competitive analysis to understand Puma’s positioning within the Indian sportswear market.',
      'Identified potential growth opportunities in digital engagement, sustainable branding, and expansion into tier-2 and tier-3 markets.',
    ],
    framework: "Aaker's Brand Personality Framework",
    methodology: 'Consumer analysis, competitive analysis, and brand positioning assessment',
    keyInsights: [
      'Evaluated Puma’s brand personality to understand its consumer perception and market positioning.',
      'Identified digital engagement as an opportunity to strengthen consumer connections.',
      'Highlighted sustainable branding and tier-2/3 market expansion as potential growth opportunities.',
    ],
    tags: [
      "Aaker's Brand Framework",
      'Brand Positioning',
      'Competitive Differentiation',
      'Tier-2/3 Market Strategy',
      'Consumer Perception',
      'Digital Engagement',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Brand Management & Marketing',
    iconName: 'Sparkles',
    description: 'Connecting consumer insight with strategy to build stronger, more relevant brands.',
    skills: [
      { name: 'Brand Strategy & Positioning', highlight: true },
      { name: 'Consumer & Market Insights', highlight: true },
      { name: 'Digital Brand Management', highlight: true },
      { name: 'Campaign & Brand Performance' },
      { name: 'Go-To-Market (GTM) Strategy' },
    ],
  },
  {
    title: 'Google Analytics',
    iconName: 'TrendingUp',
    description: 'Data-driven audience insights for smarter marketing decisions.',
    skills: [
      { name: 'Google Analytics 4 (GA4)', highlight: true },
      { name: 'Performance Marketing', highlight: true },
      { name: 'Marketing Analytics & Data Insights' },
      { name: 'Website & User Behavior Analysis' },
      { name: 'Marketing Automation & CRM' },
    ],
  },
  {
    title: 'Digital Marketing',
    iconName: 'Cpu',
    description: 'Building brands through strategy, digital innovation, performance, and AI.',
    skills: [
      { name: 'SEO & SEM', highlight: true },
      { name: 'Content & Social Media Marketing', highlight: true },
      { name: 'AI-Powered Marketing', highlight: true },
      { name: 'Email Marketing & Marketing Automation' },
      { name: 'Marketing Analytics & Data Insights ' },
      { name: 'Marketing Automation' },
    ],
  },
  {
    title: 'Technical Skills & Analytical Tools',
    iconName: 'Terminal',
    description: 'Turning data into actionable insights through advanced Excel, business intelligence, analytics, and modern AI tools.',
    skills: [
      { name: 'MS Suite, Advance MS Excel', highlight: true },
      { name: 'Microsoft Power BI', highlight: true },
      { name: 'Python (Basic)' },
      { name: 'SQL' },
      { name: 'Canva' },
      { name: 'ChatGpt, Google Gemini, Gamma, Google AI Studio' },
    ],
  },
  {
    title: 'Interpersonal Skills',
    iconName: 'Users',
    description: 'Bringing strong communication, collaborative leadership, and problem-solving skills to turn ideas into effective marketing outcomes.',
    skills: [
      { name: 'Strategic Communication', highlight: true },
      { name: 'Cross-Functional Collaboration', highlight: true },
      { name: 'Team Leadership' },
      { name: 'Problem Solving' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    id: 'marketing-core-head',
    title: 'Dream Merchants — MBA Marketing Department',
    organization: 'Christ (Deemed to be University), Delhi',
    role: 'Departmental Core Head',
    badge: 'A1',
    description:
      'Led the MBA Marketing Core Team, driving strategic planning, brand communication, and promotional initiatives for departmental events, student activities, and industry engagements',
    impact:
      'Focused on strengthening the MBA department’s visibility, increasing student engagement, and creating a more consistent and impactful marketing presence across campus.',
  },
  {
    id: 'fusion-x-head',
    title: 'Promotion Head — Fusion X 2.0',
    organization: 'Christ (Deemed to be University), Delhi',
    role: 'Campaign & Promotions Lead',
    badge: 'A1',
    description:
      'Led the promotion strategy for Fusion X 2.0, planning and executing digital, campus, and peer-to-peer outreach to build awareness and drive participation across Delhi NCR colleges.',
    impact:
      'Focused on expanding the fest’s reach beyond the campus, generating strong student interest, and building sustained buzz that translated into higher participation and regional visibility',
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Master of Business Administration (MBA)',
    field: 'Marketing Specialization',
    institution: 'Christ (Deemed to be University), Delhi NCR',
    period: '08/2024 – 04/2026',
    score: 'CGPA: 7.2 / 10',
    highlights: [
      'Elected Marketing Core Head for the MBA Marketing Department',
      'Partipated in 16th International Conference on Redefining Innovation,Inclusion and Sustainability in Humanitarian Supply Chains',
      'Author of Master Thesis on Gustatory Sensory Marketing (N=353)',
    ],
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    field: 'Commerce, Economics & Business Studies',
    institution: 'University of Lucknow',
    period: '07/2020 – 07/2023',
    score: 'CGPA: 6.8 / 10',
    highlights: [
      'Combining a broad commerce foundation with marketing expertise to understand businesses, consumers, and the strategies that drive growth.',
      'Led cadets and coordinated team activities as a Senior Under Officer, building hands-on experience in leadership, communication, responsibility, and managing teams under pressure.',
    ],
  },
];

export const certifications = [
  'Foundations of Digital Marketing and E-commerce (Coursera Professional Certification)',
  'Marketing Analytics Foundation (Meta)',
  'AI-Powered Performance Ads Certification (Google Skillshop)',
  'Google Analytics Certification (Google Digital Academy)',
];

