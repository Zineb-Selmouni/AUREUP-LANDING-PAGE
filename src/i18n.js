export const LANGUAGE_STORAGE_KEY = 'aureup-language'
export const DEFAULT_LANGUAGE = 'fr'

export const LANGUAGES = [
  { id: 'fr', label: 'Français' },
  { id: 'en', label: 'English' },
  { id: 'ar', label: 'العربية' },
]

const RTL_LANGUAGES = new Set(['ar'])

export function isRTL(language) {
  return RTL_LANGUAGES.has(language)
}

export function getStoredLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return LANGUAGES.some(({ id }) => id === savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE
}

export function applyLanguage(language) {
  if (typeof document === 'undefined') return

  const dir = isRTL(language) ? 'rtl' : 'ltr'
  document.documentElement.lang = language
  document.documentElement.dir = dir
  document.body.setAttribute('dir', dir)
  document.body.setAttribute('data-language', language)
}

export const translations = {
  fr: {
    nav: {
      links: [
        { label: 'Problème', href: '#problem' },
        { label: 'Solution', href: '#features' },
        { label: 'Parcours', href: '#how' },
        { label: 'FAQ', href: '#faq' },
      ],
      languageSelector: 'Sélecteur de langue',
      toggleMenu: 'Ouvrir le menu',
      switchThemeToLight: 'Passer au mode clair',
      switchThemeToDark: 'Passer au mode sombre',
    },
    hero: {
      badge: 'Bientôt sur l’App Store et Google Play',
      titleLines: [
        [
          { text: 'Pilotez votre', accent: false },
          { text: 'argent', accent: true },
        ],
        [
          { text: 'avec plus de', accent: false },
          { text: 'clarté.', accent: true },
        ],
      ],
      subtitle: 'Suivi clair, conseils utiles, meilleures décisions. Aure Up aide à mieux gérer son argent au quotidien.',
      cta: 'Demander l’accès',
      primaryPhoneAlt: 'Aperçu du tableau de bord Aure Up',
      mobilePhoneAlt: 'Aperçu mobile de l’application Aure Up',
    },
    problem: {
      eyebrow: 'Le problème',
      title: 'Gérer son argent reste trop flou.',
      intro: 'Comptes dispersés, habitudes mal lues, décisions sans repère : le pilotage manque encore de clarté.',
      ariaLabel: 'Défis financiers courants',
      items: [
        'Des comptes séparés brouillent la vue d’ensemble.',
        'Les dépenses restent difficiles à lire.',
        'Épargner ou investir manque de repères simples.',
        'Les décisions se prennent souvent sans contexte utile.',
      ],
      highlight: 'Sans vue claire, difficile de savoir quoi corriger d’abord.',
      visual: {
        caption: 'Bruit financier',
        status: 'Manque de clarté',
        summaryTitle: 'Trop de signaux',
        legend: ['Compte courant', 'Activité carte', 'Épargne'],
      },
    },
    features: {
      eyebrow: 'Ce qu’Aure Up apporte',
      title: 'Voir. Comprendre. Décider.',
      subtitle: 'Aure Up transforme les données financières en actions simples et utiles.',
      items: [
        {
          title: 'Vision nette des dépenses',
          desc: 'Repérez vite les catégories, écarts et tendances qui comptent.',
        },
        {
          title: 'Éducation financière utile',
          desc: 'Des formats courts pour comprendre l’essentiel sans friction.',
        },
        {
          title: 'Analyses IA concrètes',
          desc: 'Des recommandations utiles pour ajuster vos choix au bon moment.',
        },
        {
          title: 'Objectifs qui avancent',
          desc: 'Suivez vos priorités avec des jalons clairs et motivants.',
        },
      ],
      visuals: {
        transactions: [
          { label: 'Carrefour', meta: 'Courses', amount: '-340 MAD' },
          { label: 'Netflix', meta: 'Abonnements', amount: '-119 MAD' },
          { label: 'Taxi', meta: 'Transport', amount: '-85 MAD' },
        ],
        lessons: [
          { title: 'Bases du budget', meta: 'Leçon de 8 min' },
          { title: 'Réflexe d’épargne', meta: 'Parcours interactif' },
        ],
        ai: {
          bubble: 'Vos dépenses sont plus faibles cette semaine. Vous pouvez allouer davantage à votre épargne.',
          tags: ['Restaurants -18 %', 'Épargne sur la bonne voie'],
        },
        goal: {
          title: 'Fonds d’urgence',
          progressLabel: '7 300 MAD sur 10 000 MAD',
          progressValue: '73%',
        },
      },
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Suivez. Comprenez. Avancez.',
      steps: [
        {
          num: 1,
          title: 'Centralisez',
          desc: 'Regroupez revenus, dépenses et repères clés.',
        },
        {
          num: 2,
          title: 'Lisez les signaux',
          desc: 'Repérez vite les tendances, écarts et points d’attention.',
        },
        {
          num: 3,
          title: 'Agissez mieux',
          desc: 'Passez à l’action avec des recommandations concrètes.',
        },
      ],
      panelTitle: 'Pensé pour guider, pas pour distraire',
      panelBody: 'Chaque écran va à l’essentiel pour aider à décider vite et bien.',
      phoneAlt: 'Aperçu du parcours Aure Up',
      overlays: {
        top: {
          title: 'Rythme hebdomadaire',
          body: 'Les signaux arrivent dans le bon ordre',
        },
        bottom: {
          title: 'La confiance grandit avec le temps',
          body: 'Petits pas, tendances plus claires, décisions plus avisées',
        },
      },
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Les premiers retours confirment une expérience plus claire.',
      ratingLabel: '5.0',
      stats: [
        { value: '4.9/5', label: 'ressenti global' },
        { value: '92%', label: 'comprennent mieux leurs dépenses' },
        { value: '3x', label: 'plus de visibilité perçue' },
      ],
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Testeur pilote, Casablanca',
          quote: 'J’ai enfin une lecture claire de mes dépenses.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Testeuse pilote, Rabat',
          quote: 'Le design rassure. Tout arrive dans le bon ordre.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Testeur pilote, Marrakech',
          quote: 'Suivi, pédagogie, conseils : l’ensemble est cohérent.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Accès prioritaire',
      title: 'Prenez de l’avance sur Aure Up',
      subtitle: 'Inscrivez-vous pour recevoir les premiers accès et les annonces clés.',
      benefitsAria: 'Avantages de la liste d’attente',
      benefits: [
        'Accès prioritaire au lancement',
        'Nouveautés produit en avant-première',
        'Offre réservée aux premiers inscrits',
        'Invitations aux tests privés',
      ],
      placeholder: 'Entrez votre adresse e-mail',
      cta: 'Demander l’accès',
      privacy: 'Aucun spam. Seulement l’essentiel.',
      invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
      unavailable: 'Le formulaire attend encore sa connexion backend.',
      cardTitle: 'Pourquoi maintenant ?',
      cardBody: 'Les premiers inscrits voient les nouveautés en premier et influencent les priorités produit.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Avant le lancement, l’essentiel.',
      subtitle: 'Les réponses clés avant de rejoindre la liste d’attente.',
      items: [
        {
          q: 'Quand Aure Up sera-t-elle disponible ?',
          a: 'Aure Up est en développement. Les inscrits recevront les premières invitations dès que la version sera prête.',
        },
        {
          q: 'L’application sera-t-elle gratuite ?',
          a: 'Une période d’essai gratuite est prévue, puis une offre premium abordable.',
        },
        {
          q: 'Mes données financières sont-elles sécurisées ?',
          a: 'Oui. Sécurité, confidentialité et privacy-first font partie du socle produit.',
        },
        {
          q: 'Aure Up est-elle pensée pour le Maroc ?',
          a: 'Oui. Aure Up est pensée d’abord pour les usages et réalités du marché marocain.',
        },
        {
          q: 'Sera-t-elle disponible sur iPhone et Android ?',
          a: 'Oui. Le lancement est prévu sur les deux plateformes mobiles.',
        },
      ],
      asideTitle: 'Simple, comme le produit',
      asideBody: 'Clarté, confiance, utilité : la page suit la même logique que le produit.',
    },
    footer: {
      description: 'Aure Up rend la gestion de l’argent plus claire et plus sereine.',
      madeBy: 'Conçu par AEQO Technologies',
      points: [
        'Pensé mobile-first',
        'Conçu pour le Maroc',
        'Confidentialité en priorité',
      ],
    },
  },
  en: {
    nav: {
      links: [
        { label: 'Problem', href: '#problem' },
        { label: 'Solution', href: '#features' },
        { label: 'Journey', href: '#how' },
        { label: 'FAQ', href: '#faq' },
      ],
      languageSelector: 'Language selector',
      toggleMenu: 'Toggle menu',
      switchThemeToLight: 'Switch to light mode',
      switchThemeToDark: 'Switch to dark mode',
    },
    hero: {
      badge: 'Coming soon to the App Store and Google Play',
      titleLines: [
        [
          { text: 'Take control', accent: false },
          { text: 'of your money', accent: true },
        ],
        [
          { text: 'with more', accent: false },
          { text: 'clarity.', accent: true },
        ],
      ],
      subtitle: 'Clearer tracking, useful guidance, smarter decisions. Aure Up helps people manage money with confidence.',
      cta: 'Request access',
      primaryPhoneAlt: 'Aure Up dashboard preview',
      mobilePhoneAlt: 'Aure Up mobile preview',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Money management still feels too unclear.',
      intro: 'Scattered accounts, vague habits, and low-confidence decisions still make money harder to manage than it should be.',
      ariaLabel: 'Common money challenges',
      items: [
        'Scattered accounts blur the full picture.',
        'Spending habits stay hard to read.',
        'Saving and investing still feel abstract.',
        'Daily decisions happen without enough context.',
      ],
      highlight: 'Without a clear view, it is hard to know what to fix first.',
      visual: {
        caption: 'Financial noise',
        status: 'Needs clarity',
        summaryTitle: 'Too many signals',
        legend: ['Checking', 'Card activity', 'Savings'],
      },
    },
    features: {
      eyebrow: 'What Aure Up delivers',
      title: 'See. Understand. Decide.',
      subtitle: 'Aure Up turns financial data into simple, useful action.',
      items: [
        {
          title: 'Clear spending visibility',
          desc: 'See the categories, shifts, and signals that matter fast.',
        },
        {
          title: 'Useful financial learning',
          desc: 'Short formats that teach the essentials without friction.',
        },
        {
          title: 'Practical AI insights',
          desc: 'Get useful recommendations at the right moment.',
        },
        {
          title: 'Goals that move',
          desc: 'Track priorities with visible milestones and progress.',
        },
      ],
      visuals: {
        transactions: [
          { label: 'Carrefour', meta: 'Groceries', amount: '-340 MAD' },
          { label: 'Netflix', meta: 'Subscriptions', amount: '-119 MAD' },
          { label: 'Taxi', meta: 'Transport', amount: '-85 MAD' },
        ],
        lessons: [
          { title: 'Budget basics', meta: '8 min lesson' },
          { title: 'Saving mindset', meta: 'Interactive path' },
        ],
        ai: {
          bubble: 'Spending is lower this week. You can safely move more toward savings.',
          tags: ['Dining -18%', 'Savings on track'],
        },
        goal: {
          title: 'Emergency fund',
          progressLabel: '7,300 MAD of 10,000 MAD',
          progressValue: '73%',
        },
      },
    },
    how: {
      eyebrow: 'How it works',
      title: 'Track. Read. Move.',
      steps: [
        {
          num: 1,
          title: 'Bring it together',
          desc: 'Add income, expenses, and core categories.',
        },
        {
          num: 2,
          title: 'Read the signals',
          desc: 'Spot trends, imbalances, and key priorities quickly.',
        },
        {
          num: 3,
          title: 'Act smarter',
          desc: 'Turn insight into action with concrete guidance.',
        },
      ],
      panelTitle: 'Built to guide, not distract',
      panelBody: 'Each screen stays focused so users can decide quickly and move with confidence.',
      phoneAlt: 'Aure Up journey preview',
      overlays: {
        top: {
          title: 'Weekly rhythm',
          body: 'Signals arrive in the right order',
        },
        bottom: {
          title: 'Confidence builds over time',
          body: 'Small steps, clearer patterns, smarter choices',
        },
      },
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Early testers describe a product that feels clearer and easier to trust.',
      ratingLabel: '5.0',
      stats: [
        { value: '4.9/5', label: 'overall feeling' },
        { value: '92%', label: 'better spending awareness' },
        { value: '3x', label: 'more perceived visibility' },
      ],
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Pilot tester, Casablanca',
          quote: 'For the first time, I can actually read my spending.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Pilot tester, Rabat',
          quote: 'The design feels reassuring. Everything lands in the right order.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Pilot tester, Marrakech',
          quote: 'Tracking, learning, guidance. The product direction feels clear.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Early access',
      title: 'Get ahead of Aure Up',
      subtitle: 'Join the list for first access and key product updates.',
      benefitsAria: 'Early access benefits',
      benefits: [
        'Priority launch access',
        'Early product updates',
        'Offer reserved for early signups',
        'Private testing invites',
      ],
      placeholder: 'Enter your email address',
      cta: 'Request early access',
      privacy: 'No spam. Just the essentials.',
      invalidEmail: 'Please enter a valid email address.',
      unavailable: 'This form is still waiting for backend connection.',
      cardTitle: 'Why now?',
      cardBody: 'Early members see updates first and help shape product priorities.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Before launch, the essentials.',
      subtitle: 'The key answers before joining the waitlist.',
      items: [
        {
          q: 'When will Aure Up launch?',
          a: 'Aure Up is in development. Waitlist members will receive the first invitations as soon as the product is ready.',
        },
        {
          q: 'Will the app be free?',
          a: 'A free trial is planned first, followed by an affordable premium offer.',
        },
        {
          q: 'Is my financial data secure?',
          a: 'Yes. Security, privacy, and privacy-first decisions are core product principles.',
        },
        {
          q: 'Is Aure Up designed for Morocco?',
          a: 'Yes. Aure Up is designed first around Moroccan users and financial realities.',
        },
        {
          q: 'Will it be available on iPhone and Android?',
          a: 'Yes. The launch is planned for both mobile platforms.',
        },
      ],
      asideTitle: 'Simple, like the product',
      asideBody: 'Clarity, trust, usefulness. The page follows the same logic as the product.',
    },
    footer: {
      description: 'Aure Up makes money management clearer and calmer.',
      madeBy: 'Made by AEQO Technologies',
      points: [
        'Built mobile-first',
        'Designed for Morocco',
        'Privacy-led by design',
      ],
    },
  },
  ar: {
    nav: {
      links: [
        { label: 'المشكلة', href: '#problem' },
        { label: 'الحل', href: '#features' },
        { label: 'المسار', href: '#how' },
        { label: 'الأسئلة', href: '#faq' },
      ],
      languageSelector: 'اختيار اللغة',
      toggleMenu: 'فتح القائمة',
      switchThemeToLight: 'التبديل إلى الوضع الفاتح',
      switchThemeToDark: 'التبديل إلى الوضع الداكن',
    },
    hero: {
      badge: 'قريباً على App Store و Google Play',
      titleLines: [
        [
          { text: 'سيطر على', accent: false },
          { text: 'أموالك', accent: true },
        ],
        [
          { text: 'بوضوح', accent: false },
          { text: 'أكبر.', accent: true },
        ],
      ],
      subtitle: 'متابعة أوضح، إرشاد مفيد، وقرارات أذكى. Aure Up تساعد على إدارة المال بثقة أكبر كل يوم.',
      cta: 'اطلب الوصول',
      primaryPhoneAlt: 'معاينة لوحة معلومات Aure Up',
      mobilePhoneAlt: 'معاينة تطبيق Aure Up',
    },
    problem: {
      eyebrow: 'المشكلة',
      title: 'إدارة المال ما زالت غير واضحة.',
      intro: 'حسابات متفرقة، عادات غير واضحة، وقرارات بلا مرجع كافٍ.',
      ariaLabel: 'تحديات مالية شائعة',
      items: [
        'تعدد الحسابات يربك الصورة الكاملة.',
        'الإنفاق يبقى صعب القراءة.',
        'الادخار والاستثمار يبدوان معقدين.',
        'القرارات اليومية تُتخذ دون سياق كافٍ.',
      ],
      highlight: 'من دون رؤية واضحة يصعب معرفة ما يجب إصلاحه أولاً.',
      visual: {
        caption: 'ضجيج مالي',
        status: 'بحاجة إلى وضوح',
        summaryTitle: 'إشارات كثيرة',
        legend: ['الحساب الجاري', 'نشاط البطاقة', 'الادخار'],
      },
    },
    features: {
      eyebrow: 'ما الذي يقدمه Aure Up',
      title: 'راقب. افهم. قرر.',
      subtitle: 'Aure Up يحول البيانات المالية إلى خطوات واضحة ومفيدة.',
      items: [
        {
          title: 'رؤية أوضح للمصروفات',
          desc: 'اكتشف بسرعة الفئات والتغيرات والإشارات المهمة.',
        },
        {
          title: 'تعلم مالي مفيد',
          desc: 'محتوى قصير يشرح الأساسيات بلا تعقيد.',
        },
        {
          title: 'رؤى عملية بالذكاء الاصطناعي',
          desc: 'اقتراحات مفيدة تساعدك على التحرك في الوقت المناسب.',
        },
        {
          title: 'أهداف تتحرك معك',
          desc: 'تابع أولوياتك عبر مراحل واضحة وتقدم ملموس.',
        },
      ],
      visuals: {
        transactions: [
          { label: 'Carrefour', meta: 'البقالة', amount: '-340 MAD' },
          { label: 'Netflix', meta: 'الاشتراكات', amount: '-119 MAD' },
          { label: 'Taxi', meta: 'النقل', amount: '-85 MAD' },
        ],
        lessons: [
          { title: 'أساسيات الميزانية', meta: 'درس من 8 دقائق' },
          { title: 'عقلية الادخار', meta: 'مسار تفاعلي' },
        ],
        ai: {
          bubble: 'إنفاقك أقل هذا الأسبوع. يمكنك تحويل جزء أكبر إلى الادخار بأمان.',
          tags: ['المطاعم -18%', 'الادخار على المسار الصحيح'],
        },
        goal: {
          title: 'صندوق الطوارئ',
          progressLabel: '7,300 MAD من 10,000 MAD',
          progressValue: '73%',
        },
      },
    },
    how: {
      eyebrow: 'كيف يعمل',
      title: 'تابع. افهم. تحرك.',
      steps: [
        {
          num: 1,
          title: 'اجمع الكل',
          desc: 'أضف الدخل والمصروفات والفئات الأساسية.',
        },
        {
          num: 2,
          title: 'اقرأ الإشارات',
          desc: 'اكتشف الاتجاهات والاختلالات بسرعة.',
        },
        {
          num: 3,
          title: 'تحرك بذكاء',
          desc: 'حوّل الرؤى إلى خطوات عملية سريعة.',
        },
      ],
      panelTitle: 'مصمم ليرشدك لا ليشتتك',
      panelBody: 'كل شاشة تركز على المهم لتساعدك على القرار بسرعة وثقة.',
      phoneAlt: 'معاينة مسار Aure Up',
      overlays: {
        top: {
          title: 'إيقاع أسبوعي',
          body: 'الإشارات تصل بالترتيب الصحيح',
        },
        bottom: {
          title: 'الثقة تتراكم مع الوقت',
          body: 'خطوات صغيرة، أنماط أوضح، وقرارات أذكى',
        },
      },
    },
    testimonials: {
      eyebrow: 'آراء المستخدمين',
      title: 'الانطباعات الأولى تؤكد تجربة أوضح وأسهل ثقة.',
      ratingLabel: '5.0',
      stats: [
        { value: '4.9/5', label: 'الانطباع العام' },
        { value: '92%', label: 'فهم أفضل للمصروفات' },
        { value: '3x', label: 'إحساس أكبر بالوضوح' },
      ],
      items: [
        {
          initials: 'ي',
          name: 'يوسف',
          role: 'مختبر أولي، الدار البيضاء',
          quote: 'لأول مرة أصبحت أقرأ إنفاقي بوضوح.',
        },
        {
          initials: 'س',
          name: 'سلمى',
          role: 'مختبرة أولية، الرباط',
          quote: 'التصميم مطمئن وكل شيء يصل بالترتيب الصحيح.',
        },
        {
          initials: 'أ',
          name: 'أمين',
          role: 'مختبر أولي، مراكش',
          quote: 'التتبع والتعلم والتوجيه مجتمعون بشكل متماسك.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'وصول أولوية',
      title: 'خذ خطوة قبل إطلاق Aure Up',
      subtitle: 'انضم لتصلك أولى الدعوات وأهم التحديثات.',
      benefitsAria: 'مزايا الوصول المبكر',
      benefits: [
        'أولوية الوصول عند الإطلاق',
        'تحديثات مبكرة عن المنتج',
        'عرض مخصص للأوائل',
        'دعوات للاختبارات الخاصة',
      ],
      placeholder: 'أدخل بريدك الإلكتروني',
      cta: 'اطلب الوصول',
      privacy: 'من دون إزعاج. فقط الأهم.',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      unavailable: 'هذا النموذج ما زال ينتظر الربط مع الواجهة الخلفية.',
      cardTitle: 'لماذا الآن؟',
      cardBody: 'المشتركون الأوائل يرون الجديد أولاً ويساعدون في تحديد الأولويات.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'قبل الإطلاق، هذه أهم الإجابات.',
      subtitle: 'الإجابات الأساسية قبل الانضمام إلى قائمة الانتظار.',
      items: [
        {
          q: 'متى سيتم إطلاق Aure Up؟',
          a: 'Aure Up ما زال قيد التطوير. سيحصل المشتركون على أولى الدعوات فور جاهزية النسخة الأولى.',
        },
        {
          q: 'هل سيكون التطبيق مجانياً؟',
          a: 'نعم، هناك فترة تجريبية مجانية أولاً، ثم اشتراك مدفوع بسعر مناسب.',
        },
        {
          q: 'هل بياناتي المالية آمنة؟',
          a: 'نعم. الأمان والخصوصية جزء أساسي من قرارات المنتج.',
        },
        {
          q: 'هل صُمم Aure Up للمغرب؟',
          a: 'نعم. Aure Up مصمم أولاً وفق احتياجات المستخدمين في المغرب وواقعهم المالي.',
        },
        {
          q: 'هل سيتوفر على iPhone و Android؟',
          a: 'نعم. الإطلاق مخطط له على المنصتين.',
        },
      ],
      asideTitle: 'بسيطة مثل المنتج',
      asideBody: 'وضوح، ثقة، وفائدة. الصفحة تتبع نفس منطق المنتج.',
    },
    footer: {
      description: 'Aure Up يجعل إدارة المال أوضح وأكثر هدوءاً.',
      madeBy: 'من تطوير AEQO Technologies',
      points: [
        'مصمم للهاتف أولاً',
        'مصمم للمغرب',
        'الخصوصية أولاً',
      ],
    },
  },
}

export function getCopy(language) {
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}
