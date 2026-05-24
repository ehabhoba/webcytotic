import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Copy, 
  Check, 
  Phone, 
  Code, 
  Info, 
  HelpCircle, 
  Truck, 
  Share2, 
  TrendingUp, 
  Languages 
} from 'lucide-react';
import { PROGRAMMATIC_GCC_DATA, generateProgrammaticSEOPage } from '../programmaticData';
import { GCC_ST_CONFIGS } from '../data';

export default function ProgrammaticExplorer() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('OM');
  const [selectedCityName, setSelectedCityName] = useState<string>('مسقط');
  const [selectedNeighborhoodName, setSelectedNeighborhoodName] = useState<string>('السيب');
  const [selectedTopic, setSelectedTopic] = useState<'original-vs-fake' | 'order-and-delivery' | 'medical-guide'>('original-vs-fake');
  const [selectedLang, setSelectedLang] = useState<'ar' | 'en'>('ar');
  
  const [copiedSchema, setCopiedSchema] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const activeCountry = PROGRAMMATIC_GCC_DATA.find(c => c.code === selectedCountryCode) || PROGRAMMATIC_GCC_DATA[0];
  const activeCity = activeCountry.cities.find(c => c.nameAr === selectedCityName || c.nameEn === selectedCityName) || activeCountry.cities[0];
  const activeNeighborhood = activeCity.neighborhoods.find(n => n.nameAr === selectedNeighborhoodName) || activeCity.neighborhoods[0];

  // Auto-adapt selected city and neighborhood when country shifts
  const handleCountryChange = (code: string) => {
    setSelectedCountryCode(code);
    const newCountry = PROGRAMMATIC_GCC_DATA.find(c => c.code === code) || PROGRAMMATIC_GCC_DATA[0];
    const newCity = newCountry.cities[0];
    setSelectedCityName(newCity.nameAr);
    setSelectedNeighborhoodName(newCity.neighborhoods[0].nameAr);
  };

  const handleCityChange = (cityNameAr: string) => {
    setSelectedCityName(cityNameAr);
    const newCity = activeCountry.cities.find(c => c.nameAr === cityNameAr) || activeCountry.cities[0];
    setSelectedNeighborhoodName(newCity.neighborhoods[0].nameAr);
  };

  // Compile the programmatic page on-the-fly
  const pageRender = generateProgrammaticSEOPage(
    selectedCountryCode,
    selectedCityName,
    selectedNeighborhoodName,
    selectedTopic,
    selectedLang
  );

  const handleCopySchema = () => {
    navigator.clipboard.writeText(pageRender.schemaJson);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  const handleCopyUrl = () => {
    const fullSimulatedUrl = `https://web.cytotec.fun${pageRender.url}`;
    navigator.clipboard.writeText(fullSimulatedUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleWhatsAppClick = () => {
    const textMessage = selectedLang === 'ar' 
      ? `أهلاً بك.. أود إجراء حجز وشراء حبوب سيتوتيك الأصلي فايزر ١٤٦١ في (${selectedNeighborhoodName})، بمدينة (${selectedCityName})، دولة (${activeCountry.nameAr}).
الجرعة والتغطية المطلوبة: ${selectedTopic === 'original-vs-fake' ? 'شراء وفحص الموثوقية' : 'توصيل عاجل وسري باليد'}
المرجع البروجراماتيك: ${pageRender.url}`
      : `Hello, I'd like to book original Cytotec Pfizer 1461 in (${selectedNeighborhoodName}), (${selectedCityName}), (${activeCountry.nameEn}).
Delivery service type: Express Stealth.
Reference: ${pageRender.url}`;
    
    // Log WhatsApp click inside localStorage list as CRM tracking
    const trackerId = 'track-' + Date.now();
    const newLead = {
      id: trackerId,
      name: selectedLang === 'ar' ? `زائر مهتم بـ ${selectedNeighborhoodName}` : `Lead from ${selectedNeighborhoodName}`,
      phone: activeCountry.whatsappNumber,
      country: selectedCountryCode,
      region: `${selectedCityName} - ${selectedNeighborhoodName}`,
      quantity: 1,
      deliveryType: 'express',
      notes: `بروجراماتيك SEO | مسار: ${pageRender.url}`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    try {
      const stored = localStorage.getItem('local_orders_crm');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newLead);
      localStorage.setItem('local_orders_crm', JSON.stringify(list));
      // Dispatch custom event to notify App.tsx to reload orders
      window.dispatchEvent(new Event('crm_updated'));
    } catch(e) {
      console.error(e);
    }

    const waLink = `https://wa.me/${activeCountry.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(textMessage)}`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="space-y-6 text-right" id="programmatic-explorer-root">
      {/* Intro explain banner */}
      <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1 px-2.5 bg-teal-500/15 text-teal-400 font-mono text-xs rounded-full border border-teal-500/30 font-bold">PRO-SEO INTEGRATION</span>
            <h2 className="text-xl font-bold bg-gradient-to-l from-white to-slate-200 bg-clip-text text-transparent">نظام النشر الآلي والصفحات المحلية المبرمجة (Programmatic SEO)</h2>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            المنصة لا تعمل بنظام المقالات التقليدي. بدلاً من ذلك، قمنا بتطوير محرك صفحات توليدي ديناميكي يقوم فوراً بإنشاء وصياغة عناوين، ومحتوى محلي، وبيانات مُهيكلة (JSON-LD Schemas) مختلفة ومطابقة تماماً لكل دولة، مدينة، حي، ولغة في منطقة الخليج العربي لتصدر محركات بحث Google والذكاء الاصطناعي SGE بالكامل.
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setSelectedLang('ar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${selectedLang === 'ar' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/25' : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>العربية (اللهجات المحلية)</span>
          </button>
          <button
            onClick={() => setSelectedLang('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${selectedLang === 'en' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/25' : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>English SGE Optimized</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* MATRIX MATRIX CONTROLLERS CARD */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-5 shadow-xl">
          <h3 className="text-sm font-bold text-slate-150 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal-400" />
            <span>مصفوفة التحكم الجغرافي والكلمات المستهدفة</span>
          </h3>

          <div className="space-y-4">
            
            {/* 1) Country Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 block font-medium">الدولة المستهدفة بالخليج:</label>
              <div className="grid grid-cols-2 gap-1.5">
                {PROGRAMMATIC_GCC_DATA.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => handleCountryChange(c.code)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-right transition truncate border flex items-center justify-between gap-1 ${selectedCountryCode === c.code ? 'bg-teal-500/10 text-teal-300 border-teal-500/40' : 'bg-slate-950 border-slate-800 hover:border-slate-705 text-slate-400'}`}
                  >
                    <span>{c.nameAr}</span>
                    <span className="font-mono text-[9px] text-slate-500 bg-slate-900 px-1 rounded uppercase">{c.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2) City Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 block font-medium">المحافظة / المدينة الرئيسية:</label>
              <select
                value={selectedCityName}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-teal-400 cursor-pointer text-right"
              >
                {activeCountry.cities.map((city) => (
                  <option key={city.nameAr} value={city.nameAr}>
                    📍 {city.nameAr} - {selectedLang === 'ar' ? 'فرع لوجستي سريع' : 'Active Express Branch'}
                  </option>
                ))}
              </select>
            </div>

            {/* 3) Neighborhood/District Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 block font-medium">الحي السكني أو المنطقة الفرعية (تلقائي):</label>
              <div className="grid grid-cols-2 gap-1.5">
                {activeCity.neighborhoods.map((n) => (
                  <button
                    key={n.nameAr}
                    onClick={() => setSelectedNeighborhoodName(n.nameAr)}
                    className={`p-2 rounded-xl text-xs transition border text-center ${selectedNeighborhoodName === n.nameAr ? 'bg-sky-500/10 text-sky-305 border-sky-500/40 font-bold' : 'bg-slate-950 border-slate-800 hover:border-slate-705 text-slate-400'}`}
                  >
                    🏡 {n.nameAr}
                  </button>
                ))}
              </div>
            </div>

            {/* 4) Core SEO Topic Toggle */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs text-slate-400 block font-medium">موضوع الصفحة والقمع التسويقي (SGE Category):</label>
              <div className="space-y-1">
                {[
                  { id: 'original-vs-fake', label: 'كشف تزوير سيتوتيك الأصلي والمقلد', color: 'border-teal-400' },
                  { id: 'order-and-delivery', label: 'شحن مناديب وتغطية تسليم سريعة', color: 'border-sky-400' },
                  { id: 'medical-guide', label: 'البروتوكول الطبي والجرعات الدقيقة', color: 'border-purple-400' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTopic(item.id as any)}
                    className={`w-full text-right px-3 py-2 rounded-xl text-xs transition border flex items-center justify-between ${selectedTopic === item.id ? 'bg-slate-850 border-slate-600 text-slate-100 font-bold' : 'bg-slate-950 border-slate-800 hover:border-slate-705 text-slate-400'}`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-2 h-2 rounded-full ${selectedTopic === item.id ? 'bg-teal-400 animate-pulse' : 'bg-slate-700'}`} />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Core SEO indexing signals simulator */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-[11px] font-bold text-sky-400 flex items-center justify-between">
              <span>مؤشرات قوة الصفحة بالذكاء الاصطناعي:</span>
              <span className="font-mono text-xs bg-teal-500/10 text-teal-400 px-1 py-0.5 rounded border border-teal-500/20">SGE HIGH SCORE</span>
            </h4>
            <div className="space-y-1.5 text-[10px] text-slate-400">
              <div className="flex justify-between">
                <span>اسم الكلمات الفريدة المستعملة:</span>
                <span className="text-slate-200 font-semibold">{pageRender.keywords.length} كلمات فروع</span>
              </div>
              <div className="flex justify-between">
                <span>توليد اللهجة والمصطلحات المحلية:</span>
                <span className="text-slate-200 font-semibold">{activeCountry.localDialectGreeting.substring(0, 15)}...</span>
              </div>
              <div className="flex justify-between">
                <span>المعالم المكانية المذكورة:</span>
                <span className="text-amber-400 font-mono font-bold">{selectedLang === 'ar' ? activeNeighborhood.landmarkAr : activeNeighborhood.landmarkEn}</span>
              </div>
              <div className="flex justify-between">
                <span>فحص كود الموثوقية بالمنطقة:</span>
                <span className="text-emerald-400 font-bold">Pfizer Verified 1461 ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LIVE EMBEDDED BROWSER RENDERER */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* Simulated Browser Bar */}
          <div className="bg-slate-900 rounded-t-2xl border-t border-x border-slate-800 p-3 flex items-center gap-3">
            <div className="flex gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* URL Address Window */}
            <div className="flex-1 bg-slate-950 rounded-lg px-3 py-1.5 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 ltr-dir">
              <div className="flex items-center gap-2 truncate">
                <span className="text-teal-500">https://</span>
                <span className="text-slate-200 truncate">web.cytotec.fun{pageRender.url}</span>
              </div>
              <button 
                onClick={handleCopyUrl}
                title="نسخ الرابط البروجراماتيك" 
                className="hover:text-teal-400 transition"
              >
                {copiedUrl ? <Check className="w-4.5 h-4.5 text-emerald-400" /> : <Copy className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>

          {/* Simulated Page Content Body */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-b-2xl space-y-6">
            
            {/* SEO Title & Meta Description panel */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
              <span className="bg-slate-800 text-slate-400 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded">Google Snippet & SGE Search Preview</span>
              <div className="space-y-1 text-right">
                <h4 className="text-sky-400 text-sm sm:text-base font-bold hover:underline cursor-pointer tracking-tight">
                  {pageRender.titleAr}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {pageRender.metaDescAr}
                </p>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="bg-teal-500/10 text-teal-400 px-2.5 py-1 text-xs rounded-full border border-teal-500/20 font-bold">
                  🗂️ {selectedTopic === 'original-vs-fake' ? 'قسم الموثوقية وكشف تزوير العلم' : 'قسم الركائز والتوزيع اللوجستي'}
                </span>
                <span className="text-xs text-slate-500">مكتوب بواسطة: {activeCountry.clinicalAuthority}</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap space-y-4 font-normal programmatic-article-body text-right">
                {selectedLang === 'ar' ? pageRender.contentAr : pageRender.contentEn}
              </div>
            </div>

            {/* Dynamic Local FAQ Accordion */}
            <div className="space-y-3.5 border-t border-slate-800 pt-6">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-teal-400" />
                <span>الأسئلة الأكثر تداولاً في {selectedCityName} - حي {selectedNeighborhoodName}</span>
              </h3>

              <div className="space-y-2">
                {pageRender.faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full text-right p-3.5 text-xs font-bold text-slate-200 hover:text-white flex justify-between items-center transition"
                    >
                      <span>{faq.question}</span>
                      <span className="text-teal-400 font-bold text-xs">{activeFaq === index ? '▲' : '▼'}</span>
                    </button>
                    {activeFaq === index && (
                      <div className="p-3.5 pt-0 text-[11px] text-slate-300 leading-relaxed border-t border-slate-900 bg-slate-950">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live delivery coverage indicator */}
            <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="font-bold text-xs text-emerald-400">شبكة المندوبين مفعلة في {selectedNeighborhoodName} بالكامل</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    الاستلام باليد وبشحن طبي خفي آمن مبرد خلال <strong>{activeCity.deliveryTime}</strong> كحد أقصى.
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 active:scale-95 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition self-end sm:self-center"
              >
                <Phone className="w-4 h-4" />
                <span>إرسال طلب مباشر لحي {selectedNeighborhoodName}</span>
              </button>
            </div>

            {/* Dynamic internal linking suggestions showing correct programmatic logic */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-teal-500 rounded-full" />
                <h4 className="font-extrabold text-xs text-slate-250">روابط الترابط العشوائي الداخلي (Dynamic Topic Clusters):</h4>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {pageRender.internalLinks.map((link, idx) => (
                  <span 
                    key={idx} 
                    className="bg-slate-900 hover:text-teal-400 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] font-medium text-slate-400 cursor-pointer transition select-none"
                    onClick={() => {
                      alert(`تم الترابط الداخلي تلقائياً مع الكلمة الموصوفة: "${link.anchor}" إلى المسار: ${link.path}`);
                    }}
                  >
                    🔗 {link.anchor}
                  </span>
                ))}
              </div>
            </div>

            {/* TAB-CONTAINED: THE SCHEMA GRAPH VISUALIZER */}
            <div className="bg-slate-950 border border-slate-850 rounded-xl overflow-hidden mt-6">
              <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-850">
                <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-sky-400" />
                  <span>مخطط السكيما المقروء لجوجل (JSON-LD Medical Schema)</span>
                </span>
                <button
                  onClick={handleCopySchema}
                  className="bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-teal-400 transition px-2 py-1 rounded inline-flex items-center gap-1 border border-slate-800 text-[10px]"
                >
                  {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSchema ? 'المخطط منسوخ!' : 'نسخ السكيما للاختبار'}</span>
                </button>
              </div>
              <div className="p-4 overflow-x-auto max-h-48 text-left bg-slate-950 font-mono text-[9px] text-slate-400 ltr-dir whitespace-pre">
                {pageRender.schemaJson}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
