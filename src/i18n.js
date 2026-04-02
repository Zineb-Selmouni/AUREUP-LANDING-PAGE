export const LANGUAGE_STORAGE_KEY = 'aureup-language'
export const DEFAULT_LANGUAGE = 'en'

export const LANGUAGES = [
  { id: 'en', label: 'English' },
  { id: 'fr', label: 'Français' },
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
      badge: 'Available Soon on your App Store !',
      titleLines: [
        [
          { text: 'A Smarter Way', accent: false },
        ],
        [
          { text: 'to Manage', accent: false },
          { text: 'Your Money', accent: true },
        ],
      ],
      subtitle: 'Track your finances, build better habits, and make smarter money decisions every day',
      helper: 'Join the waitlist to get early access when we launch.',
      trustItems: ['Built for Morocco', 'Practical guidance', 'Priority access'],
      cta: 'Request access',
      primaryPhoneAlt: 'Aure Up home screen preview',
      visualNotes: [
        { label: 'At a glance', value: 'See your accounts, expenses, and budget in one clear view.' },
        { label: 'Simple guidance', value: 'Understand your next move without digging through details.' },
      ],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Managing money should not feel this hard',
      intro: 'For many people, the problem is not a lack of effort. It is a lack of structure, visibility, and simple tools to stay on top of everyday money.',
      items: [
        'It is hard to keep track, without the right tools to help.',
        'You try to stay disciplined, but spending is hard to follow over time.',
        'Without a clear view, impulsive spending is harder to avoid.',
        'You want to grow financially, but do not know where to begin.',
      ],
      media: {
        label: 'Everyday reality',
        title: 'When you do not have a clear view, even small decisions feel heavier.',
        body: 'Aure Up is designed to turn that uncertainty into something clearer and easier to act on.',
        alt: 'A man looking concerned while holding his phone.',
      },
      transition: 'If any of this feels familiar, Aure Up was made for you.',
    },
    features: {
      eyebrow: 'The solution',
      title: 'Everything you need to better understand and manage your money',
      subtitle: 'From daily spending to long-term goals, Aure Up helps make money management clearer and easier',
      items: [
        {
          label: 'Tracking',
          title: 'Visualize your money clearly',
          desc: 'Your income, expenses, and trends in one clear view.',
        },
        {
          label: 'Learning',
          title: 'Understand money without the jargon',
          desc: 'Learn the basics of personal finance in a simple and practical way.',
        },
        {
          label: 'Insights',
          title: 'Get useful guidance',
          desc: 'Helpful insights show what needs attention and what to do next.',
          accent: true,
        },
        {
          label: 'Goals',
          title: 'Stay on top of your goals',
          desc: 'Follow your progress and stay motivated for a better financial future.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three simple steps to better money decisions',
      subtitle: 'Everything is designed to help you get started quickly and stay clear on what matters',
      steps: [
        {
          num: 1,
          title: 'Add your finances',
          desc: 'Start by adding your income, expenses, and accounts in one place.',
        },
        {
          num: 2,
          title: 'Understand your habits',
          desc: 'See where your money goes, what is changing, and what needs attention.',
        },
        {
          num: 3,
          title: 'Make better decisions',
          desc: 'Move forward with more confidence thanks to useful insights and simple guidance.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What early testers are saying',
      subtitle: 'Short feedback from people who tried the first version of Aure Up.',
      ratingLabel: 'Pilot tester',
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Casablanca',
          quote: 'For the first time, I can clearly see where my money goes.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Rabat',
          quote: 'It makes managing money feel less overwhelming.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Marrakech',
          quote: 'It gives me useful guidance without too much information.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Early access',
      title: 'Get Early Access to Aure Up',
      subtitle: 'Enter your email to get early invites, product updates, and launch news.',
      benefitsAria: 'Waitlist perks',
      benefits: [
        'Priority Access at Launch',
        'Early Product Updates',
        'Invites to Test New Features',
        'A Special Offer for Early Members',
      ],
      perksTitle: 'What You Get',
      placeholder: 'Enter your email address',
      cta: 'Join the waitlist',
      privacy: 'No spam. Just updates about Aure Up and early access.',
      trust: 'Your email stays private and only helps us contact you about Aure Up.',
      invalidEmail: 'Please enter a valid email address.',
      unavailable: 'This form is ready in the UI and waiting for backend connection.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'A few clear answers before launch.',
      subtitle: 'The essentials, kept short.',
      items: [
        {
          q: 'When will Aure Up launch?',
          a: 'Aure Up is still in development. Waitlist members will receive the first invitations as soon as early access opens.',
        },
        {
          q: 'Will the app be available on iPhone and Android?',
          a: 'Yes. Aure Up is being prepared for both mobile platforms.',
        },
        {
          q: 'Will the app be free?',
          a: 'A free early experience is planned first, followed by a premium offer designed to stay accessible.',
        },
        {
          q: 'Is Aure Up built for Morocco?',
          a: 'Yes. The product is being shaped around Moroccan users, habits, and financial realities.',
        },
        {
          q: 'How is my data handled?',
          a: 'Security, privacy, and careful data handling are core product priorities from the start.',
        },
      ],
    },
    footer: {
      description: 'Built to make money feel simpler, clearer, and easier to manage.',
      madeBy: 'Made by AEQO Technologies',
      points: [
        'Mobile-first',
        'Designed for Morocco',
        'Privacy-minded',
      ],
    },
  },
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
      badge: 'Bientôt disponible sur votre App Store !',
      titleLines: [
        [
          { text: 'Une façon plus intelligente', accent: false },
        ],
        [
          { text: 'de gérer', accent: false },
          { text: 'votre argent', accent: true },
        ],
      ],
      subtitle: 'Suivez vos finances, développez de meilleures habitudes et prenez des décisions financières plus éclairées chaque jour',
      helper: 'Rejoignez la liste d\'attente pour être informé en premier.',
      trustItems: ['Pensé pour le Maroc', 'Conseils utiles', 'Accès prioritaire'],
      cta: 'Demander l\'accès',
      primaryPhoneAlt: 'Aperçu de l\'écran d\'accueil Aure Up',
      visualNotes: [
        { label: 'En un coup d\'œil', value: 'Vos comptes, dépenses et budget en une vue claire.' },
        { label: 'Guidage simple', value: 'Comprenez votre prochaine action sans chercher partout.' },
      ],
    },
    problem: {
      eyebrow: 'Le problème',
      title: 'Gérer son argent ne devrait pas être aussi difficile',
      intro: 'Pour beaucoup de personnes, le problème n\'est pas un manque d\'effort. C\'est un manque de structure, de visibilité et d\'outils simples pour rester maître de son argent au quotidien.',
      items: [
        'Il est difficile de suivre ses finances sans les bons outils.',
        'On essaie de rester discipliné, mais les dépenses sont difficiles à suivre dans le temps.',
        'Sans une vision claire, les dépenses impulsives sont plus difficiles à éviter.',
        'On veut progresser financièrement, mais on ne sait pas par où commencer.',
      ],
      media: {
        label: 'Réalité du quotidien',
        title: 'Quand on n\'a pas une vision claire, même les petites décisions paraissent plus lourdes.',
        body: 'Aure Up est pensée pour transformer cette incertitude en repères plus clairs et plus utiles.',
        alt: 'Un homme préoccupé en regardant son téléphone.',
      },
      transition: 'Si cela vous parle, Aure Up a été conçue pour vous.',
    },
    features: {
      eyebrow: 'La solution',
      title: 'Tout ce dont vous avez besoin pour mieux comprendre et gérer votre argent',
      subtitle: 'Des dépenses quotidiennes aux objectifs à long terme, Aure Up rend la gestion financière plus claire et plus simple',
      items: [
        {
          label: 'Suivi',
          title: 'Visualisez clairement votre argent',
          desc: 'Vos revenus, dépenses et tendances en une vue claire.',
        },
        {
          label: 'Apprentissage',
          title: 'Comprendre l\'argent sans jargon',
          desc: 'Apprenez les bases de la finance personnelle de manière simple et pratique.',
        },
        {
          label: 'Insights',
          title: 'Obtenez des conseils utiles',
          desc: 'Des insights utiles montrent ce qui nécessite attention et quoi faire ensuite.',
          accent: true,
        },
        {
          label: 'Objectifs',
          title: 'Restez à jour avec vos objectifs',
          desc: 'Suivez votre progression et restez motivé pour un meilleur avenir financier.',
        },
      ],
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Trois étapes simples pour de meilleures décisions financières',
      subtitle: 'Tout est conçu pour vous aider à démarrer rapidement et rester clair sur ce qui compte',
      steps: [
        {
          num: 1,
          title: 'Ajoutez vos finances',
          desc: 'Commencez par ajouter vos revenus, dépenses et comptes en un seul endroit.',
        },
        {
          num: 2,
          title: 'Comprenez vos habitudes',
          desc: 'Voyez où va votre argent, ce qui change et ce qui nécessite attention.',
        },
        {
          num: 3,
          title: 'Prenez de meilleures décisions',
          desc: 'Avancez avec plus de confiance grâce à des insights utiles et des conseils simples.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Ce que disent les premiers testeurs',
      subtitle: 'Retours courts de personnes qui ont essayé la première version d\'Aure Up.',
      ratingLabel: 'Testeur pilote',
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Casablanca',
          quote: 'Pour la première fois, je vois clairement où va mon argent.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Rabat',
          quote: 'Ça rend la gestion de l\'argent moins accablante.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Marrakech',
          quote: 'Ça me donne des conseils utiles sans trop d\'informations.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Accès anticipé',
      title: 'Obtenez un accès anticipé à Aure Up',
      subtitle: 'Entrez votre email pour recevoir des invitations anticipées, des mises à jour produit et les actualités du lancement.',
      benefitsAria: 'Avantages de la liste d\'attente',
      benefits: [
        'Accès prioritaire au lancement',
        'Mises à jour anticipées du produit',
        'Invitations à tester les nouvelles fonctionnalités',
        'Une offre spéciale pour les premiers membres',
      ],
      perksTitle: 'Ce que vous obtenez',
      placeholder: 'Entrez votre adresse e-mail',
      cta: 'Rejoindre la liste',
      privacy: 'Pas de spam. Juste des mises à jour sur Aure Up et l\'accès anticipé.',
      trust: 'Votre e-mail reste privé et servira uniquement à vous contacter au sujet d\'Aure Up.',
      invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
      unavailable: 'Le formulaire est prêt côté interface et attend encore sa connexion backend.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quelques réponses claires avant le lancement.',
      subtitle: 'L\'essentiel, en version courte.',
      items: [
        {
          q: 'Quand Aure Up sera-t-elle disponible ?',
          a: 'Aure Up est encore en développement. Les inscrits recevront les premières invitations dès l\'ouverture de l\'accès anticipé.',
        },
        {
          q: 'L\'application sera-t-elle sur iPhone et Android ?',
          a: 'Oui. Aure Up est pensée pour les deux plateformes mobiles.',
        },
        {
          q: 'L\'application sera-t-elle gratuite ?',
          a: 'Une première expérience gratuite est prévue, puis une offre premium pensée pour rester accessible.',
        },
        {
          q: 'Aure Up est-elle conçue pour le Maroc ?',
          a: 'Oui. Le produit est construit autour des usages et réalités financières marocaines.',
        },
        {
          q: 'Comment mes données sont-elles traitées ?',
          a: 'Sécurité, confidentialité et traitement responsable des données font partie des bases du produit.',
        },
      ],
    },
    footer: {
      description: 'Conçu pour rendre l\'argent plus simple, plus clair et plus facile à gérer.',
      madeBy: 'Conçu par AEQO Technologies',
      points: [
        'Mobile-first',
        'Pensé pour le Maroc',
        'Respect de la vie privée',
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
      badge: 'قريبًا على متجر التطبيقات الخاص بك !',
      titleLines: [
        [
          { text: 'طريقة أذكى', accent: false },
        ],
        [
          { text: 'لإدارة', accent: false },
          { text: 'أموالك', accent: true },
        ],
      ],
      subtitle: 'تتبع أموالك، ابنِ عادات أفضل، واتخذ قرارات مالية أذكى كل يوم',
      helper: 'انضم إلى قائمة الانتظار لتصلك الدعوات أولًا.',
      trustItems: ['مصمم للمغرب', 'إرشاد عملي', 'وصول أولوية'],
      cta: 'اطلب الوصول',
      primaryPhoneAlt: 'معاينة الشاشة الرئيسية لتطبيق Aure Up',
      visualNotes: [
        { label: 'في لمحة', value: 'شاهد حساباتك ومصروفاتك وميزانيتك في عرض واحد واضح.' },
        { label: 'إرشاد بسيط', value: 'افهم خطوتك التالية دون الحاجة إلى البحث في التفاصيل.' },
      ],
    },
    problem: {
      eyebrow: 'المشكلة',
      title: 'إدارة المال لا ينبغي أن تكون بهذه الصعوبة',
      intro: 'بالنسبة لكثير من الناس، المشكلة ليست في غياب الجهد. إنها غياب الهيكل والوضوح والأدوات البسيطة للبقاء على اطلاع بأموال اليوم.',
      items: [
        'من الصعب المتابعة بدون الأدوات المناسبة.',
        'تحاول الانضباط، لكن تتبع الإنفاق صعب على المدى البعيد.',
        'بدون رؤية واضحة، الإنفاق المتهور أصعب تجنبًا.',
        'تريد النمو ماليًا، لكنك لا تعرف من أين تبدأ.',
      ],
      media: {
        label: 'واقع يومي',
        title: 'عندما لا تملك رؤية واضحة، حتى القرارات الصغيرة تبدو أثقل.',
        body: 'Aure Up صُممت لتحول هذا الغموض إلى شيء أوضح وأسهل للتصرف.',
        alt: 'رجل يبدو قلقًا وهو ينظر إلى هاتفه.',
      },
      transition: 'إذا كان أي من هذا مألوفًا لك، فإن Aure Up صُنعت من أجلك.',
    },
    features: {
      eyebrow: 'الحل',
      title: 'كل ما تحتاجه لفهم وإدارة أموالك بشكل أفضل',
      subtitle: 'من الإنفاق اليومي إلى الأهداف طويلة المدى، Aure Up تجعل إدارة المال أوضح وأسهل',
      items: [
        {
          label: 'التتبع',
          title: 'تصور أموالك بوضوح',
          desc: 'دخلك ومصروفاتك واتجاهاتك في عرض واحد واضح.',
        },
        {
          label: 'التعلم',
          title: 'افهم المال بدون مصطلحات معقدة',
          desc: 'تعلم أساسيات المالية الشخصية بطريقة بسيطة وعملية.',
        },
        {
          label: 'الرؤى',
          title: 'احصل على إرشاد مفيد',
          desc: 'رؤى مفيدة تُظهر ما يحتاج انتباهًا وما يجب فعله بعد ذلك.',
          accent: true,
        },
        {
          label: 'الأهداف',
          title: 'ابق على اطلاع بأهدافك',
          desc: 'تابع تقدمك وابق متحفزًا من أجل مستقبل مالي أفضل.',
        },
      ],
    },
    how: {
      eyebrow: 'كيف يعمل',
      title: 'ثلاث خطوات بسيطة نحو قرارات مالية أفضل',
      subtitle: 'كل شيء مصمم لمساعدتك على البدء بسرعة والبقاء واضحًا حول ما يهم',
      steps: [
        {
          num: 1,
          title: 'أضف أموالك',
          desc: 'ابدأ بإضافة دخلك ومصروفاتك وحساباتك في مكان واحد.',
        },
        {
          num: 2,
          title: 'افهم عاداتك',
          desc: 'اعرف أين يذهب مالك، وما الذي يتغير، وما يحتاج انتباهك.',
        },
        {
          num: 3,
          title: 'اتخذ قرارات أفضل',
          desc: 'تقدم بثقة أكبر بفضل رؤى مفيدة وإرشاد بسيط.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'آراء المستخدمين',
      title: 'ما يقوله المختبرون الأوائل',
      subtitle: 'ملاحظات قصيرة من أشخاص جربوا النسخة الأولى من Aure Up.',
      ratingLabel: 'مختبر مبكر',
      items: [
        {
          initials: 'ي',
          name: 'يوسف',
          role: 'الدار البيضاء',
          quote: 'للمرة الأولى، أستطيع أن أرى بوضوح أين يذهب مالي.',
        },
        {
          initials: 'س',
          name: 'سلمى',
          role: 'الرباط',
          quote: 'يجعل إدارة المال تبدو أقل إرهاقًا.',
        },
        {
          initials: 'أ',
          name: 'أمين',
          role: 'مراكش',
          quote: 'يعطيني إرشادًا مفيدًا دون الكثير من المعلومات.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'وصول مبكر',
      title: 'احصل على وصول مبكر إلى Aure Up',
      subtitle: 'أدخل بريدك الإلكتروني للحصول على دعوات مبكرة وتحديثات المنتج وأخبار الإطلاق.',
      benefitsAria: 'مزايا قائمة الانتظار',
      benefits: [
        'وصول أولوية عند الإطلاق',
        'تحديثات مبكرة للمنتج',
        'دعوات لاختبار الميزات الجديدة',
        'عرض خاص للأعضاء الأوائل',
      ],
      perksTitle: 'ما ستحصل عليه',
      placeholder: 'أدخل بريدك الإلكتروني',
      cta: 'انضم إلى القائمة',
      privacy: 'بدون رسائل مزعجة. فقط تحديثات عن Aure Up والوصول المبكر.',
      trust: 'سيبقى بريدك خاصًا وسيستخدم فقط للتواصل معك بخصوص Aure Up.',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      unavailable: 'النموذج جاهز في الواجهة وينتظر ربطه بالخدمة الخلفية.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'بعض الإجابات الواضحة قبل الإطلاق.',
      subtitle: 'المهم فقط، وبشكل مختصر.',
      items: [
        {
          q: 'متى سيتم إطلاق Aure Up؟',
          a: 'Aure Up ما زالت قيد التطوير. مشتركو قائمة الانتظار سيحصلون على أول الدعوات عند فتح الوصول المبكر.',
        },
        {
          q: 'هل ستكون متاحة على iPhone و Android؟',
          a: 'نعم. Aure Up يتم تجهيزها لكلتا المنصتين.',
        },
        {
          q: 'هل سيكون التطبيق مجانيًا؟',
          a: 'تجربة أولية مجانية مخطط لها أولًا، ثم عرض مدفوع بسعر مناسب.',
        },
        {
          q: 'هل Aure Up مصممة للمغرب؟',
          a: 'نعم. المنتج يُبنى حول المستخدم المغربي وعاداته وواقعه المالي.',
        },
        {
          q: 'كيف يتم التعامل مع بياناتي؟',
          a: 'الأمان والخصوصية والتعامل المسؤول مع البيانات من أولويات المنتج الأساسية.',
        },
      ],
    },
    footer: {
      description: 'مبني لجعل المال يبدو أبسط وأوضح وأسهل في الإدارة.',
      madeBy: 'من تطوير AEQO Technologies',
      points: [
        'مبنية للهاتف أولًا',
        'مصممة للمغرب',
        'خصوصية مدروسة',
      ],
    },
  },
}

export function getCopy(language) {
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}
