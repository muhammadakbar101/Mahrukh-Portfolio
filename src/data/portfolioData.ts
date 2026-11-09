import { PlatformType } from '../components/Icons';

export const ASSET_BASE = '';

export const asset = (path: string) =>
  path.startsWith('http') ? path : path.startsWith('/') ? path : `/${path}`;

export type CaseSlug =
  | 'posh-education'
  | 'jims-laundry'
  | 'dmwithmahrukhh'
  | 'bathurst-bagel'
  | 'houston-aesthetics';

export interface ServiceItem {
  href: `/work/${CaseSlug}/`;
  img: string;
  objectPosition?: string;
  stat: string;
  title: string;
  description: string;
}

export interface ClientTickerItem {
  name: string;
  role: string;
}

export interface ProjectRow {
  href: `/work/${CaseSlug}/`;
  client: string;
  what: string;
  platforms: PlatformType[];
  result: string;
  unit: string;
  asOf: string;
}

export interface CeoCard {
  href: `/work/${CaseSlug}/`;
  banner: string;
  photo: string;
  name: string;
  role: string;
  followers: string;
  impressions: string;
}

export interface ProcessStep {
  step: number;
  num: string;
  title: string;
  description: string;
  img: string;
  alt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    href: '/work/posh-education/',
    img: '/services/strategy.svg',
    stat: '3 Markets',
    title: 'Digital Marketing Strategy',
    description:
      'Developing comprehensive digital marketing strategies for businesses across Pakistan, Australia, and Sri Lanka. From understanding target audiences to campaign planning and brand positioning.',
  },
  {
    href: '/work/jims-laundry/',
    img: '/services/social.svg',
    stat: 'Multiple Brands Managed',
    title: 'Social Media Management',
    description:
      'Managing social platforms from planning and content calendars to publishing, community engagement, and performance monitoring. Building consistent digital identities that attract attention.',
  },
  {
    href: '/work/posh-education/',
    img: '/services/meta-ads.svg',
    stat: '71 Leads in 6 Days',
    title: 'Meta Ads & Lead Generation',
    description:
      'Creating and managing paid social campaigns with conversion-focused messaging, audience targeting, creative testing, and performance optimization to maximize ad budget efficiency.',
  },
  {
    href: '/work/dmwithmahrukhh/',
    img: '/services/content.svg',
    stat: '8K+ Organic Views in 2 Weeks',
    title: 'Content Strategy & Reels',
    description:
      'Developing content pillars, compelling hooks, reels, captions, carousels, and platform-native creative concepts that capture attention and build engaged communities.',
  },
  {
    href: '/work/houston-aesthetics/',
    img: '/services/design.svg',
    stat: '4+ Years Experience',
    title: 'Graphic Design & Brand Identity',
    description:
      'Creating impactful marketing visuals, social media graphics, promotional materials, logos, banners, and cohesive brand content using professional design tools.',
  },
  {
    href: '/work/posh-education/',
    img: '/services/seo.svg',
    stat: 'Strategy to Execution',
    title: 'SEO & Website Management',
    description:
      'Working on SEO solutions, website content, website updates, digital visibility, and online brand presentation combining content optimization with creative execution.',
  },
];

export const CLIENT_TICKER: ClientTickerItem[] = [
  { name: 'Posh Education & Migration Services', role: 'Digital Marketing Department Head' },
  { name: 'Bathurst Bagel', role: 'Social Media Manager & Digital Marketer' },
  { name: 'Jim’s Laundry Services', role: 'Social Media Manager & Digital Marketer' },
  { name: 'Houston Aesthetics & Wellness', role: 'Social Media Manager' },
  { name: 'Fusion TV Network', role: 'Social Media Manager' },
  { name: 'Jaroder Walla’s School', role: 'Social Media Marketing Manager & Digital Marketer' },
  { name: 'Happy Palace Group of Schools', role: 'Visual Designer Intern' },
  { name: 'Multiple Clients', role: 'Freelance Graphic Designer' },
  { name: 'WitchVault', role: 'Social Media Manager & Graphic Designer' },
];

export const WORK_TOTALS = [
  {
    count: '71+',
    label: 'Leads Generated in 6 Days (UK Study Intake Campaign)',
  },
  {
    count: '10K+',
    label: 'Facebook Views in One Month (Jim’s Laundry Services)',
  },
  {
    count: '8K+',
    label: 'Organic Views in Two Weeks (@dmwithmahrukhh)',
  },
];

export const PROJECTS: ProjectRow[] = [
  {
    href: '/work/posh-education/',
    client: 'Posh Education & Migration',
    what: 'UK Study Intake lead-generation campaign across Pakistan, Australia & Sri Lanka.',
    platforms: ['Meta', 'Facebook', 'Instagram'],
    result: '71',
    unit: 'leads generated in 6 days',
    asOf: 'PKR 66.35 cost per lead',
  },
  {
    href: '/work/jims-laundry/',
    client: 'Jim’s Laundry Services',
    what: 'Conversion-focused messaging, social creatives, and paid campaigns in Australia.',
    platforms: ['Facebook', 'Meta'],
    result: '10K+',
    unit: 'Facebook views in one month',
    asOf: 'inbound direct messages growth',
  },
  {
    href: '/work/dmwithmahrukhh/',
    client: 'Personal Instagram Project',
    what: 'Organic social media growth, visual identity, and reels content strategy from scratch.',
    platforms: ['Instagram'],
    result: '8K+',
    unit: 'organic views in 2 weeks',
    asOf: 'zero paid ads spend',
  },
  {
    href: '/work/bathurst-bagel/',
    client: 'Bathurst Bagel',
    what: 'Local hospitality marketing, platform-native reels, and community brand buzz in Hobart.',
    platforms: ['Instagram', 'Facebook'],
    result: 'Local Buzz',
    unit: 'creator visits & customer reviews',
    asOf: 'Hobart, Australia',
  },
  {
    href: '/work/houston-aesthetics/',
    client: 'Houston Aesthetics & Wellness',
    what: 'Social media revamp, cohesive aesthetic feed direction, and bespoke design templates.',
    platforms: ['Instagram'],
    result: 'Brand Revamp',
    unit: 'cohesive visual identity',
    asOf: 'client-approved experience',
  },
];

export const CEOS: CeoCard[] = [
  {
    href: '/work/posh-education/',
    banner: '/projects/posh-banner.svg',
    photo: '/services/meta-ads.svg',
    name: 'Posh Education & Migration',
    role: 'Marketing Manager · Pakistan, Australia, Sri Lanka',
    followers: '71 Leads',
    impressions: '68,796 views (PKR 4,711 spend)',
  },
  {
    href: '/work/jims-laundry/',
    banner: '/projects/jims-banner.svg',
    photo: '/services/social.svg',
    name: 'Jim’s Laundry Services',
    role: 'Social Media Manager · Australia',
    followers: '10K+ Views',
    impressions: 'Inbound DMs & Customer Interest',
  },
  {
    href: '/work/bathurst-bagel/',
    banner: '/projects/bathurst-banner.svg',
    photo: '/services/content.svg',
    name: 'Bathurst Bagel',
    role: 'Social Media Manager · Hobart, Australia',
    followers: 'Local Brand Buzz',
    impressions: 'Platform-native reels & creator visits',
  },
  {
    href: '/work/houston-aesthetics/',
    banner: '/projects/houston-banner.svg',
    photo: '/services/design.svg',
    name: 'Houston Aesthetics & Wellness',
    role: 'Social Media Manager & Graphics Designer',
    followers: 'Luxury Aesthetic',
    impressions: 'Complete feed revamp & template system',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 0,
    num: '1',
    title: 'Research & Discovery',
    description:
      'Understand the business, audience, industry, competitors, brand positioning, and marketing objectives. Identify opportunities and areas where the brand’s digital presence can improve.',
    img: '/process/step-1.svg',
    alt: 'Research & Discovery step: Audience and competitor auditing',
  },
  {
    step: 1,
    num: '2',
    title: 'Strategy & Planning',
    description:
      'Develop content pillars, marketing strategies, creative directions, campaign structures, and content calendars. Determine the right platforms, messaging, and objectives for the brand.',
    img: '/process/step-2.svg',
    alt: 'Strategy & Planning step: Content pillars and multi-tier campaign blueprint',
  },
  {
    step: 2,
    num: '3',
    title: 'Creative Execution & Campaign Management',
    description:
      'Transform strategy into execution through graphics, reels, captions, website content, organic social campaigns, and paid advertisements. Manage publishing, campaign implementation, and creative testing.',
    img: '/process/step-3.svg',
    alt: 'Creative Execution step: Native asset creation and Meta Ads deployment',
  },
  {
    step: 3,
    num: '4',
    title: 'Analytics & Optimization',
    description:
      'Monitor performance, analyse audience behaviour, measure campaign results, and identify areas for improvement. Use data-driven insights to refine creative decisions, advertising strategies, and future campaigns.',
    img: '/process/step-4.svg',
    alt: 'Analytics & Optimization step: CPL tracking and iterative scaling',
  },
];

export interface CaseBeat {
  label: string;
  quote: string;
  text: string;
}

export interface StripItem {
  zoom: string;
  alt: string;
  cap: string;
  width: number;
  height: number;
}

export interface StandardCaseData {
  slug: CaseSlug;
  pageTitle: string;
  banner: string;
  photo?: string;
  photoAlt?: string;
  client: string;
  role: string;
  title: string;
  headlineQuote?: string;
  platforms: PlatformType[];
  results: { dt: string; dd: string }[];
  context: string[];
  introParagraph: string;
  whatIDid: (string | { bullets: { bold: string; text: string }[] })[];
  whatHappened: string[];
  extraSection?: { id: string; heading: string; paragraphs: string[] };
  inside?: {
    img: string;
    alt: string;
    width: number;
    height: number;
    beats: CaseBeat[];
  };
  strip?: {
    showNav?: boolean;
    items: StripItem[];
  };
  ctaHeading: string;
  ctaContext: string;
  next: {
    href: `/work/${CaseSlug}/`;
    cover: string;
    label: string;
    title: string;
  };
}

export const CASES_BY_SLUG: Record<Exclude<CaseSlug, 'dmwithmahrukhh'>, StandardCaseData> = {
  'posh-education': {
    slug: 'posh-education',
    pageTitle: 'Posh Education & Migration: 71 Leads in 6 Days with PKR 4,711 Ad Spend | Mahrukh Khan',
    banner: '/projects/posh-banner.svg',
    photo: '/services/meta-ads.svg',
    photoAlt: 'Posh Education & Migration Services',
    client: 'Posh Education & Migration Services',
    role: 'Marketing Manager (October 2025 – Present)',
    title: 'Small Budget. Strategic Execution. 71 Leads.',
    headlineQuote:
      '“A six-day lead-generation campaign for the January 2027 UK study intake generated 71 verified enquiries on a total advertising spend of PKR 4,711.”',
    platforms: ['Meta', 'Facebook', 'Instagram'],
    results: [
      { dt: 'leads generated', dd: '71' },
      { dt: 'total advertising spend', dd: 'PKR 4,711' },
      { dt: 'cost per lead', dd: 'PKR 66.35' },
      { dt: 'ad views', dd: '68,796' },
      { dt: 'targeted viewers', dd: '44,132' },
      { dt: 'lower CPL vs benchmark', dd: '25%' },
    ],
    context: [
      'January 2027 UK study intake campaign across Pakistan, Australia, and Sri Lanka.',
      'Campaign duration: 6 days.',
    ],
    introParagraph:
      'Managing digital marketing operations and brand communication across multiple international markets for Posh Education & Migration Services. The work involves transforming brand communication and digital content into measurable marketing activity through organic and paid strategies.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Strategic Messaging:',
            text: 'Crafted conversion-focused copy and hooks speaking directly to prospective students seeking the January 2027 UK study intake.',
          },
          {
            bold: 'Audience Refinement:',
            text: 'Narrowed demographic targeting to high-intent academic cohorts across target regions, eliminating wasted spend.',
          },
          {
            bold: 'Creative Testing:',
            text: 'Tested visual variants in Meta Ads Manager to rapidly identify high-CTR combinations before scaling budget.',
          },
          {
            bold: 'End-to-End Pipeline:',
            text: 'Connected ad leads directly to instantaneous counselor follow-up workflows for maximum contact rates.',
          },
        ],
      },
    ],
    whatHappened: [
      'The campaign proved that high performance doesn’t require massive ad budgets. In just 6 days, 71 qualified leads were generated at an average cost of PKR 66.35 per lead, achieving 25% lower cost per lead compared with similar ads in the sector.',
      'The campaign generated 68,796 ad views and reached 44,132 individual prospective students, establishing a repeatable lead-generation engine for international intakes.',
    ],
    inside: {
      img: '/projects/posh-spotlight.svg',
      alt: 'Posh Education Meta Ads Campaign Performance: 71 leads, PKR 66.35 cost per lead, 68.7K views',
      width: 1088,
      height: 1327,
      beats: [
        {
          label: 'The Offer',
          quote: 'UK January 2027 Study Intake',
          text: 'Specific, timely, and outcome-oriented. Prospective students knew exactly what step to take next.',
        },
        {
          label: 'The Targeting',
          quote: 'High-intent academic segments',
          text: 'Eliminated broad curiosity clicks to protect the budget and keep the cost per lead under PKR 67.',
        },
        {
          label: 'The Efficiency',
          quote: 'PKR 4,711 total spend',
          text: 'Every creative decision and advertising rupee had a purpose, delivering 71 verified applicant leads.',
        },
      ],
    },
    strip: {
      showNav: false,
      items: [
        {
          zoom: '/projects/posh-banner.svg',
          alt: 'Posh Education Campaign Performance Banner',
          cap: 'UK Study Intake Campaign Overview',
          width: 1200,
          height: 630,
        },
      ],
    },
    ctaHeading: 'Looking for high-efficiency lead generation?',
    ctaContext: 'Posh Education Campaign',
    next: {
      href: '/work/jims-laundry/',
      cover: '/projects/jims-banner.svg',
      label: 'Next: Jim’s Laundry Services',
      title: 'Building community engagement and 10K+ views in Australia',
    },
  },
  'jims-laundry': {
    slug: 'jims-laundry',
    pageTitle: 'Jim’s Laundry Services: 10K+ Facebook Views & Follower Growth in Australia | Mahrukh Khan',
    banner: '/projects/jims-banner.svg',
    photo: '/services/social.svg',
    photoAlt: 'Jim’s Laundry Services',
    client: 'Jim’s Laundry Services',
    role: 'Social Media Manager (February 2026 – Present)',
    title: 'Local Service Brand Growth in the Australian Market',
    headlineQuote:
      '“10K+ Facebook views in one month with increased inbound direct messages and customer interest across Australia.”',
    platforms: ['Facebook', 'Meta'],
    results: [
      { dt: 'Facebook views in 1 month', dd: '10K+' },
      { dt: 'direct inbound messages', dd: 'Increased' },
      { dt: 'organic follower growth', dd: 'Consistent' },
      { dt: 'market focus', dd: 'Australia' },
    ],
    context: ['Australian commercial and domestic laundry market.', 'February 2026 – Present.'],
    introParagraph:
      'Managing social media content and paid campaigns for Jim’s Laundry Services in Australia. The goal is to build strong local brand awareness, communicate service reliability, and prompt direct customer bookings through clear calls to action.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Creative Strategy:',
            text: 'Developed conversion-focused messaging and engaging graphics demonstrating convenience and trust.',
          },
          {
            bold: 'Local Audience Targeting:',
            text: 'Refined geographical targeting within Australian metropolitan and suburban service zones.',
          },
          {
            bold: 'Creative Iteration:',
            text: 'Tested promotional formats against lifestyle content to uncover top-performing customer triggers.',
          },
          {
            bold: 'Active Monitoring:',
            text: 'Tracked incoming engagement and message response rates to optimize weekly content calendars.',
          },
        ],
      },
    ],
    whatHappened: [
      'Generated over 10,000 Facebook views in a single month while sparking a notable increase in inbound direct messages and customer inquiries from local clients seeking laundry solutions.',
    ],
    inside: {
      img: '/projects/jims-banner.svg',
      alt: 'Jim’s Laundry Services campaign overview in Australia',
      width: 1200,
      height: 630,
      beats: [
        {
          label: 'The Hook',
          quote: 'Convenient, Reliable Laundry at Your Door',
          text: 'Speaking directly to busy Australian households and commercial operators needing hassle-free service.',
        },
        {
          label: 'The Visuals',
          quote: 'Fresh, clean, professional presentation',
          text: 'Building immediate confidence through crisp branded assets and relatable situations.',
        },
      ],
    },
    ctaHeading: 'Want to scale your local brand presence?',
    ctaContext: 'Jim’s Laundry Services',
    next: {
      href: '/work/dmwithmahrukhh/',
      cover: '/projects/dmwithmahrukhh-banner.svg',
      label: 'Next: @dmwithmahrukhh',
      title: 'Building an Instagram presence to 8K+ organic views in 2 weeks',
    },
  },
  'bathurst-bagel': {
    slug: 'bathurst-bagel',
    pageTitle: 'Bathurst Bagel: Local Brand Buzz & Creator Marketing in Hobart | Mahrukh Khan',
    banner: '/projects/bathurst-banner.svg',
    photo: '/services/content.svg',
    photoAlt: 'Bathurst Bagel',
    client: 'Bathurst Bagel',
    role: 'Social Media Manager (April 2026 – Present)',
    title: 'Hospitality Social Marketing & Local Community Buzz',
    headlineQuote:
      '“Creating platform-native reels, graphics, and community-focused campaigns to strengthen brand visibility in Hobart, Australia.”',
    platforms: ['Instagram', 'Facebook'],
    results: [
      { dt: 'local market', dd: 'Hobart, AUS' },
      { dt: 'content format', dd: 'Native Reels' },
      { dt: 'community buzz', dd: 'Elevated' },
      { dt: 'influencer visits', dd: 'Increased' },
    ],
    context: ['Hospitality & bakery brand in Hobart, Australia.', 'April 2026 – Present.'],
    introParagraph:
      'Managing digital content and local social media marketing for Bathurst Bagel, a beloved hospitality business in Hobart. Developing mouth-watering reels, creator-friendly concepts, and community promotions that turn local diners into loyal regulars.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Reels Production:',
            text: 'Planned and produced platform-native short-form videos capturing freshly baked bagels and morning coffee energy.',
          },
          {
            bold: 'Community Campaigns:',
            text: 'Created local campaign concepts encouraging customer check-ins, story tags, and word-of-mouth recommendations.',
          },
          {
            bold: 'Creator Collaboration:',
            text: 'Encouraged local influencer visits and authentic customer reviews to generate organic social proof.',
          },
        ],
      },
    ],
    whatHappened: [
      'Significantly improved content visibility and sustained local engagement, cementing Bathurst Bagel’s reputation as an unmissable culinary spot in Hobart.',
    ],
    ctaHeading: 'Need creative social marketing for your venue?',
    ctaContext: 'Bathurst Bagel',
    next: {
      href: '/work/houston-aesthetics/',
      cover: '/projects/houston-banner.svg',
      label: 'Next: Houston Aesthetics & Wellness',
      title: 'Elevating aesthetic brand identity and feed direction',
    },
  },
  'houston-aesthetics': {
    slug: 'houston-aesthetics',
    pageTitle: 'Houston Aesthetics & Wellness: Brand Identity & Feed Revamp | Mahrukh Khan',
    banner: '/projects/houston-banner.svg',
    photo: '/services/design.svg',
    photoAlt: 'Houston Aesthetics & Wellness',
    client: 'Houston Aesthetics & Wellness',
    role: 'Social Media Manager & Graphics Designer (April 2026 – July 2026)',
    title: 'Brand Content & Comprehensive Social Media Revamp',
    headlineQuote:
      '“Transformed an inconsistent social media feed into a polished, cohesive, and client-approved wellness brand experience.”',
    platforms: ['Instagram'],
    results: [
      { dt: 'brand identity', dd: 'Cohesive' },
      { dt: 'feed direction', dd: 'Restructured' },
      { dt: 'bespoke templates', dd: 'Delivered' },
      { dt: 'client approval', dd: '100%' },
    ],
    context: ['Luxury wellness and medical aesthetics.', 'April 2026 – July 2026.'],
    introParagraph:
      'Rebuilt the social media presence of Houston Aesthetics & Wellness by establishing a sophisticated visual direction, harmonizing the color palette, and designing high-end creative templates tailored to an audience seeking premier aesthetic care.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Feed Restructuring:',
            text: 'Transitioned the grid from erratic posts into an elegant rhythm of treatment highlights, educational quotes, and client transformations.',
          },
          {
            bold: 'Design System:',
            text: 'Crafted reusable Canva, Photoshop, and Illustrator templates ensuring brand continuity across stories and carousels.',
          },
          {
            bold: 'Audience-Appropriate Tone:',
            text: 'Aligned typography and copy with medical discretion, elegance, and warmth.',
          },
        ],
      },
    ],
    whatHappened: [
      'Delivered a client-approved brand transformation that immediately elevated perceived authority and aesthetic credibility across all social touchpoints.',
    ],
    ctaHeading: 'Want to revamp your brand presence?',
    ctaContext: 'Houston Aesthetics & Wellness',
    next: {
      href: '/work/posh-education/',
      cover: '/projects/posh-banner.svg',
      label: 'Next: Posh Education',
      title: 'Small Budget. Strategic Execution. 71 Leads.',
    },
  },
};

export const DMWITHMAHRUKHH_DATA = {
  pageTitle: '@dmwithmahrukhh: 8K+ Organic Views in Two Weeks from Scratch | Mahrukh Khan',
  viewsPerDay: {
    title: 'Organic views per day',
    total: '8,420',
    totalUnit: 'views',
    unit: 'views',
    source: 'Instagram Insights, 14-day launch period. 100% organic.',
    ariaLabel: 'Organic views per day: 8,420 views over 14 days, peaking at 1,480 views',
    peakText: '1,480 peak views',
    yTicks: [
      { val: 0, label: '0' },
      { val: 400, label: '400' },
      { val: 800, label: '800' },
      { val: 1200, label: '1.2K' },
      { val: 1600, label: '1.6K' },
    ],
    yMax: 1600,
    xTicks: [
      { idx: 0, label: 'Day 1', anchor: 'start' as const },
      { idx: 6, label: 'Day 7', anchor: 'middle' as const },
      { idx: 13, label: 'Day 14', anchor: 'end' as const },
    ],
    values: [120, 240, 310, 480, 520, 890, 1480, 920, 680, 740, 810, 730, 690, 800],
    dates: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14'],
  },
  igFollowsPerDay: {
    title: 'Non-follower reach ratio',
    total: '88.4%',
    totalUnit: 'non-follower reach',
    unit: '% reach',
    source: 'Instagram Insights, algorithmically recommended content.',
    ariaLabel: 'Non-follower reach: 88.4% of views came from people not yet following',
    peakText: '88.4% non-followers',
    yTicks: [
      { val: 0, label: '0%' },
      { val: 25, label: '25%' },
      { val: 50, label: '50%' },
      { val: 75, label: '75%' },
      { val: 100, label: '100%' },
    ],
    yMax: 100,
    xTicks: [
      { idx: 0, label: 'Week 1', anchor: 'start' as const },
      { idx: 1, label: 'Week 2', anchor: 'end' as const },
    ],
    values: [84, 91],
    dates: ['Week 1', 'Week 2'],
  },
  topReels: [
    { rank: '1', img: '/services/content.svg', alt: 'Content Strategy Reel: Stop Scrolling', views: '2.4K' },
    { rank: '2', img: '/services/strategy.svg', alt: 'Marketing Insights Reel', views: '1.8K' },
    { rank: '3', img: '/services/meta-ads.svg', alt: 'Meta Ads Breakdown Reel', views: '1.5K' },
    { rank: '4', img: '/services/design.svg', alt: 'Brand Identity Design Reel', views: '1.2K' },
    { rank: '5', img: '/services/social.svg', alt: 'Social Media Consistency Reel', views: '980' },
    { rank: '6', img: '/services/seo.svg', alt: 'SEO Optimization Tips Reel', views: '540' },
  ],
  carousel: [
    { img: '/services/strategy.svg', alt: 'Content Pillar 1: Strategic Foundations' },
    { img: '/services/content.svg', alt: 'Content Pillar 2: High-Retention Reels & Visual Storytelling' },
    { img: '/services/social.svg', alt: 'Content Pillar 3: Consistent Publishing Rhythm' },
    { img: '/services/meta-ads.svg', alt: 'Content Pillar 4: A/B Testing & Audience Insights' },
  ],
  strip: [
    { zoom: '/projects/dmwithmahrukhh-banner.svg', alt: '@dmwithmahrukhh launch banner', cap: 'Account Built from Scratch', width: 1200, height: 630 },
    { zoom: '/services/content.svg', alt: 'Content Strategy visual', cap: 'Platform-Native Storytelling', width: 800, height: 600 },
  ],
};
