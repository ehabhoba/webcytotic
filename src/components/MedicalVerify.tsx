import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  Cpu, 
  Search, 
  Activity 
} from 'lucide-react';

export default function MedicalVerify() {
  const [activeTab, setActiveTab] = useState<'features' | 'tester' | 'guideline'>('features');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showAnnotation, setShowAnnotation] = useState<boolean>(true);

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

  return (
    <div className="space-y-6 text-right" id="medical-verify-root">
      
      {/* Mini state selector tabs */}
      <div className="flex gap-2 justify-end border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('features')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${activeTab === 'features' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
        >
          🔍 الخصائص التشريحية لحبة فايزر الأصلية
        </button>
        <button
          onClick={() => setActiveTab('tester')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${activeTab === 'tester' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
        >
          📱 جهاز الفحص والمطابقة الرقمي التفاعلي
        </button>
        <button
          onClick={() => setActiveTab('guideline')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${activeTab === 'guideline' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
        >
          📖 التعليمات الإرشادية لسلامة الاستخدام
        </button>
      </div>

      {activeTab === 'features' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Detailed analysis list */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400 animate-pulse" />
              <span>أدلة الفحص الجنائي لفرز حبوب سيتوتيك الأصلية (Cytotec 200 mcg)</span>
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed">
              تؤكد الأبحاث والمتابعات الصيدلانية بمجلس الخليج أن دواء سيتوتيك من إنتاج شركة **فايزر (Pfizer)** يحمل تفاصيل ميكانيكية دقيقة صعبة التزوير تماماً. انتبه لأدق النقاط المذكورة أدناه لتجنب شراء الأدوية المغشوشة رخيصة الثمن المنتشرة بالسوق السوداء.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'sh',
                  title: '١. الشكل الهندسي السداسي (Hexagonal Design):',
                  desc: 'القرص الأصلي سداسي الشكل متساوي الأبعاد تماماً، ممهد وخالٍ من البروزات الحادة أو القطوش على الحواف الجانبية، وهو ما يصعب إنتاجه في المعامل اليدوية المقلدة غير المجهزة بمضخات الضغط الكيميائي الفاخرة.'
                },
                {
                  id: 'eg',
                  title: '٢. نقش الرقم 1461 الغائر من جهة واحدة:',
                  desc: 'تتميز الحبة الأصلانية بنقش الرقم المستوطن "1461" محفوراً بوضوح ممتاز وعميق على إحدى واجهات الحبة. النقش يكون مقروءاً بلمسة بسيطة ومصقولاً بشكل أنيق للغاية.'
                },
                {
                  id: 'sc',
                  title: '٣. خط التقسيم الفاصل في الوجه الآخر:',
                  desc: 'يحتوي الوجه الآخر للحبة على حفر فارق عميق في المنتصف يقسم الحبة إلى نصفين متساويين تماماً لمساعدة الاستشاري والعميل في فرز الجرعات ونصف القيمة عند الطلب.'
                },
                {
                  id: 'fo',
                  title: '٤. شريط الألومنيوم المتين غير المصنوع من البلاستيك:',
                  desc: 'تأتي الحبوب مغلفة في أقماع ألومنيوم فضي ثقيل يقاوم الضغط والرطوبة، والمطبوع في ظهره كلمة Cytotec بالخط الأسود الداكن المسجل للعلامة التجارية لشركة فايزر، بدون بهتان أو بهش في تدوير الشحن.'
                }
              ].map(feat => (
                <div key={feat.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-right hover:border-slate-705 transition">
                  <h4 className="font-extrabold text-xs sm:text-sm text-teal-350">{feat.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed mt-1">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Zoom visual display */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center space-y-4 shadow-xl">
            <h4 className="text-xs font-bold text-slate-200">التمثيل الدقيق لحجم الدوائر ونقش الحبة (Pfizer 1461 Microscopic Preview)</h4>

            {/* Pill Microscope Frame */}
            <div className="relative mx-auto w-Full aspect-square max-w-[280px] bg-slate-950 rounded-2xl border-2 border-dashed border-slate-800 flex items-center justify-center overflow-hidden group">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-15" />

              {/* The Pill Geometry Component */}
              <div 
                className="w-48 h-48 bg-slate-200 text-slate-950 flex flex-col items-center justify-center clip-hexagon relative transition-all duration-300 select-none shadow-2xl border-4 border-white"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* Microscopic texture overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-450 opacity-10 pointer-events-none" />

                {/* Score dividing line on reverse side mock */}
                <div className="absolute w-[1px] h-full bg-slate-400/20 left-1/2 top-0" />

                <span className="text-3xl font-black tracking-widest font-mono text-slate-800 drop-shadow-sm select-none">
                  1461
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold block mt-1">PFIZER</span>
              </div>

              {/* Holographic annotations circles */}
              {showAnnotation && (
                <>
                  <div className="absolute top-1/4 left-1/3 bg-teal-500/95 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md border border-white">
                    سداسي الأبعاد 📐
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 bg-sky-505/95 text-white text-[10px] font-black px-2 py-0.5 rounded-md border border-slate-800">
                    رمز فايزر "1461" 🔬
                  </div>
                </>
              )}
            </div>

            {/* Controls */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>تعديل زاوية التقريب المجهري:</span>
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
                  onClick={() => setShowAnnotation(!showAnnotation)}
                  className="w-full py-1.5 bg-slate-950 border border-slate-800 text-[11px] text-slate-400 hover:text-white rounded-lg transition"
                >
                  {showAnnotation ? 'إخفاء العلامات التوضيحية' : 'إظهار ملامح الموثوقية'}
                </button>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-right">
              <h5 className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>تحذير الاستشاري الطبي بالمنصة:</span>
              </h5>
              <p className="text-[10px] text-slate-500 leading-normal mt-1">
                جميع الحبوب المستديرة اللماعة أو الصفراء المنسوخة بالمنتدى ليست منتجات فايزر الأصلية بل قد تشكل تهديداً ساماً.
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
              <span>نظام التدقيق الرقمي الذاتي للعبوة</span>
            </h3>
            <p className="text-xs text-slate-400">تواصل ذاتياً لتقييم صحة ونقش العلاج الذي بحيازتك قبل البدء بالاستشارة:</p>
          </div>

          <div className="space-y-3 text-right">
            {[
              { key: 'shapeHexagonal', label: 'هل الحبوب سداسية الشكل تماماً؟ (تفادي المبرومة الدائرية)' },
              { key: 'engraving1461', label: 'هل يوجد حفر غائر ناعم للرقم "1461" على أحد جهاتها؟' },
              { key: 'colorWhite', label: 'هل لون الحبوب أبيض طباشيري غير لماع ولا يحمل ألواناً أخرى؟' },
              { key: 'packSilver', label: 'هل شريط الدواء مصنوع بالكامل من ورق الألومنيوم الفضي الصلد اللامع؟' },
              { key: 'serialMatch', label: 'هل يوجد رقم باتش وتاريخ انتهاء الصلاحية مطبوعان بالليزر على الطرف السفلي للشريط؟' }
            ].map(item => (
              <label 
                key={item.key}
                className="flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-950/80 rounded-xl border border-slate-850 cursor-pointer select-none transition"
              >
                <span className="text-xs text-slate-200 font-medium">{item.label}</span>
                <input
                  type="checkbox"
                  checked={checklist[item.key as keyof typeof checklist]}
                  onChange={() => toggleCheck(item.key as any)}
                  className="w-4.5 h-4.5 rounded text-teal-500 bg-slate-900 border-slate-800 focus:ring-teal-500 cursor-pointer"
                />
              </label>
            ))}
          </div>

          {/* Test Diagnosis Outcome preview */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
            <h4 className="text-xs font-bold text-slate-150">نتيجة الفحص المخبري التلقائي:</h4>
            
            {matchesAll ? (
              <div className="p-3 bg-emerald-950/25 border border-emerald-505/30 rounded-lg text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <div className="text-xs text-right leading-relaxed">
                  <strong>المنتج مطابق لخصائص فايزر الأصلانية بنسبة ١٠٠٪ ✓</strong>
                  <p className="text-[10px] text-slate-400 mt-1">توضح المعايير توافق مع المكونات الكيميائية للمستحضر. يمكنك التواصل مع مستشارك الخاص لتأكيد الجرعة الآمنة.</p>
                </div>
              </div>
            ) : (
              <div className="p-3 bg-red-950/20 border border-red-500/25 rounded-lg text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <div className="text-xs text-right leading-relaxed">
                  <strong>المنتج مشبوه أو تفقد بعض علامات الموثوقية الأصلية!</strong>
                  <p className="text-[10px] text-slate-400 mt-1">يرجى الحذر وعدم استخدام العقاقير الدائرية أو غير محددة الرقم لضمان تلافي السموم. ننصحك بالتحقق السريع المجاني من معتمدينا.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'guideline' && (
        <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-1.5 border-b border-slate-800 pb-3">
            <Activity className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>البروتوكولات الطبية والتوجيه الدوائي الخليجي المعتمد لضمان الصحة</span>
          </h3>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed text-right space-y-3">
            <p>
              يعد استخدام سيتوتيك ميزوبروستول (Cytotec Misoprostol 200) لطلب تنزيل الحمل أو لعلاج القرحة المعوية عملية حساسة وصحية ومقررة علمياً في كافة الدستورات الدوائية المعتمدة. يجب اتباع الإرشادات الصارمة التالية لحفظ الصحة العامة:
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-400 text-xs text-right">
              <li>**الامتناع عن الكافيين والمقليات الدسمة** التي قد تتعارض مع كفاءة وسرعة استيعاب ميزوبروستول الدموي بالجسم.</li>
              <li>التحقق من خلو الرحم تماماً من الأجهزة المعدنية الصناعية (اللولب) لتفادي الانقباض العنيف أو التليف الداخلي.</li>
              <li>الالتزام بفترات الراحة السريرية والمكوث في مكان مجهز بجوار معارف ذوي دراية لمتابعة الحالة واستشارة اللوائح المحلية.</li>
              <li>مخاطبة الاستشاري الخاص بنا بالمنصة فوراً للحصول على دليل الاستخدام التفصيلي مجاناً وتزويدك بالجرعات الدقيقة حسب عمر الحالة وكتلة الجسم.</li>
            </ul>

            <div className="pt-4 flex justify-end">
              <a 
                href="https://wa.me/96876636098"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition inline-flex items-center gap-1.5"
              >
                📥 تواصل واتساب لطلب الدليل التشغيلي الطبي الكامل PDF
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
