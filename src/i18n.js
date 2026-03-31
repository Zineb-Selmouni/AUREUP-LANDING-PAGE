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
      badge: 'Early access opens soon on iPhone and Android',
      titleLines: [
        [
          { text: 'A calmer way', accent: false },
        ],
        [
          { text: 'to manage', accent: false },
          { text: 'money.', accent: true },
        ],
      ],
      subtitle: 'Aure Up helps people in Morocco understand spending, build better habits, and make clearer daily money decisions.',
      helper: 'Join the waitlist to hear first when invites open.',
      trustItems: ['Built for Morocco', 'Practical guidance', 'Priority access'],
      cta: 'Request access',
      primaryPhoneAlt: 'Aure Up home screen preview',
      visualNotes: [
        { label: 'Weekly view', value: 'See the patterns that matter, faster.' },
        { label: 'Next step', value: 'Know what to do without digging through noise.' },
      ],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Most people do not need more data. They need more clarity.',
      intro: 'Money starts feeling heavy when accounts, habits, and priorities live in different places.',
      body: 'You check your phone, notice something feels off, and still do not know what to fix first.',
      items: [
        'Too many small signals, not enough real visibility.',
        'Spending patterns stay hard to read.',
        'Good decisions get delayed by uncertainty.',
      ],
      media: {
        label: 'Everyday reality',
        title: 'When money feels unclear, even a quick check can feel heavy.',
        body: 'Aure Up is designed to turn that uncertainty into something calmer and easier to act on.',
        alt: 'A man looking concerned while holding his phone.',
      },
    },
    features: {
      eyebrow: 'The solution',
      title: 'Aure Up turns money signals into simple next steps.',
      subtitle: 'A lighter product story built around clarity, confidence, and everyday usefulness.',
      items: [
        {
          label: 'Visibility',
          title: 'See where your money goes',
          desc: 'Clear categories and trends help you spot what changed without effort.',
        },
        {
          label: 'Learning',
          title: 'Learn without the jargon',
          desc: 'Short guidance helps people improve financial habits in plain language.',
        },
        {
          label: 'Insight',
          title: 'Get timely suggestions',
          desc: 'Useful AI support highlights what matters now and what can wait.',
          accent: true,
        },
        {
          label: 'Goals',
          title: 'Stay close to your priorities',
          desc: 'Follow savings progress with a view that feels motivating, not overwhelming.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three simple steps, from confusion to control.',
      subtitle: 'The journey stays short, practical, and easy to follow on mobile.',
      steps: [
        {
          num: 1,
          title: 'Bring it together',
          desc: 'Start with one clear view of spending, income, and goals.',
        },
        {
          num: 2,
          title: 'Understand the pattern',
          desc: 'See what changed, where to focus, and what deserves attention.',
        },
        {
          num: 3,
          title: 'Move with confidence',
          desc: 'Take small actions backed by useful and timely guidance.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Early testers describe something clearer, calmer, and easier to trust.',
      subtitle: 'Short feedback from people who want a more human way to manage money.',
      ratingLabel: 'Pilot tester',
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Casablanca',
          quote: 'I can finally understand where my money goes without feeling lost in the screen.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Rabat',
          quote: 'The experience feels lighter and more reassuring than most finance apps I use.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Marrakech',
          quote: 'It explains just enough, then helps me act. That balance feels really strong.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Early access',
      title: 'Join the waitlist before launch.',
      subtitle: 'Leave your email to receive first invites, product updates, and early access news.',
      benefitsAria: 'Waitlist perks',
      benefits: [
        'Priority access when Aure Up launches',
        'Private testing opportunities',
        'Early product updates',
        'A reserved launch offer for early members',
      ],
      perksTitle: 'Why join now',
      placeholder: 'Enter your email address',
      cta: 'Join the waitlist',
      privacy: 'No spam. Only useful launch updates.',
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
      description: 'Aure Up is building a clearer, calmer money experience for Morocco.',
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
      badge: 'Accès anticipé bientôt sur iPhone et Android',
      titleLines: [
        [
          { text: 'Une façon plus calme', accent: false },
        ],
        [
          { text: 'de gérer', accent: false },
          { text: 'son argent.', accent: true },
        ],
      ],
      subtitle: 'Aure Up aide à mieux comprendre ses dépenses, construire de bonnes habitudes et décider plus sereinement.',
      helper: 'Rejoignez la liste d’attente pour être informé en premier.',
      trustItems: ['Pensé pour le Maroc', 'Conseils utiles', 'Accès prioritaire'],
      cta: 'Demander l’accès',
      primaryPhoneAlt: 'Aperçu de l’écran d’accueil Aure Up',
      visualNotes: [
        { label: 'Vue hebdo', value: 'Repérez plus vite ce qui change vraiment.' },
        { label: 'Prochaine action', value: 'Comprenez quoi faire sans chercher partout.' },
      ],
    },
    problem: {
      eyebrow: 'Le problème',
      title: 'Gérer son argent ne devrait pas être aussi flou.',
      intro: 'Entre les comptes, les dépenses et les priorités, on finit vite par subir au lieu de décider.',
      body: 'On regarde souvent son téléphone sans vraiment savoir quoi corriger en premier.',
      items: [
        'Trop de petits signaux, pas assez de vraie lisibilité.',
        'Les habitudes de dépense restent difficiles à lire.',
        'Les bonnes décisions arrivent trop tard.',
      ],
      media: {
        label: 'Réalité du quotidien',
        title: 'Quand l’argent manque de clarté, un simple coup d’œil peut déjà peser.',
        body: 'Aure Up est pensée pour transformer cette incertitude en repères plus calmes et plus utiles.',
        alt: 'Un homme préoccupé en regardant son téléphone.',
      },
    },
    features: {
      eyebrow: 'La solution',
      title: 'Aure Up transforme les signaux financiers en actions simples.',
      subtitle: 'Moins de bruit, plus de clarté, plus de confiance au quotidien.',
      items: [
        {
          label: 'Visibilité',
          title: 'Voir où part votre argent',
          desc: 'Des catégories claires et des tendances lisibles pour comprendre vite.',
        },
        {
          label: 'Pédagogie',
          title: 'Apprendre sans jargon',
          desc: 'Des contenus courts pour progresser sans se sentir perdu.',
        },
        {
          label: 'Analyse',
          title: 'Recevoir les bons conseils au bon moment',
          desc: 'Des suggestions utiles mettent en avant ce qui compte maintenant.',
          accent: true,
        },
        {
          label: 'Objectifs',
          title: 'Rester proche de ses priorités',
          desc: 'Suivez votre progression d’épargne sans surcharge ni complexité.',
        },
      ],
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Trois étapes simples, du flou à la maîtrise.',
      subtitle: 'Un parcours court, pratique et très lisible sur mobile.',
      steps: [
        {
          num: 1,
          title: 'Tout réunir',
          desc: 'Commencez par une vue simple de vos dépenses, revenus et objectifs.',
        },
        {
          num: 2,
          title: 'Comprendre le rythme',
          desc: 'Voyez ce qui change, où regarder, et ce qui mérite votre attention.',
        },
        {
          num: 3,
          title: 'Avancer avec confiance',
          desc: 'Passez à l’action avec des conseils clairs et utiles.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Les premiers retours parlent d’une expérience plus claire, plus douce et plus rassurante.',
      subtitle: 'Des retours courts et crédibles de futurs utilisateurs.',
      ratingLabel: 'Testeur pilote',
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Casablanca',
          quote: 'Je comprends enfin où part mon argent sans me perdre dans l’écran.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Rabat',
          quote: 'L’expérience paraît plus légère et plus humaine que la plupart des apps finance.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Marrakech',
          quote: 'Ça explique juste ce qu’il faut, puis ça aide à agir. C’est très bien dosé.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Accès anticipé',
      title: 'Rejoignez la liste d’attente avant le lancement.',
      subtitle: 'Laissez votre e-mail pour recevoir les premières invitations et les nouvelles importantes.',
      benefitsAria: 'Avantages de la liste d’attente',
      benefits: [
        'Accès prioritaire au lancement',
        'Invitations aux tests privés',
        'Nouvelles produit en avant-première',
        'Offre réservée aux premiers inscrits',
      ],
      perksTitle: 'Pourquoi maintenant',
      placeholder: 'Entrez votre adresse e-mail',
      cta: 'Rejoindre la liste',
      privacy: 'Aucun spam. Seulement les infos utiles.',
      trust: 'Votre e-mail reste privé et servira uniquement à vous contacter au sujet d’Aure Up.',
      invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
      unavailable: 'Le formulaire est prêt côté interface et attend encore sa connexion backend.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quelques réponses claires avant le lancement.',
      subtitle: 'L’essentiel, en version courte.',
      items: [
        {
          q: 'Quand Aure Up sera-t-elle disponible ?',
          a: 'Aure Up est encore en développement. Les inscrits recevront les premières invitations dès l’ouverture de l’accès anticipé.',
        },
        {
          q: 'L’application sera-t-elle sur iPhone et Android ?',
          a: 'Oui. Aure Up est pensée pour les deux plateformes mobiles.',
        },
        {
          q: 'L’application sera-t-elle gratuite ?',
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
      description: 'Aure Up construit une expérience argent plus claire et plus sereine pour le Maroc.',
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
      badge: 'وصول مبكر قريبًا على iPhone و Android',
      titleLines: [
        [
          { text: 'طريقة أهدأ', accent: false },
        ],
        [
          { text: 'لفهم', accent: false },
          { text: 'أموالك.', accent: true },
        ],
      ],
      subtitle: 'Aure Up تساعدك على فهم مصروفك، بناء عادات أفضل، واتخاذ قرارات مالية أوضح كل يوم.',
      helper: 'انضم إلى قائمة الانتظار لتصلك الدعوات أولًا.',
      trustItems: ['مصمم للمغرب', 'إرشاد عملي', 'وصول أولوية'],
      cta: 'اطلب الوصول',
      primaryPhoneAlt: 'معاينة الشاشة الرئيسية لتطبيق Aure Up',
      visualNotes: [
        { label: 'نظرة أسبوعية', value: 'لاحظ ما يتغير فعلًا بسرعة أكبر.' },
        { label: 'الخطوة التالية', value: 'اعرف ماذا تفعل بدون ضجيج أو تعقيد.' },
      ],
    },
    problem: {
      eyebrow: 'المشكلة',
      title: 'إدارة المال لا يجب أن تبقى بهذا الغموض.',
      intro: 'بين الحسابات والمصاريف والأولويات يصبح القرار المالي مرهقًا أكثر مما يجب.',
      body: 'تنظر إلى هاتفك كثيرًا لكنك لا تعرف دائمًا ما الذي يجب إصلاحه أولًا.',
      items: [
        'إشارات كثيرة صغيرة، ورؤية حقيقية قليلة.',
        'أنماط الإنفاق تبقى صعبة الفهم.',
        'القرارات الجيدة تتأخر بسبب عدم الوضوح.',
      ],
      media: {
        label: 'واقع يومي',
        title: 'عندما يغيب الوضوح المالي، حتى نظرة سريعة إلى الهاتف قد تبدو ثقيلة.',
        body: 'Aure Up صُممت لتحول هذا التردد إلى فهم أهدأ وخطوات أوضح.',
        alt: 'رجل يبدو قلقًا وهو ينظر إلى هاتفه.',
      },
    },
    features: {
      eyebrow: 'الحل',
      title: 'Aure Up تحول الإشارات المالية إلى خطوات بسيطة.',
      subtitle: 'ضجيج أقل، وضوح أكثر، وثقة أكبر في القرارات اليومية.',
      items: [
        {
          label: 'الرؤية',
          title: 'اعرف أين يذهب مالك',
          desc: 'فئات واضحة واتجاهات سهلة القراءة لفهم ما تغير بسرعة.',
        },
        {
          label: 'التعلم',
          title: 'تعلّم بدون مصطلحات معقدة',
          desc: 'محتوى قصير يساعدك على بناء عادات أفضل بلغة بسيطة.',
        },
        {
          label: 'التحليل',
          title: 'احصل على اقتراحات في الوقت المناسب',
          desc: 'مساعدة ذكية تبرز ما يستحق الانتباه الآن وما يمكن تأجيله.',
          accent: true,
        },
        {
          label: 'الأهداف',
          title: 'ابق قريبًا من أولوياتك',
          desc: 'تابع تقدم الادخار بطريقة مشجعة وليست مرهقة.',
        },
      ],
    },
    how: {
      eyebrow: 'كيف يعمل',
      title: 'ثلاث خطوات بسيطة من الغموض إلى السيطرة.',
      subtitle: 'مسار قصير وعملي وسهل المتابعة على الهاتف.',
      steps: [
        {
          num: 1,
          title: 'اجمع كل شيء',
          desc: 'ابدأ برؤية واضحة للمصاريف والدخل والأهداف في مكان واحد.',
        },
        {
          num: 2,
          title: 'افهم النمط',
          desc: 'لاحظ ما تغير وأين يجب أن تركز وما الذي يحتاج انتباهك.',
        },
        {
          num: 3,
          title: 'تحرك بثقة',
          desc: 'خذ خطوات صغيرة مبنية على إرشاد واضح وعملي.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'آراء المستخدمين',
      title: 'الانطباعات الأولى تصف تجربة أوضح وأهدأ وأسهل في الثقة.',
      subtitle: 'ردود قصيرة وواقعية من مستخدمين مبكرين.',
      ratingLabel: 'مختبر مبكر',
      items: [
        {
          initials: 'ي',
          name: 'يوسف',
          role: 'الدار البيضاء',
          quote: 'أصبحت أفهم أين يذهب مالي بدون أن أضيع داخل الشاشة.',
        },
        {
          initials: 'س',
          name: 'سلمى',
          role: 'الرباط',
          quote: 'التجربة أخف وأكثر إنسانية من أغلب تطبيقات المال التي جربتها.',
        },
        {
          initials: 'أ',
          name: 'أمين',
          role: 'مراكش',
          quote: 'يشرح بالقدر المناسب ثم يساعدني على التصرف. هذا التوازن ممتاز.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'وصول مبكر',
      title: 'انضم إلى قائمة الانتظار قبل الإطلاق.',
      subtitle: 'اترك بريدك الإلكتروني لتصلك الدعوات الأولى وتحديثات المنتج المهمة.',
      benefitsAria: 'مزايا قائمة الانتظار',
      benefits: [
        'أولوية الوصول عند الإطلاق',
        'فرص للمشاركة في الاختبارات الخاصة',
        'تحديثات مبكرة عن المنتج',
        'عرض مخصص للأعضاء الأوائل',
      ],
      perksTitle: 'لماذا تنضم الآن',
      placeholder: 'أدخل بريدك الإلكتروني',
      cta: 'انضم إلى القائمة',
      privacy: 'بدون رسائل مزعجة. فقط التحديثات المفيدة.',
      trust: 'سيبقى بريدك خاصًا وسيستخدم فقط للتواصل معك بخصوص Aure Up.',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      unavailable: 'النموذج جاهز في الواجهة وينتظر ربطه بالخدمة الخلفية.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'إجابات واضحة قبل الإطلاق.',
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
      description: 'Aure Up تبني تجربة مالية أوضح وأكثر هدوءًا للمغرب.',
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
