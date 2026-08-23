export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: 'erp' | 'aiMobile' | 'websites';
  subtitle: string;
  subtitleAr: string;
  image: string;
  tags: string[];
  status: 'Live Production' | 'Enterprise Deployed' | 'Active Platform';
  statusAr: 'إنتاجي موثق' | 'مبني للمؤسسات' | 'منصة نشطة';
  problemStatement: string;
  problemStatementAr: string;
  solutionArchitecture: string;
  solutionArchitectureAr: string;
  keyCapabilities: string[];
  keyCapabilitiesAr: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "smart-retail-pos-erp",
    title: "Smart Retail & Supermarket POS ERP System",
    titleAr: "نظام كاشير POS وإدارة السوبرماركت والمحلات الذكية",
    category: "erp",
    subtitle: "Cross-platform offline-first retail ERP with background sync, append-only stock ledger, and 2FA authentication.",
    subtitleAr: "نظام ERP متكامل للبيع بالتجزئة يعمل بدون إنترنت مع مزامنة خلفية، دفتر مخزون معتمد، ومصادقة ثنائية.",
    image: "/images/supermarket/supermark_admin.png",
    tags: ["React Native", "Expo", "SQLite", "Next.js", "Electron", "NestJS", "Prisma", "MySQL", "ESC/POS Thermal"],
    status: "Enterprise Deployed",
    statusAr: "مبني للمؤسسات",
    featured: true,
    problemStatement: "Retail supermarkets and retail businesses face severe internet outages, complex inventory variances between unit vs. carton purchasing, unauthorized inventory tampering, and cash debt tracking issues.",
    problemStatementAr: "تواجه المحلات والأسواق انقطاعات مستمرة في الإنترنت، وتفاوتات بين البيع بالكرتون والقطعة، والتلاعب في المخزون، وصعوبة متابعة ديون العملاء والجرد.",
    solutionArchitecture: "Engineered an offline-first cashier POS app built with React Native/Expo utilizing a local SQLite database that stores sales outbox queues. When connectivity is restored, an automatic background sync engine resolves temporary IDs and updates the NestJS/Prisma/MySQL server. Implemented an append-only stock ledger for auditing purchases, sales, returns, and damages.",
    solutionArchitectureAr: "تم بناء تطبيق كاشير مغلق يعمل بدون إنترنت بـ React Native/Expo مع قاعدة بيانات SQLite محلياً ومحرك مزامنة خلفي يتعامل مع خادم NestJS/Prisma/MySQL. تم تصميم دفتر مخزون حقيقي Append-Only لتسجيل الحركة المالية والمخزونية بدقة بدون تلاعب.",
    keyCapabilities: [
      "Offline-first cashier POS with SQLite & background sync queue",
      "Append-only stock ledger for auditable inventory tracking",
      "Dual unit / carton pricing & automatic breakdown conversion",
      "Physical stocktake variance reconciliation engine",
      "Customer credit / debt ledger with payment schedules",
      "ESC/POS thermal printer hardware integration via Bluetooth/USB",
      "Granular role-based access control (RBAC) & JWT 2FA authentication"
    ],
    keyCapabilitiesAr: [
      "نظام كاشير يعمل بدون إنترنت مع قاعدة SQLite ومزامنة تلقائية",
      "دفتر مخزوني غير قابل للتعديل (Append-Only) لمنع التلاعب",
      "دعم التسعير المزدوج (الكرتون والقطعة) والتحويل التلقائي",
      "تسوية الفروقات بين الجرد الفعلي والمخزون الدفتري",
      "دفتر ديون وحسابات الآجل للعملاء مع جداول السداد",
      "ربط مباشر مع طابعات الفواتير الحرارية ESC/POS عبر USB/Bluetooth",
      "نظام صلاحيات دقيق للمستخدمين مع مصادقة ثنائية 2FA"
    ],
    techStack: ["React Native", "Expo", "SQLite", "Next.js", "Electron", "NestJS", "Prisma ORM", "MySQL", "JWT", "Tailwind CSS"],
  },
  {
    id: "factory-management-erp",
    title: "Factory Production & Field Sales Management ERP",
    titleAr: "نظام إدارة المصانع والإنتاج ومبيعات المناديب",
    category: "erp",
    subtitle: "Industrial production ERP with BOM material deduction engine, field reps offline outbox, and van-stock custody.",
    subtitleAr: "نظام ERP صناعي لإدارة خطوط الإنتاج والخصم التلقائي للمواد الخام ومتابعة مبيعات عهدة المناديب.",
    image: "/images/factory/factory_main_page.png",
    tags: ["React", "Vite", "Electron", "React Native", "NestJS", "Fastify", "Prisma", "MySQL", "BOM Engine"],
    status: "Enterprise Deployed",
    statusAr: "مبني للمؤسسات",
    featured: true,
    problemStatement: "Manufacturing plants suffer from manual raw-material calculations, stock leakage during production runs, and field sales reps losing transactions in remote regions with zero mobile coverage.",
    problemStatementAr: "تعاني المصانع الإنتاجية من الحساب اليدوي للمواد الخام، وتسرب البضائع أثناء التصنيع، وفقدان بيانات مبيعات المناديب الميدانيين في مناطق انقطاع التغطية.",
    solutionArchitecture: "Built a production control system with a Bill-of-Materials (BOM) engine that validates ingredient availability before starting a production run and auto-deducts stock with atomic rollback. Field sales reps use an offline-first React Native mobile app with outbox retry & dead-letter queue handling for van-stock and cash collection.",
    solutionArchitectureAr: "طُوّر محرك خلطات ومكونات (BOM) يترجم المنتج النهائي إلى خامات أساسية، يخصم المواد الخام تلقائياً ويقوم بعمل إلغاء وتراجع (Rollback) تلقائي. تم تزويع المناديب بتطبيق جوال أوفلاين مع نظام طابور المحاولات والإخفاقات Dead-Letter Queue.",
    keyCapabilities: [
      "Automated Bill-of-Materials (BOM) engine with raw material auto-deduction",
      "Atomic production run start & automatic rollback on cancellation",
      "Van-stock tracking & real-time cash custody reconciliation for field reps",
      "Offline-first sales outbox queue with dead-letter queue retry mechanism",
      "Multi-platform admin: Web dashboard (Vite/React) + Desktop App (Electron)",
      "NestJS + Fastify high-performance REST API architecture"
    ],
    keyCapabilitiesAr: [
      "محرك شجرة المواد (BOM) لخصم المواد الخام تلقائياً عند بدء الإنتاج",
      "نظام إطلاق وإلغاء الإنتاج الذري (Atomic Rollback) لحماية البيانات",
      "متابعة بضاعة السيولة وجرد عهدة السيار للمناديب لحظياً",
      "طابور محاولات أوفلاين ذكي لمعالجة انقطاع الشبكة وطباعة الفواتير",
      "لوحة إدارة متعددة المنصات: ويب (Vite/React) وسطح مكتب (Electron)",
      "معمارية خلفية فائقة السرعة بـ NestJS و Fastify و Prisma"
    ],
    techStack: ["React", "Vite", "Electron", "React Native", "NestJS", "Fastify", "Prisma", "MySQL", "Tailwind CSS"],
  },
  {
    id: "qafelh-ecommerce-ai",
    title: "qafelh.com — E-Commerce & Fazza AI Shopping Assistant",
    titleAr: "منصة قافلة للتجارة الإلكترونية ومساعد فزعة الذكي",
    category: "aiMobile",
    subtitle: "Production e-commerce platform featuring multi-modal AI search (Image & Voice) and conversational AI agent Fazza.",
    subtitleAr: "منصة تجارة إلكترونية متكاملة تحتوي على بحث ذكي بالصوت والصورة ومساعد التسوق الذكي (فزعة).",
    image: "/images/websites/qafelh_home.png",
    tags: ["React", "Next.js", "Python", "FastAPI", "AI Voice/Image", "PHP", "Laravel", "Tailwind CSS"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    featured: true,
    problemStatement: "Traditional e-commerce platforms force users through tedious search filters, confusing health product choices, and textual search failures for Arabic local terms.",
    problemStatementAr: "تعاني المنصات التقليدية من التعقيد في تصفية المنتجات، وصعوبة وصول العملاء للمنتجات الصحية، ومشاكل البحث النصي باللغة العربية المحلية.",
    solutionArchitecture: "Built a dynamic filtering and multi-modal AI search system supporting image query recognition and voice search. Developed 'Fazza' — an AI shopping assistant that converses naturally in Arabic to recommend products, guide customers, and compare items for fast checkout.",
    solutionArchitectureAr: "تم تطوير نظام فلترة وحث بصر وصوتي متعدد الوسائط، بالإضافة إلى تطوير المساعد الذكي 'فزعة' للتحاور باللغة العربية مع العملاء ومساعدتهم في اختيار المقاسات والمنتجات الصحية وإكمال الشراء بسرعة.",
    keyCapabilities: [
      "Image-based product search engine using AI computer vision filters",
      "Arabic voice query search recognition & dynamic admin category rules",
      "Fazza AI Assistant: Natural-language conversational product advisor",
      "Product comparison matrix & automated cross-selling recommendations",
      "FastAPI & Laravel backend integration with dynamic inventory sync"
    ],
    keyCapabilitiesAr: [
      "محرك بحث بالصور يحلل لقطات المنتجات ويعثر على أقرب البدائل",
      "البحث الصوتي باللغة العربية وتصفية المنتجات من خلال لوحة التحكم",
      "مساعد فزعة الذكي: مستشار تسوق ذكي يتقن اللهجات ويعطي توصيات دقيقة",
      "مقارنة المنتجات الذكية وترشيح البدائل",
      "ربط خلفية سريعة بـ FastAPI و Laravel مع المزامنة الفورية للمخزون"
    ],
    techStack: ["React", "Next.js", "FastAPI", "Python", "Laravel", "AI Assistants", "Tailwind CSS"],
    liveUrl: "https://qafelh.com"
  },
  {
    id: "ecec-sa",
    title: "ecec.sa — Ekhtibarat Engineering Consulting",
    titleAr: "موقع شركة اختبارات للاستشارات الهندسية",
    category: "websites",
    subtitle: "Official corporate website showcasing engineering projects, testing services, and corporate profile.",
    subtitleAr: "الموقع الرسمي لشركة اختبارات للاستشارات الهندسية لعرض المشاريع والخدمات الاستشارية.",
    image: "/images/websites/ecec.sa.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "Needed a premium, high-speed engineering showcase to present heavy infrastructure projects, lab testing standards, and attract commercial clients in Saudi Arabia.",
    problemStatementAr: "المطالبة بموقع رسمي رفيع المستوى لعرض مشاريع البنية التحتية والفحوصات المخبرية لجذب كبار العملاء التجارية بالمملكة.",
    solutionArchitecture: "Designed and deployed a responsive Next.js corporate portal with fluid Framer Motion hero transitions, custom service interactive cards, and direct RFQ inquiry workflow.",
    solutionArchitectureAr: "تطوير بوابة إلكترونية سريعة بـ Next.js و Tailwind CSS تبرز الخدمات الهندسية ومعارض المشاريع بتصميم أنيق ومحركات تواصل سريعة.",
    keyCapabilities: [
      "Engineering project portfolio grid with interactive lightbox",
      "Service catalog detailing soil, material, and structural testing",
      "Corporate RFQ quote request workflow & fast loading speed"
    ],
    keyCapabilitiesAr: [
      "معرض مشاريع هندسية تفاعلي",
      "دليل الخدمات الاستشارية وفحوصات التربة والمواد",
      "طلب عروض أسعار سريع وتصفح خفيف واحترافي"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ecec.sa"
  },
  {
    id: "yementr-com",
    title: "yementr.com — Live Education & Interactive Video Training",
    titleAr: "منصة يمن تدريب للتعليم والتفاعل عن بعد",
    category: "aiMobile",
    subtitle: "Video chat training platform built for Yemeni remote education, live classrooms, and student-instructor sessions.",
    subtitleAr: "منصة تدريب وتعليم تفاعلي عن بعد تمكن المدربين والطلاب من إقامة جلسات وبث مباشر ومستندات.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    tags: ["React", "WebRTC", "Node.js", "Socket.io", "Tailwind CSS"],
    status: "Active Platform",
    statusAr: "منصة نشطة",
    problemStatement: "Remote students in Yemen require low-bandwidth video conferencing, structured training materials, and interactive virtual classrooms resilient to low connectivity.",
    problemStatementAr: "حاجة الطلاب والمدربين في اليمن لمنصة تدريب تفاعلية تعمل بكفاءة مع الاتصالات الضعيفة وتوفر غرفاً افتراضية.",
    solutionArchitecture: "Built a customized live video room and course management platform optimizing stream bandwidth and interactive classroom chat for educational institutes.",
    solutionArchitectureAr: "بناء منصة تدريب بـ React و WebRTC تتيح المحادثات المباشرة ومشاركة الشاشة ومواد التدريب بسهولة وبأدنى استهلاك للبيانات.",
    keyCapabilities: [
      "Low-bandwidth WebRTC video classroom stream optimization",
      "Interactive real-time chat, screen sharing, and slide presentation",
      "Course registration & student attendance reporting"
    ],
    keyCapabilitiesAr: [
      "بث فيديو مباشر منخفض استهلاك البيانات بـ WebRTC",
      "محادثات فورية ومشاركة الشاشات والمستندات التعليمية",
      "إدارة الدورات وتسجيل الحضور وتقارير الإنجاز"
    ],
    techStack: ["React", "WebRTC", "Node.js", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://yementr.com"
  },
  {
    id: "rasm-alkhaleej",
    title: "rasm-alkhaleej.com — Rasm Al-Khaleej Construction",
    titleAr: "موقع شركة رسم الخليج للمقاولات العامة",
    category: "websites",
    subtitle: "Official website presenting completed construction mega-projects, heavy contracting, and company profile.",
    subtitleAr: "الموقع الرسمي لشركة رسم الخليج للمقاولات العامة لعرض أضخم المشاريع الإنشائية وخدمات البناء.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "Construction firm required an impressive visual showcase for commercial contracting proposals.",
    problemStatementAr: "حاجة الشركة الإنشائية لواجهة رقمية مبهرة تعكس حجم أعمالها ومشاريعها التجارية للمستثمرين.",
    solutionArchitecture: "Created a modern glassmorphic website displaying project timelines, equipment fleets, and client testimonials with rich responsive animations.",
    solutionArchitectureAr: "تصميم موقع راقي بالزجاج المتدرج يبرز أسطول المعدات وتفاصيل الكوادر والمشاريع المنفذة.",
    keyCapabilities: [
      "Interactive construction project filter & photo showcase",
      "Equipment fleet catalog & client trust wall",
      "Fast mobile load performance & contact routing"
    ],
    keyCapabilitiesAr: [
      "تصفية المشاريع المنفذة ومعرض الصور",
      "عرض أسطول المعدات الثقيلة والسجل التجاري",
      "سرعة فائقة على تطبيقات الجوال وأزرار التواصل"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://rasm-alkhaleej.com"
  },
  {
    id: "wegotec-net",
    title: "wegotec.net — Smart Mobile App Distribution Landing Page",
    titleAr: "منصة ويجوتك للتحميل الذكي وتوزيع التطبيقات",
    category: "websites",
    subtitle: "Smart app landing page featuring automated user-agent device detection (Android/iOS) for instant APK/AppStore installs.",
    subtitleAr: "صفحة هبوط ذكية تكتشف نوع جهاز المستخدم تلقائياً وتوجهه للرابط المناسب لآيفون أو أندرويد.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200",
    tags: ["React", "JavaScript", "Tailwind CSS", "Device Detection API"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "Tech users clicked incorrect app store links leading to failed downloads and user drop-offs.",
    problemStatementAr: "فقدان المستخدمين بسبب ضغطهم على روابط تحميل غير مخصصة لنظام تشغيل هواتفهم (iOS / Android).",
    solutionArchitecture: "Built a zero-latency script detecting mobile OS parameters and serving direct download triggers, reducing friction by 45%.",
    solutionArchitectureAr: "تطوير آلية التعرف الفوري على المتصفح والنظام وتوجيه الزائر لتحميل التطبيق مباشرة بضغطة واحدة.",
    keyCapabilities: [
      "Automated user-agent OS detection (iOS AppStore vs Android APK/PlayStore)",
      "Instant install direct trigger & deep-linking support",
      "Sleek product feature highlights and dynamic screenshots"
    ],
    keyCapabilitiesAr: [
      "التعرف الذاتي على نوع الهاتف (آيفون أم أندرويد)",
      "بدء التحميل الفوري وتخصيص الروابط المباشرة",
      "عرض مبهر لمميزات التطبيق واللقطات الفنية"
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://wegotec.net"
  },
  {
    id: "zone-sa",
    title: "zone.sa — Zone Restaurant Interactive Menu & Dining",
    titleAr: "موقع مطعم زون لعرض قائمة الوجبات والمشروبات",
    category: "websites",
    subtitle: "Modern online restaurant platform featuring menu browsing, meal highlights, and branch locations.",
    subtitleAr: "موقع عصري وتفاعلي لمطعم زون لعرض قائمة الأطعمة والمشروبات والفروع للعملاء.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "Restaurant wanted an interactive digital menu accessible via QR codes in-store and online.",
    problemStatementAr: "المطالبة بمنيوه رقمي تفاعلي يفتح عبر باركود QR داخل المطعم وخارجه بسرعة وجاذبية.",
    solutionArchitecture: "Delivered a lightweight menu site with appetizing food card visuals, category tags, and instant WhatsApp order triggers.",
    solutionArchitectureAr: "تصميم قائمة طعام رقمية جذابة بالصور عالية الدقة مع خيارات الطلب المباشر عبر الواتساب.",
    keyCapabilities: [
      "QR-code optimized fast digital food menu",
      "Categorized dietary tags & item recommendations",
      "Direct location map links & phone reservations"
    ],
    keyCapabilitiesAr: [
      "قائمة طعام سريعة متوافقة مع كود QR",
      "تصنيف الوجبات والمشروبات وإبراز الأكثر طلباً",
      "ربط الموقع الجغرافي وحجز الطاولات المباشر"
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://zone.sa"
  },
  {
    id: "oeilvigilant-com",
    title: "oeilvigilant.com — Multilingual Security Company (France)",
    titleAr: "موقع شركة العين الساهرة للأمن والحراسات (فرنسا)",
    category: "websites",
    subtitle: "Multilingual WordPress security portal (French, English, Arabic) built for private guarding services in France.",
    subtitleAr: "موقع إلكتروني متعدد اللغات (فرنسي، إنجليزي، عربي) لشركة حراسات أمنية خاصة في فرنسا.",
    image: "/images/websites/oeilvigilant.com.png",
    tags: ["WordPress", "PHP", "Multilingual i18n", "CSS3", "JavaScript"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "French private security firm needed a tri-lingual client portal catering to international diplomatic & commercial accounts.",
    problemStatementAr: "شركة أمنية فرنسية بحاجة لموقع بثلاث لغات لاستقطاب السفارات والمصالح التجارية الدولية.",
    solutionArchitecture: "Constructed a secure, multilingual WordPress portal with custom French/English/Arabic translations and service compliance disclosures.",
    solutionArchitectureAr: "تطوير موقع WordPress مخصص يخدم العملاء بثلاث لغات مع الحفاظ على التنسيق والسرعة.",
    keyCapabilities: [
      "Tri-lingual language switcher (FR, EN, AR)",
      "Security audit & surveillance service packages",
      "Encrypted quote request & staff application form"
    ],
    keyCapabilitiesAr: [
      "مبدل لغات ثلاثي (فرنسي، إنجليزي، عربي)",
      "عرض خدمات الحراسة والمراقبة الإلكترونية",
      "استمارة طلب استشارات وتوظيف آمنة"
    ],
    techStack: ["WordPress", "PHP", "i18n", "CSS3"],
    liveUrl: "https://oeilvigilant.com"
  },
  {
    id: "msasia-com-my",
    title: "msasia.com.my — Educational Services (Malaysia)",
    titleAr: "موقع شركة إم إس آسيا للخدمات التعليمية (ماليزيا)",
    category: "websites",
    subtitle: "Corporate WordPress portal presenting study programs, university admissions, and student services in Malaysia.",
    subtitleAr: "موقع خدمات تعليمية في ماليزيا لعرض برامج الدراسات والقبولات الجامعية للطلاب الدوليين.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
    tags: ["WordPress", "PHP", "Elementor", "SEO"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "Educational consultancy needed a high-converting lead generation hub for students seeking Malaysian degrees.",
    problemStatementAr: "مؤسسة استشارات تعليمية ترغب في جذب الطلاب الراغبين بالدراسة في ماليزيا وعرض الجامعات.",
    solutionArchitecture: "Configured a structured WordPress CMS with university catalog search, visa guide documents, and counselor appointment booking.",
    solutionArchitectureAr: "تخصيص موقع إدارة محتوى يعرض أدلة الجامعات الماليزية وحجز المواعيد مع المستشارين.",
    keyCapabilities: [
      "University & program course catalog search",
      "Student visa checklist & tuition fee estimator",
      "Direct WhatsApp counseling chat integration"
    ],
    keyCapabilitiesAr: [
      "دليل البحث في الجامعات والتخصصات",
      "حاسبة رسوم الدراسة وأدلة الفيزا",
      "محادثة مباشرة مع مستشاري القبول"
    ],
    techStack: ["WordPress", "PHP", "SEO Optimization"],
    liveUrl: "https://msasia.com.my"
  },
  {
    id: "yemeni-market-com",
    title: "yemeni-market.com — Authentic E-Commerce Store",
    titleAr: "متجر السوق اليمني للمنتجات الأصيلة",
    category: "aiMobile",
    subtitle: "PrestaShop-based multilingual e-commerce store delivering authentic Yemeni honey, spices, and traditional artisan goods globally.",
    subtitleAr: "متجر إلكتروني متعدد اللغات مبني بـ PrestaShop يقدم العسل اليمني والبهارات والمنتجات التراثية للعملاء عالمياً.",
    image: "/images/websites/yemeni-market.com.png",
    tags: ["PrestaShop", "PHP", "MySQL", "Custom Theme"],
    status: "Live Production",
    statusAr: "إنتاجي موثق",
    problemStatement: "Artisan Yemeni goods vendor required a worldwide shipping e-commerce storefront with local payment gateways and multi-language support.",
    problemStatementAr: "بائع منتجات يمنية أصيلة يريد متجراً يوفر الدفع والشحن الخارجي للعملاء في جميع أنحاء العالم مع دعم متعدد اللغات.",
    solutionArchitecture: "Set up and customized a PrestaShop store with a tailored theme, configured weight-based global shipping, integrated local payment modules, and enabled full Arabic/English multilingual support.",
    solutionArchitectureAr: "بناء وتخصيص متجر PrestaShop مع ثيم مخصص، وإعداد الشحن الدولي حسب الوزن، وربط بوابات الدفع المحلية، وتفعيل الدعم الثنائي للعربية والإنجليزية.",
    keyCapabilities: [
      "PrestaShop store setup, configuration & custom theme",
      "Global weight-based shipping matrix & checkout",
      "Multi-language support (Arabic / English)",
      "Local payment gateway integration",
      "Product authenticity & origin guarantee display"
    ],
    keyCapabilitiesAr: [
      "إعداد وتخصيص متجر PrestaShop مع ثيم مخصص",
      "حساب تكلفة الشحن الدولي حسب الوزن والدولة",
      "دعم ثنائي اللغة عربي / إنجليزي",
      "ربط بوابات الدفع الإلكتروني المحلية",
      "عرض شارات جودة وأصالة المنتجات اليمنية"
    ],
    techStack: ["PrestaShop", "PHP", "MySQL", "Custom Theme", "CSS"],
    liveUrl: "https://yemeni-market.com"
  }
];
