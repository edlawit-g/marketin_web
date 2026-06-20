import { ServiceCategory, Project, TeamMember, Testimonial } from "./types";

export const COMPANY_STATS = [
  { value: "100+", label: "Projects Completed", description: "Successfully launched websites, branding projects, and digital campaigns across East Africa." },
  { value: "50+", label: "Active Clients", description: "Retained partnerships with leading Ethiopian companies, startups, and international NGOs." },
  { value: "15", label: "Team Members", description: "In-house creative directors, experienced web engineers, SEO specialists, and content producers." },
  { value: "3+", label: "Years Experience", description: "Driving innovative digital transformation in Ethiopia since our founding in early 2023." },
  { value: "95%", label: "Client Satisfaction", description: "Measured by our commitment to transparent communication and verifiable data-driven outcomes." }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Digital Team",
    description: "Our diverse roster combines deep localized business insights with global visual standards to craft digital experiences that resonate locally and expand globally.",
    iconName: "Users"
  },
  {
    title: "Creative & Modern Designs",
    description: "We step away from generic mockups. Every campaign layout, branding scheme, and website architecture is custom-molded to showcase unique market benefits.",
    iconName: "Sparkles"
  },
  {
    title: "Affordable Pricing",
    description: "Premium shouldn't mean exclusive. We engineer scalable budget frameworks tailored to the financial landscape of fast-growing Ethiopian SMEs and brands.",
    iconName: "TrendingUp"
  },
  {
    title: "Fast Project Delivery",
    description: "Using structured Agile processes, we respect your launch timelines. Quick product mockups and swift code deployment keep you ahead of competitors.",
    iconName: "Zap"
  },
  {
    title: "Data-Driven Marketing Strategies",
    description: "We don't guess. We rely on granular user feedback loops, A/B ad testing, and real analytics to guide marketing budgets towards proven conversions.",
    iconName: "BarChart3"
  },
  {
    title: "Ongoing Support & Consultation",
    description: "We stay in your corner post-launch. From custom SEO audits to systematic system patches and campaign reviews, we believe in lasting partnerships.",
    iconName: "HeartHandshake"
  }
];

export const CORE_VALUES = [
  {
    title: "Innovation",
    description: "Pioneering the next tier of modern web standards and semantic optimization techniques suited for local internet environments.",
    iconName: "Lightbulb"
  },
  {
    title: "Creativity",
    description: "Defying the conventional rules of design to craft stories, visuals, and copy that demand undivided focus.",
    iconName: "Palette"
  },
  {
    title: "Transparency",
    description: "Full visibility in our campaign metrics, development pipelines, and structural analytics reports.",
    iconName: "Eye"
  },
  {
    title: "Excellence",
    description: "Exquisite attention to pixel-perfection, clean semantic code, high loading speeds, and modern visual typography.",
    iconName: "Award"
  },
  {
    title: "Customer Success",
    description: "Aligning our digital actions to deliver measurable growth, high click-through rates, and increased transactional value.",
    iconName: "Target"
  },
  {
    title: "Continuous Learning",
    description: "Constantly researching emerging trends, AI acceleration, and local algorithmic changes to stay dominant.",
    iconName: "GraduationCap"
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    iconName: "Megaphone",
    description: "Data-backed outreach and performance marketing designed to elevate brand authority and maximize conversion rates.",
    items: [
      {
        id: "smm",
        title: "Social Media Marketing",
        description: "Designing end-to-end social media schedules that turn casual followers into brand evangelists across Facebook, Telegram, and TikTok.",
        features: ["Social voice strategy", "Custom graphics generation", "Community engagement loops", "Interactive calendar management"]
      },
      {
        id: "fb-ads",
        title: "Facebook & Instagram Ads",
        description: "Optimized ad budgets, custom segment targeting, and rapid creative iteration to drive direct sales or qualified leads.",
        features: ["Pixel & conversion API setup", "A/B creative testing", "Retargeting funnels", "Weekly ROI reporting"]
      },
      {
        id: "google-ads",
        title: "Google Ads Management",
        description: "Securing higher search engine text placements and responsive display network banners targetting high-intent query flows.",
        features: ["Keyword intent research", "Performance Max campaigns", "Ad copy alignment", "Negative keywords optimization"]
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        description: "Segmented email cascades to nurture existing customers, launch new services, and automate drip pipelines.",
        features: ["Responsive template design", "CRM tool synchronization", "User action drip flows", "Spam filter pre-compliance"]
      },
      {
        id: "influencer",
        title: "Influencer Marketing",
        description: "Curating campaigns with popular local creators to build localized trust and spark authentic community conversations about your products.",
        features: ["Creator vetting & match-ups", "Script & timeline supervision", "Conversion link tracking", "Post-campaign metrics breakdown"]
      }
    ]
  },
  {
    id: "web-development",
    title: "Website Development",
    iconName: "Code2",
    description: "Blazing-fast responsive websites built with secure code structures, gorgeous visual transitions, and intuitive user experiences.",
    items: [
      {
        id: "company-profile",
        title: "Company Profile Websites",
        description: "Interactive premium digital hubs designed to establish immediate market trust and detail core services with pristine visual pacing.",
        features: ["Interactive navigation", "Clean visual rhythm", "Integrated contact systems", "Complete search engine metadata setup"]
      },
      {
        id: "ecommerce",
        title: "E-Commerce Websites",
        description: "Robust shopping solutions optimized for swift customer browsing, localized cart workflows, and safe checkout configurations.",
        features: ["Frictionless catalog browse", "Ethiopian payment gateway readiness", "Inventory tracking panels", "Responsive visual checklists"]
      },
      {
        id: "landing-page",
        title: "Landing Pages",
        description: "Single-view high-conversion lead magnets matching targeted PPC marketing campaigns with unified headlines.",
        features: ["Above-the-fold value hooks", "Clear call-to-actions", "Optimized mobile scroll", "Lightning fast core-web vitals"]
      },
      {
        id: "portfolio-web",
        title: "Portfolio Websites",
        description: "Stunning, visual-first presentation platforms for architects, graphic designers, photographers, and high-end consultancies.",
        features: ["High-definition image lazy loading", "Flexible filtering mechanisms", "Subtle scroll animation effects", "Downloadable resume/deck integrations"]
      },
      {
        id: "maintenance",
        title: "Website Maintenance",
        description: "Ongoing framework updates, plugin management, visual design improvements, and performance optimization checks.",
        features: ["Weekly file system backups", "Security patches deployment", "Content updates on-demand", "SSL renewal monitoring"]
      }
    ]
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    iconName: "Palette",
    description: "Crafting iconic visual representations and style guidelines that clearly articulate your brand's unique message.",
    items: [
      {
        id: "logo-design",
        title: "Logo Design",
        description: "Timeless vector marks designed for clear visual performance across small mobile app interfaces and large outdoor billboards.",
        features: ["Deep competitive analysis", "Original hand-drawn concepts", "Precise mathematical vector formats", "Black / white usability testing"]
      },
      {
        id: "identity",
        title: "Brand Identity Design",
        description: "Comprehensive visual documentation including custom palettes, typography rules, packaging suggestions, and presentation guidelines.",
        features: ["Official brand style manuals", "Uniform employee business cards", "Social profile layout frameworks", "Typography pairing guidelines"]
      },
      {
        id: "marketing-materials",
        title: "Marketing Materials",
        description: "Visually cohesive digital banners, print brochures, flyer templates, rollups, and corporate presentation packages.",
        features: ["Consistent design language", "Print-ready high-dpi formats", "Dynamic digital PDF setups", "Modern aesthetic spacing"]
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        description: "Interactive digital application mockups mapping customer logic and beautiful layout interfaces before code begins.",
        features: ["User journey structural grids", "Interactive Figma wireframes", "Realistic interactive click-prototypes", "Accessibility compliance audits"]
      }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    iconName: "Camera",
    description: "Captivating visual assets and persuasive written copy that command immediate engagement on modern digital channels.",
    items: [
      {
        id: "social-content",
        title: "Social Media Content",
        description: "Bespoke daily graphic layouts, conversational copy, and interactive polls that grow natural reach.",
        features: ["Stave-off scroll imagery", "Trendy visual formats", "Brand voice coordination", "Community-friendly wording"]
      },
      {
        id: "video-prod",
        title: "Video Production",
        description: "High-retention social reels, commercials, and corporate explainer videos optimized for standard mobile screen ratios.",
        features: ["Script drafting & storyboarding", "Professional 4k cameras & audio", "Slick transitions & graphics editing", "Captioning & subtitle injection"]
      },
      {
        id: "photography",
        title: "Photography",
        description: "Stunning advertising shots, executive portraits, and lifestyle captures showcasing your actual workshop and office environments.",
        features: ["Professional workspace lights", "High-fidelity digital edit", "Commercial photo permission prep", "Clean transparent background options"]
      },
      {
        id: "copywriting",
        title: "Copywriting",
        description: "Sales copy and detailed blog articles structured to encourage action while complying with optimal indexing structures.",
        features: ["SEO semantic keyword tuning", "High-interest headlines draft", "Compelling call-to-actions", "Clear, zero-fluff storytelling"]
      }
    ]
  },
  {
    id: "seo-services",
    title: "SEO Services",
    iconName: "SearchCode",
    description: "Improving search terms and restructuring platform coding to achieve higher positions within primary local query results.",
    items: [
      {
        id: "onpage-seo",
        title: "On-Page SEO",
        description: "Re-tuning title hierarchies, image alt tags, structural schema marks, and keyword density for key pages.",
        features: ["Sitemap & robots.txt optimizations", "Search Engine Schema JSON-LD", "Semantic keyword mapping", "Optimized content restructuring"]
      },
      {
        id: "tech-seo",
        title: "Technical SEO",
        description: "Maximizing load timing across slow mobile signals, restructuring server redirects, and repairing crawl path anomalies.",
        features: ["Mobile render compatibility", "CSS/JS bundle shrinkage", "Core Web Vitals scoring", "Internal link structure mapping"]
      },
      {
        id: "local-seo",
        title: "Local SEO",
        description: "Registering Google Maps directions and localized directories to capture Addis Ababa clients searching near you.",
        features: ["Google Business Profile setup", "Ethiopian context localized citations", "Local search intent targeting", "Customer reviews reply guidelines"]
      },
      {
        id: "seo-audits",
        title: "SEO Audits",
        description: "Deep analytics diagnostics evaluating your competitors, content gaps, backlinks, and potential index blockages.",
        features: ["Detailed crawl analysis metrics", "Crawl block identifiers", "Backlink profile evaluation", "Action-first prioritizing list"]
      }
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Awash Coffee Rebrand & Digital Gateway",
    category: "Branding Projects",
    description: "A complete visual modernization for an artisanal Ethiopian coffee exporter, unifying their visual style and launching a multilingual website.",
    challenge: "Awash wanted to capture high-end European rosters while keeping their rich Ethiopian origin story alive in a saturated international market.",
    solution: "We designed a logo utilizing subtle golden geometric curves representing traditional Ethiopian clay pots (Jebena), paired with Burgundy guidelines. We then built a responsive story-driven portal with smooth interactive showcases.",
    results: "38% increase in wholesale export leads within 90 days. Average session time on the website rose to 4.2 minutes, with high engagement on their farm sourcing map.",
    client: "Awash Specialty Coffee",
    year: "2024",
    image: "/src/assets/images/branding_mockup_1781936335968.jpg"
  },
  {
    id: "proj2",
    title: "Adisa Financial Analytics Dashboard",
    category: "Website Development",
    description: "High-fidelity UX design and frontend architecture for a localized digital bookkeeping platform tailored to East African mobile money integrations.",
    challenge: "The user database required highly complex ledger spreadsheets which usually looked cluttered and slow on standard local mobile devices.",
    solution: "We designed a lightweight dashboard framework with collapsible typography, custom curved gold-yellow trends, and burgundy alerts. Built completely with optimized state-driven rendering.",
    results: "98.7% mobile crash reduction rate under weak bandwidths. 4.8/5 general rating from our initial focus test cohort of 200 Addis Ababa small retailers.",
    client: "Adisa Ledger Solutions",
    year: "2023",
    image: "/src/assets/images/website_preview_1781936350834.jpg"
  },
  {
    id: "proj3",
    title: "EcoForest East Africa Social Surge",
    category: "Social Media Campaigns",
    description: "An impactful localized environment campaign mobilizing Addis Ababa youth to participate in national tree planting drives across community spaces.",
    challenge: "Traditional climate postings felt overly distant. The client needed high local viral potential and easy, actionable volunteering guidelines.",
    solution: "We designed interactive TikTok and Telegram sticker campaigns highlighting Ethiopian wildlife with high-saturation animations, paired with simple localized infographics.",
    results: "1.2 Million impressions across Telegram channels. Over 15,000 active students registered to volunteer using our simplified interactive Google Maps pin drops database.",
    client: "EcoForest Conservation Group",
    year: "2024",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "proj4",
    title: "Zoya Fashion UI/UX Concept",
    category: "UI/UX Projects",
    description: "A gorgeous, minimalist mobile app prototype mapping modern retail workflows, traditional Ethiopian Habesha design patterns, and simple user checkpoints.",
    challenge: "Capturing the tactile richness of traditional Ethiopian woven fabrics and details in a flat, cold digital layout.",
    solution: "We engineered custom close-up product sliders, an editorial layout font pairing, and subtle golden highlights that showcase garment textures with luxury-tier spacing.",
    results: "A complete mobile app wireframe manual, containing 45 high-fidelity screens. The prototype successfully raised seed investment round funding from global venture partners.",
    client: "Zoya Luxury Habesha Wear",
    year: "2024",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "proj5",
    title: "Sorena Logistics Marketing Pipeline",
    category: "Marketing Campaigns",
    description: "An integrated B2B lead generation pipeline targetting supply chain managers importing raw production resources through Djibouti routes.",
    challenge: "Traditional logistics marketing is dry. Finding active operations directors required surgical precision rather than raw generic banners.",
    solution: "We designed highly targeted LinkedIn advertising creatives paired with a responsive custom landing page calculator showcasing demurrage savings instantly.",
    results: "Generated 64 verified enterprise quotes. The cost per lead was optimized down by 42% compared to their legacy print agency campaigns.",
    client: "Sorena Cargo Forwarding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team1",
    name: "Yohannes Siltawi",
    role: "CEO & Founder",
    department: "Executive Strategy",
    bio: "Visionary industry leader with 8+ years guiding modern digital marketing structures. Yohannes heads business development and regional strategy, ensuring Siltawi spearheads high-tier technological growth in East Africa.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "yohannes@siltawi.com"
    }
  },
  {
    id: "team2",
    name: "Eden Tesfaye",
    role: "Marketing Director & Partner",
    department: "Marketing Management",
    bio: "Analytical campaign specialist with dynamic skills overseeing conversion APIs and ad accounts placement. Eden supervises our full digital marketing sector, driving client success and target ROI.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      instagram: "#",
      email: "eden@siltawi.com"
    }
  },
  {
    id: "team3",
    name: "Bekele Haile",
    role: "Lead Systems Engineer",
    department: "Web Development Team",
    bio: "Exquisite software architect specializing in lightweight backend routes, React components, and secure databases. Bekele ensures our developed platforms maintain phenomenal page speeds under standard local environments.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "team4",
    name: "Semira Kemal",
    role: "Senior Visual Designer",
    department: "Graphic Design Team",
    bio: "Award-winning creative visual artist dedicated to original typography schemes and editorial branding details. Semira shapes beautiful logos, packaging, and high-converting UI layouts.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: "team5",
    name: "Amanuel Girma",
    role: "Video & Copy Producer",
    department: "Content Creation Team",
    bio: "Talented visual narrator focused on scriptwriting, photography, and high-retention video reels. Amanuel creates capturing digital storylines that prompt immediate viral engagement and shares.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    socials: {
      instagram: "#",
      email: "amanuel@siltawi.com"
    }
  },
  {
    id: "team6",
    name: "Selamawit Demisse",
    role: "Senior SEO Analyst",
    department: "SEO Specialists",
    bio: "Meticulous on-page optimizer specializing in Google Local Business listings, semantic markup configurations, and technical indexing troubleshooting to elevate query positioning.",
    avatar: "https://images.unsplash.com/photo-1534751516642-a131ffd103fd?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test1",
    quote: "Siltawi helped us increase our online specialty coffee export inquiries by 200% within six months of launching our rebrand. Their attention to traditional culture inside luxury packaging is superb.",
    author: "Dawit Wolde",
    role: "Founder & Director",
    company: "Awash Specialty Coffee",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test2",
    quote: "Their incredible website design and technical SEO services transformed our retail brand presence in Addis Ababa. Fast, responsive, and truly transparent about digital analytics.",
    author: "Martha Kidane",
    role: "Startup Founder",
    company: "Zoya Luxe Wear",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test3",
    quote: "The Adisa Ledger bookkeeping systems they built run seamlessly under unstable 3G signals in remote areas. We were blown away by their Agile speed and data-first architecture.",
    author: "Michael Gebre",
    role: "Chief Engineer",
    company: "Adisa Systems",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test4",
    quote: "We achieved first place ranking for three of our biggest logistics keywords within our target audience. Siltawi's SEO and LinkedIn ads team brought us verified enterprise accounts.",
    author: "Tewodros Assefa",
    role: "General Operations Director",
    company: "Sorena Cargo Forwarding",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];
