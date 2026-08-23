export interface GalleryItem {
  id: string;
  title: string;
  titleAr: string;
  category: 'pos' | 'erp' | 'mobile' | 'web';
  categoryLabel: string;
  categoryLabelAr: string;
  imageUrl: string;
  description: string;
  descriptionAr: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: "g-pos-1",
    title: "Offline Cashier POS Interface & Thermal Print Preview",
    titleAr: "واجهة كاشير POS وطباعة الفاتورة الحرارية",
    category: "pos",
    categoryLabel: "POS & Retail",
    categoryLabelAr: "شاشات الكاشير POS",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67daf4005a?q=80&w=1200",
    description: "React Native/Expo cashier POS interface showing real-time unit/carton item selection, customer credit search, and ESC/POS thermal printing.",
    descriptionAr: "شاشة الكاشير السريعة لإدخال المنتجات بـ React Native، تتيح اختيار الوحدة (قطعة/كرتون) والربط مع طابعة الفواتير الحرارية.",
    tags: ["React Native", "SQLite", "ESC/POS", "Dual Pricing"]
  },
  {
    id: "g-erp-1",
    title: "Factory BOM Production Dashboard & Raw Stock Balance",
    titleAr: "لوحة تحكم خطوط الإنتاج والخصم التلقائي للخامات",
    category: "erp",
    categoryLabel: "ERP Dashboards",
    categoryLabelAr: "لوحات تحكم ERP",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    description: "Vite/React enterprise dashboard displaying active production batch runs, BOM ingredient availability checks, and append-only ledger logs.",
    descriptionAr: "لوحة التحكم الرئيسية للمصنع تظهر حركات الإنتاج الحية، فحص رصيد الخامات، وسجل القيود المخزونية.",
    tags: ["React", "NestJS", "BOM Engine", "Prisma"]
  },
  {
    id: "g-mobile-1",
    title: "qafelh.com Mobile App & Fazza AI Conversational Screen",
    titleAr: "تطبيق جوال منصة قافلة وشاشة فزعة الذكية",
    category: "mobile",
    categoryLabel: "Mobile App Flows",
    categoryLabelAr: "تطبيقات الجوال",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "Mobile e-commerce UX showing Fazza AI Shopping Assistant chat drawer, product recommendations, and voice query recording state.",
    descriptionAr: "شاشة المساعد الذكي فزعة في متجر قافلة يوجه المشتري لاختيار المنتجات ومقارنة الفئات صوتياً.",
    tags: ["React Native", "FastAPI", "AI Assistant", "Voice Search"]
  },
  {
    id: "g-mobile-2",
    title: "Field Sales Van-Stock Mobile App & Outbox Queue",
    titleAr: "تطبيق المندوب الميداني وجدولة المبيعات أوفلاين",
    category: "mobile",
    categoryLabel: "Mobile App Flows",
    categoryLabelAr: "تطبيقات الجوال",
    imageUrl: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1200",
    description: "React Native field sales rep app operating without cellular signal. Displays van stock inventory, cash collected, and outbox retry queue.",
    descriptionAr: "تطبيق المندوب الميداني الذي يعمل في المناطق بدون تغطية لإصدار الفواتير ومتابعة عهدة السيارة ومبالغ التحصيل.",
    tags: ["React Native", "Offline Outbox", "SQLite", "Van-Stock"]
  },
  {
    id: "g-web-1",
    title: "ecec.sa Engineering Consulting Portal Architecture",
    titleAr: "بوابة شركة اختبارات للاستشارات الهندسية",
    category: "web",
    categoryLabel: "Web Applications",
    categoryLabelAr: "تطبيقات الويب",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200",
    description: "Corporate portal highlighting structural engineering project portfolios, material testing standards, and direct client RFQ request.",
    descriptionAr: "موقع شركة اختبارات للاستشارات الهندسية برؤية عصرية واستعراض مميز لمشاريع الفحص المخبري والإنشائي.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "g-web-2",
    title: "yementr.com Live Education & Remote Classroom Stream",
    titleAr: "شاشات منصة يمن تدريب للتعليم البث المباشر",
    category: "web",
    categoryLabel: "Web Applications",
    categoryLabelAr: "تطبيقات الويب",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    description: "Interactive classroom video dashboard built for low-bandwidth WebRTC streaming, document sharing, and student participation.",
    descriptionAr: "لوحة التحكم التفاعلية لغرف البث المباشر للتدريب والتعليم في اليمن بتكيف مع السرعات الضعيفة للإنترنت.",
    tags: ["React", "WebRTC", "Socket.io"]
  },
  {
    id: "g-erp-2",
    title: "Append-Only Audit Stock Ledger & Debt Reconciliation",
    titleAr: "سجل حركة المخزون غير القابل للتعديل وتسوية الديون",
    category: "erp",
    categoryLabel: "ERP Dashboards",
    categoryLabelAr: "لوحات تحكم ERP",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
    description: "Auditable inventory ledger interface showing purchase receipts, stock transfers, customer credit aging analysis, and 2FA activity log.",
    descriptionAr: "شاشة دفتر حركة المخزون المعتمد الذي يوضح حركات الشراء والمبيعات وتصفية ديون العملاء مع توثيق الأنشطة.",
    tags: ["Next.js", "NestJS", "Prisma", "2FA Security"]
  },
  {
    id: "g-web-3",
    title: "wegotec.net Smart Device Link Router Landing Page",
    titleAr: "منصة ويجوتك للتعرف الفوري على نوع الهاتف والتوجيه",
    category: "web",
    categoryLabel: "Web Applications",
    categoryLabelAr: "تطبيقات الويب",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200",
    description: "Landing page utilizing automatic user-agent OS detection to route iOS users to AppStore and Android users to direct APK download.",
    descriptionAr: "صفحة هبوط الذكية توزع الروابط فورياً بحسب نوع الجهاز (آيفون أو أندرويد) مع تصميم متدرج مبهر.",
    tags: ["React", "UserAgent Router", "Tailwind CSS"]
  }
];
