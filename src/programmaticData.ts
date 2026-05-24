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
          { nameAr: 'الأحمدي', nameEn: 'Ahmadi', landmarkAr: 'بالقرب من منطقة المكاتب والقطاع الجنوبي النفطي', landmarkEn: 'Near South Sector oil office district' }
        ]
      }
    ]
  },
  {
    code: 'QA',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    whatsappNumber: '+96876636098',
    clinicalAuthority: 'لجنة الترخيص والجودة المعتمدة بالدوحة',
    localDialectGreeting: 'يا مرحبا ومسهلا بأهل قطر الأوفياء الكرام',
    cities: [
      {
        nameAr: 'الدوحة',
        nameEn: 'Doha',
        deliveryTime: 'ساعتين بالتنسيق مع المندوب الفوري',
        prominentKeywords: ['سيتوتيك الاصلي في قطر باليد', 'توصيل سايتوتك الدوحة السد'],
        neighborhoods: [
          { nameAr: 'السد', nameEn: 'Al Sadd', landmarkAr: 'بجوار طريق السد والمستشفى الطبي الكندري وبيروت', landmarkEn: 'Near Al Sadd Metro and Medical Clinics' },
          { nameAr: 'اللؤلؤة', nameEn: 'The Pearl', landmarkAr: 'بجانب المارينا والمطاعم والفلل الراقية المسورة', landmarkEn: 'Near luxury Porto Arabia marina' },
          { nameAr: 'الوعب', nameEn: 'Al Waab', landmarkAr: 'بالقرب من أسباير زون واستاد خليفة الدولي', landmarkEn: 'Near Aspire Zone and Khalifa Stadium' }
        ]
      }
    ]
  },
  {
    code: 'BH',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    whatsappNumber: '+96876636098',
    clinicalAuthority: 'منسق توزيع الجرعة الآمنة بالمنامة ودول الجزر',
    localDialectGreeting: 'أهلاً بكم يا غاليين بأرض البحرين الحبيبة والمنامة والرفاع',
    cities: [
      {
        nameAr: 'المنامة',
        nameEn: 'Manama',
        deliveryTime: 'ساعتين بالاستلام اليدوي السري',
        prominentKeywords: ['سعر حبوب سيتوتيك البحرين', 'وين احصل سيتوتيك اصلي بالمنامة الرفاع'],
        neighborhoods: [
          { nameAr: 'الجفير', nameEn: 'Juffair', landmarkAr: 'بالقرب من جادة الفنادق الكبرى والمسجد الكبير', landmarkEn: 'Near Juffair Boulevard' },
          { nameAr: 'ضاحية السيف', nameEn: 'Seef', landmarkAr: 'بجوار مجمع السيف ومجمع سيتي سنتر المالي', landmarkEn: 'Near Seef Mall and City Centre Financial' }
        ]
      }
    ]
  }
];

export interface ProgrammaticPageRender {
  url: string;
  titleAr: string;
  titleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  contentAr: string;
  contentEn: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
  schemaJson: string;
  internalLinks: { anchor: string; path: string }[];
}

// Highly sophisticated deterministic generator that builds dynamic text on the fly
export function generateProgrammaticSEOPage(
  countryCode: string,
  cityName: string,
  neighborhoodName: string,
  topic: 'original-vs-fake' | 'order-and-delivery' | 'medical-guide' = 'original-vs-fake',
  lang: 'ar' | 'en' = 'ar'
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

  // Build simulated structured URLs
  const urlPath = `/${cEn.toLowerCase().replace(/\s+/g, '-')}/${ctEn.toLowerCase()}/${nhEn.toLowerCase()}/${topic}`;
  
  // Custom Dynamic Keywords based on Location
  const customKeywords = [
    `سيتوتيك الأصلي في ${nhAr} ${ctAr}`,
    `توصيل سيتوتيك فايزر في ${nhAr}`,
    `سعر حبوب سيتوتيك في ${ctAr}`,
    `وين القى سيتوتيك الأصلي ١٤٦١ في ${nhAr}`,
    `original cytotec ${nhEn} ${ctEn}`
  ];

  // Title variations
  let titleAr = '';
  let titleEn = '';
  let metaDescAr = '';
  let metaDescEn = '';
  let contentAr = '';
  let contentEn = '';

  if (topic === 'original-vs-fake') {
    titleAr = `دليل فحص سيتوتيك الأصلي ١٤٦١ فايزر في ${nhAr}، ${ctAr} | التحقق والموثوقية المطلقة`;
    titleEn = `Original Cytotec 1461 Pfizer Verification in ${nhEn}, ${ctEn} | Absolute Authenticity Guide`;
    metaDescAr = `كيف تكتشف الفرق بالصور بين سيتوتيك الأصلي والمقلد في ${nhAr}، ${ctAr}؟ دليلك الطبي الصادر عن ${country.clinicalAuthority} للتعرف على الرمز السداسي ١٤٦١ وتجنب المغشوش.`;
    metaDescEn = `How to spot original vs fake Cytotec in ${nhEn}, ${ctEn}? Learn about the hexagonal shape, 1461 engraving, and secure delivery. Verified by GCC medical authorities.`;

    contentAr = `${country.localDialectGreeting}. نوفر لكم هذا الدليل المتكامل للفحص الدقيق المعتمد لعلاج سيتوتيك الأصلي (Pfizer Cytotec 200 mcg) خصيصاً للقراء في حي ${nhAr} بمدينة ${ctAr} (${landmarkAr}). 

بسبب غياب الرقابة في بعض الصيدليات الافتراضية غير المرخصة، انتشرت مؤخراً شحنات مقلدة ومغشوشة تشكل خطراً كبيراً على صحتك وعافيتك. 

لذلك، تؤكد لجنة التحقق المعتمدة (${country.clinicalAuthority}) على القوانين والمواصفات الثلاثية للأقراص الأصلية:
1. **الشكل الهندسي السداسي المتناسق**: الحبة ليست مستديرة ولا مستطيلة بل سداسية الشكل تماماً.
2. **النقش الغائر الممتاز 1461**: ستجد الرقم الحصري لفايزر "1461" محفوراً بوضوح على أحد وجهي القرص، بينما تجد الخط الفاصل العمودي على الوجه المقابل مباشرة.
3. **مقاومة الاحتكاك الخفيف والملمس الأبيض الفاخر**: القرص لا يتفتت أو يتساقط منه رذاذ أبيض بمجرد ملامسته، ويحافظ على تماسكه داخل شريط الألومنيوم الفضي الصلب المدموغ بـ Batch Number يطابق الكود المسجل رقمياً.

نحن نوفر خدمة توجيه واستيراد مباشر تضمن الموثوقية بنسبة ١٠٠٪، مع شحن مبرد وخفي باليد خلال ${city.deliveryTime} إلى باب منزلك في ${nhAr} وسائر أحياء ${ctAr}. للتسليم الآمن، تواصل مع منسق الولاية على الرقم الموحد: ${country.whatsappNumber}.`;

    contentEn = `Greetings to our cherished readers in ${nhEn}, ${ctEn}. This portal is specifically designed to raise awareness about original Cytotec (Pfizer Misoprostol 200 mcg) in the area of ${nhEn} (${landmarkEn}) to protect families from dangerous counterfeit products scattered in unverified markets.

Our official regional quality coordinator recommends verifying the following key features:
- **Unique Hexagon Geometry**: The authentic pill is mathematically hexagonal, never circular or oval.
- **Deep 1461 Engraving**: The serial number "1461" is deeply engraved on one side, and a dividing ridge lines the physical reverse.
- **Robustness**: Original Pfizer formulas do not dissolve on sheer touch, and their silver aluminum blister packs remain hermetically sealed under proper laboratory climate control.

We provide pristine secure distribution and express handling directly to your address in ${nhEn}, ${ctEn} in less than ${city.deliveryTime} with absolute double-layer stealth packaging. Reach out on WhatsApp for medical-grade original verification and support: ${country.whatsappNumber}.`;
  } else if (topic === 'order-and-delivery') {
    titleAr = `توصيل سريع وآمن لحبوب سيتوتيك الأصلية ١٠٠٪ في ${nhAr}، ${ctAr} خلال ساعتين وبخصوصية كبرى`;
    titleEn = `Stealth Home Delivery of Original Cytotec in ${nhEn}, ${ctEn} Within 2 Hours | Confidential Order`;
    metaDescAr = `هل تتساءل وين احصل حبوب سايتوتك الأصلية في ${nhAr} (${ctAr})؟ نظام التوصيل الفوري باليد وبسرية ممطلقة بدون إحراج متاح الآن مع خدمات الدفع الآمن.`;
    metaDescEn = `Get authentic Cytotec delivered to your door in ${nhEn}, ${ctEn} in under 2 hours. Fully custom logistics ensuring maximum privacy and zero embarrassment.`;

    contentAr = `${country.localDialectGreeting}. تقدم لكم منصة سيتوتيك الخليج المتطورة نظام الشحن اللوجستي الأسرع والآمن على الإطلاق في حي ${nhAr} وسائر مناطق ${ctAr} (${landmarkAr}). 

نوفر لكم خدمة مستوردة وموثوقة تغلق تماماً الباب أمام التردد أو الإحراج عند طلب أو استلام المستحضر الطبي. 

أهم ميزات المنظومة اللوجستية الفورية لتوزيع دواء سيتوتيك في ${nhAr}:
• **توصيل مبرد وسري مغلق بالكامل**: يتم شحن العبوات في مغلف بريدي مبهم معزول حرارياً، لا يحتوي على أي مصطلحات طبية أو شعارات خارجية لتأكيد خصوصيتك وعلاقاتك العائلية.
• **زمن التسليم الخاطف**: يتم شحن الطلبية عبر مناديب محليين يعرفون جغرافيا ${nhAr} بدقة متناهية، والوصول في غضون ${city.deliveryTime}.
• **متابعة طبية وتوجيهية**: لا نكتفي بالتوصيل، بل ستتلقى كشكولاً إرشادياً رقمياً يشرح الجرعات الآمنة المقررة معملياً وأعراض ما بعد الدواء مع فحص مستمر.

يمكنك الآن استخدام حاسبة الحجز التلقائي في الموقع لتحديد الجرعة المطلوبة والانتقال بضغطة زر لإتمام الشراء عبر الواتساب مع منسق ${ctAr} مباشرة: ${country.whatsappNumber}.`;

    contentEn = `Confidential medical distribution is now active in ${nhEn}, ${ctEn}. If you are looking for original Cytotec (Misoprostol) with prompt, safe delivery options around ${landmarkEn}, our enterprise system provides the ultimate seamless answer.

Logistical features built for ${nhEn} city divisions:
- **Express Dispatch**: Local messengers who know ${ctEn} and ${nhEn} extremely well deliver right to your location in ${city.deliveryTime}.
- **Understated Stealth Packing**: We wrap the clinical vials in an opaque layer with generic labels to maintain absolute confidence and privacy.
- **Constant Support**: You can get professional guidance regarding usage guidelines, indicators, and follow-ups.

Secure your order now by filling the custom order form in our portal which automatically computes the routing to ${nhEn}'s nearest delivery agent, or chat via WhatsApp: ${country.whatsappNumber}.`;
  } else {
    titleAr = `الدليل الطبي الشامل والجرعات المعتمدة لعقار سيتوتيك في ${nhAr}، ${ctAr}`;
    titleEn = `Complete Medical and Dosage Guide for Cytotec in ${nhEn}, ${ctEn}`;
    metaDescAr = `تعرف على طريقة استخدام سيتوتيك ميزوبروستول والجرعات العلاجية المقررة لموثوقيتك وسلامتك في ${nhAr} بمدينة ${ctAr}. الفحص والمتابعة الطبية.`;
    metaDescEn = `Read the official dosage safety instructions and clinical guidelines of Misoprostol in ${nhEn}, ${ctEn}. Expert recommendations by GCC panels.`;

    contentAr = `${country.localDialectGreeting}. نواصل في حي ${nhAr} بمدينة ${ctAr} تقديم الركيزة التثقيفية الطبية والجرعات الدقيقة لضمان العافية وحرية اختيار القرار للمستخدمين. إن مادة ميزوبروستول (Misoprostol) الحساسة تعد علاجاً دقيقاً ويجب أن تخضع لإجراءات الفحص قبل الاستخدام.

أبرز النقاط الطبية المعتمدة في حي ${nhAr} (${landmarkAr}):
1. **الفحص والتأكيد الأولي**: التحقق الإلزامي من عدم وجود موانع طبية عامة أو تضاد دوائي كيميائي خطير.
2. **بروتوكول المقدار الدوري**: الالتزام بالجرعة المقننة (عادة ٢٠٠ ميكروغرام للغرامة الواحدة) تحت اللسان أو بطريقة طبية موجهة، وعدم دمج عقاقير مجهولة الهوية لتفادي المضاعفات.
3. **أعراض ما بعد الاستخدام والطوارئ**: المكوث في بيئة مريحة ومعقمة مع تواصل مباشر ومستمر مع منسق الطاقم الاستشاري لدينا لضمان الدعم الدوائي السريع والمنظم.

صحتكم هي أغلى ما نملك، ولذلك نوفر فحصاً مجهرياً لكل علبة سيتوتيك قبل تسليمها لك باليد في ${nhAr}، للتواصل المباشر والاستفسار السري مجاناً: ${country.whatsappNumber}.`;

    contentEn = `Clinical literacy ensures high recovery and robust health. This guide summarizes crucial medical directions for Misoprostol usage around ${nhEn}, ${ctEn}.

Essential Medical Guidelines in ${nhEn} (${landmarkEn}):
- **Prerequisite Screening**: Confirm that there are no medical conditions or chemical contraindications before starting.
- **Standardized Usage Schedule**: Adhere strictly to verified clinical increments (typically 200mcg) and avoid mixing generic products.
- **Support Framework**: Ensure that you are situated in a clean, quiet venue with active emergency contact points at our central office.

Reach our official WhatsApp helpline in ${ctEn} instantly for cost-free clinical guidance and delivery setup: ${country.whatsappNumber}.`;
  }

  // Generate localized FAQs
  const faqs = [
    {
      question: lang === 'ar' ? `كيف أضمن أن سيتوتيك فايزر في ${nhAr} أصلي؟` : `How can I ensure Cytotec in ${nhEn} is 100% original?`,
      answer: lang === 'ar' 
        ? `عبر فحص الحبوب السداسية البيضاء التي تحمل بوضوح نقش "1461"، ومطابقة الرقم التشلسلي على الشريط الفضي المتين مع كرتون فايزر، والتوصيل الآمن المبرد الذي توفره منصتنا لحي ${nhAr} وسائر أحياء ${ctAr}.`
        : `By verifying the hexagonal shape of each white tablet carrying the "1461" engraving, and checking the batch code alignment on the silver aluminum foil package delivered in ${nhEn} with cold-chain transport.`
    },
    {
      question: lang === 'ar' ? `كم يستغرق التوصيل إلى حي ${nhAr} بمدينة ${ctAr}؟` : `How long does delivery take to ${nhEn} in ${ctEn}?`,
      answer: lang === 'ar'
        ? `نحن نرسل شحنتك فوراً بالتعاون مع مندوب سري مقيم بجوار ${landmarkAr}، ويستغرق الوصول الفوري من ساعتين إلى ${city.deliveryTime} كحد أقصى.`
        : `We dispatch immediately via a confidential agent located near ${landmarkEn}, reaching your address inside ${nhEn} in under ${city.deliveryTime}.`
    },
    {
      question: lang === 'ar' ? `هل يتم التوصيل بسرية دون إرشاد أحد بمحتوى الدواء؟` : `Is the home delivery fully confidential?`,
      answer: lang === 'ar'
        ? `نعم، سرية العميل وخصوصيته هي حجر الأساس في خدمتنا بالخليج العربي. يتم تغليف العبوة مرتين في كيس مبهم معتم غير معنون بأي مصطلحات طبية على الإطلاق ويسلم يداً بيد.`
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
    "lastReviewed": "2026-05-23",
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
      "caption": "Cytotec Original Pfizer 1461 Hexagon Tablet Detail"
    },
    "audience": {
      "@type": "Patient",
      "geographicArea": {
        "@type": "AdministrativeArea",
        "name": ctEn
      }
    },
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
    { anchor: `توصيل سيتوتيك في ${ctAr}`, path: `/${cEn.toLowerCase()}/${ctEn.toLowerCase()}/order-and-delivery` },
    { anchor: `أصلي وتفاصيل فايزر في ${nhAr}`, path: `/${cEn.toLowerCase()}/${ctEn.toLowerCase()}/${nhEn.toLowerCase()}/original-vs-fake` },
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
