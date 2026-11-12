import { PlatformType } from '../components/Icons';

export const ASSET_BASE = '';

export const asset = (path: string) =>
  path.startsWith('http') ? path : path.startsWith('/') ? path : `/${path}`;

export type CaseSlug =
  | 'posh-education'
  | 'jims-laundry'
  | 'dmwithmahrukhh'
  | 'bathurst-bagel'
  | 'houston-aesthetics'
  | 'netrunners';

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
  logo?: string;
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
  href: `/work/${CaseSlug}/` | string;
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
    img: '/work/posh/page_3.jpg',
    stat: '3 Markets',
    title: 'Digital Marketing Strategy 🌍',
    description:
      'Developing targeted digital strategies across Pakistan, Australia and Sri Lanka, from audience research and brand positioning to creative campaigns and business-focused execution.',
  },
  {
    href: '/work/jims-laundry/',
    img: '/work/jims/page_3.jpg',
    stat: 'Multiple Brands Managed',
    title: 'Social Media Management 📱',
    description:
      'Content calendars, captions, publishing, community engagement, trends, insights — building a social presence that feels consistent, recognizable and worth following.',
  },
  {
    href: '/work/posh-education/',
    img: '/work/meta-insights/page_5.jpg',
    stat: '500+ Leads Generated',
    title: 'Meta Ads & Lead Generation 📈',
    description:
      'Audience targeting, campaign creatives, performance testing and optimization. Generated over 500+ verified student leads and 107K+ monthly views through high-impact paid campaigns.',
  },
  {
    href: '/work/dmwithmahrukhh/',
    img: '/work/bathurst/page_3.jpg',
    stat: '8K+ Organic Views in 2 Weeks',
    title: 'Content Strategy & Reels 🎬',
    description:
      'Content pillars, high-retention hooks, reels, captions, carousels, editing, and publishing. The goal? Content that earns attention instead of begging for it.',
  },
  {
    href: '/work/netrunners/',
    img: '/work/netrunners/page_1.jpg',
    stat: '4+ Years Experience',
    title: 'Graphic Design & Brand Identity 🎨',
    description:
      'From scroll-stopping social posts to promotional campaigns, visual identities, banners, and branded graphics — turning creative ideas into designs with purpose.',
  },
  {
    href: '/work/posh-education/',
    img: '/work/flora/page_1.jpg',
    stat: 'Strategy → Execution',
    title: 'SEO & Website Management 💻',
    description:
      'Website content, updates, search visibility, and digital brand presentation. Connecting the dots between what audiences search for and what they do next.',
  },
];

export const CLIENT_TICKER: ClientTickerItem[] = [
  {
    name: 'Posh Education & Migration Services',
    role: 'Digital Marketing Department Head',
    logo: '/logos/posh.jpg',
  },
  {
    name: 'Bathurst St Bagels',
    role: 'Social Media Manager & Digital Marketer',
    logo: '/logos/bathurst.jpg',
  },
  {
    name: 'Jim’s Laundry Services',
    role: 'Social Media Manager & Digital Marketer',
    logo: '/logos/jims.jpg',
  },
  {
    name: 'The NetRunners',
    role: 'Social Media & Performance Creative',
    logo: '/logos/netrunners.jpg',
  },
  {
    name: 'Flora Home Appliances',
    role: 'Brand & Digital Campaigns',
    logo: '/logos/flora.png',
  },
  {
    name: 'Happy Palace Group of Schools',
    role: 'Visual Designer Intern',
    logo: '/logos/happypalace.jpg',
  },
  {
    name: 'Houston Aesthetics & Wellness',
    role: 'Social Media Manager',
  },
  {
    name: 'Fusion TV Network',
    role: 'Social Media Manager',
  },
  {
    name: 'Jaroder Walla’s School',
    role: 'Social Media Marketing Manager',
  },
  {
    name: 'WitchVault',
    role: 'Social Media Manager & Graphic Designer',
  },
  {
    name: 'Multiple Clients',
    role: 'Freelance Graphic Designer',
  },
];

export const WORK_TOTALS = [
  {
    count: '500+',
    label: 'Leads Generated (Posh Education & Migration Services)',
  },
  {
    count: '107K+',
    label: 'Facebook Views in One Month',
  },
  {
    count: '8K+',
    label: 'Organic Views in Two Weeks (@dmwithmahrukhh)',
  },
];

export const PROJECTS: ProjectRow[] = [
  {
    href: '/work/posh-education/',
    client: 'Posh Education & Migration Services',
    what: 'UK Study Intake and international admissions lead-generation campaigns across Pakistan, Australia & Sri Lanka.',
    platforms: ['Meta', 'Facebook', 'Instagram'],
    result: '500+',
    unit: 'leads generated',
    asOf: '107K+ monthly views · High conversion efficiency',
  },
  {
    href: '/work/jims-laundry/',
    client: 'Jim’s Laundry Services',
    what: 'Conversion-focused messaging, social creatives, and paid campaigns in Australia.',
    platforms: ['Facebook', 'Meta'],
    result: '10K+',
    unit: 'Facebook views in 1 month',
    asOf: 'Inbound direct messages & customer interest growth',
  },
  {
    href: '/work/netrunners/',
    client: 'The NetRunners',
    what: 'Comprehensive social media management, brand identity design, and short-form video editing for 3 months.',
    platforms: ['Instagram', 'Facebook', 'Meta'],
    result: '3 Months',
    unit: 'social & creative management',
    asOf: 'Tech branding, graphics & video editing',
  },
  {
    href: '/work/dmwithmahrukhh/',
    client: 'DMWITHMAHRUKHH (Personal Project)',
    what: 'Built from zero: organic social media growth, visual identity, and reels strategy from scratch.',
    platforms: ['Instagram'],
    result: '8K+',
    unit: 'organic views in 2 weeks',
    asOf: 'zero paid ads spend (100% organic reach)',
  },
  {
    href: '/work/bathurst-bagel/',
    client: 'Bathurst Bagel',
    what: 'Hospitality social marketing, platform-native reels, and community brand buzz in Hobart, Australia.',
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
    asOf: 'client-approved wellness experience',
  },
];

export const CEOS: CeoCard[] = [
  {
    href: '/work/posh-education/',
    banner: '/work/posh/page_1.jpg',
    photo: '/logos/posh.jpg',
    name: 'Posh Education & Migration',
    role: 'Marketing Manager · Pakistan, Australia, Sri Lanka',
    followers: '500+ Leads Generated',
    impressions: '107K+ Views in One Month',
  },
  {
    href: '/work/jims-laundry/',
    banner: '/work/jims/page_1.jpg',
    photo: '/logos/jims.jpg',
    name: 'Jim’s Laundry Services',
    role: 'Social Media Manager · Australia',
    followers: '10K+ Views in 1 Month',
    impressions: 'Inbound DMs & Customer Interest',
  },
  {
    href: '/work/bathurst-bagel/',
    banner: '/work/bathurst/page_1.jpg',
    photo: '/logos/bathurst.jpg',
    name: 'Bathurst St Bagels',
    role: 'Social Media Manager · Hobart, Australia',
    followers: 'Local Brand Buzz',
    impressions: 'Platform-native reels & creator visits',
  },
  {
    href: '/work/netrunners/',
    banner: '/work/netrunners/page_1.jpg',
    photo: '/logos/netrunners.jpg',
    name: 'The NetRunners',
    role: 'Social Media Manager, Graphic Designer & Video Editor',
    followers: '3 Months Managed',
    impressions: 'Tech Branding, Graphics & Video Editing',
  },
  {
    href: '/#about',
    banner: '/work/posh/page_6.jpg',
    photo: '/logos/happypalace.jpg',
    name: 'Happy Palace Group of Schools',
    role: 'Visual Designer Intern',
    followers: 'Visual Design & Reels',
    impressions: 'Youth-Focused Content & Reel Concepts',
  },
  {
    href: '/#work',
    banner: '/work/flora/page_1.jpg',
    photo: '/logos/flora.png',
    name: 'Flora Home Appliances',
    role: 'Brand & Digital Campaigns',
    followers: 'Home Appliance Campaigns',
    impressions: 'Commercial Visuals & Digital Ads',
  },
  {
    href: '/work/houston-aesthetics/',
    banner: '/work/meta-insights/page_3.jpg',
    photo: '/services/design.svg',
    name: 'Houston Aesthetics & Wellness',
    role: 'Social Media Manager & Graphic Designer',
    followers: 'Luxury Aesthetic',
    impressions: 'Complete Feed Revamp & Visual Direction',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 0,
    num: '1',
    title: 'Research & Discover 🔎',
    description:
      'First, I become a little obsessed with your brand. I explore the business, audience, competitors, objectives and opportunities. Because good ideas begin with understanding what actually matters.',
    img: '/work/meta-insights/page_4.jpg',
    alt: 'Research & Discover step: Audience, competitor and objective auditing',
  },
  {
    step: 1,
    num: '2',
    title: 'Strategize & Plan 🧠',
    description:
      'The overthinking becomes a strategy. Content pillars, creative directions, campaign structures, messaging and calendars. This is where scattered ideas turn into an actual plan.',
    img: '/work/posh/page_4.jpg',
    alt: 'Strategize & Plan step: Content pillars and multi-channel marketing structure',
  },
  {
    step: 2,
    num: '3',
    title: 'Create & Execute 🎬',
    description:
      'Okay, now we make things happen. Graphics, scripts, reels, edits, captions, content scheduling, paid campaigns and website content. From the idea in my head to the post on your feed.',
    img: '/work/bathurst/page_4.jpg',
    alt: 'Create & Execute step: Reel production, graphic design, and Meta campaigns',
  },
  {
    step: 3,
    num: '4',
    title: 'Analyze & Optimize 📊',
    description:
      'Because vibes are great. Data is greater. I look at what’s working, what’s not and what we should do next. Performance analysis helps turn one good campaign into better future decisions.',
    img: '/work/meta-insights/page_8.jpg',
    alt: 'Analyze & Optimize step: Tracking performance, impressions, and iterative scaling',
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
    pageTitle: 'Posh Education & Migration: 500+ Leads & 107K+ Monthly Views | Mahrukh Khan',
    banner: '/work/posh/page_1.jpg',
    photo: '/logos/posh.jpg',
    photoAlt: 'Posh Education & Migration Services',
    client: 'Posh Education & Migration Services',
    role: 'Marketing Manager (October 2025 – Present)',
    title: 'Strategic Execution. 500+ Leads.',
    headlineQuote:
      '“Targeted lead-generation campaigns for international student intakes generated over 500+ verified enquiries and 107K+ views across Pakistan, Australia, and Sri Lanka.”',
    platforms: ['Meta', 'Facebook', 'Instagram'],
    results: [
      { dt: 'leads generated', dd: '500+' },
      { dt: 'monthly views', dd: '107K+' },
      { dt: 'targeted viewers reached', dd: '44,132+' },
      { dt: 'lower CPL vs benchmark', dd: '25%' },
    ],
    context: [
      'UK study intake and international admissions campaigns across Pakistan, Australia, and Sri Lanka.',
      'Active multichannel campaigns: Meta Ads, Reels, Organic Content & Counselling Workflows.',
    ],
    introParagraph:
      'Managing digital marketing operations and brand communication across multiple international markets for Posh Education & Migration Services. The work involves transforming brand communication and digital content into measurable marketing activity through organic and performance-driven paid strategies.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Strategic Messaging:',
            text: 'Crafted conversion-focused copy and hooks speaking directly to prospective students seeking international higher education admissions.',
          },
          {
            bold: 'Audience Refinement:',
            text: 'Narrowed demographic targeting to high-intent academic cohorts across target regions, eliminating wasted ad spend.',
          },
          {
            bold: 'Creative Testing:',
            text: 'Tested visual variants in Meta Ads Manager to rapidly identify high-CTR creative combinations before scaling reach.',
          },
          {
            bold: 'End-to-End Pipeline:',
            text: 'Connected ad leads directly to instantaneous counselor follow-up workflows for maximum enquiry conversion rates.',
          },
        ],
      },
    ],
    whatHappened: [
      'The campaigns established a repeatable, high-converting lead engine for international intakes, generating over 500+ verified student leads and reaching over 107K+ views across international markets.',
      'Achieved a 25% lower cost per lead compared with industry benchmarks in the overseas education and migration sector, proving the power of focused creative strategy.',
    ],
    inside: {
      img: '/work/meta-insights/page_1.jpg',
      alt: 'Posh Education Meta Ads Campaign Performance: 500+ leads, 107K+ views',
      width: 1190,
      height: 1684,
      beats: [
        {
          label: 'The Offer',
          quote: 'UK Study Intake & Visa Counselling',
          text: 'Specific, timely, and outcome-oriented. Prospective students knew exactly what step to take next.',
        },
        {
          label: 'The Targeting',
          quote: 'High-intent academic segments',
          text: 'Eliminated broad curiosity clicks to maximize lead quality and student qualification.',
        },
        {
          label: 'The Execution',
          quote: 'Consistent multi-tier optimization',
          text: 'Every creative decision and ad format had a purpose, delivering over 500+ verified applicant leads.',
        },
      ],
    },
    strip: {
      showNav: true,
      items: [
        {
          zoom: '/work/meta-insights/page_1.jpg',
          alt: 'Meta Ads Manager: Performance receipts and lead generation data',
          cap: 'Meta Ads Manager Performance Receipts',
          width: 1190,
          height: 1684,
        },
        {
          zoom: '/work/meta-insights/page_2.jpg',
          alt: 'Meta Campaign Performance Overview and Impressions',
          cap: 'Meta Campaign Reach & Performance Analysis',
          width: 1190,
          height: 1684,
        },
        {
          zoom: '/work/meta-insights/page_6.jpg',
          alt: 'Audience Demographics and Engagement Insights',
          cap: 'Audience Segmentation & Regional Insights',
          width: 1190,
          height: 1684,
        },
        {
          zoom: '/work/posh/page_2.jpg',
          alt: 'Posh Education UK Study Intake Campaign Post',
          cap: 'UK Study Intake Campaign Creative',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/posh/page_3.jpg',
          alt: 'Posh Education Visa & Study Guidance Post',
          cap: 'Visa Guidance & Academic Counselling Reel Post',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/posh/page_4.jpg',
          alt: 'Posh Education Study Abroad Multi-Slide Creative',
          cap: 'Study Abroad Program Information Carousel',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/posh/page_5.jpg',
          alt: 'Posh Education Global Student Intake Creative',
          cap: 'Global Student Intake Promotional Creative',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/posh/page_7.jpg',
          alt: 'Student Success Stories & Testimonials',
          cap: 'Student Visa Success Story Feature',
          width: 1080,
          height: 1350,
        },
      ],
    },
    ctaHeading: 'Looking for high-impact lead generation?',
    ctaContext: 'Posh Education Campaign',
    next: {
      href: '/work/jims-laundry/',
      cover: '/work/jims/page_1.jpg',
      label: 'Next: Jim’s Laundry Services',
      title: 'Building community engagement and 10K+ views in Australia',
    },
  },
  'netrunners': {
    slug: 'netrunners',
    pageTitle: 'The NetRunners: Social Media, Graphic Design & Video Editing (3 Months) | Mahrukh Khan',
    banner: '/work/netrunners/page_1.jpg',
    photo: '/logos/netrunners.jpg',
    photoAlt: 'The NetRunners',
    client: 'The NetRunners',
    role: 'Social Media Manager, Graphic Designer & Video Editor (3 Months)',
    title: 'Tech Branding, Visual Design & Video Editing',
    headlineQuote:
      '“Managed social media marketing, bespoke graphic design, and platform-native video editing over 3 months for tech brand The NetRunners.”',
    platforms: ['Instagram', 'Facebook', 'Meta'],
    results: [
      { dt: 'management period', dd: '3 Months' },
      { dt: 'creative scope', dd: 'Social & Graphics' },
      { dt: 'video production', dd: 'Video Editing' },
      { dt: 'brand identity', dd: 'Tech & Digital' },
    ],
    context: ['Tech, digital solutions & creative agency.', '3 Months Dedicated Management.'],
    introParagraph:
      'Managed end-to-end social media operations, visual design, and short-form video editing for The NetRunners over 3 months. Developed a sharp, high-contrast cyan and black visual aesthetic that established brand authority, combined with educational carousels and dynamic short-form videos.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Social Media Management:',
            text: 'Planned content calendars, managed publishing workflows, and engaged tech audiences across platforms.',
          },
          {
            bold: 'Graphic Design:',
            text: 'Created eye-catching cyan-and-black branded graphics, promotional ads, and multi-slide carousels explaining complex tech services.',
          },
          {
            bold: 'Video Editing:',
            text: 'Scripted, edited, and formatted high-retention reels with modern pacing, dynamic motion, and on-screen typography.',
          },
          {
            bold: 'Brand Cohesion:',
            text: 'Harmonized all social media touchpoints so every post immediately felt recognizable as The NetRunners.',
          },
        ],
      },
    ],
    whatHappened: [
      'Elevated The NetRunners’ digital feed into a polished, authoritative tech brand presence, generating sustained engagement and positive community feedback.',
    ],
    inside: {
      img: '/work/netrunners/page_2.jpg',
      alt: 'The NetRunners Strategic Value & Creative Showcase',
      width: 1080,
      height: 1350,
      beats: [
        {
          label: 'The Aesthetic',
          quote: 'High-contrast cyan & black tech branding',
          text: 'Crafted a distinctive, modern look that immediately cuts through generic tech feeds.',
        },
        {
          label: 'The Workflow',
          quote: 'Social Strategy + Design + Video Editing',
          text: 'Handled the entire creative pipeline from initial concept to finalized post and video.',
        },
      ],
    },
    strip: {
      showNav: true,
      items: [
        {
          zoom: '/work/netrunners/page_1.jpg',
          alt: 'The NetRunners Kickstart Your Brand Creative',
          cap: 'Brand Kickstart Campaign Asset',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/netrunners/page_2.jpg',
          alt: 'The NetRunners Strategic Value & Why Us Feature',
          cap: 'Strategic Value & Service Carousel',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/netrunners/page_3.jpg',
          alt: 'The NetRunners Digital Service Promotion Graphic',
          cap: 'Service Offering & Growth Feature',
          width: 1080,
          height: 1350,
        },
      ],
    },
    ctaHeading: 'Need social management and video editing for your brand?',
    ctaContext: 'The NetRunners Project',
    next: {
      href: '/work/posh-education/',
      cover: '/work/posh/page_1.jpg',
      label: 'Next: Posh Education & Migration',
      title: 'Strategic Execution. 500+ Leads.',
    },
  },
  'jims-laundry': {
    slug: 'jims-laundry',
    pageTitle: 'Jim’s Laundry Services: 10K+ Facebook Views & Follower Growth in Australia | Mahrukh Khan',
    banner: '/work/jims/page_1.jpg',
    photo: '/logos/jims.jpg',
    photoAlt: 'Jim’s Laundry Services',
    client: 'Jim’s Laundry Services',
    role: 'Social Media Manager (February 2026 – Present)',
    title: 'Making laundry everyone’s business. In a good way.',
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
      img: '/work/jims/page_2.jpg',
      alt: 'Jim’s Laundry Services campaign overview in Australia',
      width: 1080,
      height: 1350,
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
    strip: {
      showNav: true,
      items: [
        {
          zoom: '/work/jims/page_1.jpg',
          alt: 'Jim’s Laundry Services Commercial & Domestic Campaign',
          cap: 'Commercial & Domestic Service Creative',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/jims/page_3.jpg',
          alt: 'Jim’s Laundry Booking & Service Convenience Post',
          cap: 'Service Convenience & Direct Booking Post',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/jims/page_4.jpg',
          alt: 'Jim’s Laundry Brand Promotional Graphic',
          cap: 'Brand Awareness & Customer Promotion Asset',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/jims/page_5.jpg',
          alt: 'Jim’s Laundry Community Engagement Creative',
          cap: 'Local Market Engagement & Lifestyle Graphic',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/jims/page_6.jpg',
          alt: 'Jim’s Laundry Service Feature Post',
          cap: 'Service Quality & Customer Care Feature',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/jims/page_7.jpg',
          alt: 'Jim’s Laundry Customer Feedback Creative',
          cap: 'Customer Satisfaction & Booking Graphic',
          width: 1080,
          height: 1350,
        },
      ],
    },
    ctaHeading: 'Want to scale your local brand presence?',
    ctaContext: 'Jim’s Laundry Services',
    next: {
      href: '/work/dmwithmahrukhh/',
      cover: '/work/bathurst/page_1.jpg',
      label: 'Next: @dmwithmahrukhh',
      title: 'Building an Instagram presence to 8K+ organic views in 2 weeks',
    },
  },
  'bathurst-bagel': {
    slug: 'bathurst-bagel',
    pageTitle: 'Bathurst Bagel: Local Brand Buzz & Creator Marketing in Hobart | Mahrukh Khan',
    banner: '/work/bathurst/page_1.jpg',
    photo: '/logos/bathurst.jpg',
    photoAlt: 'Bathurst Bagel',
    client: 'Bathurst Bagel',
    role: 'Social Media Manager (April 2026 – Present)',
    title: 'Serving looks. And bagels.',
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
    inside: {
      img: '/work/bathurst/page_2.jpg',
      alt: 'Bathurst St Bagels Hobart Creative Launch',
      width: 1080,
      height: 1350,
      beats: [
        {
          label: 'The Vibe',
          quote: 'Warm, mouth-watering, Hobart-local',
          text: 'If the food is good, the content should make you crave it right through the screen.',
        },
        {
          label: 'The Result',
          quote: 'Local creator visits & high engagement',
          text: 'Building authentic word-of-mouth community engagement across Tasmania.',
        },
      ],
    },
    strip: {
      showNav: true,
      items: [
        {
          zoom: '/work/bathurst/page_1.jpg',
          alt: 'Bathurst St Bagels Hobart Creative Launch',
          cap: 'Hobart Bakery Brand Feature Asset',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/bathurst/page_3.jpg',
          alt: 'Bathurst St Bagels Fresh Daily Reel Creative',
          cap: 'Fresh Menu Specials & Daily Flavours',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/bathurst/page_4.jpg',
          alt: 'Bathurst Bagels Customer Buzz & Local Reviews',
          cap: 'Local Customer Reviews & Community Mentions',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/bathurst/page_5.jpg',
          alt: 'Bathurst Bagels Weekend Specials Feature',
          cap: 'Weekend Specials & Customer Favourite Reel',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/bathurst/page_6.jpg',
          alt: 'Morning Coffee & Fresh Bagels Pairing',
          cap: 'Breakfast Pairing & Story Asset',
          width: 1080,
          height: 1350,
        },
        {
          zoom: '/work/bathurst/page_7.jpg',
          alt: 'Behind the Scenes Baking Reel Asset',
          cap: 'Artisan Baking Reel Showcase',
          width: 1080,
          height: 1350,
        },
      ],
    },
    ctaHeading: 'Need creative social marketing for your venue?',
    ctaContext: 'Bathurst Bagel',
    next: {
      href: '/work/netrunners/',
      cover: '/work/netrunners/page_1.jpg',
      label: 'Next: The NetRunners',
      title: 'Tech branding, visual design & video editing',
    },
  },
  'houston-aesthetics': {
    slug: 'houston-aesthetics',
    pageTitle: 'Houston Aesthetics & Wellness: Brand Identity & Feed Revamp | Mahrukh Khan',
    banner: '/work/meta-insights/page_3.jpg',
    photo: '/services/design.svg',
    photoAlt: 'Houston Aesthetics & Wellness',
    client: 'Houston Aesthetics & Wellness',
    role: 'Social Media Manager & Graphics Designer (April 2026 – July 2026)',
    title: 'The glow-up wasn’t just for the clients.',
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
    inside: {
      img: '/work/meta-insights/page_3.jpg',
      alt: 'Creative Design & Brand Identity Direction',
      width: 1190,
      height: 1684,
      beats: [
        {
          label: 'The Aesthetic',
          quote: 'Clean, elevated visual coherence',
          text: 'Every post feels like it belongs to the same high-end brand.',
        },
        {
          label: 'The Workflow',
          quote: 'Streamlined template system',
          text: 'Bespoke templates that allow quick production without sacrificing polish.',
        },
      ],
    },
    strip: {
      showNav: true,
      items: [
        {
          zoom: '/work/meta-insights/page_3.jpg',
          alt: 'Aesthetic & Wellness Content Reach Overview',
          cap: 'Audience Content Reach & Engagement',
          width: 1190,
          height: 1684,
        },
        {
          zoom: '/work/meta-insights/page_4.jpg',
          alt: 'Demographic Insights & Patient Audiences',
          cap: 'Demographic Reach Breakdown',
          width: 1190,
          height: 1684,
        },
      ],
    },
    ctaHeading: 'Want to revamp your brand presence?',
    ctaContext: 'Houston Aesthetics & Wellness',
    next: {
      href: '/work/posh-education/',
      cover: '/work/posh/page_1.jpg',
      label: 'Next: Posh Education',
      title: 'Strategic Execution. 500+ Leads.',
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
    { rank: '1', img: '/work/posh/page_2.jpg', alt: 'Content Strategy Reel: Stop Scrolling', views: '2.4K' },
    { rank: '2', img: '/work/bathurst/page_2.jpg', alt: 'Marketing Insights Reel', views: '1.8K' },
    { rank: '3', img: '/work/meta-insights/page_5.jpg', alt: 'Meta Ads Breakdown Reel', views: '1.5K' },
    { rank: '4', img: '/work/jims/page_2.jpg', alt: 'Brand Identity Design Reel', views: '1.2K' },
    { rank: '5', img: '/work/netrunners/page_1.jpg', alt: 'Social Media Consistency Reel', views: '980' },
    { rank: '6', img: '/work/flora/page_1.jpg', alt: 'SEO Optimization Tips Reel', views: '540' },
  ],
  carousel: [
    { img: '/work/posh/page_1.jpg', alt: 'Content Pillar 1: Strategic Foundations' },
    { img: '/work/bathurst/page_1.jpg', alt: 'Content Pillar 2: High-Retention Reels & Visual Storytelling' },
    { img: '/work/jims/page_1.jpg', alt: 'Content Pillar 3: Consistent Publishing Rhythm' },
    { img: '/work/meta-insights/page_7.jpg', alt: 'Content Pillar 4: A/B Testing & Audience Insights' },
  ],
  strip: [
    { zoom: '/work/posh/page_1.jpg', alt: '@dmwithmahrukhh launch creative', cap: 'Account Built from Scratch', width: 1080, height: 1350 },
    { zoom: '/work/bathurst/page_2.jpg', alt: 'Content Strategy visual', cap: 'Platform-Native Storytelling', width: 1080, height: 1350 },
  ],
};
