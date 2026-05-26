import { Article, SEOKeyword, GCCStateConfig } from './types';

export const INITIAL_KEYWORDS: SEOKeyword[] = [
  { id: '1', phrase: 'سيتوتيك الاصلي في مسقط', country: 'OM', searchVolume: 92, status: 'active' },
  { id: '2', phrase: 'وين اجد حبوب السيتوتيك في عمان', country: 'OM', searchVolume: 88, status: 'active' },
  { id: '3', phrase: 'دواء cytotec للبيع في السعودية', country: 'SA', searchVolume: 95, status: 'active' },
  { id: '4', phrase: 'سعر حبوب سيتوتيك في الرياض والدمام', country: 'SA', searchVolume: 85, status: 'active' },
  { id: '5', phrase: 'توصيل سيتوتيك في دبي وابوظبي خلال ساعتين', country: 'AE', searchVolume: 90, status: 'active' },
  { id: '6', phrase: 'كيف اعرف سيتوتيك الاصلي والتقليد بالصور', country: 'GLOBAL', searchVolume: 99, status: 'active' },
  { id: '7', phrase: 'where to find original cytotec in GCC', country: 'GLOBAL', searchVolume: 78, status: 'active' },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'دليل سيتوتيك الأصلي وكيفية التمييز بينه وبين التقليد بالصور والفيديو',
    category: 'الوعي الطبي والتحقق',
    country: 'all',
    keywords: ['سيتوتيك الاصلي', 'الفرق بين سيتوتيك الاصلي والتقليد', 'cytotec original vs fake'],
    dialect: 'عام ومعتمد طبياً بجميع لهجات الخليج',
    lastUpdated: '2026-05-23',
    author: 'الاستشاري الطبي المعتمد',
    content: `حبوب سيتوتيك (Cytotec) الأصلية من إنتاج شركة فايزر (Pfizer) تعد من الأدوية الحساسة للغاية التي تتطلب دقة متناهية في الفحص والتأكد قبل الاستخدام. 

أبرز الفروقات والخصائص للتحقق منها:
1. **العبوة والعلبة الخارجية**: تأتي علبة سيتوتيك متضمنة تفاصيل واضحة باللغة الإنجليزية والعربية وشعار شركة فايزر محفوراً أو مطبوعاً بلمعان فضي مموضع.
2. **الرموز على الحبوب**: تكون الحبة بيضاء اللون، سداسية الشكل، وتحتوي على الرقم "1461" محفوراً بوضوح على أحد الوجهين، وخط فارق غائر في المنتصف على الوجه الآخر.
3. **أشرطة الألومنيوم**: الأشرطة تكون فضية متينة ومحكمة الإغلاق لحمايتها من الرطوبة، والخطوط والنصوص المطبوعة خلف الشريط ثابتة لا تنمسح بالاحتكاك البسيط باليد.
4. **الرقم التسلسلي وتاريخ انتهاء الصلاحية**: يجب مطابقة الرقم التسلسلي المطبوع على شريط الدواء المباشر مع المسجل بالعلبة الخارجية.

نحن نوفر خدمة الموثوقية الكاملة والتوصيل الفوري السري الآمن لجميع مدن ومحافظات دول الخليج العربي (عمان، السعودية، الإمارات، قطر، البحرين، الكويت) خلال ساعتين كحد أقصى.`
  },
  {
    id: 'art-2',
    title: 'توفير وتوصيل حبوب سيتوتيك الأصلية في سلطنة عمان وسائر المحافظات',
    category: 'توفير وتوزيع طبي',
    country: 'OM',
    region: 'مسقط والمحافظات',
    keywords: ['سيتوتيك الاصلي في مسقط', 'وين اجد حبوب السيتوتيك في عمان', 'سيتوتيك مسقط صلالة'],
    dialect: 'صحيح لاهوب اللهجة العمانية الراقية للبحث المباشر',
    lastUpdated: '2026-05-23',
    author: 'منسق توزيع سلطنة عمان',
    content: `يا هلا وغلا بأهلنا الكرام في سلطنة عمان. إذا كنت تبحث أو تسأل "وين أحصل حبوب سيتوتيك الأصلية ١٠٠٪ في عمان وبشكل خاص في مسقط، صلالة، صحار، السيب، بوشر، أو نزوى"، فنحن نقدم لك الحل الأسهل والأسرع والأكثر أماناً وسرية.

نتميز بالآتي:
- **توصيل فوري خلال ساعتين**: خدمات التوصيل السريع إلى باب منزلك أو مكانك المفضل في مسقط وصحار وصلالة والسيب بسرية تامة دون إحراج.
- **توفير العلاج الأصلي البريطاني الفاخر**: مستورد مباشرة وفحص مجهري للموثوقية لسلامة عائلتك وصحتك.
- **تواصل واتساب مباشر وسلس**: مع طاقم مستشارين متفهم ومستعد لشرح التفاصيل كاملة والرد على جميع الاستفسارات.
- **تغطية شاملة لكل بقعة**: السيب، بوشر، مطرح، صلالة، البريمي، صور، وعبري.

للتواصل الفوري معنا عبر الواتساب للاستفسار أو لعمل طلب حجز آمن: 96876636098+`
  },
  {
    id: 'art-3',
    title: 'تفاصيل الحصول على سيتوتيك فايزر الأصلي في المملكة العربية السعودية',
    category: 'الوعي الطبي والتحقق',
    country: 'SA',
    region: 'الرياض والمناطق الكبرى',
    keywords: ['دواء cytotec للبيع في السعودية', 'سعر حبوب سيتوتيك في الرياض والدمام', 'سيتوتيك فايزر جدة'],
    dialect: 'نبيذ اللهجة النجدية والحجازية المفهومة والواضحة للجميع',
    lastUpdated: '2026-05-23',
    author: 'مستشار توزيع المملكة',
    content: `أهلاً ومرحباً بكم إخواننا وأخواتنا بالمملكة العربية السعودية. يعلم الجميع مدى صعوبة اقتناء سيتوتيك فايزر الأصلي (Pfizer Cytotec 200 mcg) وصعوبة التأكد من المصدر لانتشار الأدوية المقلدة في الأسواق الموازية والافتراضية غير الموثوقة.

نحن نعمل بالتعاون مع جهات استيراد مرخصة ومباشرة لتوفير الأقراص بعبواتها المعقمة الأصلية:
1. **الخبرة الفائقة**: توجيه طبي آمن في الاستلام والتحقق.
2. **التوصيل السريع لجميع مناطق ومحافظات المملكة**:
   - **المنطقة الوسطى**: الرياض، الخرج، الدرعية.
   - **المنطقة الغربية**: جدة، مكة المكرمة، المدينة المنورة، الطائف.
   - **المنطقة الشرقية**: الدمام، الخبر، الجبيل، الأحساء، القطيف.
   - **المناطق الشمالية والجنوبية**: تبوك، حائل، أبها، جازان، خميس مشيط.
3. **سرية تامة وتغليف مبهم آمن**: لن يعرف أحد محتويات الشحنة، والحفاظ على السرية هو أولويتنا القصوى لتوفير راحة البال التامة.
4. **توصيل سريع**: نوفر مندوبين محترفين للتسليم باليد في الرياض وجدة والدمام خلال ساعتين ونصف كحد أقصى.

سائلين الله لكم دوام العافية والصحة.`
  },
  {
    id: 'cytotec-uses-and-notes',
    title: 'Cytotec drugs: Uses, indications and notes when using',
    category: 'الوعي الطبي والتحقق',
    country: 'all',
    keywords: ['cytotec', 'misoprostol', 'pfizer cytotec', 'stomach ulcer', 'gastric ulcer', 'terminate pregnancy', 'cytotec 200 mcg'],
    dialect: 'English Medical Standard',
    lastUpdated: '2026-05-25',
    author: 'Medical Consultant & Pharmacy Team',
    content: `Cytotec drugs: Uses, indications and notes when using

Table of content
Cytotec (so-called Misoprostol) prevents gastric ulcer which is a complication of using NSAIDs, and protects gastric mucosa by reducing exposure to acid. In some circumstances, Cytotec can also be used to terminate pregnancy when combined with another medication.

1. What is Cytotec?
Cytotec is used to prevent gastric ulcer when using NSAIDs (For example: Aspirin, Ibuprofen, Naproxen), especially in patients who are susceptible to or have a medical history of gastric ulcers.
Cytotec reduces severe gastric ulcer like bleeding and protects gastric mucosa by reducing the exposed acid. Cytotec is also indicated to be used in combination with another medication (Mifepristone) to terminate a pregnancy (abortions).

2. How to use Cytotec
The dosage of Cytotec depends on the patient’s health condition and response to treatment.
If you are using Cytotec to prevent gastric ulcer, please take it 4 times/day or follow the doctor’s guidance. Take it after meals and before bedtime to reduce the risk of diarrhea.
If you are using Cytotec for the purpose of an induced abortion, make sure to take the medication exactly as doctor’s guidance.
If this medication is used to assist in labor, it will be administered into the pregnant woman's vagina by a healthcare professional
Avoid using anti-acid medication containing Magnesium when using Cytotec as they may exacerbate diarrhea. If you need anti-acid medication, please contact a doctor or pharmacist.
Notify your doctor if your condition worsens.

3. Cytotec side effects
Some side effects of Cytotec are: Nausea or stomach cramps. Let your doctor know if you experience any abnormal menstrual issues, such as heavy vaginal bleeding.

Diarrhea is quite common when using Cytotec. It usually occurs about two weeks after taking the medication and can last for a week, leading to dehydration and a loss of minerals. To prevent this, drink plenty of water and ensure proper hydration and electrolyte balance. Notify your doctor if you experience any signs of severe dehydration or mineral imbalance, such as severe dizziness, decreased urination, mood changes, muscle weakness, or slow or irregular heart rate.

4. Measures to prevent side effects of Cytotec
Before taking Cytotec, please inform the doctor of your allergy with this medication or other types of allergies.
Before taking this medicine, please notify the doctor about your medical history, especially gastric or intestinal disease (for example: intestinal inflammation)

Daily use of alcohol and tobacco can increase the risk of gastric bleeding. To enhance the effectiveness of the treatment, consider limiting alcoholic beverages and quitting smoking.

If you are using Cytotec in combination with Mifepristone to terminate a pregnancy, an incomplete abortion may still occur (though rarely). It is crucial that you continue to be closely monitored by your doctor and keep all scheduled follow-up appointments to monitor your health. After using the combination of medications, vaginal bleeding might occur; however, inform your doctor immediately if you experience any unwanted symptoms such as severe, prolonged vaginal bleeding, signs of infection (including fever, chills), or fainting.

Do not use Cytotec when you are pregnant because it might be harmful to the baby. If you are of childbearing age, use effective contraception while taking Cytotec and for at least 1 month after stopping the medication. If you are pregnant or suspect that you might be pregnant, inform your doctor immediately.

Cytotec passes into breast milk but is unlikely to harm a nursing infant. Consult your doctor before breastfeeding.

5. Treatment of overdose and how to store
An overdose of Cytotec may result in symptoms such as breathlessness or faintness. If you notice signs of an overdose such as severe drowsiness, seizures, severe dizziness, or slow or irregular heartbeat, seek emergency medical attention immediately.
If you miss a dose, take it as soon as you remember. If it is close to the time for your next dose, skip the missed dose. Do not double the dose.
Store Cytotec at 25°C, keep it away from moisture, light, and out of reach of children and pets.

Patients should take Cytotec exactly as doctor’s guidance to effectively prevent NSAIDs-induced gastric ulcers. Additionally, if any unusual symptoms suspected to be side effects of the medication occur, they should inform their doctor immediately for timely intervention.

Reference source: webmd.com

Read more:
Bleeding after vaginal medication; should I continue with the treatment?
To arrange an appointment, please call HOTLINE or make your reservation directly HERE. You may also download the MyVinmec app to schedule appointments faster and manage your reservations more conveniently.`
  }
];

export const GCC_ST_CONFIGS: GCCStateConfig[] = [
  {
    code: 'OM',
    nameAr: 'سلطنة عمان',
    nameEn: 'Oman',
    whatsappNumber: '96876636098',
    deliveryTime: 'ساعتين (التوصيل فوري وبسرية تامة)',
    regions: ['مسقط (بوشر، السيب، مطرح، العامرات)', 'ظفار (صلالة والولايات المجاورة)', 'شمال الباطنة (صحار، السويق)', 'جنوب الباطنة (الرستاق، بركاء)', 'الداخلية (نزوى، سمائل)', 'البريمي وصور وعبري'],
    localDialectTerms: ['وين احصل سيتوتيك في عمان', 'حبوب سيتوتيك في مسقط صلالة', 'توصيل سيتوتيك عمان'],
    disclaimer: 'محتوى هذه المنصة تثقيفي وتوعوي، ويشترط مراجعة ومتابعة طبية دقيقة لسلامتك.'
  },
  {
    code: 'SA',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    whatsappNumber: '96876636098',
    deliveryTime: 'خلال ساعتين إلى ثلاث ساعات بالتوصيل المباشر الخاص',
    regions: ['الرياض (المنطقة الوسطى، الخرج)', 'جدة ومكة المكرمة والمدينة المنورة الطائف', 'المنطقة الشرقية (الدمام، الخبر، الجبيل، الاحساء)', 'الجنوبية (عسير، جازان، ابها، خميس مشيط)', 'الشمالية (تبوك، حائل، عرعر)'],
    localDialectTerms: ['ابي حبوب سيتوتيك بالرياض', 'وين القى سيتوتيك اصلي بجدة', 'سعر دواء cytotec بالسعودية'],
    disclaimer: 'التحقق من الرموز الأصلية لحبوب فايزر ضروري جداً لتجنب الاحتيال والتقليد المنتشر.'
  },
  {
    code: 'AE',
    nameAr: 'دولة الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    whatsappNumber: '96876636098',
    deliveryTime: 'ساعتين بالتنسيق مع منسق دبي وأبوظبي المباشر',
    regions: ['دبي (البرشاء، ديرة، جميرا)', 'أبوظبي (المشرف، الخالدية، مصفح)', 'الشارقة وعجمان والفجيرة ورأس الخيمة'],
    localDialectTerms: ['cytotec delivery dubai', 'سيتوتيك الاصلي في الامارات', 'حبوب الاجهاض دبي ابوظبي'],
    disclaimer: 'نحرص على المتابعة وتقديم معلومات متكاملة علمياً للحفاظ على سلامة المستخدمين.'
  },
  {
    code: 'QA',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    whatsappNumber: '96876636098',
    deliveryTime: 'توصيل فوري غضون ساعتين',
    regions: ['الدوحة (السد، الوعب، اللؤلؤة)', 'الريان والخور والوكرة والظعاين'],
    localDialectTerms: ['سيتوتيك الاصلي في قطر', 'توصيل سيتوتيك الدوحة'],
    disclaimer: 'معلومات طبية دقيقة ونظام تحقق فوري للحبوب السداسية الأصلية.'
  },
  {
    code: 'KW',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    whatsappNumber: '96876636098',
    deliveryTime: 'خلال ساعتين إلى باب المنزل لراحة تامة وسرية دقيقة',
    regions: ['الكويت العاصمة (السالمية، حولي)', 'الأحمدي والفروانية ومبارك الكبير والجهراء'],
    localDialectTerms: ['سيتوتيك الاصلي بالكويت', 'حبوب سايتوتك في السالمية حولي'],
    disclaimer: 'سلامتك أولويتنا، استشر الخبراء واستخدم الخدمة الآمنة لتوفير العلاج من مصادر موثوقة.'
  },
  {
    code: 'BH',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    whatsappNumber: '96876636098',
    deliveryTime: 'خلال ساعتين باليد',
    regions: ['المنامة (الجفير، ضاحية السيف)', 'المحرق والرفاع ومدينة عيسى والبديع'],
    localDialectTerms: ['سعر حبوب سيتوتيك البحرين', 'وين احصل سيتوتيك اصلي بالبحرين'],
    disclaimer: 'ضمان كامل للمصدر للتخلص من الأقراص المقلدة الضارة.'
  }
];
