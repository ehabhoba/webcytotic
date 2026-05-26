import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Ensure Gemini key is present. If missing, we'll log a warning and return error gracefully on API use.
const rawApiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (rawApiKey && rawApiKey !== 'MY_GEMINI_API_KEY' && rawApiKey !== '') {
  try {
    ai = new GoogleGenAI({
      apiKey: rawApiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini API Client updated successfully.");
  } catch (err) {
    console.error("Failed to initialize Gemini Client:", err);
  }
} else {
  console.warn("GEMINI_API_KEY is not configured or still at placeholder. AI generation feature will use fallback mock answers.");
}

const app = express();
const PORT = 3000;

app.use(express.json());

// -------------------------------------------------------------
// In-memory data store for live updates in preview
// -------------------------------------------------------------
let KEYWORDS_STORE = [
  { id: '1', phrase: 'سيتوتيك الاصلي في مسقط', country: 'OM', searchVolume: 92, status: 'active' },
  { id: '2', phrase: 'وين اجد حبوب السيتوتيك في عمان', country: 'OM', searchVolume: 88, status: 'active' },
  { id: '3', phrase: 'دواء cytotec للبيع في السعودية', country: 'SA', searchVolume: 95, status: 'active' },
  { id: '4', phrase: 'سعر حبوب سيتوتيك في الرياض والدمام', country: 'SA', searchVolume: 85, status: 'active' },
  { id: '5', phrase: 'توصيل سيتوتيك في دبي وابوظبي خلال ساعتين', country: 'AE', searchVolume: 90, status: 'active' },
  { id: '6', phrase: 'كيف اعرف سيتوتيك الاصلي والتقليد بالصور', country: 'GLOBAL', searchVolume: 99, status: 'active' },
  { id: '7', phrase: 'where to find original cytotec in GCC', country: 'GLOBAL', searchVolume: 78, status: 'active' },
];

let ARTICLES_STORE = [
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
4. **الرقم التسلسلي وتاريخ انتهاء الصلاحية**: يجب مطابقة الرقم التسلسلي المطبوع على شريط الدواء المباشر مع المسجل بالعلبة الخارجية.`
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
- **تغليف مبهم آمن**: الحفاظ على الخصوصية والسرية المطلقة.`
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
    content: `أهلاً ومرحباً بكم إخواننا وأخواتنا بالمملكة العربية السعودية. يعلم الجميع مدى صعوبة اقتناء سيتوتيك فايزر الأصلي (Pfizer Cytotec 200 mcg) وصعوبة التأكد من المصدر لانتشار الأدوية المقلدة في الأسواق غير الموثوقة.

نحن نعمل بالتعاون مع جهات استيراد مباشرة لتوفير الأقراص بعبواتها المعقمة الأصلية:
1. **الخبرة الفائقة**: توجيه آمن في الاستلام والتحقق.
2. **التوصيل السريع لجميع مناطق ومحافظات المملكة** (الرياض، مكة المكرمة، جدة، الدمام، الخبر، الاحساء، ابها، جازان، تبوك، حائل) خلال ساعتين كحد أقصى.
3. **سرية تامة وتغليف مبهم آمن**: الحفاظ على السرية هو أولويتنا القصوى لتوفير راحة البال التامة.`
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

let ORDERS_STORE = [
  {
    id: 'ord-101',
    name: 'أحمد بن عبد الله',
    phone: '96876636098',
    country: 'OM',
    region: 'مسقط - بوشر',
    quantity: 1,
    deliveryType: 'express',
    notes: 'يرجى التوصيل في أسرع وقت وبسرية تامة',
    status: 'completed',
    createdAt: '2026-05-23T18:30:00Z'
  },
  {
    id: 'ord-102',
    name: 'سارة العتيبي',
    phone: '966504221199',
    country: 'SA',
    region: 'الرياض - السليمانية',
    quantity: 2,
    deliveryType: 'express',
    notes: 'الاتصال قبل الوصول بربع ساعة',
    status: 'pending',
    createdAt: '2026-05-23T22:15:00Z'
  }
];

// -------------------------------------------------------------
// REST API Endpoints
// -------------------------------------------------------------

// Read keywords
app.get('/api/keywords', (req, res) => {
  res.json(KEYWORDS_STORE);
});

// Add keyword
app.post('/api/keywords', (req, res) => {
  const { phrase, country } = req.body;
  if (!phrase) {
    return res.status(400).json({ error: 'Phrase is required.' });
  }
  const newId = String(KEYWORDS_STORE.length + 1);
  const newKw = {
    id: newId,
    phrase,
    country: country || 'GLOBAL',
    searchVolume: Math.floor(Math.random() * 40) + 60, // random high score 60-100
    status: 'active' as const
  };
  KEYWORDS_STORE.unshift(newKw);
  res.status(201).json(newKw);
});

// Delete keyword
app.delete('/api/keywords/:id', (req, res) => {
  KEYWORDS_STORE = KEYWORDS_STORE.filter(k => k.id !== req.params.id);
  res.json({ success: true });
});

// Read articles
app.get('/api/articles', (req, res) => {
  res.json(ARTICLES_STORE);
});

// Add/Publish Article
app.post('/api/articles', (req, res) => {
  const { title, category, content, country, region, keywords, dialect, author } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const newArt = {
    id: 'art-' + (ARTICLES_STORE.length + 1),
    title,
    category: category || 'عام',
    content,
    country: country || 'all',
    region: region || '',
    keywords: Array.isArray(keywords) ? keywords : (keywords ? String(keywords).split(',').map(s=>s.trim()) : []),
    dialect: dialect || 'عام الخليج',
    lastUpdated: new Date().toISOString().split('T')[0],
    author: author || 'المدير العام'
  };
  ARTICLES_STORE.unshift(newArt);
  res.status(201).json(newArt);
});

// Auto-generate content using Gemini (fully local custom SEO engine for GCC context)
app.post('/api/articles/generate', async (req, res) => {
  const { keyword, country, region } = req.body;
  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required for generation' });
  }

  const countryNames: Record<string, string> = {
    OM: 'سلطنة عمان',
    SA: 'المملكة العربية السعودية',
    AE: 'دولة الإمارات',
    QA: 'دولة قطر',
    KW: 'دولة الكويت',
    BH: 'مملكة البحرين',
    GLOBAL: 'دول الخليج العربي وعالمياً'
  };

  const selectedCountry = countryNames[country] || 'الخليج العربي';
  const targetRegion = region ? `في ${region}` : '';

  const systemInstructions = `أنت خبير محترف ومستشار في تحسين محركات البحث (SEO AI Specialist) ومتخصص باللهجات الخليجية وأنظمة الكلمات المفتاحية لمواقع التثقيف والإرشاد الصحي لمنتجات شركة فايزر (سيتوتيك Cytotec الأصلي). 
اكتب مقالاً طويلاً، احترافياً، ضخماً، ومقنعاً بالكامل باللغة العربية مع التركيز على الكلمة المفتاحية: "${keyword}" المستهدفة لـ ${selectedCountry} ${targetRegion}.
- يجب أن تذكر ميزة "التوصيل الآمن والسري الفوري في خلال ساعتين وبخصوصية مطلقة للطلب عبر الواتساب على الرقم 96876636098".
- قسم المقال إلى أقسام واضحة مستخدماً عناوين فرعية جذابة.
- اكتب المقال بأسلوب وطابع يفهمه محرك بحث جوجل والذكاء الاصطناعي ليرشحه كأول نتيجة متصدرة في محركات البحث وفي توصيات الذكاء الاصطناعي (SGE / Gemini Answer).
- اجعل الأسلوب يمزج بين الاحترافية العلمية وتفهم ثقافة ولهجة الدولة المستهدفة (${selectedCountry}).
- ركز على التمييز بين حبة سيتوتيك الأصلية (سداسية الشكل، بيضاء، محفور عليها 1461) والمقلدة بالتفصيل لتوعية وصون سلامة القراء.`;

  const promptText = `أنشئ الآن مقالاً حصرياً ومميزاً غنياً جداً بالمعلومات ومطابق لمعايير SEO المرتفعة مستهدفاً الكلمة المفتاحية: "${keyword}".
تأكد من صياغة الهيكل بصيغة JSON نظيفة تحتوي على الحقول التالية:
- title: عنوان المقال الجذاب المتضمن الكلمة المفتاحية.
- category: الفئة او القسم الطبي المناسب.
- content: المحتوى الضخم والكامل للمقال غني بالفقرات والنقاط المنسقة بوضوح.
- dialect: وصف للغة واللهجة الخليجية المستعملة لثقة القارئ.
- keywords: قائمة من الكلمات الدلالية المستخلصة للمرابطة.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptText,
        config: {
          systemInstruction: systemInstructions,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              category: { type: Type.STRING },
              content: { type: Type.STRING },
              dialect: { type: Type.STRING },
              keywords: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "category", "content", "dialect", "keywords"]
          }
        }
      });

      const resultText = response.text;
      if (resultText) {
        const parsed = JSON.parse(resultText.trim());
        const generatedArt = {
          id: 'art-' + (ARTICLES_STORE.length + 1),
          title: parsed.title,
          category: parsed.category,
          content: parsed.content,
          country: country || 'all',
          region: region || '',
          keywords: parsed.keywords || [keyword],
          dialect: parsed.dialect || `لهجة خليجية محلية ملائمة`,
          lastUpdated: new Date().toISOString().split('T')[0],
          author: 'كاتب المحتوى الذكي المتقدم (SEO AI)'
        };
        ARTICLES_STORE.unshift(generatedArt);
        return res.status(201).json(generatedArt);
      }
    } catch (err: any) {
      console.error("Gemini Content Generation Error:", err);
      // Fallback in case of API failure or missing keys
    }
  }

  // Pure Local Elegant Fallback Generator when API is unreachable/absent:
  const fallbackArt = {
    id: 'art-' + (ARTICLES_STORE.length + 1),
    title: `الدليل الشامل وتوفير ${keyword} الأصلي بضمان وثقة فايزر`,
    category: 'إرشاد وتوزيع معتمد',
    content: `مرحباً بكم. هذا المحتوى تم صياغته تلقائياً وتجهيزه ليتطابق مع أدق تفاصيل الكلمة المفتاحية "${keyword}" المستهدفة في ${selectedCountry} ${targetRegion}.

نهدف من خلال هذا المحتوى المطور إلى تصدر محركات البحث وخوارزميات الذكاء الاصطناعي (AI Search Engine Optimization) لإيصال المعلومة الطبية الصحيحة لراغبيها وتسهيل الحصول على الدواء الأصلي المضمون بأمان وسرية تامة وبدون تعقيد.

مميزات الخدمة المتكاملة لدينا:
1. **أصالة المنتج فايزر 100%**: أقراص بيضاء سداسية الشكل مدموغة بالرقم "1461" الشهير من الجهتين لضمان حماية المشتري وسلامته القصوى من التقليد.
2. **توصيل سريع للغاية خلال ساعتين**: ندرك تمام المعايير الصحية والزمنية، لذلك نوفر أسرع دورة توصيل بالتعاون مع شبكة من المندوبين المتفانين في كافة مناطق ومدن دول الخليج.
3. **سرية تامة وخصوصية مطلقة**: يتم حزم جميع الطلبات في علب مغلقة محكمة غير موضحة للتأكيد التام على حريتك وخصوصيتك.
4. **تواصل متجاوب ودائم**: تواصل فوري مباشر عبر الرقم الرسمي الموحد للواتساب لتأكيد الحجز ومتابعة التوصيل مع مندوبك على الرقم المعتمد: 96876636098+.`,
    country: country || 'all',
    region: region || '',
    keywords: [keyword, 'حبوب سيتوتيك اصلية', 'سيتوتيك فايزر الخليج'],
    dialect: `لهجة مخصصة تلائم الباحثين في ${selectedCountry}`,
    lastUpdated: new Date().toISOString().split('T')[0],
    author: 'محرك المحتوى المحلي الذكي (Local SEO Generator)'
  };
  ARTICLES_STORE.unshift(fallbackArt);
  res.status(201).json(fallbackArt);
});

// Delete Article
app.delete('/api/articles/:id', (req, res) => {
  ARTICLES_STORE = ARTICLES_STORE.filter(a => a.id !== req.params.id);
  res.json({ success: true });
});

// Update/Edit Article
app.put('/api/articles/:id', (req, res) => {
  const { title, category, content, country, region, keywords, dialect, author } = req.body;
  const art = ARTICLES_STORE.find(a => a.id === req.params.id);
  if (!art) {
    return res.status(404).json({ error: 'Article not found' });
  }
  if (title !== undefined) art.title = title;
  if (category !== undefined) art.category = category;
  if (content !== undefined) art.content = content;
  if (country !== undefined) art.country = country;
  if (region !== undefined) art.region = region;
  if (keywords !== undefined) {
    art.keywords = Array.isArray(keywords) ? keywords : String(keywords).split(',').map(s => s.trim()).filter(Boolean);
  }
  if (dialect !== undefined) art.dialect = dialect;
  if (author !== undefined) art.author = author;
  art.lastUpdated = new Date().toISOString().split('T')[0];
  res.json(art);
});

// Read Orders
app.get('/api/orders', (req, res) => {
  res.json(ORDERS_STORE);
});

// Create Order (Simulated local order + generating WhatsApp secure click payload)
app.post('/api/orders', (req, res) => {
  const { name, phone, country, region, quantity, deliveryType, notes } = req.body;
  if (!name || !phone || !country || !region) {
    return res.status(400).json({ error: 'Please enter name, phone, country and region' });
  }

  const newOrder = {
    id: 'ord-' + (103 + ORDERS_STORE.length),
    name,
    phone,
    country,
    region,
    quantity: Number(quantity) || 1,
    deliveryType: deliveryType || 'express',
    notes,
    status: 'pending' as const,
    createdAt: new Date().toISOString()
  };

  ORDERS_STORE.unshift(newOrder);
  res.status(201).json(newOrder);
});

// Update Order Status
app.patch('/api/orders/:id', (req, res) => {
  const { status } = req.body;
  const order = ORDERS_STORE.find(o => o.id === req.params.id);
  if (order) {
    order.status = status;
    return res.json(order);
  }
  res.status(404).json({ error: 'Order not found' });
});

// Delete Order
app.delete('/api/orders/:id', (req, res) => {
  ORDERS_STORE = ORDERS_STORE.filter(o => o.id !== req.params.id);
  res.json({ success: true });
});

// Dynamic XML Sitemap generator endpoint for SEO crawling requirement!
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  const domain = 'https://web.cytotec.fun';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${domain}/#about</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${domain}/#verify</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${domain}/#order</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>`;

  ARTICLES_STORE.forEach(art => {
    xml += `
  <url>
    <loc>${domain}/#article-${art.id}</loc>
    <lastmod>${art.lastUpdated}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;
  res.send(xml);
});

// Robot.txt file for SEO Crawler requirements
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://web.cytotec.fun/sitemap.xml`);
});

// -------------------------------------------------------------
// Vite Middleware & SPA serving
// -------------------------------------------------------------
if (process.env.NODE_ENV !== 'production') {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express and Vite running on http://0.0.0.0:${PORT}`);
});
export default app;
