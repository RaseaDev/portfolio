import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        brandName: "Badr Al-deen",
        role: "Full-Stack & Mobile Developer",
        available: "Available for projects",
        home: "Home",
        erp: "ERP Architecture",
        projects: "Projects Showcase",
        gallery: "Project Gallery",
        experience: "Experience & CV",
        contact: "Contact & Hire",
        langSwitch: "العربية"
      },
      hero: {
        statusPill: "Full-Stack & Mobile Developer | ERP & AI Specialist",
        greeting: "Hello, I'm",
        name: "Badr Al-deen Rasea",
        taglines: [
          "Building Enterprise ERP Systems & Offline-First POS Engine",
          "Developing Production React Native & Next.js Platforms",
          "Architecting AI Shopping Assistants & Image/Voice Search"
        ],
        description: "Full-stack software and mobile developer with 2+ years building production web, mobile, and ERP systems. Architect of offline-first POS engines, append-only stock ledgers, BOM material deduction systems, and AI-powered e-commerce search.",
        ctaProjects: "Explore Projects",
        ctaErp: "View ERP Architecture",
        ctaResume: "Download Resume (CV)",
        stats: {
          expYears: "Years Production Exp",
          liveSystems: "Live Business Systems",
          offlineSync: "Offline-First Sync Engine",
          ledgersHandled: "Enterprise Stock Ledgers"
        }
      },
      tech: {
        title: "Technical Stack & Expertise",
        subtitle: "Enterprise-grade frameworks, mobile engines, databases, and AI integrations",
        tabs: {
          all: "All Technologies",
          mobile: "Mobile Development",
          frontend: "Front-End",
          backend: "Back-End & APIs",
          database: "Databases & ERP",
          ai: "AI & Desktop/Hardware"
        }
      },
      erp: {
        title: "Enterprise ERP & Architecture Showcase",
        subtitle: "Deep technical breakdown of custom ERP systems built for real retail & factory operations",
        posTab: "Smart Retail & POS ERP",
        factoryTab: "Factory Management ERP",
        posTitle: "Smart Retail & Supermarket POS ERP System",
        posDesc: "Full cross-platform retail ERP featuring offline-first React Native/Expo cashier POS (local SQLite database with automatic background sync), Next.js + Electron admin dashboard, and NestJS + Prisma + MySQL backend with 2FA security.",
        factoryTitle: "Factory Production & Field Sales Management ERP",
        factoryDesc: "Complete industrial production & distribution ERP: React/Vite admin, Electron desktop app, and offline-first React Native field sales app on NestJS (Fastify) + Prisma + MySQL backend.",
        featuresTitle: "Core Architectural Capabilities",
        diagramTitle: "Live Offline Sync & Ledger Pipeline",
        architectureChips: "System Architecture Highlights",
        btnViewDetails: "View Full Specs"
      },
      projects: {
        title: "Featured Projects & Client Solutions",
        subtitle: "Production platforms built across e-commerce, engineering, education, security, and retail",
        filters: {
          all: "All Systems",
          erp: "ERP & Enterprise",
          aiMobile: "AI & Mobile Platforms",
          websites: "Client Websites"
        },
        viewModal: "View System Architecture",
        liveDemo: "Visit Live Site",
        githubRepo: "View Code",
        modal: {
          problemTitle: "Problem & Business Need",
          solutionTitle: "Engineering Solution & Architecture",
          keyFeaturesTitle: "Key Technical Capabilities",
          techStackTitle: "Technologies & Frameworks",
          close: "Close Preview"
        }
      },
      gallery: {
        title: "Visual Gallery & UI/UX Showcase",
        subtitle: "High-resolution screenshots, ERP dashboards, POS terminals, and mobile app flows",
        zoomHint: "Click any preview to inspect full-screen lightbox",
        categories: {
          all: "All Views",
          pos: "POS & Retail",
          erp: "ERP Dashboards",
          mobile: "Mobile App Flows",
          web: "Web Applications"
        }
      },
      experience: {
        title: "Work Experience & Education",
        subtitle: "Proven track record delivering mission-critical applications for business clients",
        timelineTitle: "Engineering Roles",
        educationTitle: "Education & Certifications",
        personalSkillsTitle: "Engineering Competencies",
        downloadCv: "Download Full CV (PDF/Docx)"
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Whether it's a project, a job opportunity, or just a question — I'm happy to hear from you.",
        directChannels: "Reach me directly",
        formTitle: "Send me a message",
        formSubtitle: "I'll get back to you via email or WhatsApp.",
        nameLabel: "Your name",
        emailLabel: "Your email",
        serviceLabel: "What can I help with?",
        messageLabel: "Your message",
        sendBtn: "Send Message",
        successTitle: "Got it, thanks!",
        successMsg: "I'll be in touch soon. Check your email client — it should open with the message ready to send.",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          message: "Tell me about your project, idea, or what you're looking for..."
        },
        services: {
          erp: "Custom ERP / POS System",
          mobile: "React Native Mobile App",
          web: "Web Application",
          ai: "AI Integration",
          consulting: "Technical Consulting",
          job: "Job / Full-time Role"
        }
      },
      footer: {
        rights: "All rights reserved.",
        builtWith: "Crafted with React, TypeScript, Tailwind CSS & Framer Motion."
      }
    }
  },
  ar: {
    translation: {
      nav: {
        brandName: "بدر الدين رصاع",
        role: "مطور برمجيات شامل وتطبيقات جوال",
        available: "متاح للمشاريع والعمل",
        home: "الرئيسية",
        erp: "معمارية ERP",
        projects: "معرض المشاريع",
        gallery: "معرض الشاشات",
        experience: "الخبرة والإنتاج",
        contact: "التواصل والتوظيف",
        langSwitch: "English"
      },
      hero: {
        statusPill: "مطور فول ستاك وجوال | متخصص أنظمة ERP والذكاء الاصطناعي",
        greeting: "أهلاً بك، أنا",
        name: "بدر الدين أحمد رصاع",
        taglines: [
          "بناء أنظمة ERP ومحركات POS تعمل بدون إنترنت",
          "تطوير منصات إنتاجية بـ React Native و Next.js",
          "ابتكار مساعدين ذكيين والبحث بالصوت والصورة"
        ],
        description: "مطور برمجيات وتطبيقات جوال يمتلك خبرة عمل إنتاجية تزيد عن سنتين في بناء أنظمة الويب والجوال وأنظمة المؤسسات. مهندس محركات POS غير متصلة بالإنترنت، دفاتر المخزون غير القابلة للتعديل، ومحركات تتبع خطوط الإنتاج والذكاء الاصطناعي.",
        ctaProjects: "استكشف المشاريع",
        ctaErp: "معمارية أنظمة ERP",
        ctaResume: "تحميل السيرة الذاتية",
        stats: {
          expYears: "سنوات خبرة إنتاجية",
          liveSystems: "أنظمة أعمال حية",
          offlineSync: "محرك مزامنة بدون إنترنت",
          ledgersHandled: "دفاتر مخزونية معالجة"
        }
      },
      tech: {
        title: "التقنيات والمهارات البرمجية",
        subtitle: "تقنيات متقدمة لبناء تطبيقات الجوال، الأنظمة السحابية، وقواعد البيانات والذكاء الاصطناعي",
        tabs: {
          all: "جميع التقنيات",
          mobile: "تطبيقات الجوال",
          frontend: "الواجهات الأمامية",
          backend: "الخلفية والـ APIs",
          database: "قواعد البيانات و ERP",
          ai: "الذكاء الاصطناعي والتطبيقات"
        }
      },
      erp: {
        title: "معمارية أنظمة ERP والمؤسسات",
        subtitle: "استعراض تفصيلي للمعارية الهندسية لأنظمة إدارة المبيعات والمصانع الإنتاجية",
        posTab: "نظام نقاط البيع POS للبيع التجزئة",
        factoryTab: "نظام إدارة المصانع والمناديب",
        posTitle: "نظام كاشير POS وإدارة السوبرماركت والمحلات الذكية",
        posDesc: "نظام ERP متكامل ويعمل بدون إنترنت عبر تطبيق React Native/Expo للكاشير مع مزامنة خلفية تلقائية، ولوحة تحكم Next.js + Electron وخلفية NestJS + Prisma + MySQL مجهزة بأعلى معايير الأمان و 2FA.",
        factoryTitle: "نظام إدارة الإنتاج بالمصانع ومبيعات المناديب",
        factoryDesc: "نظام ERP متكامل لإدارة خطوط الإنتاج والتوزيع: لوحة تحكم React/Vite وتطبيق سطح مكتب Electron وتطبيق جوال للمناديب يعمل بدون إنترنت على خلفية NestJS (Fastify) + Prisma + MySQL.",
        featuresTitle: "الميزات المعمارية الرئيسية",
        diagramTitle: "مخطط المزامنة والدفاتر المخزونية",
        architectureChips: "أبرز المعماريات البرمجية",
        btnViewDetails: "عرض التفاصيل الكاملة"
      },
      projects: {
        title: "المشاريع المميزة والحلول البرمجية",
        subtitle: "أنظمة ومنصات تم تطويرها لعملاء في التجارة الإلكترونية، الهندسة، التعليم، والأمن",
        filters: {
          all: "جميع المشاريع",
          erp: "أنظمة ERP والمؤسسات",
          aiMobile: "تطبيقات الجوال والذكاء الاصطناعي",
          websites: "مواقع الشركات والعملاء"
        },
        viewModal: "عرض المعمارية والتفاصيل",
        liveDemo: "زيارة الموقع الحي",
        githubRepo: "معاينة الكود",
        modal: {
          problemTitle: "المشكلة واحتياج العمل",
          solutionTitle: "الحل الهندسي والمعمارية البرمجية",
          keyFeaturesTitle: "أبرز الإمكانيات التقنية",
          techStackTitle: "التقنيات والأطر المستخدمة",
          close: "إغلاق المعاينة"
        }
      },
      gallery: {
        title: "معرض الشاشات وواجهات المستخدم",
        subtitle: "لقطات عالية الدقة لشاشات الكاشير، لوحات التحكم، وتطبيقات الجوال",
        zoomHint: "انقر على أي صورة لتكبيرها في الوضع الكامل",
        categories: {
          all: "جميع الواجهات",
          pos: "شاشات الكاشير POS",
          erp: "لوحات تحكم ERP",
          mobile: "تطبيقات الجوال",
          web: "تطبيقات الويب"
        }
      },
      experience: {
        title: "الخبرة المهنية المؤهلات",
        subtitle: "مسيرة عملية حافلة بتطوير وبناء الأنظمة الحساسة والمشاريع الكبيرة",
        timelineTitle: "المسار المهني",
        educationTitle: "التعليم والشهادات",
        personalSkillsTitle: "المهارات الشخصية والهندسية",
        downloadCv: "تحميل السيرة الذاتية (CV)"
      },
      contact: {
        title: "تواصل معي",
        subtitle: "سواء كان مشروعاً، فرصة عمل، أو مجرد سؤال — يسعدني سماعك.",
        directChannels: "تواصل مباشرة",
        formTitle: "أرسل لي رسالة",
        formSubtitle: "سأرد عليك عبر البريد الإلكتروني أو الواتساب.",
        nameLabel: "اسمك",
        emailLabel: "بريدك الإلكتروني",
        serviceLabel: "كيف يمكنني مساعدتك؟",
        messageLabel: "رسالتك",
        sendBtn: "إرسال الرسالة",
        successTitle: "تم الاستلام، شكراً!",
        successMsg: "سأتواصل معك قريباً. تحقق من بريدك — يجب أن يفتح مع الرسالة جاهزة للإرسال.",
        placeholders: {
          name: "اسمك",
          email: "بريدك@example.com",
          message: "أخبرني عن مشروعك أو فكرتك أو ما تبحث عنه..."
        },
        services: {
          erp: "نظام ERP / POS مخصص",
          mobile: "تطبيق جوال React Native",
          web: "تطبيق ويب",
          ai: "دمج ذكاء اصطناعي",
          consulting: "استشارات تقنية",
          job: "وظيفة / دوام كامل"
        }
      },
      footer: {
        rights: "جميع الحقوق محفوظة.",
        builtWith: "تم التطوير باستخدام React و TypeScript و Tailwind CSS و Framer Motion."
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
