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
        { label: 'Fonctionnement', href: '#how' },
        { label: 'FAQ', href: '#faq' },
      ],
      languageSelector: 'Sélecteur de langue',
      toggleMenu: 'Ouvrir le menu',
      switchThemeToLight: 'Passer au mode clair',
      switchThemeToDark: 'Passer au mode sombre',
    },
    hero: {
      badge: 'Bientôt sur votre App Store',
      titleLines: [
        [
          { text: 'Reprenez', accent: false },
          { text: 'le contrôle', accent: true },
          { text: 'de votre argent.', accent: true },
        ],
        [
          { text: 'Construisez', accent: false },
          { text: 'un avenir', accent: true },
          { text: 'financier plus serein.', accent: true },
        ],
      ],
      subtitle: 'Aure Up est votre nouveau compagnon de finance personnelle. Suivez vos dépenses, développez votre culture financière et recevez des recommandations intelligentes pour prendre de meilleures décisions au quotidien. Pensée d’abord pour les utilisateurs marocains.',
      cta: 'Rejoignez la liste d’attente !',
      primaryPhoneAlt: 'Aperçu des recommandations de dépenses Aure Up',
      secondaryPhoneAlt: 'Aperçu de l’application Aure Up',
      mobilePhoneAlt: 'Aperçu mobile de l’application Aure Up',
    },
    problem: {
      eyebrow: 'LE PROBLÈME',
      title: 'Gérer son argent ne devrait pas être une source de stress ni de confusion.',
      intro: 'Entre des comptes dispersés, des budgets difficiles à tenir et des décisions financières parfois floues, beaucoup avancent sans vraie visibilité sur leur argent. Aure Up a donc été conçue pour remettre de la clarté, de la méthode et de la confiance dans votre quotidien financier.',
      ariaLabel: 'Défis financiers courants',
      items: [
        'L’argent est réparti entre plusieurs comptes et devient difficile à suivre.',
        'Les budgets sont souvent compliqués à tenir dans la durée.',
        'L’épargne, l’investissement et la planification financière paraissent réservés aux initiés.',
        'Sans les bons outils, prendre de bonnes décisions devient plus difficile.',
      ],
    },
    features: {
      eyebrow: 'CE QU’AURE UP VOUS APPORTE',
      title: 'Une façon plus simple et plus intelligente de gérer vos finances',
      subtitle: 'Aure Up vous aide à mieux comprendre votre argent, à adopter de meilleurs réflexes et à avancer avec plus de clarté.',
      items: [
        {
          title: 'Suivi intelligent des dépenses',
          desc: 'Comprenez où va votre argent grâce à des tableaux de bord clairs, des catégories lisibles et des repères utiles au quotidien.',
        },
        {
          title: 'Éducation financière accessible',
          desc: 'Apprenez les bases de la finance personnelle à travers des contenus simples, concrets et pensés pour la vraie vie.',
        },
        {
          title: 'Insights financiers par IA',
          desc: 'Recevez des recommandations pertinentes pour mieux piloter vos habitudes et prendre des décisions plus éclairées.',
        },
        {
          title: 'Objectifs et projection d’avenir',
          desc: 'Fixez vos objectifs financiers, suivez vos progrès et avancez vers un avenir plus stable, étape par étape.',
        },
      ],
    },
    how: {
      eyebrow: 'COMMENT ÇA MARCHE',
      title: 'Un parcours simple pour passer de la confusion à la clarté.',
      steps: [
        {
          num: 1,
          title: 'Renseignez vos finances',
          desc: 'Ajoutez facilement vos revenus et vos dépenses pour obtenir une base claire et exploitable.',
        },
        {
          num: 2,
          title: 'Comprenez vos habitudes',
          desc: 'Des vues lisibles vous montrent où part votre argent et ce qui mérite vraiment votre attention.',
        },
        {
          num: 3,
          title: 'Prenez de meilleures décisions',
          desc: 'L’IA vous aide à ajuster vos choix, améliorer vos habitudes et construire la suite avec plus de sérénité.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'TÉMOIGNAGES',
      title: 'Déjà adopté par nos premiers testeurs',
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Testeur du prototype, Casablanca',
          quote: 'Pour la première fois, j’ai vraiment compris où partait mon argent chaque mois.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Testeuse du prototype, Rabat',
          quote: 'L’expérience est simple, moderne et rassurante. La finance personnelle paraît tout de suite plus accessible.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Testeur du prototype, Marrakech',
          quote: 'J’aime le fait de retrouver suivi, éducation financière et insights au même endroit.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'EARLY ACCESS',
      title: 'Rejoignez la liste d’attente d’Aure Up',
      subtitle: 'Aure Up est en cours de développement. Inscrivez-vous pour découvrir l’application dès son premier lancement.',
      benefitsAria: 'Avantages de la liste d’attente',
      benefits: [
        'Accédez en avant-première à l’application',
        'Recevez les actualités du lancement',
        'Profitez de 50 % de réduction sur la première année',
        'Faites partie des tout premiers utilisateurs d’Aure Up',
      ],
      placeholder: 'Entrez votre adresse e-mail',
      cta: 'Rejoindre la liste d’attente',
      privacy: 'Aucun spam. Seulement les informations importantes.',
      invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
      unavailable: 'Ce formulaire est prêt à être connecté à un backend dans cette version.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Vos questions avant le lancement',
      subtitle: 'Voici ce que les premiers visiteurs veulent le plus souvent savoir avant de rejoindre la liste d’attente.',
      items: [
        {
          q: 'Quand Aure Up sera-t-elle disponible ?',
          a: 'Aure Up est actuellement en développement et sera lancée prochainement. Les membres de la liste d’attente recevront un accès anticipé avant l’ouverture au public.',
        },
        {
          q: 'L’application sera-t-elle gratuite ?',
          a: 'Développer et héberger une solution financière de qualité demande un investissement important. Aure Up proposera donc un essai gratuit afin de vous permettre d’en découvrir toute la valeur, puis un abonnement premium à un tarif raisonnable.',
        },
        {
          q: 'Mes données financières sont-elles sécurisées ?',
          a: 'Oui. La sécurité et la confidentialité sont une priorité. Aure Up est conçue selon des standards modernes de protection des données et une approche privacy-first.',
        },
        {
          q: 'Aure Up fonctionnera-t-elle au Maroc ?',
          a: 'Oui. Aure Up est pensée d’abord pour les utilisateurs marocains et pour les réalités de leur quotidien financier.',
        },
        {
          q: 'Sera-t-elle disponible sur iPhone et Android ?',
          a: 'Oui. Aure Up sera disponible sur iPhone et Android lors du lancement.',
        },
      ],
    },
    footer: {
      description: 'Aure Up vous aide à construire un avenir financier plus serein grâce à des outils plus intelligents et à une éducation financière accessible.',
      madeBy: 'Conçu par AEQO Technologies',
    },
  },
  en: {
    nav: {
      links: [
        { label: 'Problem', href: '#problem' },
        { label: 'What It Does', href: '#features' },
        { label: 'How It Works', href: '#how' },
        { label: 'FAQ', href: '#faq' },
      ],
      languageSelector: 'Language selector',
      toggleMenu: 'Toggle menu',
      switchThemeToLight: 'Switch to light mode',
      switchThemeToDark: 'Switch to dark mode',
    },
    hero: {
      badge: 'Launching Soon on your App Store !',
      titleLines: [
        [
          { text: 'Take', accent: false },
          { text: 'control', accent: true },
          { text: 'of your', accent: false },
          { text: 'money.', accent: true },
        ],
        [
          { text: 'Build', accent: false },
          { text: 'a smarter', accent: true },
          { text: 'financial', accent: false },
          { text: 'future.', accent: true },
        ],
      ],
      subtitle: 'Aure Up is your next-generation personal finance companion. Track your spending, learn financial skills, and receive AI-powered insights to improve your financial life.',
      cta: 'Join the Waitlist',
      primaryPhoneAlt: 'Aure Up spending insights preview',
      secondaryPhoneAlt: 'Aure Up app preview screen',
      mobilePhoneAlt: 'Aure Up app preview',
    },
    problem: {
      eyebrow: 'The Problem',
      title: "Managing money shouldn't feel confusing.",
      intro: 'Many people struggle to clearly understand their finances. Aure Up was created to change that.',
      ariaLabel: 'Common money challenges',
      items: [
        'Money is spread across different accounts.',
        'Budgets are hard to follow.',
        'Investing and financial planning feel complicated.',
        'Without the right tools, it becomes difficult to make confident financial decisions.',
      ],
    },
    features: {
      eyebrow: 'What Aure Up Does',
      title: 'A smarter way to manage your finances',
      subtitle: 'Aure Up helps you understand your money more clearly and build better financial habits over time.',
      items: [
        {
          title: 'Smart Spending Tracking',
          desc: 'Understand where your money goes with clear dashboards and simple insights.',
        },
        {
          title: 'Financial Education',
          desc: 'Learn the fundamentals of personal finance through accessible content designed for everyday life.',
        },
        {
          title: 'AI Financial Insights',
          desc: 'Receive intelligent suggestions that help you improve your financial habits.',
        },
        {
          title: 'Goals and Future Planning',
          desc: 'Set financial goals and track your progress toward a stronger financial future.',
        },
      ],
    },
    how: {
      eyebrow: 'How Aure Up Works',
      title: 'A simple flow designed to help people move from confusion to clarity.',
      steps: [
        {
          num: 1,
          title: 'Add your finances',
          desc: 'Track your income and expenses easily.',
        },
        {
          num: 2,
          title: 'Understand your habits',
          desc: 'Visual dashboards reveal where your money goes.',
        },
        {
          num: 3,
          title: 'Improve your financial future',
          desc: 'AI-powered insights help you make smarter financial decisions.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Early testers already love Aure Up',
      items: [
        {
          initials: 'Y',
          name: 'Youssef',
          role: 'Prototype tester, Casablanca',
          quote: 'Aure Up helped me finally understand where my money goes each month.',
        },
        {
          initials: 'S',
          name: 'Salma',
          role: 'Prototype tester, Rabat',
          quote: 'The experience feels simple and modern. It makes personal finance feel much less intimidating.',
        },
        {
          initials: 'A',
          name: 'Amine',
          role: 'Prototype tester, Marrakech',
          quote: 'I like that Aure Up combines tracking, education, and insights in one place.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'Early Access',
      title: 'Join the Aure Up early access',
      subtitle: 'Aure Up is currently in development and will launch soon.',
      benefitsAria: 'Early access benefits',
      benefits: [
        'Get early access to the app',
        'Receive launch updates',
        'Claim 50% off the first year subscription',
        'Be among the first users to try Aure Up',
      ],
      placeholder: 'Enter your email address',
      cta: 'Join the Waitlist',
      privacy: 'No spam. Only important updates.',
      invalidEmail: 'Please enter a valid email.',
      unavailable: 'This form is ready for backend integration in this build.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions before launch?',
      subtitle: "Here's what early visitors usually want to know before joining the waitlist.",
      items: [
        {
          q: 'When will Aure Up launch?',
          a: 'Aure Up is currently in development and will launch soon. Waitlist members will receive early access invitations before the public launch.',
        },
        {
          q: 'Will the app be free?',
          a: 'Building and maintaining a high-quality financial platform requires significant development and infrastructure costs. For this reason, Aure Up will offer a free trial so users can experience the full value of the app. After the trial period, the service continues as a reasonable premium subscription designed to remain accessible.',
        },
        {
          q: 'Is my financial data secure?',
          a: 'Security and privacy are a top priority. Aure Up is built with modern encryption and privacy-first principles.',
        },
        {
          q: 'Will Aure Up work in Morocco?',
          a: 'Yes. Aure Up is designed first for Moroccans* and their financial habits.',
        },
        {
          q: 'Will it be available on iPhone and Android?',
          a: 'Yes. Aure Up will launch on both App Store and Google Play.',
        },
      ],
    },
    footer: {
      description: 'Aure Up helps people build a stronger financial future through smarter tools and financial education.',
      madeBy: 'Made by AEQO Technologies',
    },
  },
  ar: {
    nav: {
      links: [
        { label: 'المشكلة', href: '#problem' },
        { label: 'ما الذي يقدمه', href: '#features' },
        { label: 'طريقة العمل', href: '#how' },
        { label: 'الأسئلة الشائعة', href: '#faq' },
      ],
      languageSelector: 'محدد اللغة',
      toggleMenu: 'فتح القائمة',
      switchThemeToLight: 'التبديل إلى الوضع الفاتح',
      switchThemeToDark: 'التبديل إلى الوضع الداكن',
    },
    hero: {
      badge: 'قريباً على متجر التطبيقات الخاص بك!',
      titleLines: [
        [
          { text: 'سيطر', accent: false },
          { text: 'على أموالك.', accent: true },
        ],
        [
          { text: 'وابنِ', accent: false },
          { text: 'مستقبلاً مالياً', accent: true },
          { text: 'أكثر ذكاءً.', accent: true },
        ],
      ],
      subtitle: 'Aure Up هو رفيقك الجديد لإدارة أموالك الشخصية. تتبّع مصروفاتك، وطوّر مهاراتك المالية، واحصل على رؤى مدعومة بالذكاء الاصطناعي لتحسين حياتك المالية.',
      cta: 'انضم إلى قائمة الانتظار',
      primaryPhoneAlt: 'معاينة رؤى الإنفاق في Aure Up',
      secondaryPhoneAlt: 'معاينة شاشة تطبيق Aure Up',
      mobilePhoneAlt: 'معاينة تطبيق Aure Up على الهاتف',
    },
    problem: {
      eyebrow: 'المشكلة',
      title: 'إدارة المال لا يجب أن تكون مربكة.',
      intro: 'يجد كثير من الناس صعوبة في فهم أوضاعهم المالية بوضوح. ولهذا صُمم Aure Up ليغيّر ذلك.',
      ariaLabel: 'التحديات المالية الشائعة',
      items: [
        'أموالك موزعة بين حسابات مختلفة.',
        'من الصعب الالتزام بالميزانيات.',
        'يبدو الاستثمار والتخطيط المالي معقدين.',
        'من دون الأدوات المناسبة، يصبح اتخاذ قرارات مالية بثقة أمراً صعباً.',
      ],
    },
    features: {
      eyebrow: 'ما الذي يقدمه Aure Up',
      title: 'طريقة أذكى لإدارة أموالك',
      subtitle: 'يساعدك Aure Up على فهم أموالك بشكل أوضح وبناء عادات مالية أفضل مع مرور الوقت.',
      items: [
        {
          title: 'تتبع ذكي للمصروفات',
          desc: 'افهم أين تذهب أموالك من خلال لوحات واضحة ورؤى بسيطة.',
        },
        {
          title: 'التثقيف المالي',
          desc: 'تعلّم أساسيات التمويل الشخصي من خلال محتوى سهل ومصمم للحياة اليومية.',
        },
        {
          title: 'رؤى مالية بالذكاء الاصطناعي',
          desc: 'احصل على اقتراحات ذكية تساعدك على تحسين عاداتك المالية.',
        },
        {
          title: 'الأهداف والتخطيط للمستقبل',
          desc: 'حدّد أهدافك المالية وتابع تقدمك نحو مستقبل أقوى.',
        },
      ],
    },
    how: {
      eyebrow: 'طريقة عمل Aure Up',
      title: 'مسار بسيط يساعدك على الانتقال من الحيرة إلى الوضوح.',
      steps: [
        {
          num: 1,
          title: 'أضف بياناتك المالية',
          desc: 'تتبّع دخلك ومصروفاتك بسهولة.',
        },
        {
          num: 2,
          title: 'افهم عاداتك',
          desc: 'تكشف لوحات المعلومات المرئية أين تذهب أموالك.',
        },
        {
          num: 3,
          title: 'حسّن مستقبلك المالي',
          desc: 'تساعدك الرؤى المدعومة بالذكاء الاصطناعي على اتخاذ قرارات مالية أكثر ذكاءً.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'آراء المستخدمين',
      title: 'المختبرون الأوائل يحبون Aure Up بالفعل',
      items: [
        {
          initials: 'ي',
          name: 'يوسف',
          role: 'مختبر للنموذج الأولي، الدار البيضاء',
          quote: 'ساعدني Aure Up أخيراً على فهم أين يذهب مالي كل شهر.',
        },
        {
          initials: 'س',
          name: 'سلمى',
          role: 'مختبرة للنموذج الأولي، الرباط',
          quote: 'التجربة بسيطة وعصرية. إنها تجعل إدارة المال الشخصي أقل رهبة بكثير.',
        },
        {
          initials: 'أ',
          name: 'أمين',
          role: 'مختبر للنموذج الأولي، مراكش',
          quote: 'أحب أن Aure Up يجمع بين التتبع والتثقيف والرؤى في مكان واحد.',
        },
      ],
    },
    waitlist: {
      eyebrow: 'وصول مبكر',
      title: 'انضم إلى الوصول المبكر لـ Aure Up',
      subtitle: 'Aure Up قيد التطوير حالياً وسيتم إطلاقه قريباً.',
      benefitsAria: 'مزايا الوصول المبكر',
      benefits: [
        'احصل على وصول مبكر إلى التطبيق',
        'تلقَّ تحديثات الإطلاق',
        'استفد من خصم 50% على السنة الأولى من الاشتراك',
        'كن من أوائل المستخدمين الذين يجربون Aure Up',
      ],
      placeholder: 'أدخل بريدك الإلكتروني',
      cta: 'انضم إلى قائمة الانتظار',
      privacy: 'بدون رسائل مزعجة. فقط التحديثات المهمة.',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صالح.',
      unavailable: 'هذا النموذج جاهز للربط مع الواجهة الخلفية في هذا الإصدار.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة قبل الإطلاق؟',
      subtitle: 'إليك ما يرغب الزوار الأوائل عادةً في معرفته قبل الانضمام إلى قائمة الانتظار.',
      items: [
        {
          q: 'متى سيتم إطلاق Aure Up؟',
          a: 'Aure Up قيد التطوير حالياً وسيتم إطلاقه قريباً. وسيتلقى أعضاء قائمة الانتظار دعوات للوصول المبكر قبل الإطلاق العام.',
        },
        {
          q: 'هل سيكون التطبيق مجانياً؟',
          a: 'يتطلب بناء منصة مالية عالية الجودة وصيانتها تكاليف كبيرة على مستوى التطوير والبنية التحتية. ولهذا سيوفر Aure Up فترة تجريبية مجانية حتى يتمكن المستخدمون من اكتشاف القيمة الكاملة للتطبيق. وبعد انتهاء الفترة التجريبية، تستمر الخدمة عبر اشتراك مميز بسعر معقول يراعي سهولة الوصول.',
        },
        {
          q: 'هل بياناتي المالية آمنة؟',
          a: 'الأمان والخصوصية من أعلى الأولويات. وقد تم تصميم Aure Up وفق مبادئ التشفير الحديثة والخصوصية أولاً.',
        },
        {
          q: 'هل سيعمل Aure Up في المغرب؟',
          a: 'نعم. صُمم Aure Up أولاً للمغاربة* وعاداتهم المالية.',
        },
        {
          q: 'هل سيكون متاحاً على iPhone وAndroid؟',
          a: 'نعم. سيتم إطلاق Aure Up على App Store وGoogle Play.',
        },
      ],
    },
    footer: {
      description: 'تساعد Aure Up الناس على بناء مستقبل مالي أقوى من خلال أدوات أذكى وتعليم مالي أفضل.',
      madeBy: 'من تطوير AEQO Technologies',
    },
  },
}

export function getCopy(language) {
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}
