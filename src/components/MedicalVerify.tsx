import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle, 
  Cpu, 
  Activity 
} from 'lucide-react';

interface FaqItemProps {
  key?: React.Key;
  question: string;
  answer: string;
  lang?: 'ar' | 'en';
}

function FaqAccordionItem({ question, answer, lang = 'ar' }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';
  return (
    <div 
      className={`bg-slate-950/70 border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-sky-500/30 bg-slate-950 shadow-lg shadow-sky-500/[0.02]' : 'border-slate-850 hover:border-slate-800'}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none ${isAr ? 'flex-row text-right' : 'flex-row-reverse text-left'}`}
      >
        <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold transition duration-200 ${isOpen ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-900 text-slate-500'}`}>
          {isOpen ? (isAr ? 'إغلاق -' : 'Close -') : (isAr ? 'عرض التفاصيل +' : 'View Details +')}
        </span>
        <span className={`text-xs sm:text-sm font-black transition-colors ${isOpen ? 'text-sky-400' : 'text-slate-200 hover:text-white'}`}>
          {question}
        </span>
      </button>
      
      {isOpen && (
        <div className={`p-4 pt-0 border-t border-slate-900 text-[11px] sm:text-xs text-slate-405 leading-relaxed font-normal bg-slate-955/40 ${isAr ? 'text-right' : 'text-left'}`}>
          {answer}
        </div>
      )}
    </div>
  );
}

interface MedicalVerifyProps {
  lang?: 'ar' | 'en';
}

export default function MedicalVerify({ lang = 'ar' }: MedicalVerifyProps) {
  const [activeTab, setActiveTab] = useState<'features' | 'tester' | 'guideline'>('features');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showAnnotation, setShowAnnotation] = useState<boolean>(true);
  const [isPillHovered, setIsPillHovered] = useState<boolean>(false);

  // Digital verification checklist state
  const [checklist, setChecklist] = useState({
    shapeHexagonal: false,
    engraving1461: false,
    colorWhite: false,
    packSilver: false,
    serialMatch: false
  });

  const matchesAll = 
    checklist.shapeHexagonal && 
    checklist.engraving1461 && 
    checklist.colorWhite && 
    checklist.packSilver && 
    checklist.serialMatch;

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isAr = lang === 'ar';

  const t = {
    featuresTab: isAr ? '🔍 الخصائص التشريحية لحبة فايزر الأصلية' : '🔍 Anatomical Features of Pfizer Pill',
    testerTab: isAr ? '📱 جهاز الفحص والمطابقة الرقمي التفاعلي' : '📱 Digital Verification Quiz',
    guidelineTab: isAr ? '📖 التعليمات الإرشادية لسلامة الاستخدام' : '📖 Medical Usage Guidelines',
    
    evidenceTitle: isAr ? 'أدلة الفحص الجنائي لفرز حبوب سيتوتيك الأصلية (Cytotec 200 mcg)' : 'Microscopic Authentication of Original Cytotec (Cytotec 200 mcg)',
    evidenceDesc: isAr ? 'تؤكد الأبحاث والمتابعات الصيدلانية بمجلس الخليج أن دواء سيتوتيك من إنتاج شركة فايزر (Pfizer) يحمل تفاصيل ميكانيكية دقيقة صعبة التزوير تماماً. انتبه لأدق النقاط المذكورة أدناه لتجنب شراء الأدوية المغشوشة رخيصة الثمن المنتشرة بالسوق السوداء.' : 'Clinical guidelines verify that authentic Cytotec from Pfizer features precise structural attributes that are impossible to copy. Examine these key factors to steer clear of dangerous generic counterfeits.',
    
    shTitle: isAr ? '١. الشكل الهندسي السداسي (Hexagonal Design):' : '1. Perfect Hexagonal Symmetrical Geometry:',
    shDesc: isAr ? 'القرص الأصلي سداسي الشكل متساوي الأبعاد تماماً، ممهد وخالٍ من البروزات الحادة أو القطوش على الحواف الجانبية، وهو ما يصعب إنتاجه في المعامل اليدوية المقلدة غير المجهزة بمضخات الضغط الكيميائي الفاخرة.' : 'The genuine tablet is perfectly hexagonal with equal sides, smooth corners, and sharp molding, which cannot be simulated by manual tablet presses.',
    
    egTitle: isAr ? '٢. نقش الرقم 1461 الغائر من جهة واحدة:' : '2. Distinct Drilled Code "1461":',
    egDesc: isAr ? 'تتميز الحبة الأصلانية بنقش الرقم المستوطن "1461" محفوراً بوضوح ممتاز وعميق على إحدى واجهات الحبة. النقش يكون مقروءاً بلمسة بسيطة ومصقولاً بشكل أنيق للغاية.' : 'The authentic pill shows the identifier "1461" cleanly engraved on one face. The stamping is flat-bottomed, highly defined, and solid to the touch.',
    
    scTitle: isAr ? '٣. خط التقسيم الفاصل في الوجه الآخر:' : '3. Deep Bisecting Score Dividing Line:',
    scDesc: isAr ? 'يحتوي الوجه الآخر للحبة على حفر فارق عميق في المنتصف يقسم الحبة إلى نصفين متساويين تماماً لمساعدة الاستشاري والعميل في فرز الجرعات ونصف القيمة عند الطلب.' : 'The reverse features a sharp, centered score line dividing the tablet perfectly in half, allowing for precise split-dosage when required.',
    
    foTitle: isAr ? '٤. شريط الألومنيوم المتين غير المصنوع من البلاستيك:' : '4. Rigid Double-Silver Foil Blister Strip:',
    foDesc: isAr ? 'تأتي الحبوب مغلفة في أقماع ألومنيوم فضي ثقيل يقاوم الضغط والرطوبة، والمطبوع في ظهره كلمة Cytotec بالخط الأسود الداكن المسجل للعلامة التجارية لشركة فايزر، بدون بهتان أو بهش في تدوير الشحن.' : 'The tablets are sealed in heavy metal-grade silver foil blisters which insulate from air and moisture. The brand term Cytotec is written in rich black ink in Pfizer typographic font.',

    previewTitle: isAr ? 'التمثيل الدقيق لحجم الدوائر ونقش الحبة (Pfizer 1461 Microscopic Preview)' : 'Physical Representation & Microscopic View of Pfizer 1461 Tablet',
    labelHex: isAr ? 'سداسي الأبعاد 📐' : 'Hexagonal Geometry 📐',
    labelPfizer: isAr ? 'رمز فايزر "1461" 🔬' : 'Pfizer Code "1461" 🔬',
    
    tooltipSub: isAr ? 'موثوقية فايزر 🔬' : 'Pfizer Clinical Integrity',
    tooltipHeader: isAr ? 'فحص نقش فايزر 1461 الفني' : 'Pfizer 1461 Stamp Diagnostics',
    tooltipDesc: isAr ? 'الرقم 1461 هو نقش غائر مسطح الأطراف ناتج عن كبس هيدروليكي عالي التقنية، صلب للغاية لا يتفتت أو يتلاشى بلمس الأصابع أو الرطوبة.' : 'The code 1461 is engraved deep with a flat floor by high-pressure pharmaceutical tooling. It is structurally solid and will not dissolve with skin contact or sweat.',
    
    zoomLabel: isAr ? 'تعديل زاوية التقريب المجهري:' : 'Adjust Microscopic Zoom Factor:',
    annotationHide: isAr ? 'إخفاء العلامات التوضيحية' : 'Hide Guide Tags',
    annotationShow: isAr ? 'إظهار ملامح الموثوقية' : 'Show Guide Tags',
    
    warningTitle: isAr ? 'تحذير الاستشاري الطبي بالمنصة:' : 'Clinical Advisory Warning:',
    warningDesc: isAr ? 'جميع الحبوب المستديرة اللماعة أو الصفراء المنسوخة بالمنتدى ليست منتجات فايزر الأصلية بل قد تشكل تهديداً ساماً.' : 'Any circular, glossy, or yellow imitation pills offered on unvetted websites are not authentic Pfizer products and pose direct toxic hazards.',
    
    testerTitle: isAr ? 'نظام التدقيق الرقمي الذاتي للعبوة' : 'Interactive Self-Verification System',
    testerSub: isAr ? 'تواصل ذاتياً لتقييم صحة ونقش العلاج الذي بحيازتك قبل البدء بالاستشارة:' : 'Assess the structural indicators of the package currently in your possession:',
    
    chkHex: isAr ? 'هل الحبوب سداسية الشكل تماماً؟ (تفادي المبرومة الدائرية)' : 'Are the tablets perfectly hexagonal? (Avoid circular generic copies)',
    chk1461: isAr ? 'هل يوجد حفر غائر ناعم للرقم "1461" على أحد جهاتها؟' : 'Is there a deep, crisp "1461" engraved code on one face?',
    chkWhite: isAr ? 'هل لون الحبوب أبيض طباشيري غير لماع ولا يحمل ألواناً أخرى؟' : 'Is the tablet matte chalky white, non-glossy and free of other pigments?',
    chkFoil: isAr ? 'هل شريط الدواء مصنوع بالكامل من ورق الألومنيوم الفضي الصلد اللامع؟' : 'Is the blister pack made of rigid double-sided silver foil?',
    chkBatch: isAr ? 'هل يوجد رقم باتش وتاريخ انتهاء الصلاحية مطبوعان بالليزر على الطرف السفلي للشريط؟' : 'Are the batch numbers and expiration dates crisply laser-etched on the strip?',
    
    diagTitle: isAr ? 'نتيجة الفحص المخبري التلقائي:' : 'Automated Verification Outcome:',
    diagMatchOk: isAr ? 'المنتج مطابق لخصائص فايزر الأصلانية بنسبة ١٠٠٪ ✓' : 'Product aligns with original Pfizer specifications at 100% ✓',
    diagMatchOkDesc: isAr ? 'توضح المعايير توافق مع المكونات الكيميائية للمستحضر. يمكنك التواصل مع مستشارك الخاص لتأكيد الجرعة الآمنة.' : 'Parameters show physical integrity matching the reference standard. You may connect with our advisers to outline your safe dosage.',
    diagMatchErr: isAr ? 'المنتج مشبوه أو تفقد بعض علامات الموثوقية الأصلية!' : 'Suspicious item or missing key Pfizer authentication marks!',
    diagMatchErrDesc: isAr ? 'يرجى الحذر وعدم استخدام العقاقير الدائرية أو غير محددة الرقم لضمان تلافي السموم. ننصحك بالتحقق السريع المجاني من معتمدينا.' : 'Please exercise extreme care; never ingest generic unlabeled round tablets. Talk to our coordinators for immediate free inspection.',
    
    guideTitle: isAr ? 'البروتوكولات الطبية والتوجيه الدوائي الخليجي المعتمد لضمان الصحة' : 'Approved Medical Protocols & GCC Safeguard Guidelines',
    guideIntro: isAr ? 'يعد استخدام سيتوتيك ميزوبروستول (Cytotec Misoprostol 200) لطلب تنزيل الحمل أو لعلاج القرحة المعوية عملية حساسة وصحية ومقررة علمياً في كافة الدستورات الدوائية المعتمدة. يجب اتباع الإرشادات الصارمة التالية لحفظ الصحة العامة:' : 'Applying Cytotec Misoprostol 200 mcg for pregnancy termination or stomach lining protection is a delicate clinical procedure. The following guidelines are configured for safety:',
    b1: isAr ? 'الامتناع عن الكافيين والمقليات الدسمة التي قد تتعارض مع كفاءة وسرعة استيعاب ميزوبروستول الدموي بالجسم.' : 'Refrain from caffeine and greasy fried foods, which retard chemical absorption of the misoprostol compound.',
    b2: isAr ? 'التحقق من خلو الرحم تماماً من الأجهزة المعدنية الصناعية (اللولب) لتفادي الانقباض العنيف أو التليف الداخلي.' : 'Verify there is no intrauterine device (IUD) present in the womb to prevent mechanical trauma.',
    b3: isAr ? 'الالتزام بفترات الراحة السريرية والمكوث في مكان مجهز بجوار معارف ذوي دراية لمتابعة الحالة واستشارة اللوائح المحلية.' : 'Keep strictly to bed rest in a comfortable environment with supportive individuals who are familiar with local rules.',
    b4: isAr ? 'مخاطبة الاستشاري الخاص بنا بالمنصة فوراً للحصول على دليل الاستخدام التفصيلي مجاناً وتزويدك بالجرعات الدقيقة حسب عمر الحالة وكتلة الجسم.' : 'Reach out to our platform advisors immediately to secure the precise instruction handbook (PDF) customized to your case.',
    btnGuide: isAr ? '📥 تواصل واتساب لطلب الدليل التشغيلي الطبي الكامل PDF' : '📥 Connect on WhatsApp to get the Complete Safe Guide (PDF)',
    
    faqTitle: isAr ? 'الأسئلة الشائعة حول موثوقية وفحص حبة سيتوتيك ١٤٦١' : 'FAQ regarding Pfizer 1461 Authentication',
    faqSub: isAr ? 'هل لا تزال لديك الشكوك أو التساؤلات بشأن التحقق الجغرافي ونقش عقار ميزوبروستول فايزر الأصلي؟ تفضل بالإجابات الطبية المعتمدة للفرز الواضح.' : 'Do you still have questions or concerns about verifying your Pfizer cytotec tablets? Consult our approved answers.',
  };

  const faqList = isAr ? [
    {
      question: 'ما معنى رقم نقش "1461" المحفور على حبوب سيتوتيك؟',
      answer: 'هو الرمز اللوجستي الطبي الرسمي المسجل بمختبرات شركة فايزر (Pfizer) لتعريف حبوب ميزوبروستول بتركيز 200 ميكروجرام. أي حبة أصلية يجب أن تحمل هذا الرقم المحفور بدقة فائقة وبشكل ملموس وغائر وغير بارز أو مطبوع باللون.'
    },
    {
      question: 'كيف يمكنني التمييز بين شريط سيتوتيك الأصلي والمقلد بالعين المجردة؟',
      answer: 'الشريط الأصلي مصنوع بالكامل من الألومنيوم الفضي المتين الثقيل والمقاوم للرطوبة، ومطبوع من الخلف ببروز خطي واضح باللون الأسود الداكن بدون بهتان أو بقع باهتة. الأشرطة المغشوشة غالباً ما تكون مصنوعة من بلاستيك رقيق رديء الصنع أو تحمل نقوشات مائلة وغير متساوية الأبعاد.'
    },
    {
      question: 'هل هناك حبوب سيتوتيك دائرية الشكل؟',
      answer: 'لا على الإطلاق. حبوب سيتوتيك الأصلية من إنتاج فايزر تأتي دائماً وحصراً بشكل سداسي الأضلاع (Hexagonal Design) ذي حواف ناعمة ومتناسقة. الحبوب الدائرية أو البيضاوية الصفراء أو البيضاء اللامعة هي غير أصلية ومقلدة ويجب الحذر من علامة التقليد لتفادي سميتها وتلاشي مفعولها.'
    },
    {
      question: 'ما هي درجة صلابة وملمس القرص الموثوق؟',
      answer: 'يتميز القرص الأصلي بملمس طباشيري أبيض مطفأ (غير لماع) ذي درجة متانة عالية تمنع تفتته الفوضوي عند الحمل، ولكنه يحتوي على خط تقسيم عميق بالجهة المعاكسة يتيح لك كسره بنصفين متوازيين دقيقين عند اتباع توجيهات الجرعة الصيدلانية.'
    },
    {
      question: 'كيف يؤثر استخدام الأدوية المقلدة من السوق السوداء على صحتي؟',
      answer: 'الأدوية المقلدة تفتقر تماماً للمادة الفعالة المصقولة مخبرياً مما يتسبب في فشل الطمث المقصود، أو قد تشتمل على كيمياويات صناعية ملوثة تؤدي لتسمم دموي أو نزاف متقطع. لذا نوفر بالمنصة نظام التوريد المباشر والمشفر صوناً لأرواح المرضى.'
    },
    {
      question: 'كيف يمكنني الاستعانة بخبراء المنصة للتأكد التام قبل الاستخدام؟',
      answer: 'نحن نتيح نظام التدقيق الفوري مجاناً بالمنصة؛ بكل بساطة يمكنك النقر على زر "بوابة المنسقين" في الأسفل أو مراسلة الكادر الصيدلاني عبر الواتساب لإرسال صورة واضحة للشريط الحاصل عليه ومطابقة الرمز التسلسلي الدولي وتاريخ الباتش فورياً لراحة بال مطلقة.'
    }
  ] : [
    {
      question: 'What is the meaning of the "1461" engraving on Cytotec tablets?',
      answer: 'It is the official pharmaceutical engraving code used by Pfizer laboratories to identify Misoprostol 200 mcg tablets. Any genuine pill must feature this code crisply engraved, bottom-flat, recessed rather than raised or printed in color.'
    },
    {
      question: 'How can I distinguish an original Cytotec blister pack from a counterfeit one?',
      answer: 'The authentic blister is composed entirely of thick, medical-grade double-silver aluminum foil which resists moisture, printed clearly with high-contrast text in black ink on the reverse. Simulated counterfeits are usually flimsy plastic backings or have fuzzy, offset branding.'
    },
    {
      question: 'Are there authentic circular-shaped Cytotec tablets?',
      answer: 'Absolutely not. Genuine Pfizer Cytotec tablets are always and exclusively hexagonal with smooth, symmetrical, non-sharp geometric sides. Round or oval glossy tablets (whether white or yellow) are dangerous counterfeits and lack the active ingredients.'
    },
    {
      question: 'What is the texture and density of a reliable tablet?',
      answer: 'The genuine tablet features a distinct chalky, matte white surface. It is densely pressed so it does not crumble under simple handling, yet it includes a deep bisection score on the back to facilitate clean splitting as prescribed.'
    },
    {
      question: 'How do black-market counterfeit drugs affect my health?',
      answer: 'Counterfeit drugs completely lack the pharmaceutical-grade active ingredient, causing severe procedural failure or incomplete outcomes. In worse cases, they contain hazardous fillers leading to sepsis or uncontrolled bleeding. This is why our platform secures direct imports to protect patient health.'
    },
    {
      question: 'How can I reach your team to verify a package before use?',
      answer: 'We provide immediate clinical verification completely free of charge. Simply click the coordinator button in our footer or text our pharmacy staff on WhatsApp with a clear photo of your blister pack to verify batch serial numbers in real time.'
    }
  ];

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`} id="medical-verify-root" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      
      {/* Mini state selector tabs */}
      <div className={`flex gap-2 border-b border-slate-850 pb-3 flex-wrap ${isAr ? 'justify-end' : 'justify-start'}`}>
        <button
          onClick={() => setActiveTab('features')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${activeTab === 'features' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
        >
          {t.featuresTab}
        </button>
        <button
          onClick={() => setActiveTab('tester')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${activeTab === 'tester' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
        >
          {t.testerTab}
        </button>
        <button
          onClick={() => setActiveTab('guideline')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${activeTab === 'guideline' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
        >
          {t.guidelineTab}
        </button>
      </div>

      {activeTab === 'features' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Detailed analysis list */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className={`text-base font-bold text-white flex items-center gap-2 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
              <ShieldCheck className="w-5 h-5 text-teal-400 animate-pulse" />
              <span>{t.evidenceTitle}</span>
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {t.evidenceDesc}
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'sh',
                  title: t.shTitle,
                  desc: t.shDesc
                },
                {
                  id: 'eg',
                  title: t.egTitle,
                  desc: t.egDesc
                },
                {
                  id: 'sc',
                  title: t.scTitle,
                  desc: t.scDesc
                },
                {
                  id: 'fo',
                  title: t.foTitle,
                  desc: t.foDesc
                }
              ].map(feat => (
                <div key={feat.id} className={`bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-slate-700 transition ${isAr ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-extrabold text-xs sm:text-sm text-teal-350">{feat.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed mt-1 font-normal">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Zoom visual display */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center space-y-4 shadow-xl">
            <h4 className="text-xs font-bold text-slate-200">{t.previewTitle}</h4>

            {/* Pill Microscope Frame */}
            <div className="relative mx-auto w-full aspect-square max-w-[280px] bg-slate-950 rounded-2xl border-2 border-dashed border-slate-800 flex items-center justify-center overflow-hidden group">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-15" />

              {/* The Pill Geometry Component */}
              <div 
                onMouseEnter={() => setIsPillHovered(true)}
                onMouseLeave={() => setIsPillHovered(false)}
                className={`w-48 h-48 bg-slate-200 text-slate-950 flex flex-col items-center justify-center clip-hexagon relative transition-all duration-300 select-none shadow-2xl border-4 ${isPillHovered ? 'border-teal-400 cursor-help ring-4 ring-teal-500/10 shadow-teal-500/15' : 'border-white'}`}
                style={{ transform: `scale(${zoomLevel * (isPillHovered ? 1.05 : 1)})` }}
              >
                {/* Microscopic texture overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-450 opacity-10 pointer-events-none" />

                {/* Score dividing line on reverse side mock */}
                <div className="absolute w-[1px] h-full bg-slate-450/20 left-1/2 top-0" />

                <span className="text-3xl font-black tracking-widest font-mono text-slate-800 drop-shadow-sm select-none">
                  1461
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold block mt-1">PFIZER</span>
              </div>

              {/* Holographic annotations circles */}
              {showAnnotation && !isPillHovered && (
                <>
                  <div className={`absolute top-1/4 bg-teal-500/95 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md border border-white ${isAr ? 'left-1/3' : 'right-1/3'}`}>
                    {t.labelHex}
                  </div>
                  <div className={`absolute bottom-1/4 bg-sky-505/95 text-white text-[10px] font-black px-2 py-0.5 rounded-md border border-slate-800 ${isAr ? 'right-1/4' : 'left-1/4'}`}>
                    {t.labelPfizer}
                  </div>
                </>
              )}

              {/* Beautiful interactive hover tooltip */}
              <AnimatePresence>
                {isPillHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute bottom-3 left-3 right-3 bg-slate-950/95 border border-teal-500/35 p-3 rounded-xl z-20 shadow-2xl backdrop-blur-md pointer-events-none ${isAr ? 'text-right' : 'text-left'}`}
                  >
                    <div className={`flex items-center justify-between mb-1.5 border-b border-slate-900 pb-1 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                      <span className="flex items-center gap-1 text-[9px] text-teal-400 font-black">
                        <Sparkles className="w-3 h-3 text-teal-400 animate-pulse" />
                        <span>{t.tooltipSub}</span>
                      </span>
                      <h5 className="text-[11px] font-black text-slate-100">{t.tooltipHeader}</h5>
                    </div>
                    <p className="text-[10px] text-slate-300 leading-relaxed font-normal">
                      {t.tooltipDesc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{t.zoomLabel}</span>
                <span className="font-mono font-bold text-teal-400">{zoomLevel.toFixed(1)}x Zoom</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="1.6"
                step="0.05"
                value={zoomLevel}
                onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />

              <div className="flex justify-between gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAnnotation(!showAnnotation)}
                  className="w-full py-1.5 bg-slate-950 border border-slate-800 text-[11px] text-slate-400 hover:text-white rounded-lg transition"
                >
                  {showAnnotation ? t.annotationHide : t.annotationShow}
                </button>
              </div>
            </div>

            <div className={`bg-slate-950 p-3 rounded-lg border border-slate-850 ${isAr ? 'text-right' : 'text-left'}`}>
              <h5 className={`text-[11px] font-bold text-amber-400 flex items-center gap-1 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{t.warningTitle}</span>
              </h5>
              <p className="text-[10px] text-slate-500 leading-normal mt-1 font-normal">
                {t.warningDesc}
              </p>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'tester' && (
        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-5 shadow-xl">
          <div className="text-center space-y-1.5 border-b border-slate-800 pb-4">
            <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
              <Cpu className="w-5 h-5 text-teal-400" />
              <span>{t.testerTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 font-normal">{t.testerSub}</p>
          </div>

          <div className="space-y-3">
            {[
              { key: 'shapeHexagonal', label: t.chkHex },
              { key: 'engraving1461', label: t.chk1461 },
              { key: 'colorWhite', label: t.chkWhite },
              { key: 'packSilver', label: t.chkFoil },
              { key: 'serialMatch', label: t.chkBatch }
            ].map(item => (
              <label 
                key={item.key}
                className={`flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-900/80 rounded-xl border border-slate-850 cursor-pointer select-none transition ${isAr ? 'flex-row text-right' : 'flex-row-reverse text-left'}`}
              >
                <span className="text-xs text-slate-200 font-medium">{item.label}</span>
                <input
                  type="checkbox"
                  checked={checklist[item.key as keyof typeof checklist]}
                  onChange={() => toggleCheck(item.key as any)}
                  className="w-4.5 h-4.5 rounded text-teal-500 bg-slate-900 border-slate-800 focus:ring-teal-500 cursor-pointer shrink-0"
                />
              </label>
            ))}
          </div>

          {/* Test Diagnosis Outcome preview */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
            <h4 className="text-xs font-bold text-slate-150">{t.diagTitle}</h4>
            
            {matchesAll ? (
              <div className={`p-3 bg-emerald-950/25 border border-emerald-500/30 rounded-lg text-emerald-400 flex items-center gap-2 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
                <CheckCircle className="w-5 h-5 shrink-0" />
                <div className={`text-xs leading-relaxed font-normal ${isAr ? 'text-right' : 'text-left'}`}>
                  <strong>{t.diagMatchOk}</strong>
                  <p className="text-[10px] text-slate-400 mt-1">{t.diagMatchOkDesc}</p>
                </div>
              </div>
            ) : (
              <div className={`p-3 bg-red-950/20 border border-red-500/25 rounded-lg text-red-400 flex items-center gap-2 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <div className={`text-xs leading-relaxed font-normal ${isAr ? 'text-right' : 'text-left'}`}>
                  <strong>{t.diagMatchErr}</strong>
                  <p className="text-[10px] text-slate-400 mt-1">{t.diagMatchErrDesc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'guideline' && (
        <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
          <h3 className={`text-sm font-bold text-white flex items-center gap-1.5 border-b border-slate-800 pb-3 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
            <Activity className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>{t.guideTitle}</span>
          </h3>

          <div className={`text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-normal ${isAr ? 'text-right' : 'text-left'}`}>
            <p>{t.guideIntro}</p>

            <ul className={`list-disc list-inside space-y-2 text-slate-400 text-xs font-normal ${isAr ? 'text-right' : 'text-left'}`}>
              <li>{t.b1}</li>
              <li>{t.b2}</li>
              <li>{t.b3}</li>
              <li>{t.b4}</li>
            </ul>

            <div className={`pt-4 flex ${isAr ? 'justify-end' : 'justify-start'}`}>
              <a 
                href="https://wa.me/96876636098"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition inline-flex items-center gap-1.5"
              >
                {t.btnGuide}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) COLLAPSIBLE ACCORDION */}
      <div className={`bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl mt-6 ${isAr ? 'text-right' : 'text-left'}`} id="digital-faq-accordion-section">
        <div className="border-b border-slate-850 pb-4 space-y-1.5">
          <div className={`flex items-center justify-between flex-wrap gap-2 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="px-2.5 py-1 bg-sky-500/10 text-sky-400 font-mono text-[10px] sm:text-xs rounded-full border border-sky-500/20 font-extrabold uppercase">
              RELIABILITY FAQ
            </span>
            <h3 className="text-sm sm:text-base font-black text-slate-100 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-400 animate-pulse" />
              <span>{t.faqTitle}</span>
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            {t.faqSub}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((faq, idx) => (
            <FaqAccordionItem 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
              lang={lang}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
