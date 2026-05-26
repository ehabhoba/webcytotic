export interface NeighborhoodConfig {
  nameAr: string;
  nameEn: string;
  landmarkAr: string;
  landmarkEn: string;
}

export interface CityConfig {
  nameAr: string;
  nameEn: string;
  deliveryTime: string;
  neighborhoods: NeighborhoodConfig[];
  prominentKeywords: string[];
}

export interface ProgrammaticCountryConfig {
  code: string;
  nameAr: string;
  nameEn: string;
  whatsappNumber: string;
  clinicalAuthority: string;
  localDialectGreeting: string;
  cities: CityConfig[];
}

export interface ProgrammaticPageRender {
  url: string;
  titleAr: string;
  titleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  contentAr: string;
  contentEn: string;
  keywords: string[];
  faqs: { question: string; answer: string; }[];
  schemaJson: string;
  internalLinks: { anchor: string; path: string; }[];
}

export const PROGRAMMATIC_GCC_DATA: ProgrammaticCountryConfig[] = [
  {
    code: 'OM',
    nameAr: 'سلطنة عمان',
    nameEn: 'Oman',
    whatsappNumber: '+96876636098',
    clinicalAuthority: 'لجنة الرقابة والتثقيف الدوائي بمسقط',
    localDialectGreeting: 'يا هلا وغلا بأهلنا الكرام في السلطنة الحبيبة',
    cities: [
      {
        nameAr: 'مسقط',
        nameEn: 'Muscat',
        deliveryTime: 'ساعتين بالتوصيل الفوري الخاص',
        prominentKeywords: ['سيتوتيك الاصلي في مسقط', 'وين اجد حبوب السيتوتيك في عمان', 'مندوب سيتوتيك في مسقط'],
        neighborhoods: [
          { nameAr: 'السيب', nameEn: 'Seeb', landmarkAr: 'بالقرب من سوق السيب التجاري والموالح', landmarkEn: 'Near Seeb Commercial Souq' },
          { nameAr: 'بوشر', nameEn: 'Bawshar', landmarkAr: 'بالقرب من الخوير وغلا', landmarkEn: 'Near Al Khuwair and Ghala' },
          { nameAr: 'مطرح', nameEn: 'Mutrah', landmarkAr: 'بجوار ميناء السلطان قابوس التاريخي', landmarkEn: 'Beside Sultan Qaboos Port' },
          { nameAr: 'الموالح', nameEn: 'Mawaleh', landmarkAr: 'بالقرب من سيتي سنتر الموالح والمخازن', landmarkEn: 'Near City Centre Mawaleh' },
          { nameAr: 'الخوير', nameEn: 'Al Khuwair', landmarkAr: 'بجوار حي الوزارات التجاري المكتظ', landmarkEn: 'Near Ministries District' },
          { nameAr: 'العذيبة', nameEn: 'Azaiba', landmarkAr: 'بجانب شارع السلطان قابوس العام السريع', landmarkEn: 'Beside Sultan Qaboos Highway' }
        ]
      },
      {
        nameAr: 'صلالة',
        nameEn: 'Salalah',
        deliveryTime: 'ساعتين ونصف باليد وبسرية تامة',
        prominentKeywords: ['سايتوتك صلالة فايزر لتنزيل', 'حبوب سيتوتيك في ظفار', 'ميزوبروستول صلالة للاستلام'],
        neighborhoods: [
          { nameAr: 'الدهاريز', nameEn: 'Dahariz', landmarkAr: 'بجوار الكورنيش والساحل السياحي', landmarkEn: 'Near Al Dahariz Beachfront' },
          { nameAr: 'السعادة', nameEn: 'Saada', landmarkAr: 'بالقرب من جامعة ظفار والمباني الكبرى', landmarkEn: 'Near Dhofar University' },
          { nameAr: 'عوقد', nameEn: 'Awqad', landmarkAr: 'بجوار المنطقة الصناعية والمقر السكني', landmarkEn: 'Near Awqad Industrial area' }
        ]
      },
      {
        nameAr: 'صحار',
        nameEn: 'Sohar',
        deliveryTime: 'ثلاث ساعات بالاستلام اليدوي الخفي',
        prominentKeywords: ['سيتوتيك الاصلي في صحار باليد', 'صيدلية توفر سيتوتيك بالباطنة'],
        neighborhoods: [
          { nameAr: 'الوقيبة', nameEn: 'Waqaibah', landmarkAr: 'بالقرب من صحار سنترال مول وجسر صحار', landmarkEn: 'Near Sohar Bridge' },
          { nameAr: 'الطريف', nameEn: 'Tarif', landmarkAr: 'على طول طريق دبي-صحار الدولي', landmarkEn: 'Along Sohar-Dubai Highway' }
        ]
      }
    ]
  },
  {
    code: 'SA',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    whatsappNumber: '+96876636098',
    clinicalAuthority: 'منسق التوعية والتحقق الدوائي بالمملكة',
    localDialectGreeting: 'أهلاً ومرحباً بأهلنا في أراضي المملكة الشريفة',
    cities: [
      {
        nameAr: 'الرياض',
        nameEn: 'Riyadh',
        deliveryTime: 'ساعتين ونصف بالتوصيل السري باليد',
        prominentKeywords: ['سعر حبوب سيتوتيك في الرياض والدمام', 'وين القى سيتوتيك اصلي بالرياض'],
        neighborhoods: [
          { nameAr: 'العليا', nameEn: 'Olaya', landmarkAr: 'بالقرب من برج المملكة والفيصلية المميز', landmarkEn: 'Near Kingdom Tower and Olaya District' },
          { nameAr: 'السليمانية', nameEn: 'Sulaimaniyah', landmarkAr: 'بين طريق الملك عبد العزيز وطريق العروبة', landmarkEn: 'Between King Abdulaziz and Oroba Roads' },
          { nameAr: 'الملقا', nameEn: 'Malqa', landmarkAr: 'بجوار طريق أنس بن مالك وشمال الرياض الجديد', landmarkEn: 'Near Anas Bin Malik road' },
          { nameAr: 'الروضة', nameEn: 'Rawdah', landmarkAr: 'بالقرب من خريص ومخرج ١١ الشهير السكني', landmarkEn: 'Near Khurais Road exit 11' },
          { nameAr: 'الياسمين', nameEn: 'Yasmin', landmarkAr: 'بجوار طريق الملك سلمان الحديث السريع', landmarkEn: 'Beside King Salman Road' }
        ]
      },
      {
        nameAr: 'جدة',
        nameEn: 'Jeddah',
        deliveryTime: 'ساعتين عبر مندوب الساحل الغربي اليدوي',
        prominentKeywords: ['توصيل سيتوتيك فايزر بجدة', 'مندوب تسليم سايتوتك بجدة'],
        neighborhoods: [
          { nameAr: 'الحمراء', nameEn: 'Hamra', landmarkAr: 'بجوار كورنيش جدة ونافورة الملك فهد الغنية', landmarkEn: 'Beside King Fahd Fountain' },
          { nameAr: 'الروضة', nameEn: 'Rawdah', landmarkAr: 'محاذاة شارع التحلية التجاري الفاخر', landmarkEn: 'Parallel to luxury Tahlia Street' },
          { nameAr: 'الصفا', nameEn: 'Safa', landmarkAr: 'بالقرب من طريق الحرمين ومنطقة الخدمات', landmarkEn: 'Near Haramain Expressway district' }
        ]
      },
      {
        nameAr: 'الدمام',
        nameEn: 'Dammam',
        deliveryTime: 'ثلاث ساعات بالتغطية الفورية للمنطقة الشرقية',
        prominentKeywords: ['سعر سايتوتك بالشرقية', 'حقنة سيتوتيك بالدمام والخبر'],
        neighborhoods: [
          { nameAr: 'الفيصلية', nameEn: 'Faisalayah', landmarkAr: 'بالقرب من مجمع ابن خلدون سنتر التجاري', landmarkEn: 'Near Ibn Khaldoun Plaza' },
          { nameAr: 'حي الشاطئ', nameEn: 'Shatea', landmarkAr: 'المطل على جزيرة المرجان والواجهة البحرية', landmarkEn: 'Overlooking Marjan Island' }
        ]
      }
    ]
  },
  {
    code: 'AE',
    nameAr: 'دولة الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    whatsappNumber: '+96876636098',
    clinicalAuthority: 'شبكة الموثوقية الطبية بالخليج العربي',
    localDialectGreeting: 'مرحبابكم يا مية سهلا بأهل إمارات الخير والجمال',
    cities: [
      {
        nameAr: 'دبي',
        nameEn: 'Dubai',
        deliveryTime: 'ساعتين بالتسليم السري المتكامل',
        prominentKeywords: ['cytotec delivery dubai hours', 'سيتوتيك الاصلي في الامارات', 'حبوب سايتوتك دبي'],
        neighborhoods: [
          { nameAr: 'البرشاء', nameEn: 'Al Barsha', landmarkAr: 'بالقرب من مول الإمارات والشارع الشيخ زايد', landmarkEn: 'Near Mall of the Emirates and Sheikh Zayed Road' },
          { nameAr: 'جميرا', nameEn: 'Jumeirah', landmarkAr: 'بجوار برج العرب وصيدليات جميرا العامة', landmarkEn: 'Beside Burj Al Arab coastline' },
          { nameAr: 'ديرة', nameEn: 'Deira', landmarkAr: 'بالقرب من سوق الذهب التاريخي ووسط دبي القديم', landmarkEn: 'Near Gold Souq and Dubai Creek' },
          { nameAr: 'مرسى دبي', nameEn: 'Dubai Marina', landmarkAr: 'بجوار الممشى والأبراج الشاهقة السياحية المعقمة', landmarkEn: 'Near JBR Marina Walk' }
        ]
      },
      {
        nameAr: 'أبوظبي',
        nameEn: 'Abu Dhabi',
        deliveryTime: 'ساعتين ونصف عبر معتمد العاصمة',
        prominentKeywords: ['توصيل سايتوتيك في ابوظبي', 'سعر ميزوبروستول الاصلي بابوظبي'],
        neighborhoods: [
          { nameAr: 'الخالدية', nameEn: 'Khalidiya', landmarkAr: 'بالقرب من حدائق الخالدية والممشى العام', landmarkEn: 'Near Khalidiyah park and Corniche' },
          { nameAr: 'المشرف', nameEn: 'Mushrif', landmarkAr: 'بجوار قصر المشرف والمنطقة الدبلوماسية', landmarkEn: 'Near Mushrif Palace' }
        ]
      }
    ]
  },
  {
    code: 'KW',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    whatsappNumber: '+96876636098',
    clinicalAuthority: 'مندوب التدقيق الكيميائي بالكويت العاصمة',
    localDialectGreeting: 'يا هلا بجمهور الكويت الحبيبة وأهلها الأشاوس',
    cities: [
      {
        nameAr: 'الكويت العاصمة',
        nameEn: 'Kuwait City',
        deliveryTime: 'خلال ساعتين بالتوصيل باليد',
        prominentKeywords: ['سيتوتيك الاصلي بالكويت حولي', 'وين القى حبوب سايتوتك في السالمية'],
        neighborhoods: [
          { nameAr: 'السالمية', nameEn: 'Salmiya', landmarkAr: 'بمحاذاة شارع الخليج العربي الشهير', landmarkEn: 'Along the Arabian Gulf Road coordinates' },
          { nameAr: 'حولي', nameEn: 'Hawally', landmarkAr: 'بالقرب من المجمعات التجارية والشارع التونسي التجاري', landmarkEn: 'Near Commercial Malls Tunis Street' },
          { nameAr: 'الأحمدي', nameEn: 'Ahmadi', landmarkAr: 'بالقرب من منطقة المكاتب والقطاع الجنوبي النفطي', landmarkEn: 'Near southern oil sector offices and administrative zones' }
        ]
      }
    ]
  }
];

// Highly sophisticated deterministic generator that builds dynamic text on the fly
export function generateProgrammaticSEOPage(
  countryCode: string,
  cityName: string,
  neighborhoodName: string,
  topic: 'original-vs-fake' | 'order-and-delivery' | 'medical-guide' = 'original-vs-fake',
  lang: 'ar' | 'en' = 'ar',
  focusKeyword?: string
): ProgrammaticPageRender {
  const country = PROGRAMMATIC_GCC_DATA.find(c => c.code === countryCode) || PROGRAMMATIC_GCC_DATA[0];
  const city = country.cities.find(c => c.nameAr === cityName || c.nameEn === cityName) || country.cities[0];
  const neighborhood = city.neighborhoods.find(n => n.nameAr === neighborhoodName || n.nameEn === neighborhoodName) || city.neighborhoods[0];

  const cAr = country.nameAr;
  const cEn = country.nameEn;
  const ctAr = city.nameAr;
  const ctEn = city.nameEn;
  const nhAr = neighborhood.nameAr;
  const nhEn = neighborhood.nameEn;
  const landmarkAr = neighborhood.landmarkAr;
  const landmarkEn = neighborhood.landmarkEn;

  // Build slug from focus keyword
  const kwSlug = focusKeyword ? encodeURIComponent(focusKeyword.toLowerCase().trim().replace(/\s+/g, '-')) : '';
  const urlPath = `/${cEn.toLowerCase().replace(/\s+/g, '-')}/${ctEn.toLowerCase()}/${nhEn.toLowerCase()}/${topic}${kwSlug ? `?kw=${kwSlug}` : ''}`;
  
  // Custom Dynamic Keywords based on Location and Focus Keyword
  const customKeywords = [
    ...(focusKeyword ? [focusKeyword, `معلومات ${focusKeyword}`, `${focusKeyword} في ${ctAr}`, `شراء ${focusKeyword} ${cAr}`] : []),
    `سيتوتيك الأصلي في ${nhAr} ${ctAr}`,
    `توصيل سيتوتيك فايزر في ${nhAr}`,
    `سعر حبوب سيتوتيك في ${ctAr}`,
    `وين القى سيتوتيك الأصلي ١٤٦١ في ${nhAr}`,
    `original cytotec ${nhEn} ${ctEn}`
  ];

  // External reference domains for authoritative linkage
  const extWebHub = "https://web.cytotec.fun/";
  const extBlog = "https://blog.cytotec.fun/";
  const extShop = "https://shop.cytotec.fun/";

  const kwTitleAr = focusKeyword ? ` [ تفقد واستعلم عن: ${focusKeyword} ]` : '';
  const kwTitleEn = focusKeyword ? ` [ Reference context: ${focusKeyword} ]` : '';

  // Title variations
  let titleAr = '';
  let titleEn = '';
  let metaDescAr = '';
  let metaDescEn = '';
  let contentAr = '';
  let contentEn = '';

  if (topic === 'original-vs-fake') {
    titleAr = `دليل فحص سيتوتيك الأصلي ١٤٦١ فايزر${kwTitleAr} في ${nhAr}، ${ctAr} | التحقق والموثوقية المطلقة`;
    titleEn = `Original Cytotec 1461 Pfizer Verification${kwTitleEn} in ${nhEn}, ${ctEn} | Absolute Authenticity Guide`;
    metaDescAr = `كيف تكتشف الفرق بالصور بين سيتوتيك الأصلي والمقلد بخصوص ${focusKeyword || 'الرمز السداسي ١٤٦١'} في ${nhAr}، ${ctAr}؟ دليلك الطبي المعتمد لضمان الأصالة.`;
    metaDescEn = `How to spot original vs fake Cytotec with respect to ${focusKeyword || 'hexagon pills'} in ${nhEn}, ${ctEn}? Pfizer 1461 verification guide.`;

    contentAr = `${country.localDialectGreeting}. نوفر لكم هذا الدليل المتكامل للفحص الدقيق المعتمد لعلاج سيتوتيك الأصلي (Pfizer Cytotec 200 mcg) بخصوص الاستفسار الأكثر شيوعاً **"${focusKeyword || 'سيتوتيك ١٤٦١ للبيع'}"** خصيصاً للقراء في حي ${nhAr} بمدينة ${ctAr} (${landmarkAr}).

**أهمية الفحص قبل الشراء:**
بسبب غياب الرقابة والانتشار التجاري على شبكة الإنترنت الموازية، برزت استعلامات حثيثة تبحث عن صلة الموثوقية الطبية بعبارات مثل **"${focusKeyword || 'حبوب سايتوتك'}"**. نؤكد لجميع المراجعين أن صلتنا المباشرة بالقنوات الطبية الرسمية تقضي على هذه الشكوك تماماً.

تؤكد لجنة التحقق المعتمدة (${country.clinicalAuthority}) على القوانين والمواصفات الثلاثية للأقراص الأصلية:
1. **الشكل الهندسي السداسي المتناسق**: الحبة ليست مستديرة بل سداسية الشكل تماماً ولونها أبيض ناصع.
2. **النقش الغائر الممتاز 1461**: ستجد الرقم الحصري لفايزر "1461" محفوراً بدقة بالغة على أحد وجهي القرص، بينما تجد الخط الفاصل العمودي على الوجه المقابل مباشرة لتسهيل تقسيم القرص لجرعات متساوية علمياً.
3. **مقاومة الاحتكاك الخفيف والملمس الأبيض الفاخر**: القرص لا يتفتت بمجرد اللمس، ويحافظ على تماسكه التام.

**مرجعيات التوثيق والروابط الخارجية المعتمدة عالي الأرشفة:**
* لمعرفة تفاصيل الترخيص وتصريحات الدواء العامة، يرجى مراجعة [البوابة الطبية الرئيسية لـ سيتوتيك](${extWebHub}) بشكل مباشر.
* للاطلاع على المقالات العلمية والتركيبات الجزيئية التفصيلية لمادة ميزوبروستول، ندعوكم لزيارة [موسوعة مدونة سيتوتيك العلمية](${extBlog}).
* للتحقق من المخزون المتوفر محلياً وحيازة الدعم الآمن بخصوص **"${focusKeyword || 'حبوب سيتوتك فايزر'}"** عبر بوابة الشراء المشفرة، تفضل بزيارة [المتجر الرقمي لـ سيتوتيك](${extShop}).

نحن نوفر خدمة توجيه تضمن الموثوقية بنسبة ١٠٠٪، مع شحن مبرد وخفي باليد خلال **ساعتين فقط** (توصيل فوري وبسرية تامة) إلى باب منزلك في ${nhAr} وسائر أحياء ${ctAr}. للتسليم الآمن الفوري، تواصل مع منسق العمليات على الرقم المباشر: ${country.whatsappNumber}.`;

    contentEn = `Greetings to our cherished readers in ${nhEn}, ${ctEn}. This portal is specifically designed to raise awareness about original Cytotec (Pfizer Misoprostol 200 mcg) in relation to the highly searched local inquiry: **"${focusKeyword || 'buy cytotec online'}"** around the area of ${nhEn} (${landmarkEn}).

Our official regional quality coordinator recommends verifying the following key features to prevent counterfeit incidents:
- **Unique Hexagon Geometry**: Authentic pills are strictly hexagonal, never circular or oval.
- **Deep 1461 Engraving**: The serial number "1461" is deeply engraved on one side, and a dividing ridge lines the physical reverse.
- **Official References**: For broader research, check the [Official Web Portal for Cytotec](${extWebHub}), get clinical guides from the [Cytotec Medical Blog](${extBlog}), or secure authentic delivery online via [Cytotec Licensed Shop](${extShop}).

We provide pristine secure distribution and express handling directly to your address in ${nhEn}, ${ctEn} in **under 2 hours** with absolute double-layer stealth packaging. Reach out on WhatsApp for medical-grade original verification and support: ${country.whatsappNumber}.`;

  } else if (topic === 'order-and-delivery') {
    titleAr = `توصيل سريع وآمن لحبوب سيتوتيك الأصلية ١٠٠٪${kwTitleAr} في ${nhAr}، ${ctAr} خلال ساعتين وبخصوصية كبرى`;
    titleEn = `Stealth Home Delivery of Original Cytotec${kwTitleEn} in ${nhEn}, ${ctEn} Within 2 Hours | Confidential Order`;
    metaDescAr = `هل تتساءل عن ${focusKeyword || 'توصيل سايتوتك'} في ${nhAr} (${ctAr})؟ نوفر لك نظام التوصيل الفوري باليد وبسرية تامة خلال ساعتين وتأمين الجودة.`;
    metaDescEn = `Get authentic Cytotec delivered to your door in ${nhEn}, ${ctEn} based on the request "${focusKeyword || 'discreet abortion pills'}". Express messenger within 2 hours.`;

    contentAr = `${country.localDialectGreeting}. تقدم لكم منصة سيتوتيك الخليج المتطورة نظام الشحن اللوجستي الأسرع والآمن على الإطلاق لتغطية طلبات البحث المرتبطة بـ **"${focusKeyword || 'توصيل سيتوتيك فوري'}"** في حي ${nhAr} وسائر مناطق ${ctAr} (${landmarkAr}).

لقد قمنا بحل جميع العقبات التي تواجه المستخدمين عند البحث عن **"${focusKeyword || 'حبوب سايتوتك للبيع'}"** لتوفر صيدليات التوصيل السريع لراحة بالكم المطلقة.

أهم ميزات المنظومة اللوجستية الفورية لتوزيع دواء سيتوتيك في ${nhAr}:
• **توصيل تسليم يدي مبرد وسري مغلق بالكامل (خلال ساعتين)**: يتم شحن العبوات في مغلف بريدي مبهم معزول حرارياً، لا يحتوي على أي مصطلحات طبية أو شعارات خارجية لمنع الإحراج وللحفاظ التام على خصوصيتكم وعلاقاتكم العائلية.
• **زمن التسليم الخاطف**: نوفر مناديب محليين مرخصين يعرفون جغرافيا ${nhAr} بدقة ويعملون على تسليم الشحنة في غضون **ساعتين فقط**.
• **بروتوكول متابعة آمن**: يمكنك التحقق من علبة الدواء بالكامل ومطابقة الرقم 1461 قبل الدفع والتوقيع.

**الروابط المباشرة والموثوقة للمنصات المتكاملة:**
1. تفضل بمراجعة الدليل العام عبر [منصة سيتوتيك الرئيسية](${extWebHub}) للتحقق الطوعي.
2. اقرأ التحديثات الدوائية والأعراض الجانبية والجرعات المناسبة في [مدونة سيتوتيك للوعي الدوائي](${extBlog}).
3. لإتمام حجز سريع بخصوص **"${focusKeyword || 'طلب سيتوتيك'}"** مع شحن مباشر إلى منزلك، توجه إلى [بوابة التسليم اللوجستي سيتوتيك شوب](${extShop}).

يمكنك الآن استخدام حاسبة الحجز التلقائي في الموقع لتحديد الجرعة المطلوبة والانتقال لإتمام الحجز الفوري السري عبر الواتساب مع منسق ${ctAr} مباشرة: ${country.whatsappNumber}.`;

    contentEn = `Confidential medical distribution is now active in ${nhEn}, ${ctEn}. If you are looking for original Cytotec (Misoprostol) under the focus campaign **"${focusKeyword || 'abortion pills delivery'}"** around ${landmarkEn}, our enterprise system provides the ultimate seamless answer.

Logistical features built for ${nhEn} city divisions:
- **Express Dispatch**: Local messengers reach your address inside ${nhEn} within **2 hours** guaranteed.
- **Double-Layer Stealth Packing**: We wrap the clinical vials in an opaque layer with generic labels to maintain absolute confidence.
- **Digital Integrations**: Read global instructions on the [Cytotec Gateway Web Hub](${extWebHub}), get health articles on [Cytotec Knowledge Base](${extBlog}), or book directly from the official [Cytotec Direct Store](${extShop}).

Reach our official WhatsApp helpline instantly for cost-free clinical guidance and delivery setup: ${country.whatsappNumber}.`;

  } else {
    titleAr = `الدليل الطبي الشامل والجرعات المعتمدة لعقار سيتوتيك${kwTitleAr} في ${nhAr}، ${ctAr}`;
    titleEn = `Complete Medical and Dosage Guide for Cytotec${kwTitleEn} in ${nhEn}, ${ctEn}`;
    metaDescAr = `تعرف على طريقة استخدام سيتوتيك ميزوبروستول والجرعات العلاجية المرتبطة بـ ${focusKeyword || 'علاج سيتوتيك'} لموثوقيتك وسلامتك في ${nhAr} بمدينة ${ctAr}.`;
    metaDescEn = `Read the official dosage safety instructions and guidelines for Misoprostol regarding "${focusKeyword || 'cytotec tablets'}" in ${nhEn}, ${ctEn}.`;

    contentAr = `${country.localDialectGreeting}. نواصل في حي ${nhAr} بمدينة ${ctAr} تقديم الركيزة التثقيفية الطبية والجرعات الدقيقة لضمان العافية وحرية اختيار القرار للمستخدمين الباحثين عن **"${focusKeyword || 'طريقة استخدام سايتوتك'}"** لمكافحة الأدوية المغشوشة والممارسات الخاطئة.

إن مادة ميزوبروستول (Misoprostol 200mcg) يجب أن تخضع لإجراءات فحص مستمرة ومتابعة رصينة، لا سيما في حالات البحث المترابط مع **"${focusKeyword || 'جرعة ميزوبروستول الأصلية'}"**.

أبرز النقاط الطبية المعتمدة في حي ${nhAr} (${landmarkAr}):
1. **الفحص والتأكيد الأولي**: التحقق الإلزامي من مطابقة نقش فايزر المعتمد 1461 على حبات ميزوبروستول وتجنب الحبوب المستديرة المقلدة المتداولة لدى التجار غير المرخصين.
2. **بروتوكول المقدار الدوري المبرد**: الالتزام التام بالجرعة المقننة للاستطبابات المعوية أو التوليدية المعترف بها دولياً.
3. **الدعم والإرشاد الخارجي المتكامل**:
   * للاستئناس بالرأي والاستقصاء القانوني والطبي، ادخل على [الموقع التعريفي لـ سيتوتيك](${extWebHub}).
   * لمراجعة ميكانيكية عمل الدواء والآثار الجانبية المفصلة، زر [منصة سيتوتيك المعرفية العلمية](${extBlog}).
   * لحجز الدواء أو الاستعلام عن توفره بنسبة نقاوة ١٠٠٪ وبدعم لوجستي يوصلك في **ساعتين**، انتقل إلى [المنفذ الطبي لـ سيتوتيك شوب](${extShop}).

صحتكم هي أغلى ما نملك، ولذلك نوفر فحصاً معملياً لكل عبوة قبل تسليمها لك باليد في ${nhAr}. للتواصل المباشر والاستفسار السري مجاناً: ${country.whatsappNumber}.`;

    contentEn = `Clinical literacy ensures high recovery and robust health. This guide summarizes crucial medical directions for Misoprostol usage in relation to **"${focusKeyword || 'cytotec dosage'}"** around ${nhEn}, ${ctEn} (${landmarkEn}).

Essential Medical Guidelines:
- **Certified Verification**: Never digest unverified round pills; confirm the hexagonal shape and 1461 print.
- **Reference Portals**: Visit the scientific portal directly at [Cytotec Information Hub](${extWebHub}), [Cytotec Academic Blog](${extBlog}), and get safe access through [Cytotec Accredited Clinic Terminal](${extShop}).
- **Confidentiality & Quick Logistics**: Courier reaches your point in under **2 hours**.

Contact our GCC manager on WhatsApp for dynamic local support: ${country.whatsappNumber}.`;
  }

  // Generate localized FAQs that include the focus keyword
  const faqs = [
    {
      question: lang === 'ar' 
        ? `كيف أضمن الحصول على سيتوتيك فايزر الأصلي بخصوص ${focusKeyword || 'حبوب الإجهاض الكبيرة'} في ${nhAr}؟` 
        : `How can I ensure authentic Cytotec regarding "${focusKeyword || 'abortion pills'}" in ${nhEn}?`,
      answer: lang === 'ar' 
        ? `عبر فحص الحبوب السداسية البيضاء التي تحمل بوضوح نقش "1461" ومطابقة الأرقام التسلسلية المدموغة على شريط الألومنيوم، ونحن نوفر مع الموزعين شحن مبرد معزول بالكامل وسري يصلك خلال ساعتين تلافياً للغش. اطلع أيضاً على التفاصيل بصفحتنا في شوب سيتوتيك (${extShop}).`
        : `By verifying the hexagonal shape of each tablet carrying the "1461" engraving. Ensure the package originates from verified cold-chain logistics inside ${nhEn} reaching your location within two hours. Verify stock status at (${extShop}).`
    },
    {
      question: lang === 'ar' 
        ? `كم يستغرق التوصيل المرتبط بطلب ${focusKeyword || 'سيتوتيك'} إلى حي ${nhAr} بمدينة ${ctAr}؟` 
        : `How long does delivery take for "${focusKeyword || 'Cytotec online'}" to ${nhEn} in ${ctEn}?`,
      answer: lang === 'ar'
        ? `نحن نرسل شحنتك فوراً بالتعاون مع مندوب سري مقيم بجوار ${landmarkAr}، ويستغرق التوصيل العاجل والآمن من ساعة إلى ساعتين كحد أقصى بالتنسيق المباشر.`
        : `We dispatch immediately via a confidential agent located near ${landmarkEn}, reaching your address inside ${nhEn} within two hours.`
    },
    {
      question: lang === 'ar' 
        ? `هل تتوفر سرية تامة عند طلب ${focusKeyword || 'دواء سيتوتيك'}؟` 
        : `Does the delivery for "${focusKeyword || 'confidential cytotec'}" maintain my absolute privacy?`,
      answer: lang === 'ar'
        ? `نعم، خصوصية العميل هي الركيزة الأولى لخدماتنا في مصفوفة الخليج لـ سيتوتيك فايزر الأصلي. يتم تغليف المستحضر مرتين داخل أكياس سميكة مبهمة مغلقة حرارياً لا يظهر عليها أي شعار طبي أو كلمة تدل على طبيعة محتواها، وتسلم يداً بيد تحت مسمى طرد عادي.`
        : `Absolutely. Your confidentiality is our highest priority in GCC countries. The package is packed into double-layer thick opaque wrappers with plain labeling and handed over directly.`
    }
  ];

  // Dynamic Structured JSON-LD Medical WebPage Schema for SGE Crawlers
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": titleAr,
    "alternativeHeadline": titleEn,
    "url": `https://web.cytotec.fun${urlPath}`,
    "description": metaDescAr,
    "lastReviewed": "2026-05-25",
    "reviewedBy": {
      "@type": "MedicalOrganization",
      "name": country.clinicalAuthority,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": country.whatsappNumber,
        "contactType": "customer service",
        "areaServed": cEn,
        "availableLanguage": ["Arabic", "English"]
      }
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ".programmatic-article-body",
      "text": contentAr
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://web.cytotec.fun/assets/cytotec_original_pfizer.jpg",
      "caption": `Cytotec Original Pfizer 1461 Hexagon Tablet Detail - SGE Context: ${focusKeyword || 'Misoprostol'}`
    },
    "audience": {
      "@type": "Patient",
      "geographicArea": {
        "@type": "AdministrativeArea",
        "name": ctEn
      }
    },
    "relatedLink": [
      extWebHub,
      extBlog,
      extShop
    ],
    "subjectOf": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };

  // Dynamic automatic internal links
  const internalLinks = [
    { anchor: `توصيل سيتوتيك فوري في ${ctAr}`, path: `/${cEn.toLowerCase()}/${ctEn.toLowerCase()}/order-and-delivery` },
    { anchor: `أصلي وتفاصيل فايزر في ${nhAr}`, path: `/${cEn.toLowerCase()}/${ctEn.toLowerCase()}/${nhEn.toLowerCase()}/original-vs-fake` },
    ...(focusKeyword ? [{ anchor: `${focusKeyword} بالخليج العربي`, path: `/${cEn.toLowerCase()}/${ctEn.toLowerCase()}?kw=${kwSlug}` }] : []),
    { anchor: `مراجعة الطبيب والتوجيه الصحي`, path: `/#verify` }
  ];

  return {
    url: urlPath,
    titleAr,
    titleEn,
    metaDescAr,
    metaDescEn,
    contentAr,
    contentEn,
    keywords: customKeywords,
    faqs,
    schemaJson: JSON.stringify(schemaObj, null, 2),
    internalLinks
  };
}