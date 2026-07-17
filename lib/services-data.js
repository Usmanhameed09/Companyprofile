// ============================================
// SERVICE LANDING PAGE CONTENT (EN + AR)
// One entry per service -> generates /services/<slug> and /ar/services/<slug>
//
// NOTE: Arabic copy here is a translation of your existing English text.
// Please have a native Arabic speaker review it before relying on it.
// Slugs stay in English for both locales to keep URLs clean and avoid
// percent-encoded Arabic paths.
// ============================================

export const SERVICES_DATA = [
  {
    slug: 'car-parking-shades',
    image: '/images/carpark.jpeg',
    // Projects (by id in components/Projects.js) that showcase this service
    projectImages: ['/images/ras.jpeg', '/images/slfe.jpg', '/images/amo.jpg', '/images/1.jpg'],
    en: {
      name: 'Car Parking Shades',
      h1: 'Car Parking Shades in Saudi Arabia',
      metaTitle: 'Car Parking Shades in Saudi Arabia | Supply & Installation',
      metaDescription:
        'Car parking shades designed, fabricated and installed across Saudi Arabia. HDPE Australian fabric, galvanized steel structures. Trusted by Aramco contractors, Saudi Railways and Almarai. Free quote: +966 55 307 7471.',
      intro:
        'We design, fabricate and install car parking shades that protect vehicles from harsh sunlight and heat, for residential, commercial and industrial sites across Saudi Arabia.',
      features: [
        'HDPE Australian shade fabric built for the Saudi climate',
        'Galvanized steel structures fabricated in our Dammam facility',
        'Cantilever, double-side and tilt designs to suit your layout',
        'Complete service: foundation work, fabrication and installation',
        'Optional lighting and drainage systems',
      ],
      faqs: [
        {
          q: 'How long do car parking shades last in the Saudi climate?',
          a: 'We use HDPE Australian fabric and galvanized steel specifically because of the heat and UV levels in the Kingdom. With normal use, these materials are chosen to withstand the harsh sun and temperature conditions of the region.',
        },
        {
          q: 'Do you handle the steel fabrication yourselves?',
          a: 'Yes. We fabricate the steel structures ourselves and handle foundation work and installation, so the whole project runs through one contractor.',
        },
        {
          q: 'Which areas do you cover?',
          a: 'We are based in Dammam and have delivered car parking shade projects in Dammam, Khobar, Jubail, Riyadh, Al Ahsa, Ras Tanura, Ras Al Khair and Uqair.',
        },
      ],
    },
    ar: {
      name: 'مظلات مواقف السيارات',
      h1: 'مظلات مواقف السيارات في المملكة العربية السعودية',
      metaTitle: 'مظلات مواقف السيارات في السعودية | توريد وتركيب',
      metaDescription:
        'تصميم وتصنيع وتركيب مظلات مواقف السيارات في جميع أنحاء المملكة العربية السعودية. قماش HDPE أسترالي وهياكل حديدية مجلفنة. نخدم مقاولي أرامكو والخطوط الحديدية السعودية والمراعي. اتصل: 0553077471',
      intro:
        'نقوم بتصميم وتصنيع وتركيب مظلات مواقف السيارات التي تحمي المركبات من أشعة الشمس الحارقة والحرارة، للمواقع السكنية والتجارية والصناعية في جميع أنحاء المملكة.',
      features: [
        'قماش HDPE أسترالي مصمم ليناسب المناخ السعودي',
        'هياكل حديدية مجلفنة مصنّعة في منشأتنا بالدمام',
        'تصاميم كابولية ومزدوجة ومائلة تناسب موقعك',
        'خدمة متكاملة: أعمال الأساسات والتصنيع والتركيب',
        'أنظمة إنارة وتصريف مياه اختيارية',
      ],
      faqs: [
        {
          q: 'كم تدوم مظلات السيارات في المناخ السعودي؟',
          a: 'نستخدم قماش HDPE الأسترالي والحديد المجلفن تحديدًا بسبب درجات الحرارة ومستويات الأشعة فوق البنفسجية في المملكة. هذه المواد مختارة لتتحمل ظروف الشمس والحرارة القاسية في المنطقة.',
        },
        {
          q: 'هل تقومون بتصنيع الهياكل الحديدية بأنفسكم؟',
          a: 'نعم. نقوم بتصنيع الهياكل الحديدية بأنفسنا ونتولى أعمال الأساسات والتركيب، بحيث يُنفَّذ المشروع بالكامل من خلال مقاول واحد.',
        },
        {
          q: 'ما هي المناطق التي تغطونها؟',
          a: 'مقرنا في الدمام وقد نفّذنا مشاريع مظلات مواقف السيارات في الدمام والخبر والجبيل والرياض والأحساء ورأس تنورة ورأس الخير والعقير.',
        },
      ],
    },
  },
  {
    slug: 'playground-shades',
    image: '/images/school.jpeg',
    projectImages: ['/images/Bisak.png', '/images/isgdammam.jpeg', '/images/isg.jpg', '/images/j.jpeg'],
    en: {
      name: 'Playground Shades',
      h1: 'School & Playground Shades in Saudi Arabia',
      metaTitle: 'Playground & School Shades in Saudi Arabia | NMJ Shades',
      metaDescription:
        'UV-protected playground and school shade structures across Saudi Arabia. Delivered for BISAK Khobar and International Schools Group. Heavy steel structures, custom colours. Free quote: +966 55 307 7471.',
      intro:
        'Durable, UV-protected shade structures for school playgrounds and outdoor activity areas, keeping children safe and comfortable during outdoor activities.',
      features: [
        'UV-protected HDPE netting made for outdoor school use',
        'Heavy steel structures with full foundation work',
        'Custom colours and multi-zone playground coverage',
        'Tensile and arch designs for larger open areas',
        'Delivered for BISAK Khobar and International Schools Group',
      ],
      faqs: [
        {
          q: 'Have you worked with international schools before?',
          a: 'Yes. Our playground shade projects include BISAK School in Khobar and International Schools Group sites in Jubail, Dammam and Aziziyah.',
        },
        {
          q: 'Can the shades be made in our school colours?',
          a: 'Yes, custom colours are available. Our ISG playground projects used vibrant custom colour designs across multiple zones.',
        },
        {
          q: 'Do you cover the foundation work as well?',
          a: 'Yes. Our playground projects include heavy steel structures together with the foundation work needed to support them.',
        },
      ],
    },
    ar: {
      name: 'مظلات الملاعب والمدارس',
      h1: 'مظلات الملاعب والمدارس في المملكة العربية السعودية',
      metaTitle: 'مظلات الملاعب والمدارس في السعودية | إن إم جيه للمظلات',
      metaDescription:
        'مظلات ملاعب ومدارس مقاومة للأشعة فوق البنفسجية في جميع أنحاء السعودية. نُفِّذت لمدرسة بيساك الخبر ومجموعة المدارس العالمية. هياكل حديدية قوية وألوان مخصصة. اتصل: 0553077471',
      intro:
        'مظلات متينة ومقاومة للأشعة فوق البنفسجية لملاعب المدارس ومناطق الأنشطة الخارجية، تحافظ على سلامة الأطفال وراحتهم أثناء الأنشطة الخارجية.',
      features: [
        'شباك HDPE مقاومة للأشعة فوق البنفسجية مخصصة للاستخدام المدرسي الخارجي',
        'هياكل حديدية قوية مع أعمال أساسات متكاملة',
        'ألوان مخصصة وتغطية ملاعب متعددة المناطق',
        'تصاميم مشدودة وأقواس للمساحات المفتوحة الكبيرة',
        'نُفِّذت لمدرسة بيساك الخبر ومجموعة المدارس العالمية',
      ],
      faqs: [
        {
          q: 'هل سبق أن عملتم مع مدارس عالمية؟',
          a: 'نعم. تشمل مشاريع مظلات الملاعب لدينا مدرسة بيساك في الخبر ومواقع مجموعة المدارس العالمية في الجبيل والدمام والعزيزية.',
        },
        {
          q: 'هل يمكن تنفيذ المظلات بألوان مدرستنا؟',
          a: 'نعم، الألوان المخصصة متاحة. استخدمت مشاريع ملاعب مجموعة المدارس العالمية تصاميم بألوان مخصصة زاهية عبر مناطق متعددة.',
        },
        {
          q: 'هل تشمل الخدمة أعمال الأساسات؟',
          a: 'نعم. تشمل مشاريع الملاعب لدينا هياكل حديدية قوية مع أعمال الأساسات اللازمة لدعمها.',
        },
      ],
    },
  },
  {
    slug: 'peb-warehouses',
    image: '/images/wareouse.png',
    projectImages: ['/images/warehouse.jpeg', '/images/steel.jpeg'],
    en: {
      name: 'PEB Warehouses',
      h1: 'PEB Warehouses & Pre-Engineered Buildings in Saudi Arabia',
      metaTitle: 'PEB Warehouses in Saudi Arabia | Pre-Engineered Steel Buildings',
      metaDescription:
        'Pre-engineered steel warehouses (PEB) built to your specifications across Saudi Arabia. Strong, efficient and expandable industrial buildings. Based in Dammam since 2014. Free quote: +966 55 307 7471.',
      intro:
        'Pre-engineered steel warehouses built to client specifications — strong, efficient and suitable for a wide range of industrial applications.',
      features: [
        'Built to your exact specifications',
        'Faster construction than conventional building methods',
        'Cost effective across the life of the building',
        'Expandable design that grows with your operation',
        'Heavy load capacity for industrial use',
      ],
      faqs: [
        {
          q: 'What is a PEB warehouse?',
          a: 'A pre-engineered building is a steel structure engineered and fabricated to your specifications before being assembled on site. This makes construction quicker and more cost effective than conventional methods.',
        },
        {
          q: 'Can the warehouse be extended later?',
          a: 'Yes. We build with expandable design so the structure can grow as your operation grows.',
        },
        {
          q: 'Where are you based?',
          a: 'We are based in Dammam in the Eastern Province and have been delivering steel structures across Saudi Arabia since 2014.',
        },
      ],
    },
    ar: {
      name: 'المستودعات سابقة الهندسة',
      h1: 'المستودعات والمباني الحديدية سابقة الهندسة في السعودية',
      metaTitle: 'المستودعات سابقة الهندسة في السعودية | هناجر ومباني حديدية',
      metaDescription:
        'مستودعات حديدية سابقة الهندسة تُبنى وفق مواصفاتكم في جميع أنحاء السعودية. مبانٍ صناعية قوية وفعّالة وقابلة للتوسعة. مقرنا الدمام منذ 2014. اتصل: 0553077471',
      intro:
        'مستودعات حديدية سابقة الهندسة تُبنى وفق مواصفات العميل — قوية وفعّالة ومناسبة لمجموعة واسعة من التطبيقات الصناعية.',
      features: [
        'تُبنى وفق مواصفاتكم بدقة',
        'تنفيذ أسرع من طرق البناء التقليدية',
        'فعّالة من حيث التكلفة على مدى عمر المبنى',
        'تصميم قابل للتوسعة ينمو مع أعمالكم',
        'قدرة تحمل عالية للاستخدام الصناعي',
      ],
      faqs: [
        {
          q: 'ما هو المستودع سابق الهندسة؟',
          a: 'المبنى سابق الهندسة هو هيكل حديدي يتم تصميمه وتصنيعه وفق مواصفاتكم قبل تجميعه في الموقع، مما يجعل التنفيذ أسرع وأقل تكلفة من الطرق التقليدية.',
        },
        {
          q: 'هل يمكن توسعة المستودع لاحقًا؟',
          a: 'نعم. نبني بتصميم قابل للتوسعة بحيث يمكن للهيكل أن ينمو مع نمو أعمالكم.',
        },
        {
          q: 'أين يقع مقركم؟',
          a: 'مقرنا في الدمام بالمنطقة الشرقية، ونقوم بتنفيذ الهياكل الحديدية في جميع أنحاء المملكة منذ عام 2014.',
        },
      ],
    },
  },
  {
    slug: 'warehouse-curtains',
    image: '/images/curtuin.jpg',
    projectImages: ['/images/cu1.jpeg', '/images/c1.jpeg', '/images/cu2.jpeg'],
    en: {
      name: 'Warehouse Curtains',
      h1: 'Warehouse & Industrial PVC Curtains in Saudi Arabia',
      metaTitle: 'Warehouse Curtains in Saudi Arabia | Industrial PVC Curtains',
      metaDescription:
        'Weather-resistant industrial PVC curtains for warehouses and commercial spaces across Saudi Arabia. Dust control, climate control and airflow management. Free quote: +966 55 307 7471.',
      intro:
        'Flexible, weather-resistant curtains for warehouses and commercial spaces, used to control dust, sunlight and airflow.',
      features: [
        'Industrial-grade PVC curtains',
        'Dust and sunlight protection',
        'Temperature and airflow control',
        'Flexible layouts for any warehouse opening',
        'Delivered for Kerry Logistics warehouse in Khobar',
      ],
      faqs: [
        {
          q: 'What are warehouse curtains used for?',
          a: 'They are used to control dust, sunlight and airflow in warehouses and commercial spaces. Our Kerry Logistics project in Khobar used PVC curtains for warehouse temperature and dust control.',
        },
        {
          q: 'Are they suitable for temperature control?',
          a: 'Yes. Our industrial PVC curtain installations are used for climate control as well as dust protection.',
        },
      ],
    },
    ar: {
      name: 'ستائر المستودعات',
      h1: 'ستائر المستودعات والستائر الصناعية PVC في السعودية',
      metaTitle: 'ستائر المستودعات في السعودية | ستائر PVC صناعية',
      metaDescription:
        'ستائر PVC صناعية مقاومة للعوامل الجوية للمستودعات والمساحات التجارية في جميع أنحاء السعودية. التحكم في الغبار ودرجة الحرارة وتدفق الهواء. اتصل: 0553077471',
      intro:
        'ستائر مرنة ومقاومة للعوامل الجوية للمستودعات والمساحات التجارية، تُستخدم للتحكم في الغبار وأشعة الشمس وتدفق الهواء.',
      features: [
        'ستائر PVC بمواصفات صناعية',
        'حماية من الغبار وأشعة الشمس',
        'التحكم في درجة الحرارة وتدفق الهواء',
        'تصاميم مرنة تناسب أي فتحة مستودع',
        'نُفِّذت لمستودع كيري لوجستيكس في الخبر',
      ],
      faqs: [
        {
          q: 'فيمَ تُستخدم ستائر المستودعات؟',
          a: 'تُستخدم للتحكم في الغبار وأشعة الشمس وتدفق الهواء في المستودعات والمساحات التجارية. استخدم مشروع كيري لوجستيكس في الخبر ستائر PVC للتحكم في درجة حرارة المستودع والغبار.',
        },
        {
          q: 'هل هي مناسبة للتحكم في درجة الحرارة؟',
          a: 'نعم. تُستخدم تركيبات ستائر PVC الصناعية لدينا للتحكم في المناخ إضافة إلى الحماية من الغبار.',
        },
      ],
    },
  },
  {
    slug: 'steel-structures',
    image: '/images/steel.jpeg',
    projectImages: ['/images/wes.jpeg', '/images/tent.jpeg', '/images/steel.jpeg'],
    en: {
      name: 'Steel Structures',
      h1: 'Steel Structures & Steel Fabrication in Saudi Arabia',
      metaTitle: 'Steel Structures & Fabrication in Saudi Arabia | NMJ Shades',
      metaDescription:
        'Steel-framed sheds, shelters and fabrication for schools, workshops and commercial spaces across Saudi Arabia. Galvanized steel, welding barriers, custom fabrication. Free quote: +966 55 307 7471.',
      intro:
        'Robust steel-framed sheds and shelters for schools, workshops and commercial spaces, engineered for long-term durability.',
      features: [
        'Galvanized steel structures fabricated in-house',
        'Custom fabrication to your drawings and specifications',
        'Welding barriers and industrial safety structures',
        'Automatic gate, lighting and drainage systems available',
        'Delivered for WESCOSA and Saudi Transformer Company',
      ],
      faqs: [
        {
          q: 'Do you fabricate in-house or subcontract?',
          a: 'We fabricate in-house. Our Saudi Transformer Company project covered steel fabrication and installation, automatic gate system, lighting and drainage.',
        },
        {
          q: 'What kind of industrial structures do you build?',
          a: 'Alongside sheds and shelters we have built welding barriers for the WESCOSA factory in Dammam using steel structures with PVC 550GSM.',
        },
      ],
    },
    ar: {
      name: 'الهياكل الحديدية',
      h1: 'الهياكل الحديدية والتصنيع المعدني في السعودية',
      metaTitle: 'الهياكل الحديدية والتصنيع المعدني في السعودية | إن إم جيه',
      metaDescription:
        'هياكل ومظلات حديدية وتصنيع معدني للمدارس وورش العمل والمساحات التجارية في جميع أنحاء السعودية. حديد مجلفن وحواجز لحام وتصنيع مخصص. اتصل: 0553077471',
      intro:
        'هياكل ومظلات حديدية قوية للمدارس وورش العمل والمساحات التجارية، مصممة لمتانة طويلة الأمد.',
      features: [
        'هياكل حديدية مجلفنة مصنّعة داخليًا',
        'تصنيع مخصص وفق مخططاتكم ومواصفاتكم',
        'حواجز لحام وهياكل سلامة صناعية',
        'أنظمة بوابات آلية وإنارة وتصريف مياه متاحة',
        'نُفِّذت لشركة ويسكوسا وشركة المحولات السعودية',
      ],
      faqs: [
        {
          q: 'هل تقومون بالتصنيع داخليًا أم عبر مقاولين من الباطن؟',
          a: 'نقوم بالتصنيع داخليًا. شمل مشروع شركة المحولات السعودية التصنيع والتركيب المعدني ونظام البوابات الآلي والإنارة وتصريف المياه.',
        },
        {
          q: 'ما نوع الهياكل الصناعية التي تنفذونها؟',
          a: 'إلى جانب المظلات والسواتر، نفّذنا حواجز لحام لمصنع ويسكوسا في الدمام باستخدام هياكل حديدية مع PVC بوزن 550 جرام/م².',
        },
      ],
    },
  },
  {
    slug: 'tarpaulin-covers',
    image: '/images/tarpaulin.jpeg',
    projectImages: ['/images/tarpaulin.jpeg', '/images/Riyas.jpeg'],
    en: {
      name: 'Tarpaulin Covers',
      h1: 'Tarpaulin Covers in Saudi Arabia',
      metaTitle: 'Tarpaulin Covers in Saudi Arabia | Heavy-Duty PVC Covers',
      metaDescription:
        'Heavy-duty tarpaulin covers for vehicles and equipment across Saudi Arabia. Protection from dust, rain and extreme weather. PVC 900GSM available. Free quote: +966 55 307 7471.',
      intro:
        'Heavy-duty tarpaulins for vehicle and equipment coverage, offering reliable protection from dust, rain and extreme weather.',
      features: [
        'Heavy-duty PVC material, including 900GSM',
        'Vehicle and equipment coverage',
        'Protection from dust, rain and extreme weather',
        'Custom sizes fabricated to your requirements',
        'Arch style and custom designs available',
      ],
      faqs: [
        {
          q: 'What material do you use for tarpaulin covers?',
          a: 'We use heavy-duty PVC. Our Al Riyas project used PVC 900GSM in an arch style design.',
        },
        {
          q: 'Can you make custom sizes?',
          a: 'Yes. Covers are fabricated to your requirements for vehicles, equipment and specific site areas.',
        },
      ],
    },
    ar: {
      name: 'أغطية المشمع',
      h1: 'أغطية المشمع (الترابيل) في السعودية',
      metaTitle: 'أغطية المشمع في السعودية | أغطية PVC عالية التحمل',
      metaDescription:
        'أغطية مشمع عالية التحمل للمركبات والمعدات في جميع أنحاء السعودية. حماية من الغبار والمطر والطقس القاسي. متوفر PVC بوزن 900 جرام. اتصل: 0553077471',
      intro:
        'أغطية مشمع عالية التحمل لتغطية المركبات والمعدات، توفر حماية موثوقة من الغبار والمطر والطقس القاسي.',
      features: [
        'مادة PVC عالية التحمل، تشمل وزن 900 جرام/م²',
        'تغطية المركبات والمعدات',
        'حماية من الغبار والمطر والطقس القاسي',
        'مقاسات مخصصة تُصنَّع وفق متطلباتكم',
        'تصاميم على شكل أقواس وتصاميم مخصصة متاحة',
      ],
      faqs: [
        {
          q: 'ما المادة المستخدمة في أغطية المشمع؟',
          a: 'نستخدم PVC عالي التحمل. استخدم مشروع الرياس لدينا مادة PVC بوزن 900 جرام/م² بتصميم على شكل قوس.',
        },
        {
          q: 'هل يمكنكم تنفيذ مقاسات مخصصة؟',
          a: 'نعم. تُصنَّع الأغطية وفق متطلباتكم للمركبات والمعدات ومناطق محددة في الموقع.',
        },
      ],
    },
  },
]

export function getService(slug) {
  return SERVICES_DATA.find((s) => s.slug === slug)
}
