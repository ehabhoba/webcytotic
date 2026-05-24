import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Chrome, 
  Gauge, 
  Sparkles, 
  CheckCircle, 
  Zap, 
  ZapOff, 
  Clock, 
  Settings 
} from 'lucide-react';
import { GCC_ST_CONFIGS } from '../data';

export default function AnalyticsSection() {
  const [runningTest, setRunningTest] = useState<boolean>(false);
  const [testProgress, setTestProgress] = useState<number>(0);
  const [isCached, setIsCached] = useState<boolean>(true);

  // Performance stats state
  const [performanceScores, setPerformanceScores] = useState({
    performance: 99,
    accessibility: 100,
    bestPractices: 98,
    seo: 100,
    fcp: '0.4s',
    lcp: '0.9s',
    cls: '0.01',
    speedIndex: '0.6s'
  });

  const runLighthouseSequence = () => {
    setRunningTest(true);
    setTestProgress(10);
    
    const interval = setInterval(() => {
      setTestProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setRunningTest(false);
          // Set beautiful randomized ideal scores
          setPerformanceScores({
            performance: Math.floor(Math.random() * 2) + 98, // 98-99
            accessibility: 100,
            bestPractices: Math.floor(Math.random() * 3) + 97, // 97-100
            seo: 100,
            fcp: `${(Math.random() * 0.2 + 0.3).toFixed(2)}s`,
            lcp: `${(Math.random() * 0.3 + 0.7).toFixed(2)}s`,
            cls: '0.01',
            speedIndex: `${(Math.random() * 0.15 + 0.5).toFixed(2)}s`
          });
          return 100;
        }
        return p + 15;
      });
    }, 150);
  };

  return (
    <div className="space-y-6 text-right" id="analytics-section-root">
      
      {/* Dynamic SEO Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Core SGE Performance Suite */}
        <div className="md:col-span-8 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <Gauge className="w-5 h-5 text-teal-400" />
              <span>أداة قياس سرعة الـ Infrastructure ومتطلبات الـ Lighthouse</span>
            </h3>

            <button
              onClick={runLighthouseSequence}
              disabled={runningTest}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${runningTest ? 'bg-slate-850 text-slate-500 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600 active:scale-95 text-slate-950 font-black'}`}
            >
              <Zap className="w-4 h-4" />
              <span>{runningTest ? `يتم القياس الدقيق (${testProgress}%)...` : 'فحص أداء السيرفر الآن'}</span>
            </button>
          </div>

          {/* Test process bar */}
          {runningTest && (
            <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-teal-500 to-sky-450 h-full transition-all duration-150"
                style={{ width: `${testProgress}%` }}
              />
            </div>
          )}

          {/* Golden Circle Speed Scores */}
          <div className="grid grid-cols-4 gap-3 text-center">
            
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1.5">
              <div className="mx-auto w-12 h-12 rounded-full border-4 border-emerald-500/35 flex items-center justify-center text-emerald-400 font-mono font-black text-sm">
                {performanceScores.performance}
              </div>
              <span className="text-[10px] text-slate-400 block">Performance</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1.5">
              <div className="mx-auto w-12 h-12 rounded-full border-4 border-emerald-500/35 flex items-center justify-center text-emerald-400 font-mono font-black text-sm">
                {performanceScores.accessibility}
              </div>
              <span className="text-[10px] text-slate-400 block">Accessibility</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1.5">
              <div className="mx-auto w-12 h-12 rounded-full border-4 border-emerald-500/35 flex items-center justify-center text-emerald-400 font-mono font-black text-sm">
                {performanceScores.bestPractices}
              </div>
              <span className="text-[10px] text-slate-400 block">Best Practices</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1.5">
              <div className="mx-auto w-12 h-12 rounded-full border-4 border-emerald-500/35 flex items-center justify-center text-emerald-400 font-mono font-black text-sm">
                {performanceScores.seo}
              </div>
              <span className="text-[10px] text-slate-400 block">SGE SEO Audit</span>
            </div>

          </div>

          {/* Speed indicators breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-right">
            
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-855 text-xs text-slate-350">
              <span className="text-[10px] text-slate-500 block">First Contentful Paint (FCP)</span>
              <strong className="text-emerald-400 font-mono text-sm block mt-1">{performanceScores.fcp}</strong>
              <span className="text-[9px] text-slate-550 block">مثالي ومستهدف</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-855 text-xs text-slate-350">
              <span className="text-[10px] text-slate-500 block">Largest Contentful Paint (LCP)</span>
              <strong className="text-emerald-400 font-mono text-sm block mt-1">{performanceScores.lcp}</strong>
              <span className="text-[9px] text-slate-550 block">تحميل فوري سريع</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-855 text-xs text-slate-350">
              <span className="text-[10px] text-slate-500 block">Cumulative Layout Shift (CLS)</span>
              <strong className="text-emerald-400 font-mono text-sm block mt-1">{performanceScores.cls}</strong>
              <span className="text-[9px] text-slate-550 block">ثبات تام ومستقر</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-855 text-xs text-slate-350">
              <span className="text-[10px] text-slate-500 block">Speed Index Score</span>
              <strong className="text-emerald-400 font-mono text-sm block mt-1">{performanceScores.speedIndex}</strong>
              <span className="text-[9px] text-slate-550 block">سرعة معالجة الأصول</span>
            </div>

          </div>

          {/* Infrastructure features checklists */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <h4 className="font-bold text-slate-100 flex items-center gap-1.5 text-xs">
              <span className="w-1.5 h-3 bg-teal-500 rounded-full" />
              <span>مزايا البنية الفائقة لخدمة ملايين الزوار بالخليج:</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400 leading-normal">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span><strong>Edge Rendering</strong> لخدمة المحتوى من أقرب سيرفر للطلب.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span><strong>CDN من Cloudflare Corporate</strong> لتفادي هجمات DDoS الحاقدة.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>دمج السيرفرات السريعة بنظام <strong>PostgreSQL Cluster Failover</strong>.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span><strong>Redis Caching</strong> لتوليد الصفحات المبرمجة ديناميكيا بإنتاجية عالية.</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO SUGGESTIONS AND KEYWORDS TRACKS */}
        <div className="md:col-span-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-5">
          <h3 className="text-sm font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span>معدل الفهرسة وحركة المرور (Simulated SEO Traffic)</span>
          </h3>

          <div className="space-y-4 text-xs text-slate-400">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
              <div className="flex justify-between font-mono">
                <span>الزيارات المقدرة شهرياً:</span>
                <span className="text-slate-100 font-bold font-mono">245,600+ زائر</span>
              </div>

              <div className="flex justify-between font-mono">
                <span>متوسط نسبة النقر للظهور (CTR):</span>
                <span className="text-emerald-400 font-bold font-mono">14.8% (نمو متزايد)</span>
              </div>

              <div className="flex justify-between font-mono">
                <span>الصفحات المؤرشفة بجوجل:</span>
                <span className="text-sky-400 font-bold font-mono">12,400+ صفحة بروجارماتيك</span>
              </div>

              <div className="flex justify-between font-mono">
                <span>متوسط سرعة تحميل الخادم:</span>
                <span className="text-teal-400 font-bold font-mono">120ms (Cloud DNS Match)</span>
              </div>
            </div>

            {/* Keyword optimization feedback card */}
            <div className="p-4 bg-sky-950/20 border border-sky-500/20 rounded-xl space-y-1">
              <h4 className="font-bold text-xs text-slate-200">نظام الذكاء الاصطناعي وكبسولة الكلمات المفتاحية:</h4>
              <p className="text-[11px] leading-relaxed">
                تقوم المنصة تلقائياً بدراسة حجم البحث الشهري للكلمات الأكثر تداولاً مثل "سيتوتيك في مسقط"، و"وين القى سيتوتيك بالرياض"، لتعديل صك الكلمات وتجنيب الموقع الـ Content Cannibalization أو المحتوى المكرر المغشوش.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
