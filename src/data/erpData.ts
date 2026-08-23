export interface ErpArchitecture {
  id: string;
  title: string;
  titleAr: string;
  badge: string;
  badgeAr: string;
  headline: string;
  headlineAr: string;
  description: string;
  descriptionAr: string;
  pipelineSteps: {
    stepNumber: string;
    title: string;
    titleAr: string;
    subtitle: string;
    subtitleAr: string;
    techTag: string;
    details: string[];
    detailsAr: string[];
  }[];
  ledgerHighlights: {
    title: string;
    titleAr: string;
    desc: string;
    descAr: string;
    codeSnippet?: string;
  }[];
  architectureChips: string[];
}

export const erpArchitectureData: Record<string, ErpArchitecture> = {
  pos: {
    id: "pos",
    title: "Smart Retail & POS ERP Architecture",
    titleAr: "معمارية نظام كاشير السوبرماركت ومحلات التجزئة",
    badge: "Offline-First Engine + Append-Only Ledger",
    badgeAr: "محرك أوفلاين + دفتر مخزون غير قابل للتعديل",
    headline: "Zero-Downtime Cashier POS with Background Outbox Sync Queue",
    headlineAr: "كاشير يعمل بدون انقطاع مع طابور مزامنة خلفي غير متصل",
    description: "Designed for high-traffic supermarkets and retail outlets facing unreliable internet connectivity. The cashier app operates on a local SQLite database, generating offline UUID sales transactions in an outbox queue. Once connectivity resumes, an automatic background engine syncs transactions, resolves temp IDs, reconciles stock ledgers, and prints ESC/POS receipts.",
    descriptionAr: "مصمم للأسواق المركزية ومحلات التجزئة ذات الضغط العالي التي تعاني من انقطاع الإنترنت. يعمل تطبيق الكاشير على قاعدة SQLite محلية تولد المعاملات أوفلاين وتضعها في طابور محلي. وعند عودة الإنترنت، يزامن المحرك الخلفي المعاملات ويرمم المعرفات ويخصم الدفاتر المخزونية ويربط بالطابعات الحرارية.",
    pipelineSteps: [
      {
        stepNumber: "01",
        title: "Offline Transaction Capture",
        titleAr: "تسجيل المبيعات بدون إنترنت",
        subtitle: "Local SQLite + Temporary UUID Engine",
        subtitleAr: "قاعدة SQLite محلية + معرفات المؤقتة",
        techTag: "React Native / Expo + SQLite",
        details: [
          "Cashier scans barcode using POS hardware or USB camera",
          "Calculates dual pricing (Unit price vs. Carton price automatically)",
          "Appends transaction payload into SQLite local outbox table",
          "Generates offline receipt via ESC/POS thermal printer instantly"
        ],
        detailsAr: [
          "مسح الباركود باستخدام أجهزة الكاشير أو قارئ الباركود",
          "حساب التسعير المزدوج (القطعة والكرتون) تلقائياً",
          "إضافة المعاملة إلى جدول الطابور المحلّي SQLite",
          "طباعة الفاتورة الحرارية مباشرة عبر ESC/POS بدون الحاجة لإنترنت"
        ]
      },
      {
        stepNumber: "02",
        title: "Background Sync Engine & Outbox Worker",
        titleAr: "محرك المزامنة الخلفي وطابور outbox",
        subtitle: "Retry Mechanism & ID Translation",
        subtitleAr: "آلية إعادة المحاولة وترجمة المعرفات",
        techTag: "RxJS / Async Worker + Axios",
        details: [
          "Detects network reconnection event automatically",
          "Streams pending outbox queue batches to NestJS backend",
          "Translates temporary SQLite UUIDs into official MySQL auto-increment IDs",
          "Handles conflict resolution and duplicate invoice deduplication"
        ],
        detailsAr: [
          "اكتشاف عودة الاتصال الشبكي تلقائياً",
          "بث حزم الفواتير المعلقة إلى خادم NestJS",
          "ترجمة المعرفات المؤقتة إلى معرفات رسمية في قاعدة MySQL الرئيسية",
          "منع التكرار ومعالجة التعارض بآلية Deduplication"
        ]
      },
      {
        stepNumber: "03",
        title: "Append-Only Audit Stock Ledger",
        titleAr: "دفتر الحركة المخزونية (Append-Only Ledger)",
        subtitle: "Immutable Transaction Journaling",
        subtitleAr: "دفتر قيود مخزوني لا يقبل التعديل أو الحذف",
        techTag: "NestJS + Prisma + MySQL",
        details: [
          "Instead of updating stock_qty integer directly, inserts immutable movement record",
          "Records transaction type: SALE, PURCHASE, RETURN, DAMAGE, TRANSFER",
          "Reconciles stocktake variances between physical count & ledger count",
          "Updates customer credit debt balance & audit trails"
        ],
        detailsAr: [
          "بدلاً من تعديل الكمية مباشرة، يتم إدراج سطر حركة مخزونية جديد لا يتغير",
          "تسجيل نوع الحركة: مبيعات، مشتريات، مرتجع، تالف، تحويل فرعي",
          "تسوية الفروقات بين الجرد الفعلي للمخزن والجرد الدفتري",
          "تحديث حسابات ديون العملاء والسداد وتوثيق المستندات"
        ]
      }
    ],
    ledgerHighlights: [
      {
        title: "Dual Unit & Carton Converter",
        titleAr: "محول الوحدات المزدوجه (كرتون/قطعة)",
        desc: "Automatically manages unit conversions (e.g. 1 Carton = 24 Units). Purchasing in cartons automatically expands sellable stock by unit counts.",
        descAr: "يعالج التحويل التلقائي بين الكرتون والقطعة (مثل 1 كرتون = 24 قطعة) بحيث يتيح الشراء بالكرتون والبيع بالقطعة أو العكس."
      },
      {
        title: "Stocktake Variance Reconciliation",
        titleAr: "تسوية الفروق المخزونية والجرد الفعلي",
        desc: "Enables periodic physical barcode counting. Compares physical stock vs. ledger balance and generates adjustment vouchers with staff accountability signatures.",
        descAr: "يمكّن الكادر من الجرد الفعلي بالباركود، ويقارن المخزون الفعلي بالدفتري، ويولّد سندات تسوية وتسبيب الفروق."
      },
      {
        title: "Customer Debt & Credit Journal",
        titleAr: "دفتر حسابات الآجل والديون للعملاء",
        desc: "Tracks customer credit lines, payment terms, debt aging analysis, and partial invoice settlements with receipt printing.",
        descAr: "متابعة سقف الائتمان للعملاء، تحليلات أعمار الديون، وسداد الفواتير الجزئي وطباعة سندات القبض."
      }
    ],
    architectureChips: [
      "Offline-First SQLite Sync",
      "Append-Only Stock Ledger",
      "Dual Unit/Carton Pricing",
      "ESC/POS Thermal Hardware",
      "Prisma ORM & MySQL",
      "2FA & RBAC Security"
    ]
  },
  factory: {
    id: "factory",
    title: "Factory Production & Sales Rep ERP Architecture",
    titleAr: "معمارية نظام إدارة المصانع والإنتاج ومبيعات المناديب",
    badge: "BOM Recipe Engine + Field Sales Van Custody",
    badgeAr: "محرك شجرة الخلطات BOM + عهدة ومبيعات المناديب",
    headline: "Automated Production BOM Deduction & Dead-Letter Field Sync",
    headlineAr: "الخصم التلقائي للمواد الخام ومزامنة مبيعات المناديب الميدانيين",
    description: "Built for manufacturing plants producing finished goods from raw chemical/physical ingredients and deploying field sales reps across rural distribution routes. Features a Bill-of-Materials (BOM) engine that validates ingredient availability and auto-deducts raw stock upon batch start, alongside an offline mobile app for field reps to manage van-stock and cash collection.",
    descriptionAr: "مصمم للمصانع والشركات الإنتاجية التي تحول المواد الخام إلى منتجات نهائية وتوزعها عبر سيارات المناديب. يحتوي على محرك شجرة المواد (BOM) الذي يفحص توافر الخامات قبل بدء التشغيل ويخصمها تلقائياً مع تراجع ذري (Rollback)، وتطبيق جوال للمناديب لإدارة عهدة السيارة والسيولة أوفلاين.",
    pipelineSteps: [
      {
        stepNumber: "01",
        title: "BOM Recipe Deduction Engine",
        titleAr: "محرك خصم المواد الخام (BOM Engine)",
        subtitle: "Automated Raw Ingredient Allocation",
        subtitleAr: "توزيع وخصم الخامات التلقائي",
        techTag: "NestJS (Fastify) + Prisma Transaction",
        details: [
          "Manager selects finished product target output (e.g. 500 Units)",
          "BOM Engine queries chemical recipe formulas for raw materials",
          "Validates current raw material stock balances in ledger",
          "Executes atomic deduction transaction across 8 raw ingredients",
          "Supports 1-click cancellation with immediate raw material rollback"
        ],
        detailsAr: [
          "مدير الإنتاج يحدد الكمية المستهدفة للمنتج النهائي (مثل 500 وحدة)",
          "محرك BOM يجلب معادلة الخلط والمكونات الخام المطلوبة",
          "يفحص رصيد الخامات في المستودع ويمنع بدء الدفعة في حال النقص",
          "ينفذ معاملة الخصم الذري لجميع المواد الخام دفعة واحدة",
          "يدعم إلغاء دفعة الإنتاج مع تراجع تلقائي كامل (Rollback) للمواد"
        ]
      },
      {
        stepNumber: "02",
        title: "Van-Stock Dispatch & Custody Transfer",
        titleAr: "تسليم عهدة السيارة للمندوب (Van Stock)",
        subtitle: "Finished Goods Allocation & Cash Register",
        subtitleAr: "تخصيص البضاعة الجاهزة وصندوق السيارة",
        techTag: "Electron Desktop App + Web Admin",
        details: [
          "Transfers finished goods stock from main warehouse to Van #04 inventory",
          "Records driver cash custody baseline & allowed credit threshold",
          "Generates digital waybill & load dispatch sheet for field rep app"
        ],
        detailsAr: [
          "تحويل المنتج النهائي من المستودع الرئيسي إلى عهدة سيارة المندوب",
          "تسجيل العهدة النقدية الابتدائية وسقف المبيعات الآجلة للمندوب",
          "توليد بوليصة الشحن الإلكترونية وجدول استلام البضائع للتطبيق"
        ]
      },
      {
        stepNumber: "03",
        title: "Field Rep Mobile App & Dead-Letter Queue",
        titleAr: "تطبيق المندوب الميداني وطابور الإخفاقات",
        subtitle: "Offline Sales, Collections & Dead-Letter Retry",
        subtitleAr: "مبيعات ميدانية وتحصيل بدون إنترنت مع معالجة الإخفاقات",
        techTag: "React Native + SQLite + Outbox Worker",
        details: [
          "Reps visit client retail shops, issuing invoices with zero cellular signal",
          "Records cash collected vs. goods remitted in local outbox queue",
          "Failed sync packets route to Dead-Letter Queue (DLQ) for retry review",
          "Reconciles evening driver return: Cash collected + Remaining Van Stock"
        ],
        detailsAr: [
          "زيارة المناديب للمحلات وإصدار الفواتير في مناطق بدون شبكة",
          "تسجيل المبالغ المقبوضة والبضاعة المسلمة في طابور محلي",
          "الرسائل المعطلة تحول إلى Dead-Letter Queue للمراجعة عند الاتصال",
          "مطابقة تصفية نهاية اليوم: النقود المحصلة + المتبقي في السيارة"
        ]
      }
    ],
    ledgerHighlights: [
      {
        title: "Bill-of-Materials (BOM) Formula Engine",
        titleAr: "محرك معادلات الإنتاج والنسب (BOM)",
        desc: "Defines multi-level raw material recipes per unit. Pre-checks ingredient availability and auto-deducts raw stock with atomic rollback safety.",
        descAr: "تعريف خلطات المنتجات ونسب المواد الخام لكل قطعة، والتحقق التلقائي من توفرها في المستودع قبل بدء الإنتاج."
      },
      {
        title: "Field Rep Van-Stock Custody Tracking",
        titleAr: "تتبع عهدة سيارات التوزيع والسيولة",
        desc: "Monitors items loaded onto sales vans versus items sold and cash collected. Prevents driver inventory leakage and missing cash remittances.",
        descAr: "مراقبة البضاعة المحملة على سيارات المناديب مقابل المبيعات الفعلية والمبالغ المحصلة لمنع تسرب البضائع."
      },
      {
        title: "Dead-Letter Queue (DLQ) Outbox Sync",
        titleAr: "طابور المعاملات المعلقة Dead-Letter Queue",
        desc: "Ensures field sales transactions are never lost even if mobile devices suffer app crashes or corrupted internet packets.",
        descAr: "ضمان عدم ضياع أي فاتورة للمندوب حتى لو انقطع الاتصال أو حدث تعطل في هاتف المندوب الميداني."
      }
    ],
    architectureChips: [
      "BOM Raw Material Deduction",
      "Atomic Transaction Rollback",
      "Field Sales Offline App",
      "Van-Stock Cash Custody",
      "Dead-Letter Queue Retry",
      "NestJS + Fastify Engine"
    ]
  }
};
