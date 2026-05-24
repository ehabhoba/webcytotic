import React from 'react';
import { 
  Shield, 
  Sparkles, 
  Truck, 
  FileText, 
  CheckCircle, 
  ExternalLink, 
  Phone, 
  Layers, 
  Heart, 
  UserCheck 
} from 'lucide-react';

interface GalleryCardProps {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  phoneText?: string;
  domainText?: string;
  accentClass: string;
  onClickOrder?: () => void;
  children: React.ReactNode;
}

function GalleryCard({ 
  title, 
  badge, 
  badgeColor, 
  description, 
  phoneText, 
  domainText, 
  accentClass,
  onClickOrder, 
  children 
}: GalleryCardProps) {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700/80 hover:shadow-2xl hover:shadow-teal-500/[0.02] relative group overflow-hidden ${accentClass}`}>
      <div className="space-y-4 relative z-10 text-right">
        {/* Card Header Badge */}
        <div className="flex items-center justify-between flex-row-reverse">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}`}>
            {badge}
          </span>
          <Shield className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
        </div>

        {/* Card Graphics Component Box */}
        <div className="w-full bg-slate-950/90 rounded-2xl border border-slate-850 overflow-hidden relative p-4 flex items-center justify-center min-h-[190px]">
          {children}
        </div>

        {/* Text info */}
        <div className="space-y-1">
          <h4 className="text-sm font-black text-slate-100 flex items-center justify-end gap-1.5">
            <span>{title}</span>
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-850/60 mt-4 flex items-center justify-between flex-row-reverse gap-2 relative z-10">
        {phoneText && (
          <a
            href={`https://wa.me/96876636098?text=${encodeURIComponent(`أهلاً بك.. أود الاستفسار والحجز الفوري لدواء سيتوتيك من معرض الصور لمعاينة علبة فايزر الأصلية`)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 active:scale-95 text-slate-950 px-2.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-black transition"
          >
            <Phone className="w-3 h-3" />
            <span>{phoneText}</span>
          </a>
        )}

        {domainText && (
          <a
            href={domainText.startsWith('http') ? domainText : `https://${domainText}`}
            target="_blank"
            rel="noreferrer"
            className="text-teal-450 hover:text-teal-300 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1 tracking-tight"
          >
            <ExternalLink className="w-3 h-3" />
            <span>{domainText.replace('https://', '')}</span>
          </a>
        )}

        {onClickOrder && !phoneText && (
          <button
            onClick={onClickOrder}
            className="w-full bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 py-1.5 rounded-xl text-xs transition font-bold"
          >
            📦 طلب شحن فوري مطابق
          </button>
        )}
      </div>
    </div>
  );
}

export default function CynovaProductGallery({ onTriggerOrderTab }: { onTriggerOrderTab: (region: string) => void }) {
  return (
    <div className="space-y-6 text-right" id="cynova-gallery-showcase">
      
      {/* Title block */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-gradient-to-l from-teal-500/10 to-sky-500/10 text-teal-350 font-mono text-[10px] sm:text-xs rounded-full border border-teal-500/20 font-extrabold">
            CYNOVA MEDICAL CERTIFIED GRAPHICS
          </span>
          <h3 className="text-base font-black text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-400" />
            <span>المعرض المصور لمنتج سيتوتيك الأصلي (Pfizer) وخدمة التوزيع الفورية</span>
          </h3>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          عاين الفروقات والأدلة الجغرافية والخدمية للمنصة المقتبسة من العبوات الحقيقية وشبكة مناديب تسليم "يد بيد" في السعودية، عمان، الإمارات، الكويت، قطر، وباقي دول الخليج.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* CARD 1: Authentic Box & Tablets Stamping (Images 1, 9, 11) */}
        <GalleryCard
          title="العلبة الأصلية والبلستر الدقيق"
          badge="مطابق لفايزر البريطانية 🔬"
          badgeColor="bg-blue-500/10 text-blue-350 border-blue-500/20"
          description="الحبة سداسية الشكل مدموغة بالرقم الغائر 1461. شريط ألومنيوم فضي ثقيل مطبوع بالليزر برقم الباتش وتاريخ انتهاء الصلاحية."
          phoneText="فحص مجهري 🔬"
          domainText="cytotec.fun"
          accentClass="shadow-blue-500/[0.01]"
        >
          {/* Custom micro CSS representation of Pfizer Box and blister */}
          <div className="flex flex-col items-center justify-center space-y-3 w-full">
            <div className="relative w-36 h-20 bg-gradient-to-r from-slate-100 to-white rounded-md border-b-4 border-blue-800 shadow-xl flex overflow-hidden">
              <div className="w-1/3 bg-blue-900 flex flex-col items-center justify-center p-1 text-[8px] text-white">
                <span className="font-serif italic font-extrabold text-[11px] tracking-tight">Pfizer</span>
              </div>
              <div className="w-2/3 p-2 text-right flex flex-col justify-between text-slate-900">
                <div className="space-y-0.5">
                  <div className="font-extrabold text-[10px] tracking-tight text-slate-950 font-sans leading-none">CYTOTEC</div>
                  <div className="text-[7px] text-slate-500 font-bold leading-none">200 mcg compresse</div>
                </div>
                <div className="text-[6px] text-slate-400 font-mono">50 compresse / misoprostol</div>
              </div>
            </div>
            {/* Blister and hexagon tablet */}
            <div className="flex items-center gap-3 bg-slate-900/60 p-2 rounded-xl border border-slate-800 w-full justify-center">
              <div className="w-6 h-6 bg-slate-200 clip-hexagon flex items-center justify-center border border-white text-[8px] font-black text-slate-905 shadow font-mono">
                1461
              </div>
              <div className="text-[9px] text-slate-405 leading-none">
                <span className="text-emerald-400 font-bold block">نقش غائر أصلي ✓</span>
                <span className="mt-0.5 block font-mono">Pfizer Active</span>
              </div>
            </div>
          </div>
        </GalleryCard>

        {/* CARD 2: Cynova Medical Satin Aesthetic (Image 2) */}
        <GalleryCard
          title="منصة Cynova Medical الفاخرة"
          badge="المرجع الخليجي الموثوق 👑"
          badgeColor="bg-pink-500/10 text-pink-350 border-pink-500/20"
          description="تأمين وخصوصية مطلقة لطلب الدواء الأصلي من فايزر مع استشارات نسائية تخصصية مغلقة بالتعاون مع كادرنا الصيدلاني."
          phoneText="استشارة سرية 💬"
          domainText="cymovamedical.online"
          accentClass="shadow-pink-500/[0.01]"
        >
          {/* Custom luxurious pink/purple satin-themed simulation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9d4edd]/20 via-[#f72585]/10 to-[#7209b7]/10 pointer-events-none" />
          <div className="flex flex-col items-center justify-center space-y-2 text-center relative z-10 w-full p-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white border border-white/20 shadow-lg">
              <Heart className="w-5 h-5 text-white fill-white/10 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h5 className="font-black text-xs text-white">Cynova Medical</h5>
              <p className="text-[8px] text-pink-300">شريكك المعتمد لمعايير صحة المرأة</p>
            </div>
            {/* Country flag tags */}
            <div className="flex justify-center gap-1 flex-wrap pt-1 opacity-90">
              {['🇴🇲', '🇸🇦', '🇦🇪', '🇰🇼', '🇶🇦', '🇧🇭'].map((flag, idx) => (
                <span key={idx} className="text-[10px] bg-slate-900/45 px-1 rounded border border-slate-800 font-mono">
                  {flag}
                </span>
              ))}
            </div>
          </div>
        </GalleryCard>

        {/* CARD 3: Doctor & Pharmacy Guide (Images 3, 4, 5, 8) */}
        <GalleryCard
          title="التحقق من الصيدلية والكادر الطبي"
          badge="توجيه استشاري مباشر 🩺"
          badgeColor="bg-teal-500/10 text-teal-350 border-teal-500/20"
          description="توفير سيتوتيك الأصلي بالصيدليات الخليجية والتقييم الذاتي لرموز الحبوب وتاريخ النفاذ تحت إشراف صيدلي معتمد لراحة البال."
          phoneText="مكلمة المندوب 📲"
          domainText="cytotec.fun"
          accentClass="shadow-teal-500/[0.01]"
        >
          {/* Doctor Silhouette & medical background */}
          <div className="flex flex-col items-center justify-center space-y-1 w-full text-center">
            <div className="p-2 bg-teal-500/10 rounded-full text-teal-400 border border-teal-505/20 mb-1">
              <UserCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-slate-100">تحت إشراف استشاريين مرخصين</span>
            <p className="text-[9px] text-slate-400">حجز معتمد ودليل طبي شامل PDF</p>
            <div className="bg-slate-900/80 px-2 py-1 rounded border border-slate-800 mt-1.5 w-full">
              <span className="text-[9px] text-teal-400 font-mono font-bold block">Verified Support: ACTIVE</span>
            </div>
          </div>
        </GalleryCard>

        {/* CARD 4: Instant Discrete Stealth Logistics (Images 6, 7, 10) */}
        <GalleryCard
          title="توزيع 'يد بيد' الفوري السري"
          badge="توصيل خلال ساعتين ⚡"
          badgeColor="bg-amber-500/10 text-amber-350 border-amber-500/20"
          description="نقل طبي مبرد وخصوصية كاملة في التسليم. كيس أو علبة مغلقة آمنة مبهمة تماماً لا تشير لمحتوى الشحنة نهائياً."
          onClickOrder={() => onTriggerOrderTab('توصيل يد بيد - الخليج العربي')}
          accentClass="shadow-amber-500/[0.01]"
        >
          {/* Action transport scooter / delivery art */}
          <div className="flex flex-col items-center justify-center space-y-2 w-full text-center">
            <div className="relative p-2.5 bg-amber-500/10 rounded-full text-amber-400 border border-amber-500/20">
              <Truck className="w-8 h-8 animate-bounce" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-black text-amber-305 block">تسليم حر يد بيد باليد</span>
              <p className="text-[8px] text-slate-450 leading-relaxed max-w-[150px] mx-auto">تغليف كهروميكانيكي معزول في كافة مناطق ومدن الخليج</p>
            </div>
          </div>
        </GalleryCard>

      </div>

    </div>
  );
}
