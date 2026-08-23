export interface WorkExperience {
  id: string;
  company: string;
  companyAr: string;
  role: string;
  roleAr: string;
  period: string;
  periodAr: string;
  location: string;
  locationAr: string;
  type: 'In-House' | 'Freelance / Enterprise Consultant';
  typeAr: 'دوام كامل' | 'مستقل / استشاري مؤسسات';
  summary: string;
  summaryAr: string;
  deliverables: string[];
  deliverablesAr: string[];
  techTags: string[];
  highlightSystem?: string;
  highlightSystemAr?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  categoryAr: string;
  skills: {
    name: string;
    level: string;
    levelPercentage: number;
    iconName: string;
  }[];
}

export const workExperienceData: WorkExperience[] = [
  {
    id: "tareeq-al-ibtikar",
    company: "طريق الابتكار (Tareeq Al-Ibtikar)",
    companyAr: "شركة طريق الابتكار للتجارة والتسويق",
    role: "Software Developer — qafelh.com",
    roleAr: "مطور برمجيات منصة قافلة للتجارة الإلكترونية",
    period: "2024 – Present",
    periodAr: "2024 – حتى الآن",
    location: "Sana'a, Yemen",
    locationAr: "صنعاء، اليمن",
    type: "In-House",
    typeAr: "دوام كامل",
    summary: "In-house lead developer for the company's official e-commerce platform qafelh.com.",
    summaryAr: "المطور الرئيسي الداخلي لمنصة التجارة الإلكترونية الرسمية للشركة qafelh.com.",
    deliverables: [
      "Engineered high-level dynamic product filtering and search engine supporting search by image, voice, and multi-language support.",
      "Built 'Fazza' — an AI conversational shopping assistant that guides customers in ordering, comparing items, and choosing health products.",
      "Managed real-time category filter rule controls through an intuitive admin dashboard.",
      "Optimized e-commerce frontend rendering performance and mobile browser shopping cart experience."
    ],
    deliverablesAr: [
      "تطوير نظام فلترة وبحث متقدم عن المنتجات يدعم البحث بالصور والبصمة الصوتية واللغات المتعددة.",
      "بناء مساعد فزعة الذكي (Fazza AI) للتحاور مع العملاء وتوصية المنتجات الصحية والمقارنة بينها لإتمام الشراء.",
      "إدارة قواعد التصفية والفلترة الديناميكية لحظياً من خلال لوحة التحكم.",
      "تحسين أداء الواجهة الأمامية وسرعة تصفح المتجر على أجهزة الجوال."
    ],
    techTags: ["React", "Next.js", "Python", "FastAPI", "AI Voice/Image", "PHP", "Laravel", "Tailwind CSS"],
    highlightSystem: "qafelh.com E-Commerce & Fazza AI Assistant",
    highlightSystemAr: "منصة قافلة ومساعد فزعة الذكي"
  },
  {
    id: "freelance-enterprise",
    company: "Freelance Software, Web & Mobile Developer",
    companyAr: "مطور مستقل لأنظمة الويب والجوال والمؤسسات",
    role: "Full-Stack ERP & Application Architect",
    roleAr: "مهندس أنظمة ERP وتطبيقات فول ستاك",
    period: "July 2023 – Present",
    periodAr: "يوليو 2023 – حتى الآن",
    location: "Sana'a, Yemen & Remote",
    locationAr: "صنعاء، اليمن ومُتحكم عن بُعد",
    type: "Freelance / Enterprise Consultant",
    typeAr: "مستقل / استشاري مؤسسات",
    summary: "Independent developer delivering custom web, mobile, and ERP solutions for clients across e-commerce, engineering, education, construction, security, and retail.",
    summaryAr: "مطور برمجيات حرة يقدم حلول أنظمة ERP ومواقع وتطبيقات لعملاء في قطاعات التجارة، الهندسة، التعليم، البناء، والأمن.",
    deliverables: [
      "Architected Smart Retail & Supermarket POS ERP: React Native/Expo offline POS (local SQLite + background sync queue), Next.js + Electron admin, NestJS + Prisma + MySQL backend.",
      "Built Factory Production Management ERP: React/Vite web admin, Electron app, offline React Native field sales app, BOM ingredient auto-deduction engine.",
      "Developed client platforms: ecec.sa (Engineering Consulting), yementr.com (Live Video Training), rasm-alkhaleej.com (Construction Showcase), wegotec.net (Smart App Link Router), zone.sa (Restaurant Menu), msasia.com.my, oeilvigilant.com, yemeni-market.com.",
      "Handled full development lifecycle from client requirements gather, database schema ERD, system architecture, deployment, and ongoing client support."
    ],
    deliverablesAr: [
      "تصميم وتطوير نظام كاشير السوبرماركت والتجزئة (React Native أوفلاين مع SQLite ومزامنة خلفية، لوحة Next.js + Electron وخلفية NestJS + Prisma).",
      "بناء نظام إدارة المصانع والإنتاج (لوحة React/Vite وتطبيق سطح مكتب وتطبيق جوال للمناديب ومحرك الخصم التلقائي BOM).",
      "تطوير منصات ومواقع الشركات: ecec.sa، yementr.com، rasm-alkhaleej.com، wegotec.net، zone.sa، msasia.com.my، oeilvigilant.com، yemeni-market.com.",
      "إدارة دورة حياة تطوير البرمجيات كاملة بدءاً من جمع متطلبات العملاء، رسم المخططات ERD، المعمارية، ووصولاً للرفع على الخوادم."
    ],
    techTags: ["React Native", "Next.js", "NestJS", "FastAPI", "Electron", "Prisma", "MySQL", "SQLite", "Laravel", "Tailwind CSS"],
    highlightSystem: "Custom Enterprise ERPs & 8+ Live Production Client Sites",
    highlightSystemAr: "أنظمة ERP مخصصة و 8+ مواقع حية للعملاء"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "mobile",
    category: "Mobile Development",
    categoryAr: "تطبيقات الجوال",
    skills: [
      { name: "React Native", level: "Expert", levelPercentage: 95, iconName: "Smartphone" },
      { name: "Expo CLI", level: "Expert", levelPercentage: 92, iconName: "Layers" },
      { name: "Offline-First SQLite Engine", level: "Architect", levelPercentage: 96, iconName: "Database" },
      { name: "Outbox Sync Queue", level: "Architect", levelPercentage: 94, iconName: "RefreshCw" }
    ]
  },
  {
    id: "frontend",
    category: "Front-End Frameworks",
    categoryAr: "الواجهات الأمامية",
    skills: [
      { name: "React.js", level: "Expert", levelPercentage: 95, iconName: "Code" },
      { name: "Next.js (App / Pages)", level: "Expert", levelPercentage: 90, iconName: "Globe" },
      { name: "TypeScript", level: "Advanced", levelPercentage: 90, iconName: "FileCode" },
      { name: "Tailwind CSS & Glassmorphism", level: "Expert", levelPercentage: 98, iconName: "Palette" },
      { name: "Figma (UI/UX)", level: "Proficient", levelPercentage: 85, iconName: "Figma" }
    ]
  },
  {
    id: "backend",
    category: "Back-End & APIs",
    categoryAr: "الخلفية والـ APIs",
    skills: [
      { name: "NestJS / Node.js", level: "Expert", levelPercentage: 92, iconName: "Server" },
      { name: "FastAPI / Python", level: "Advanced", levelPercentage: 88, iconName: "Zap" },
      { name: "Laravel / PHP", level: "Advanced", levelPercentage: 88, iconName: "Cpu" },
      { name: "RESTful & GraphQL APIs", level: "Expert", levelPercentage: 94, iconName: "Radio" },
      { name: "JWT & 2FA Security", level: "Expert", levelPercentage: 90, iconName: "ShieldCheck" }
    ]
  },
  {
    id: "database",
    category: "Databases & ERP Systems",
    categoryAr: "قواعد البيانات و ERP",
    skills: [
      { name: "MySQL & PostgreSQL", level: "Expert", levelPercentage: 92, iconName: "Database" },
      { name: "Prisma ORM", level: "Expert", levelPercentage: 94, iconName: "HardDrive" },
      { name: "SQLite Local DB", level: "Expert", levelPercentage: 95, iconName: "FileText" },
      { name: "Append-Only Stock Ledger Architecture", level: "Architect", levelPercentage: 96, iconName: "Activity" }
    ]
  },
  {
    id: "ai",
    category: "AI Integrations & Desktop/Hardware",
    categoryAr: "الذكاء الاصطناعي والأجهزة",
    skills: [
      { name: "Fazza AI Conversational Assistant", level: "Architect", levelPercentage: 94, iconName: "Bot" },
      { name: "AI Voice & Image Product Search", level: "Advanced", levelPercentage: 90, iconName: "Mic" },
      { name: "Electron Desktop Apps", level: "Advanced", levelPercentage: 88, iconName: "Monitor" },
      { name: "ESC/POS Thermal Printers & Hardware", level: "Expert", levelPercentage: 92, iconName: "Printer" }
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor's Degree in Computer Science",
    degreeAr: "بكالوريوس علوم الحاسوب",
    institution: "Al-Razi University",
    institutionAr: "جامعة الرازي",
    period: "2019 – 2023",
    location: "Sana'a, Yemen",
    details: "Graduated with strong foundations in software engineering, database systems, data structures, algorithm design, and system architecture.",
    detailsAr: "التخرج بتفوق مع التمكن من هندسة البرمجيات، قواعد البيانات، خوارزميات الحاسوب، ومعمارية الأنظمة."
  },
  {
    degree: "TOEFL (PBT) English Certificate",
    degreeAr: "شهادة التوفل في اللغة الإنجليزية (TOEFL PBT)",
    institution: "Canadian Center",
    institutionAr: "المركز الكندي",
    period: "2017 – 2019",
    location: "Sana'a, Yemen",
    details: "Advanced English language proficiency covering technical writing, professional presentation, and international business communication.",
    detailsAr: "إتقان متقدم للغة الإنجليزية يشمل الكتابة التقنية، العروض التقديمية، والتواصل التجاري الدولي."
  }
];
