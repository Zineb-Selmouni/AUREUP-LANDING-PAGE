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
          { text: 'Transformez', accent: false },
          { text: 'vos finances', accent: true },
        ],
        [
          { text: 'en décisions', accent: false },
          { text: 'plus sereines.', accent: true },
        ],
      ],
      subtitle: 'Aure Up réunit visibilité, pédagogie et recommandations intelligentes dans une expérience pensée pour aider les utilisateurs marocains à mieux piloter leur argent au quotidien.',
      cta: 'Rejoindre la liste d’attente',
      primaryPhoneAlt: 'Aperçu du tableau de bord Aure Up',
      secondaryPhoneAlt: 'Aperçu de l’application Aure Up',
      mobilePhoneAlt: 'Aperçu mobile de l’application Aure Up',
      trustPills: ['Pensé pour le Maroc', 'Analyses IA utiles', 'Confidentialité d’abord'],
      metrics: [
        { value: '24/7', label: 'clarté sur vos dépenses' },
        { value: '3', label: 'piliers dans une seule app' },
        { value: '100%', label: 'expérience mobile-first' },
      ],
      insightTitle: 'Vue financière instantanée',
      insightBody: 'Repérez vos tendances, vos marges de progression et vos prochaines priorités dès l’ouverture.',
      insightItems: ['Dépenses catégorisées', 'Objectifs visibles', 'Conseils contextualisés'],
    },
    problem: {
      eyebrow: 'Le problème',
      title: 'Aujourd’hui, la gestion financière manque souvent de lisibilité.',
      intro: 'Entre plusieurs comptes, peu de repères concrets et des décisions à prendre seul, beaucoup avancent sans vision claire. Aure Up remet de l’ordre, du contexte et du sens dans chaque mouvement.',
      ariaLabel: 'Défis financiers courants',
      items: [
        'Des comptes et des dépenses éparpillés compliquent la lecture globale.',
        'Les habitudes de consommation sont difficiles à décoder sans repères visuels.',
        'L’épargne et l’investissement restent abstraits pour une grande partie du public.',
        'Les décisions du quotidien se prennent sans accompagnement clair.',
      ],
      highlight: 'Sans tableau de bord cohérent, il devient difficile de voir ce qui mérite votre attention en premier.',
    },
    features: {
      eyebrow: 'Ce qu’Aure Up apporte',
      title: 'Une plateforme élégante, pédagogique et réellement actionnable',
      subtitle: 'Chaque fonctionnalité a été conçue pour offrir plus de calme, de confiance et de clarté au fil du temps.',
      items: [
        {
          title: 'Suivi intelligent des dépenses',
          desc: 'Visualisez vos flux, vos catégories dominantes et vos évolutions mensuelles sans effort.',
        },
        {
          title: 'Éducation financière accessible',
          desc: 'Apprenez les fondamentaux grâce à des parcours courts, concrets et utiles dans la vraie vie.',
        },
        {
          title: 'Analyses assistées par IA',
          desc: 'Recevez des recommandations pertinentes pour ajuster vos choix et repérer des opportunités.',
        },
        {
          title: 'Objectifs et projection d’avenir',
          desc: 'Construisez une trajectoire claire avec des jalons visibles et des objectifs qui restent motivants.',
        },
      ],
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Un parcours fluide du suivi quotidien vers une meilleure maîtrise.',
      steps: [
        {
          num: 1,
          title: 'Centralisez vos données',
          desc: 'Ajoutez vos revenus, vos dépenses et vos postes clés pour démarrer avec une base claire.',
        },
        {
          num: 2,
          title: 'Comprenez ce qui se passe',
          desc: 'Des vues lisibles révèlent les tendances importantes, les écarts et les points d’attention.',
        },
        {
          num: 3,
          title: 'Passez à l’action',
          desc: 'Aure Up vous guide avec des recommandations concrètes pour mieux arbitrer vos prochaines décisions.',
        },
      ],
      panelTitle: 'Une expérience pensée pour guider, pas pour surcharger',
      panelBody: 'Chaque écran hiérarchise l’information pour réduire le bruit, mettre en avant les bons signaux et aider à agir rapidement.',
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Les premiers retours confirment une expérience plus rassurante et plus claire',
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
          quote: 'Pour la première fois, j’ai eu l’impression de vraiment comprendre mes habitudes de dépense au lieu de juste les subir.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Testeuse pilote, Rabat',
          quote: 'Le design inspire confiance et les informations arrivent dans le bon ordre. Tout paraît plus simple.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Testeur pilote, Marrakech',
          quote: 'J’aime le mélange entre suivi, éducation et conseils. On sent une vraie direction produit.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Early access',
      title: 'Prenez de l’avance sur le lancement d’Aure Up',
      subtitle: 'Inscrivez-vous pour recevoir les annonces produit, les accès prioritaires et les premières invitations privées.',
      benefitsAria: 'Avantages de la liste d’attente',
      benefits: [
        'Accès prioritaire aux premières versions',
        'Actualités produit et coulisses du lancement',
        'Offre de lancement réservée aux premiers inscrits',
        'Invitation anticipée aux tests privés',
      ],
      placeholder: 'Entrez votre adresse e-mail',
      cta: 'Demander mon accès',
      privacy: 'Aucun spam. Seulement des nouvelles utiles et ponctuelles.',
      invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
      unavailable: 'Le formulaire est prêt à être relié à votre backend de collecte.',
      cardTitle: 'Pourquoi rejoindre maintenant ?',
      cardBody: 'Les premiers inscrits reçoivent les nouveautés en avant-première et aident à façonner les priorités produit.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Les réponses utiles avant le lancement',
      subtitle: 'Voici les points que les visiteurs demandent le plus souvent avant de rejoindre la liste d’attente.',
      items: [
        {
          q: 'Quand Aure Up sera-t-elle disponible ?',
          a: 'Aure Up est en cours de développement. Les personnes inscrites recevront les premières invitations dès que la version de lancement sera prête.',
        },
        {
          q: 'L’application sera-t-elle gratuite ?',
          a: 'Une période d’essai gratuite est prévue, suivie d’une offre premium abordable pour soutenir une expérience de qualité et des fonctionnalités évolutives.',
        },
        {
          q: 'Mes données financières sont-elles sécurisées ?',
          a: 'Oui. La sécurité, la confidentialité et une approche privacy-first font partie des principes de base du produit.',
        },
        {
          q: 'Aure Up est-elle pensée pour le Maroc ?',
          a: 'Oui. Le produit a d’abord été imaginé pour répondre aux usages, aux besoins et au contexte financier marocain.',
        },
        {
          q: 'Sera-t-elle disponible sur iPhone et Android ?',
          a: 'Oui. Le lancement est prévu sur les deux plateformes mobiles.',
        },
      ],
      asideTitle: 'Une FAQ simple, comme le produit',
      asideBody: 'Nous voulons une plateforme rassurante, lisible et utile dès les premières secondes. Cette même logique guide aussi cette page.',
    },
    footer: {
      description: 'Aure Up aide chacun à construire une relation plus claire et plus sereine avec son argent.',
      madeBy: 'Conçu par AEQO Technologies',
      points: [
        'Expérience produit pensée pour le mobile',
        'Conçue pour les habitudes financières marocaines',
        'Direction produit attentive à la confidentialité',
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
          { text: 'Turn your finances', accent: false },
          { text: 'into calm clarity', accent: true },
        ],
        [
          { text: 'and better', accent: false },
          { text: 'daily decisions.', accent: true },
        ],
      ],
      subtitle: 'Aure Up brings spending visibility, financial education, and intelligent guidance into one polished mobile experience built to help Moroccan users feel more in control of their money.',
      cta: 'Join the waitlist',
      primaryPhoneAlt: 'Aure Up dashboard preview',
      secondaryPhoneAlt: 'Aure Up mobile experience preview',
      mobilePhoneAlt: 'Aure Up mobile preview',
      trustPills: ['Built for Morocco', 'Useful AI guidance', 'Privacy by design'],
      metrics: [
        { value: '24/7', label: 'visibility on your money' },
        { value: '3', label: 'core pillars in one app' },
        { value: '100%', label: 'mobile-first experience' },
      ],
      insightTitle: 'Instant financial overview',
      insightBody: 'See trends, progress, and your next priorities as soon as you open the app.',
      insightItems: ['Categorized spending', 'Visible goals', 'Contextual guidance'],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Most financial tools still feel fragmented, noisy, and hard to trust.',
      intro: 'People often manage money across scattered accounts, unclear habits, and low-confidence decisions. Aure Up was designed to replace that mess with structure, context, and calm.',
      ariaLabel: 'Common money challenges',
      items: [
        'Scattered accounts make it hard to read the full picture.',
        'Spending habits stay vague when there is no strong visual guidance.',
        'Saving and investing still feel abstract for many users.',
        'Daily decisions happen without practical support or context.',
      ],
      highlight: 'Without a coherent dashboard, it is difficult to know what deserves attention first.',
    },
    features: {
      eyebrow: 'What Aure Up delivers',
      title: 'A refined platform that feels informative, practical, and premium',
      subtitle: 'Every feature is shaped to create more confidence, better habits, and a more polished product experience.',
      items: [
        {
          title: 'Smart spending visibility',
          desc: 'Track movement, categories, and monthly shifts through elegant and readable dashboards.',
        },
        {
          title: 'Accessible financial education',
          desc: 'Learn the essentials through short learning flows designed for real everyday situations.',
        },
        {
          title: 'AI-assisted insights',
          desc: 'Receive tailored suggestions that help you improve habits and spot useful opportunities.',
        },
        {
          title: 'Goals and future planning',
          desc: 'Build a stronger financial direction with visible milestones and motivating progress.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'A simple flow from tracking your money to acting with more confidence.',
      steps: [
        {
          num: 1,
          title: 'Bring everything together',
          desc: 'Add income, expenses, and key categories to start with a clear baseline.',
        },
        {
          num: 2,
          title: 'Understand the signals',
          desc: 'Readable views reveal trends, imbalances, and the areas that matter most.',
        },
        {
          num: 3,
          title: 'Make smarter next moves',
          desc: 'Aure Up turns insights into concrete recommendations you can act on quickly.',
        },
      ],
      panelTitle: 'Designed to guide, not overwhelm',
      panelBody: 'Each screen prioritizes the right information so users can focus on what matters and move forward with confidence.',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Early testers describe a product that feels clearer, calmer, and easier to trust',
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
          quote: 'For the first time, I felt like I actually understood my spending habits instead of reacting to them.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Pilot tester, Rabat',
          quote: 'The design feels reassuring and the information comes in the right order. Everything feels simpler.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Pilot tester, Marrakech',
          quote: 'I like the combination of tracking, education, and guidance. It feels like a real product direction.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Early access',
      title: 'Get ahead of the Aure Up launch',
      subtitle: 'Join the list to receive product updates, priority access, and early private invitations.',
      benefitsAria: 'Early access benefits',
      benefits: [
        'Priority access to the first releases',
        'Product updates and launch behind-the-scenes',
        'Launch offer reserved for early signups',
        'Private testing invitations before the public rollout',
      ],
      placeholder: 'Enter your email address',
      cta: 'Request early access',
      privacy: 'No spam. Only useful and occasional updates.',
      invalidEmail: 'Please enter a valid email address.',
      unavailable: 'This form is ready to be connected to your collection backend.',
      cardTitle: 'Why join now?',
      cardBody: 'Early members see new product updates first and help shape what matters most before launch.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Helpful answers before launch',
      subtitle: 'These are the questions visitors ask most often before joining the waitlist.',
      items: [
        {
          q: 'When will Aure Up launch?',
          a: 'Aure Up is currently in development. Waitlist members will receive the first invitations as soon as the launch-ready version is available.',
        },
        {
          q: 'Will the app be free?',
          a: 'A free trial is planned first, followed by an affordable premium offering designed to support a high-quality and evolving product.',
        },
        {
          q: 'Is my financial data secure?',
          a: 'Yes. Security, privacy, and privacy-first product decisions are core principles behind the platform.',
        },
        {
          q: 'Is Aure Up designed for Morocco?',
          a: 'Yes. The experience is being shaped first around Moroccan users, habits, and financial realities.',
        },
        {
          q: 'Will it be available on iPhone and Android?',
          a: 'Yes. The launch is planned for both mobile platforms.',
        },
      ],
      asideTitle: 'A simple FAQ, like the product itself',
      asideBody: 'We want the platform to feel reassuring, legible, and useful from the first moments. This page follows the same philosophy.',
    },
    footer: {
      description: 'Aure Up helps people build a clearer and calmer relationship with money.',
      madeBy: 'Made by AEQO Technologies',
      points: [
        'Mobile-first product experience',
        'Built for Moroccan financial habits',
        'Privacy-minded product direction',
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
          { text: 'حوّل أموالك إلى', accent: false },
          { text: 'وضوح وهدوء', accent: true },
        ],
        [
          { text: 'وقرارات يومية', accent: false },
          { text: 'أذكى.', accent: true },
        ],
      ],
      subtitle: 'يجمع Aure Up بين تتبع المصروفات، والتثقيف المالي، والتوجيه الذكي داخل تجربة أنيقة تساعد المستخدمين في المغرب على الشعور بمزيد من السيطرة على أموالهم.',
      cta: 'انضم إلى قائمة الانتظار',
      primaryPhoneAlt: 'معاينة لوحة معلومات Aure Up',
      secondaryPhoneAlt: 'معاينة تجربة Aure Up على الهاتف',
      mobilePhoneAlt: 'معاينة تطبيق Aure Up',
      trustPills: ['مصمم للمغرب', 'توجيه ذكي مفيد', 'الخصوصية أولاً'],
      metrics: [
        { value: '24/7', label: 'رؤية أوضح لأموالك' },
        { value: '3', label: 'ركائز أساسية في تطبيق واحد' },
        { value: '100%', label: 'تجربة موجهة للهاتف' },
      ],
      insightTitle: 'نظرة مالية فورية',
      insightBody: 'اكتشف الاتجاهات والتقدم والأولويات القادمة منذ اللحظة الأولى.',
      insightItems: ['مصروفات مصنفة', 'أهداف واضحة', 'توجيه مناسب للسياق'],
    },
    problem: {
      eyebrow: 'المشكلة',
      title: 'أدوات المال الحالية ما زالت مشتتة ومربكة وصعبة الثقة.',
      intro: 'كثير من الناس يديرون أموالهم بين حسابات متفرقة وعادات غير واضحة وقرارات منخفضة الثقة. صُمم Aure Up ليستبدل هذا التشويش بالوضوح والتنظيم والهدوء.',
      ariaLabel: 'تحديات مالية شائعة',
      items: [
        'تعدد الحسابات يجعل الصورة الكاملة غير واضحة.',
        'عادات الإنفاق تبقى ضبابية عندما تغيب الإشارات البصرية القوية.',
        'الادخار والاستثمار يبدوان مفهومين معقدين لكثير من المستخدمين.',
        'القرارات اليومية تُتخذ غالباً دون دعم عملي أو سياق واضح.',
      ],
      highlight: 'من دون لوحة تحكم مترابطة يصبح من الصعب معرفة ما يستحق الانتباه أولاً.',
    },
    features: {
      eyebrow: 'ما الذي يقدمه Aure Up',
      title: 'منصة أنيقة وعملية تمنحك فهماً أفضل لأموالك',
      subtitle: 'كل ميزة صُممت لتبني ثقة أكبر وعادات أفضل وتجربة أكثر احترافية بمرور الوقت.',
      items: [
        {
          title: 'رؤية ذكية للمصروفات',
          desc: 'تابع الحركة المالية والفئات والتغيرات الشهرية من خلال لوحات واضحة وأنيقة.',
        },
        {
          title: 'تثقيف مالي سهل الوصول',
          desc: 'تعلم الأساسيات عبر مسارات قصيرة وعملية تناسب الحياة اليومية.',
        },
        {
          title: 'رؤى مدعومة بالذكاء الاصطناعي',
          desc: 'احصل على اقتراحات مناسبة تساعدك على تحسين عاداتك واكتشاف فرص مفيدة.',
        },
        {
          title: 'أهداف وتخطيط للمستقبل',
          desc: 'ابنِ مساراً مالياً أقوى عبر مراحل واضحة وتقدم ملموس.',
        },
      ],
    },
    how: {
      eyebrow: 'كيف يعمل',
      title: 'مسار بسيط ينقلك من متابعة المال إلى اتخاذ قرارات أوثق.',
      steps: [
        {
          num: 1,
          title: 'اجمع كل شيء في مكان واحد',
          desc: 'أضف الدخل والمصروفات والفئات الأساسية لتبدأ من قاعدة واضحة.',
        },
        {
          num: 2,
          title: 'افهم الإشارات المهمة',
          desc: 'تكشف الواجهات الواضحة الاتجاهات والاختلالات والمناطق التي تستحق التركيز.',
        },
        {
          num: 3,
          title: 'اتخذ الخطوة التالية بذكاء',
          desc: 'يحوّل Aure Up الرؤى إلى توصيات عملية يمكنك تنفيذها بسرعة.',
        },
      ],
      panelTitle: 'مصمم ليوجهك لا ليرهقك',
      panelBody: 'كل شاشة ترتب المعلومات حسب الأولوية حتى يتمكن المستخدم من التركيز على ما يهم والتحرك بثقة.',
    },
    testimonials: {
      eyebrow: 'آراء المستخدمين',
      title: 'المستخدمون الأوائل يصفون تجربة أوضح وأكثر هدوءاً وأسهل ثقة',
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
          quote: 'لأول مرة شعرت أنني أفهم عادات إنفاقي فعلاً بدل أن أتعامل معها بشكل عشوائي.',
        },
        {
          initials: 'س',
          name: 'سلمى',
          role: 'مختبرة أولية، الرباط',
          quote: 'التصميم مطمئن والمعلومات تأتي بالترتيب الصحيح. كل شيء يبدو أبسط.',
        },
        {
          initials: 'أ',
          name: 'أمين',
          role: 'مختبر أولي، مراكش',
          quote: 'أحب الجمع بين التتبع والتثقيف والتوجيه في مكان واحد. هناك رؤية منتج واضحة.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'وصول مبكر',
      title: 'احصل على أفضلية قبل إطلاق Aure Up',
      subtitle: 'انضم إلى القائمة لتصلك تحديثات المنتج، وأولوية الوصول، والدعوات الخاصة المبكرة.',
      benefitsAria: 'مزايا الوصول المبكر',
      benefits: [
        'أولوية الوصول إلى الإصدارات الأولى',
        'تحديثات المنتج وكواليس الإطلاق',
        'عرض إطلاق مخصص للمشتركين الأوائل',
        'دعوات خاصة للاختبارات قبل الإطلاق العام',
      ],
      placeholder: 'أدخل بريدك الإلكتروني',
      cta: 'اطلب الوصول المبكر',
      privacy: 'من دون رسائل مزعجة. فقط تحديثات مفيدة وعلى فترات متباعدة.',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      unavailable: 'هذا النموذج جاهز للربط مع الواجهة الخلفية الخاصة بك.',
      cardTitle: 'لماذا تنضم الآن؟',
      cardBody: 'الأعضاء الأوائل يشاهدون تحديثات المنتج أولاً ويساعدون في تحديد الأولويات قبل الإطلاق.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'إجابات مفيدة قبل الإطلاق',
      subtitle: 'هذه أكثر الأسئلة التي يطرحها الزوار قبل الانضمام إلى قائمة الانتظار.',
      items: [
        {
          q: 'متى سيتم إطلاق Aure Up؟',
          a: 'Aure Up ما زال قيد التطوير. سيتلقى المشتركون في القائمة أولى الدعوات بمجرد جاهزية النسخة الأولى للإطلاق.',
        },
        {
          q: 'هل سيكون التطبيق مجانياً؟',
          a: 'الخطة الحالية تتضمن فترة تجريبية مجانية أولاً، ثم اشتراكاً مدفوعاً بسعر مناسب لدعم تجربة عالية الجودة ومتطورة.',
        },
        {
          q: 'هل بياناتي المالية آمنة؟',
          a: 'نعم. الأمان والخصوصية واتخاذ قرارات منتج تحترم الخصوصية تمثل مبادئ أساسية في المنصة.',
        },
        {
          q: 'هل صُمم Aure Up للمغرب؟',
          a: 'نعم. يتم تصميم التجربة أولاً وفق احتياجات المستخدمين في المغرب وعاداتهم وواقعهم المالي.',
        },
        {
          q: 'هل سيتوفر على iPhone و Android؟',
          a: 'نعم. الإطلاق مخطط له على المنصتين.',
        },
      ],
      asideTitle: 'FAQ بسيطة مثل المنتج نفسه',
      asideBody: 'نريد أن تبدو المنصة مطمئنة وواضحة ومفيدة منذ اللحظات الأولى. وهذه الصفحة تتبع الفلسفة نفسها.',
    },
    footer: {
      description: 'يساعد Aure Up الناس على بناء علاقة أوضح وأكثر هدوءاً مع المال.',
      madeBy: 'من تطوير AEQO Technologies',
      points: [
        'تجربة منتج مصممة للهاتف أولاً',
        'مبنية حول العادات المالية في المغرب',
        'اتجاه منتج يراعي الخصوصية',
      ],
    },
  },
}

export function getCopy(language) {
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}
