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

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  linkedin?: string;
}

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
  socialLinks?: SocialLinks;
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
    img: '/work/dmwithmahrukhh/feed.jpg',
    stat: '15K+ Organic Views in 2 Weeks',
    title: 'Content Strategy & Reels 🎬',
    description:
      'Content pillars, high-retention hooks, reels, captions, carousels, editing, and publishing. The goal? Content that earns attention instead of begging for it.',
  },
  {
    href: '/work/houston-aesthetics/',
    img: '/work/houston/feed_1.jpg',
    stat: '5 Months Managed',
    title: 'Graphic Design & Video Editing 🎨',
    description:
      'Bespoke luxury clinic graphics, promotional flyers, treatment cards, and dynamic video edits that captivate audiences and drive patient bookings.',
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
    role: 'First Youngest Female Gen Z Visual Designer Intern',
    logo: '/logos/happypalace.jpg',
  },
  {
    name: 'Houston Wellness & Aesthetics',
    role: 'Graphic Designer & Video Editor (5 Months)',
    logo: '/logos/houston.jpg',
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
    count: '15K+',
    label: 'Organic Views in Two Weeks (@dmwithmahrukhh)',
  },
];

export const PROJECTS: ProjectRow[] = [
  {
    href: '/work/posh-education/',
    client: 'Posh Education & Migration Services',
    what: 'UK Study Intake and international admissions lead-generation campaigns across Pakistan, Australia & Sri Lanka.',
    platforms: ['Meta', 'Facebook', 'Instagram', 'LinkedIn'],
    result: '500+',
    unit: 'leads generated',
    asOf: '107K+ monthly views · 102,890+ targeted reach',
  },
  {
    href: '/work/jims-laundry/',
    client: 'Jim’s Laundry Services',
    what: 'Conversion-focused messaging, social creatives, TikTok, and Meta paid campaigns in Australia.',
    platforms: ['Facebook', 'Instagram', 'TikTok', 'Meta'],
    result: '107K+',
    unit: 'monthly views in Australia',
    asOf: 'Inbound direct messages & customer booking growth',
  },
  {
    href: '/work/netrunners/',
    client: 'The NetRunners',
    what: 'Comprehensive social media management, brand identity design, short-form video editing, and LinkedIn for 3 months.',
    platforms: ['Instagram', 'Facebook', 'LinkedIn', 'Meta'],
    result: '3 Months',
    unit: 'social & creative management',
    asOf: 'Tech branding, graphics & video editing',
  },
  {
    href: '/work/dmwithmahrukhh/',
    client: 'DMWITHMAHRUKHH (Personal Project)',
    what: 'Built from zero: 100% organic social media growth, visual identity, and reels strategy from scratch.',
    platforms: ['Instagram'],
    result: '15K+',
    unit: 'organic views in 2 weeks',
    asOf: '100% organic algorithmic reach',
  },
  {
    href: '/work/bathurst-bagel/',
    client: 'Bathurst St Bagels',
    what: 'Hospitality social marketing, platform-native reels, TikTok, and community brand buzz in Hobart, Australia.',
    platforms: ['Instagram', 'Facebook', 'TikTok'],
    result: 'Local Buzz',
    unit: 'creator visits & customer reviews',
    asOf: 'Hobart, Australia',
  },
  {
    href: '/work/houston-aesthetics/',
    client: 'Houston Wellness & Aesthetics',
    what: '5 months managing trendy graphic design, luxury aesthetic treatment promos, and dynamic video edits.',
    platforms: ['Instagram'],
    result: '5 Months',
    unit: 'graphics & video editing',
    asOf: 'High client engagement & aesthetic authority',
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
    socialLinks: {
      instagram: 'https://www.instagram.com/posheducationconsultant?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/Posheducation',
    },
  },
  {
    href: '/work/jims-laundry/',
    banner: '/work/jims/page_1.jpg',
    photo: '/logos/jims.jpg',
    name: 'Jim’s Laundry Services',
    role: 'Social Media Manager (IG, FB, TikTok) · Australia',
    followers: '107K+ Views in 1 Month',
    impressions: 'Inbound DMs & Customer Interest',
    socialLinks: {
      instagram: 'https://www.instagram.com/jimslaundrymornington?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/JimsLaundryServicesMornington',
    },
  },
  {
    href: '/work/bathurst-bagel/',
    banner: '/work/bathurst/page_1.jpg',
    photo: '/logos/bathurst.jpg',
    name: 'Bathurst St Bagels',
    role: 'Social Media Manager (IG, FB, TikTok) · Hobart, Australia',
    followers: 'Local Brand Buzz',
    impressions: 'Platform-native reels & creator visits',
    socialLinks: {
      instagram: 'https://www.instagram.com/bathurststbagels?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/people/Bathurst-St-Bagels/61556600047136/',
    },
  },
  {
    href: '/work/netrunners/',
    banner: '/work/netrunners/page_1.jpg',
    photo: '/logos/netrunners.jpg',
    name: 'The NetRunners',
    role: 'Social Media, Graphics, Video Editing & LinkedIn (3 Months)',
    followers: '3 Months Managed',
    impressions: 'Tech Branding, Graphics & Video Editing',
    socialLinks: {
      instagram: 'https://www.instagram.com/the.netrunners?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/TheNetRunnersPvtLtd',
    },
  },
  {
    href: '/#about',
    banner: '/work/posh/page_6.jpg',
    photo: '/logos/happypalace.jpg',
    name: 'Happy Palace Group of Schools',
    role: 'First Youngest Female Gen Z Visual Designer Intern (2 Months)',
    followers: 'Scroll-Stopping Visuals',
    impressions: 'Awarded Certificate of Appreciation by MDs',
    socialLinks: {
      instagram: 'https://www.instagram.com/hpgs_official?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/happypalacegroup',
    },
  },
  {
    href: '/#work',
    banner: '/work/flora/page_1.jpg',
    photo: '/logos/flora.png',
    name: 'Flora Home Appliances',
    role: 'Brand & Digital Campaigns',
    followers: 'Home Appliance Campaigns',
    impressions: 'Commercial Visuals & Digital Ads',
    socialLinks: {
      instagram: 'https://www.instagram.com/flora___products?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/florahomeappliances',
    },
  },
  {
    href: '/work/houston-aesthetics/',
    banner: '/work/houston/banner.jpg',
    photo: '/logos/houston.jpg',
    name: 'Houston Wellness & Aesthetics',
    role: 'Graphic Designer & Video Editor (5 Months)',
    followers: '5 Months Managed',
    impressions: 'Trendy Graphics & Video Editing',
    socialLinks: {
      instagram: 'https://www.instagram.com/houstonwellnessaesthetics/',
      facebook: 'https://www.facebook.com/houstonwellnessandaesthetics',
    },
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
  socialLinks?: SocialLinks;
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
    platforms: ['Meta', 'Facebook', 'Instagram', 'LinkedIn'],
    socialLinks: {
      instagram: 'https://www.instagram.com/posheducationconsultant?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/Posheducation',
    },
    results: [
      { dt: 'leads generated', dd: '500+' },
      { dt: 'monthly views', dd: '107K+' },
      { dt: 'targeted viewers reached', dd: '102,890+' },
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
    platforms: ['Instagram', 'Facebook', 'LinkedIn', 'Meta'],
    socialLinks: {
      instagram: 'https://www.instagram.com/the.netrunners?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/TheNetRunnersPvtLtd',
    },
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
    pageTitle: 'Jim’s Laundry Services: 107K+ Monthly Views & Follower Growth in Australia | Mahrukh Khan',
    banner: '/work/jims/page_1.jpg',
    photo: '/logos/jims.jpg',
    photoAlt: 'Jim’s Laundry Services',
    client: 'Jim’s Laundry Services',
    role: 'Social Media Manager (February 2026 – Present)',
    title: 'Making laundry everyone’s business. In a good way.',
    headlineQuote:
      '“107K+ monthly views with increased inbound direct messages and customer interest across Australia.”',
    platforms: ['Facebook', 'Instagram', 'TikTok', 'Meta'],
    socialLinks: {
      instagram: 'https://www.instagram.com/jimslaundrymornington?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/JimsLaundryServicesMornington',
    },
    results: [
      { dt: 'monthly views in Australia', dd: '107K+' },
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
      title: 'Building an Instagram presence to 15K+ organic views in 2 weeks',
    },
  },
  'bathurst-bagel': {
    slug: 'bathurst-bagel',
    pageTitle: 'Bathurst St Bagels: Local Brand Buzz, Reels & TikTok in Hobart | Mahrukh Khan',
    banner: '/work/bathurst/page_1.jpg',
    photo: '/logos/bathurst.jpg',
    photoAlt: 'Bathurst St Bagels',
    client: 'Bathurst St Bagels',
    role: 'Social Media Manager (April 2026 – Present)',
    title: 'Serving looks. And bagels.',
    headlineQuote:
      '“Creating platform-native reels, TikToks, graphics, and community-focused campaigns to strengthen brand visibility in Hobart, Australia.”',
    platforms: ['Instagram', 'Facebook', 'TikTok'],
    socialLinks: {
      instagram: 'https://www.instagram.com/bathurststbagels?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw%3D%3D',
      facebook: 'https://www.facebook.com/people/Bathurst-St-Bagels/61556600047136/',
    },
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
    pageTitle: 'Houston Wellness & Aesthetics: Trendy Graphics & Video Editing (5 Months) | Mahrukh Khan',
    banner: '/work/houston/banner.jpg',
    photo: '/logos/houston.jpg',
    photoAlt: 'Houston Wellness & Aesthetics',
    client: 'Houston Wellness & Aesthetics',
    role: 'Graphic Designer & Video Editor (5 Months)',
    title: 'Trendy Graphics, Video Editing & Visual Feed Direction',
    headlineQuote:
      '“Managed graphic design and video editing for 5 months, producing trendy, high-engagement promotional content and aesthetic visual direction for medical aesthetics and wellness services.”',
    platforms: ['Instagram'],
    socialLinks: {
      instagram: 'https://www.instagram.com/houstonwellnessaesthetics/',
      facebook: 'https://www.facebook.com/houstonwellnessandaesthetics',
    },
    results: [
      { dt: 'engagement period', dd: '5 Months' },
      { dt: 'creative scope', dd: 'Graphics & Video' },
      { dt: 'audience response', dd: 'High Engagement' },
      { dt: 'feed direction', dd: 'Trendy & Elevated' },
    ],
    context: ['Medical aesthetics, skincare & wellness.', '5 Months Dedicated Graphic Design & Video Editing.'],
    introParagraph:
      'Collaborated with Houston Wellness & Aesthetics for 5 months as their dedicated Graphic Designer and Video Editor. Created all trendy social media graphics, treatment highlights, promotional flyers, and engaging video edits that generated outstanding audience response and elevated the brand’s luxury clinic aesthetics.',
    whatIDid: [
      {
        bullets: [
          {
            bold: 'Trendy Graphic Design:',
            text: 'Designed high-converting promotional posts, aesthetic treatment cards (e.g., Diamond Glow Facial, Botox timelines), and event flyers that resonated with skincare and wellness clients.',
          },
          {
            bold: 'Video Editing & Reels:',
            text: 'Produced dynamic, paced short-form video edits and event recaps showcasing clinic experiences and aesthetic procedures.',
          },
          {
            bold: 'Visual Identity & Cohesion:',
            text: 'Harmonized typography, gold-accented luxury palettes, and clear informational hierarchy across all feed graphics.',
          },
          {
            bold: 'Engagement-Focused Creatives:',
            text: 'Formatted graphics for maximum saves, shares, and direct consultation inquiries from prospective clients.',
          },
        ],
      },
    ],
    whatHappened: [
      'The trendy graphics and video edits received great response and praise from clients, creating a polished, trustworthy, and luxury visual standard that boosted patient inquiries and appointments.',
    ],
    inside: {
      img: '/work/houston/feed_1.jpg',
      alt: 'Houston Wellness & Aesthetics: Trendy medical aesthetics and treatment feed graphics',
      width: 958,
      height: 520,
      beats: [
        {
          label: 'The Aesthetic',
          quote: 'Gold Luxury & Clinical Elegance',
          text: 'Balanced medical authority with chic, aspirational aesthetic design that feels inviting.',
        },
        {
          label: 'The Content',
          quote: 'Trendy treatment education & event recaps',
          text: 'Engaging graphics explaining procedures like Botox timelines and Diamond Glow Facials.',
        },
        {
          label: 'The Response',
          quote: 'Outstanding audience feedback & bookings',
          text: 'Crafted content that drove patient trust and direct message appointment bookings.',
        },
      ],
    },
    strip: {
      showNav: true,
      items: [
        {
          zoom: '/work/houston/feed_1.jpg',
          alt: 'Houston Wellness & Aesthetics Diamond Glow Facial & Treatment Feature',
          cap: 'Aesthetic Treatment Features & Clinical Polish',
          width: 958,
          height: 520,
        },
        {
          zoom: '/work/houston/feed_2.jpg',
          alt: 'Houston Wellness & Aesthetics Botox Guide & Promotional Event Flyer',
          cap: 'Educational Botox Timeline & Event Flyers',
          width: 958,
          height: 520,
        },
        {
          zoom: '/work/houston/feed_3.jpg',
          alt: 'Houston Wellness & Aesthetics Clinic Experience & Staff Features',
          cap: 'Clinic Experience & In-Person Event Recaps',
          width: 958,
          height: 520,
        },
        {
          zoom: '/work/houston/feed_4.jpg',
          alt: 'Houston Wellness & Aesthetics Full Grid View & Cohesive Feed',
          cap: 'Curated Social Media Feed & Trendy Aesthetic Grid',
          width: 958,
          height: 520,
        },
        {
          zoom: '/work/houston/banner.jpg',
          alt: 'Houston Wellness & Aesthetics Official Profile Header',
          cap: 'Official Profile & Brand Presence',
          width: 958,
          height: 520,
        },
      ],
    },
    ctaHeading: 'Need trendy graphics and video editing for your brand?',
    ctaContext: 'Houston Wellness & Aesthetics Project',
    next: {
      href: '/work/posh-education/',
      cover: '/work/posh/page_1.jpg',
      label: 'Next: Posh Education & Migration',
      title: 'Strategic Execution. 500+ Leads & 107K+ Views.',
    },
  },
};

export const DMWITHMAHRUKHH_DATA = {
  pageTitle: '@dmwithmahrukhh: 15K+ Organic Views in Two Weeks from Scratch | Mahrukh Khan',
  viewsPerDay: {
    title: 'Organic views per day',
    total: '15,240',
    totalUnit: 'views',
    unit: 'views',
    source: 'Instagram Insights, 14-day launch period. 100% organic.',
    ariaLabel: 'Organic views per day: 15,240 views over 14 days, peaking at 2,680 views',
    peakText: '2,680 peak views',
    yTicks: [
      { val: 0, label: '0' },
      { val: 750, label: '750' },
      { val: 1500, label: '1.5K' },
      { val: 2250, label: '2.2K' },
      { val: 3000, label: '3K' },
    ],
    yMax: 3000,
    xTicks: [
      { idx: 0, label: 'Day 1', anchor: 'start' as const },
      { idx: 6, label: 'Day 7', anchor: 'middle' as const },
      { idx: 13, label: 'Day 14', anchor: 'end' as const },
    ],
    values: [180, 340, 460, 720, 840, 1340, 2680, 1420, 1060, 1140, 1280, 1180, 1100, 1500],
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
    { rank: '1', img: '/work/dmwithmahrukhh/feed.jpg', alt: '@dmwithmahrukhh High-Retention Reels & Viral Hooks', views: '5.2K' },
    { rank: '2', img: '/work/dmwithmahrukhh/profile.png', alt: '@dmwithmahrukhh Organic Account Launch Strategy', views: '3.8K' },
    { rank: '3', img: '/work/dmwithmahrukhh/logo.jpg', alt: 'Visual Identity & Branding Concept', views: '2.9K' },
    { rank: '4', img: '/work/posh/page_2.jpg', alt: 'Content Pillars & Hook Writing Breakdown', views: '2.1K' },
    { rank: '5', img: '/work/bathurst/page_2.jpg', alt: 'Audience Research & Growth Mechanics', views: '1.2K' },
  ],
  carousel: [
    { img: '/work/dmwithmahrukhh/feed.jpg', alt: 'Content Pillar 1: High-Retention Reels & Visual Storytelling' },
    { img: '/work/dmwithmahrukhh/profile.png', alt: 'Content Pillar 2: Distinct Brand Identity & Aesthetics' },
    { img: '/work/posh/page_1.jpg', alt: 'Content Pillar 3: Consistent Publishing Rhythm' },
    { img: '/work/meta-insights/page_7.jpg', alt: 'Content Pillar 4: A/B Testing & Audience Insights' },
  ],
  strip: [
    { zoom: '/work/dmwithmahrukhh/feed.jpg', alt: '@dmwithmahrukhh Instagram Feed & Aesthetic Reels Grid', cap: 'Curated Reels Grid & Aesthetic Posts', width: 958, height: 520 },
    { zoom: '/work/dmwithmahrukhh/profile.png', alt: '@dmwithmahrukhh Instagram Profile & Launch Bio', cap: 'Account Built from Scratch (100% Organic)', width: 958, height: 520 },
    { zoom: '/work/dmwithmahrukhh/logo.jpg', alt: '@dmwithmahrukhh Circular Logo & Brand Mark', cap: 'Platform-Native Brand Identity & Aesthetics', width: 500, height: 500 },
  ],
};
