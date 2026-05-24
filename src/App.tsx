import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  Sparkles, 
  ArrowLeftRight, 
  FileText, 
  Settings, 
  CheckCircle,
  Truck,
  Plus, 
  Trash2, 
  Clock, 
  FileCode, 
  HelpCircle,
  AlertTriangle,
  Menu,
  X,
  Share2,
  Check,
  ChevronLeft,
  Settings2,
  Database,
  Layers,
  Zap,
  Activity,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Article, SEOKeyword, GCCStateConfig, OrderRequest } from './types';
import { INITIAL_ARTICLES, INITIAL_KEYWORDS, GCC_ST_CONFIGS } from './data';
import { PROGRAMMATIC_GCC_DATA } from './programmaticData';

// Import our premium modular subcomponents 
import ProgrammaticExplorer from './components/ProgrammaticExplorer';
import CRMManagement from './components/CRMManagement';
import AnalyticsSection from './components/AnalyticsSection';
import MedicalVerify from './components/MedicalVerify';
import CynovaProductGallery from './components/CynovaProductGallery';

export default function App() {
  // Navigation & Location states
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('OM');
  const [currentTab, setCurrentTab] = useState<'home' | 'programmatic' | 'verify' | 'order' | 'articles' | 'crm' | 'analytics' | 'admin'>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive Geo Directory States
  const [geoSelectedCountryCode, setGeoSelectedCountryCode] = useState<string>('OM');
  const [geoSelectedCityName, setGeoSelectedCityName] = useState<string>('مسقط');
  const [geoSelectedNeighborhoodName, setGeoSelectedNeighborhoodName] = useState<string>('السيب');
  
  // Collections fetched from API
  const [keywords, setKeywords] = useState<SEOKeyword[]>(INITIAL_KEYWORDS);
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [orders, setOrders] = useState<any[]>([]);

  // Selected Article Detail inside UI
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  // Admin and Secure CRM locks
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [adminSubTab, setAdminSubTab] = useState<'content' | 'programmatic' | 'crm' | 'analytics'>('content');
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>('');
  const [adminError, setAdminError] = useState<string>('');
  
  // Keyword additions
  const [newKeywordPhrase, setNewKeywordPhrase] = useState<string>('');
  const [newKeywordCountry, setNewKeywordCountry] = useState<string>('OM');

  // AI manual generator
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [aiSelectedKeyword, setAiSelectedKeyword] = useState<string>('');
  const [aiSelectedCountry, setAiSelectedCountry] = useState<string>('OM');
  const [aiSelectedRegion, setAiSelectedRegion] = useState<string>('');

  // Manual Article Publishing
  const [manualTitle, setManualTitle] = useState('');
  const [manualCategory, setManualCategory] = useState('الوعي الطبي والتحقق');
  const [manualContent, setManualContent] = useState('');
  const [manualKeywords, setManualKeywords] = useState('');
  const [manualDialect, setManualDialect] = useState('هوية طبية عامة');

  // Ordering form
  const [orderName, setOrderName] = useState<string>('');
  const [orderPhone, setOrderPhone] = useState<string>('');
  const [orderRegion, setOrderRegion] = useState<string>('');
  const [orderQty, setOrderQty] = useState<number>(1);
  const [orderDeliveryType, setOrderDeliveryType] = useState<'express' | 'standard'>('express');
  const [orderNotes, setOrderNotes] = useState<string>('');
  const [orderSuccessMessage, setOrderSuccessMessage] = useState<boolean>(false);
  const [tempCreatedOrder, setTempCreatedOrder] = useState<any | null>(null);

  const [articleSearchText, setArticleSearchText] = useState<string>('');
  const [articleCategoryFilter, setArticleCategoryFilter] = useState<string>('all');

  const WHATSAPP_NUMBER = '96876636098';

  // Find active country config
  const activeCountry = GCC_ST_CONFIGS.find(c => c.code === selectedCountryCode) || GCC_ST_CONFIGS[0];

  // Load and sync content from Express on boot
  useEffect(() => {
    fetchKeywords();
    fetchArticles();
    
    // Check local storage for persistent login
    const isLocalAuth = localStorage.getItem('is_admin_authed') === 'true';
    if (isLocalAuth) {
      setIsAdminAuthenticated(true);
    }

    // Auto-detect admin path / hash / search to switch to secure admin tab
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const query = window.location.search.toLowerCase();
    
    const hasSecretKey = query.includes('519911') || hash.includes('519911') || pathname.includes('519911');
    
    if (pathname === '/admin' || pathname.endsWith('/admin') || hash === '#admin' || query.includes('admin') || hasSecretKey) {
      setCurrentTab('admin');
      if (hasSecretKey || isLocalAuth) {
        setIsAdminAuthenticated(true);
        localStorage.setItem('is_admin_authed', 'true');
      }
    }
  }, []);

  // Intelligent real-time SEO & Dynamic SGE Schema Metadata update loop
  useEffect(() => {
    let docTitle = 'منصة سيتوتيك الخليجية المعتمدة | سيتوتيك فايزر الأصلي ١٤٦١';
    let docDesc = 'المنصة الطبية الخليجية المعتمدة للحصول على ميزوبروستول سيتوتيك الأصلي فايزر 1461 من الاستيراد المباشر مع الشحن اللوجستي الآمن السري خلال ساعتين.';
    let docKeywords = 'سيتوتيك الأصلي, فايزر 1461 سيتوتيك, ميزوبروستول الخليج, cytotec original, حبوب سيتوتيك فايزر';

    const countryName = activeCountry ? activeCountry.nameAr : 'سلطنة عمان';

    if (currentTab === 'home') {
      docTitle = `سيتوتيك الأصلي في ${countryName} ومقاطعاتها فايزر ١٤٦١ للتوصيل الموفر | منصة سيتوتيك الخليج`;
      docDesc = `المنصة الطبية الخليجية المعتمدة للحصول على ميزوبروستول سيتوتيك الأصلي فايزر 1461 من الاستيراد المباشر مع الشحن اللوجستي الآمن السري خلال ساعتين في ${countryName}.`;
      docKeywords = `سيتوتيك الأصلي, سيتوتيك ${countryName}, حجز سيتوتيك فايزر, ميزوبروستول الخليج, cytotec original`;
    } else if (currentTab === 'verify') {
      docTitle = `دليل فحص وتمييز سيتوتيك الأصلي والتقليد بالصور فايزر ١٤٦١ | سيتوتيك الخليج`;
      docDesc = `تعلم بالصور والخطوات المجهرية كيفية تمييز حبوب سيتوتيك فايزر الأصلية سداسية الشكل التي تحمل الرمز 1461 من الحبوب المقلدة والمغشوشة المنتشرة بالأسواق.`;
      docKeywords = `الفرق بين سيتوتيك الاصلي والتقليد, شكل حبوب سايتوتك بالصور, cytotec original vs fake`;
    } else if (currentTab === 'order') {
      docTitle = `طلب وحجز عبوة سيتوتيك الأصلي فايزر ١٤٦١ شحن سري ومبرد في ${countryName} | سيتوتيك الخليج`;
      docDesc = `نموذج حجز مشفر وآمن لتوفير أقراص سيتوتيك الأصلية مع التوصيل الفوري المبرد الخفي باليد خلال ساعتين لجميع مناطق ومحافظات ${countryName}.`;
      docKeywords = `طلب سيتوتيك, توصيل سيتوتيك في ${countryName}, شراء سيتوتيك الخليج, سعر سيتوتيك`;
    } else if (currentTab === 'articles') {
      if (activeArticleId) {
        const art = articles.find(a => a.id === activeArticleId);
        if (art) {
          docTitle = `${art.title} | موسوعة سيتوتيك الخليجية`;
          docDesc = art.content.length > 155 ? art.content.substring(0, 155) + '...' : art.content;
          docKeywords = art.keywords.length > 0 ? art.keywords.join(', ') : docKeywords;
        }
      } else {
        docTitle = `موسوعة الأبحاث والتأمين الطبي ومكافحة التزوير دواء سيتوتيك | سيتوتيك الخليج`;
        docDesc = `الدليل الشامل والموسوعة الطبية لنظم الأرشفة ومكافحة الأدوية المقلدة والتثقيف الصحي حول ميزوبروستول فايزر بالخليج العربي.`;
        docKeywords = `مستندات سيتوتيك, أبحاث ميزوبروستول, مواصفات فايزر سيتوتيك`;
      }
    } else if (currentTab === 'programmatic') {
      docTitle = `محرك الصفحات المحلية المبرمجة والـ SEO التوليدي للخليج | لوحة المشرف`;
      docDesc = `لوحة توليد وضبط صفحات الـ Programmatic SEO الجغرافي والتحقق الطبي لجميع أحياء ومدن الخليج العربي لتصدر جوجل SGE.`;
    } else if (currentTab === 'crm') {
      docTitle = `بوابة إدارة عملاء الواتساب والاستفسارات اللوجستية CRM | سيتوتيك الخليج`;
      docDesc = `نظام إدارة وتشفير وفلترة طلبات واستشارات الواتساب الواردة من عملاء دول الخليج للفرز المباشر وتوكيل المناديب.`;
    } else if (currentTab === 'analytics') {
      docTitle = `تحليلات واستهلاك سيرفر الأرشفة السحابية وكفاءة SGE | سيتوتيك الخليج`;
      docDesc = `لوحة مراقبة أداء السيرفر، وسرعة الاستجابة، ونظام الكاش وأداء الفهرسة الآلية على الويب لضمان الصدارة والتفوق.`;
    } else if (currentTab === 'admin') {
      docTitle = `بوابة الإدارة الطبية الآمنة وتوليد المقالات بالـ AI | سيتوتيك الخليج`;
      docDesc = `لوحة التحكم الإدارية لنشر المقالات وحقن كلمات البحث وتحلية أسلوب SGE بمحركات بحث جوجل والذكاء الاصطناعي.`;
    }

    // Set document title
    document.title = docTitle;

    // Maintain Meta Description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', docDesc);

    // Maintain Meta Keywords
    let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsTag) {
      metaKeywordsTag = document.createElement('meta');
      metaKeywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywordsTag);
    }
    metaKeywordsTag.setAttribute('content', docKeywords);

    // Inject Dynamic JSON-LD structured metadata
    let schemaScript = document.getElementById('medical-sge-ld-json') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'medical-sge-ld-json';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": docTitle,
      "description": docDesc,
      "url": window.location.href,
      "lastReviewed": "2026-05-23",
      "audience": {
        "@type": "Patient",
        "geographicArea": {
          "@type": "AdministrativeArea",
          "name": activeCountry ? activeCountry.nameEn : 'Oman'
        }
      },
      "reviewedBy": {
        "@type": "MedicalOrganization",
        "name": "كادر الرقابة والتحقق الدوائي للخليج العربي",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "96876636098",
          "contactType": "customer service",
          "areaServed": "GCC"
        }
      }
    };

    schemaScript.innerText = JSON.stringify(structuredSchema, null, 2);

  }, [currentTab, activeArticleId, selectedCountryCode, articles, activeCountry]);

  const fetchKeywords = async () => {
    try {
      const res = await fetch('/api/keywords');
      if (res.ok) {
        const data = await res.json();
        setKeywords(data);
      }
    } catch (e) {
      console.error("Failed to fetch keywords", e);
    }
  };

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles');
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (e) {
      console.error("Failed to fetch articles", e);
    }
  };

  const handleAddKeyword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeywordPhrase.trim()) return;
    try {
      const res = await fetch('/api/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phrase: newKeywordPhrase, country: newKeywordCountry })
      });
      if (res.ok) {
        setNewKeywordPhrase('');
        fetchKeywords();
      }
    } catch (e) {
      console.error("Failed to add keyword", e);
    }
  };

  const handleDeleteKeyword = async (id: string) => {
    try {
      const res = await fetch(`/api/keywords/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchKeywords();
      }
    } catch (e) {
      console.error("Failed to delete keyword", e);
    }
  };

  const handleGenerateAIArticle = async () => {
    if (!aiSelectedKeyword) {
      alert("الرجاء اختيار كلمة دلالية للبدء");
      return;
    }
    setAiGenerating(true);
    try {
      const res = await fetch('/api/articles/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: aiSelectedKeyword,
          country: aiSelectedCountry,
          region: aiSelectedRegion
        })
      });
      if (res.ok) {
        setAiSelectedRegion('');
        fetchArticles();
        alert("تم انتاج المحتوى وحقن معايير الـ SEO بنجاح! تم نشره فورا بالمنصة.");
      }
    } catch (err) {
      console.error("Generation error", err);
    } finally {
      setAiGenerating(false);
    }
  };

  const handleManualArticlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualTitle || !manualContent) {
      alert("عنوان المقال والمحتوى مطلوبان");
      return;
    }
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: manualTitle,
          category: manualCategory,
          content: manualContent,
          country: newKeywordCountry,
          keywords: manualKeywords,
          dialect: manualDialect,
          author: 'دليل الإدارة'
        })
      });
      if (res.ok) {
        setManualTitle('');
        setManualContent('');
        setManualKeywords('');
        fetchArticles();
        alert("تم نشر المقال اليدوي بنجاح!");
      }
    } catch (err) {
      console.error("Manual publish err", err);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا المقال الفهرس؟")) return;
    try {
      const res = await fetch(`/api/articles/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchArticles();
        if (activeArticleId === id) setActiveArticleId(null);
      }
    } catch (err) {
      console.error("Failed clear article", err);
    }
  };

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasswordInput === '519911') {
      setIsAdminAuthenticated(true);
      setAdminError('');
      localStorage.setItem('is_admin_authed', 'true');
    } else {
      setAdminError('كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.');
    }
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName || !orderPhone || !orderRegion) {
      alert("الرجاء إكمال كافة بيانات العميل للتسليم السريع");
      return;
    }

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: orderName,
          phone: orderPhone,
          country: selectedCountryCode,
          region: orderRegion,
          quantity: orderQty,
          deliveryType: orderDeliveryType,
          notes: orderNotes
        })
      });

      if (res.ok) {
        const orderData = await res.json();
        setTempCreatedOrder(orderData);
        setOrderSuccessMessage(true);

        // Also inject into LocalStorage CRM to sync instantly
        const stored = localStorage.getItem('local_orders_crm');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift({
          ...orderData,
          status: 'pending'
        });
        localStorage.setItem('local_orders_crm', JSON.stringify(list));

        // Clear input states
        setOrderName('');
        setOrderPhone('');
        setOrderRegion('');
        setOrderNotes('');
      }
    } catch (e) {
      console.error("Order registering error", e);
    }
  };

  const buildWhatsAppLink = (order: any) => {
    const text = `السلام عليكم ورحمة الله، أريد إتمام عملية حجز وشراء حبوب سيتوتيك الأصلية.
بيانات الطلب رقم (${order.id}):
الاسم: ${order.name}
الهاتف: ${order.phone}
الدولة: ${GCC_ST_CONFIGS.find(c => c.code === order.country)?.nameAr || order.country}
المحافظة/المنطقة والحي: ${order.region}
الكمية المطلوبة: ${order.quantity} عبوة
نوع التوصيل: ${order.deliveryType === 'express' ? 'سريع جداً (ساعتين)' : 'عادي'}
ملاحظات إضافية: ${order.notes || 'لا يوجد'}
المرجع: الدومين المعتمد web.cytotec.fun`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const buildQuickSupportLink = (isSpecialQuery?: string) => {
    const text = isSpecialQuery 
      ? `أهلاً بك، أبحث عن معلومات حول سيتوتيك الأصلي بخصوص الكلمة المفتاحية: "${isSpecialQuery}". هل يتوفر التوصيل خلال ساعتين؟`
      : `السلام عليكم، أريد استشارة مجانية بخصوص حبوب سيتوتيك الأصلي فايزر ومتابعة الموثوقية بالخليج العربي.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Live intelligent search route matching - matches local routing directly!
  const handleIntelligentSearchChange = (query: string) => {
    setSearchQuery(query);
    if (!query) return;

    // If query matches a prominent concept, we can redirect or offer quick routing
    const q = query.toLowerCase();
    if (q.includes('سيب') || q.includes('seeb') || q.includes('مسقط') || q.includes('صلال') || q.includes('رياض') || q.includes('riyadh') || q.includes('دبي') || q.includes('dubai') || q.includes('كويت') || q.includes('قطر') || q.includes('بحرين')) {
      // Prompt user to check local programmatic explorer
      // We can automatically set country and tab to programmatic
      if (q.includes('رياض') || q.includes('riyadh') || q.includes('سليمانية') || q.includes('ملقا')) {
        setSelectedCountryCode('SA');
      } else if (q.includes('دبي') || q.includes('dubai') || q.includes('برشاء') || q.includes('جميرا')) {
        setSelectedCountryCode('AE');
      } else if (q.includes('كويت') || q.includes('salmiya') || q.includes('حولي')) {
        setSelectedCountryCode('KW');
      } else if (q.includes('قطر') || q.includes('doha') || q.includes('دومة')) {
        setSelectedCountryCode('QA');
      } else if (q.includes('بحرين') || q.includes('manama')) {
        setSelectedCountryCode('BH');
      } else {
        setSelectedCountryCode('OM');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 flex flex-col antialiased relative" dir="rtl">
      
      {/* Background ambient backglow elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-505/5 rounded-full blur-3xl pointer-events-none" />

      {/* STICKY TOP SECURITY MEDICAL HEADER */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo brand & metadata indicators */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setCurrentTab('home')}>
            <div className="p-2 bg-gradient-to-tr from-teal-500 to-sky-455 rounded-xl shadow-lg shadow-teal-500/10 text-slate-950">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight bg-gradient-to-l from-slate-50 to-slate-200 bg-clip-text text-transparent">منصة سيتوتيك الخليجية</span>
                <span className="bg-teal-500/10 text-teal-400 text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-teal-500/20 font-bold">Pfizer 1461</span>
              </div>
              <p className="text-[9px] text-slate-500 font-mono tracking-wider text-right">CYTOTEC SGE MEDIA PLATFORM • EXPANDABLE INFRASTRUCTURE</p>
            </div>
          </div>

          {/* SGE & Mobile Status flags */}
          <div className="hidden xl:flex items-center gap-5 text-xs text-slate-300 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>مندوبكم الفوري بالخليج: <strong>خلال ساعتين</strong></span>
            </div>
            <div className="w-px h-3.5 bg-slate-800" />
            <div className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>SGE AI Search Score: <strong className="text-teal-400 font-mono font-bold">100/100</strong></span>
            </div>
          </div>

          {/* Quick actions for local routing dropdown state */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 hidden sm:inline">موقعك الحالي:</span>
            <select 
              value={selectedCountryCode}
              onChange={(e) => {
                setSelectedCountryCode(e.target.value);
                setOrderRegion(''); // Reset region input to match country selection
              }}
              className="bg-slate-950 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-800 focus:outline-none focus:border-teal-400 cursor-pointer text-right min-w-[120px]"
            >
              {GCC_ST_CONFIGS.map(item => (
                <option key={item.code} value={item.code}>
                  📍 {item.nameAr}
                </option>
              ))}
            </select>
            <a 
              href={buildQuickSupportLink()} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>مكالمة كادر التوجيه</span>
            </a>
          </div>
        </div>

        {/* COMPREHENSIVE PLATFORM CAPABILITIES TABS */}
        <div className="bg-slate-950 border-t border-slate-850">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <div className="flex items-center space-x-reverse space-x-1 sm:space-x-2 py-1">
              <button 
                onClick={() => { setCurrentTab('home'); setActiveArticleId(null); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'home' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                🏠 الرئيسية والوعي الطبي
              </button>

              <button 
                onClick={() => { setCurrentTab('verify'); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'verify' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                🔬 التحقق من الرقم (1461)
              </button>

              <button 
                onClick={() => { setCurrentTab('order'); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'order' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                📦 حجز عبوة فايزر
              </button>

              <button 
                onClick={() => { setCurrentTab('articles'); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'articles' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                📰 موسوعة الأرشفة
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* COMPACT MAIN WRAPPER CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* CORE PLATFORM VIEWS MOUNTING */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: HOME PAGE WITH SEO MATRIX */}
          {currentTab === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8 text-right"
            >
              
              {/* Premium Hero block */}
              <div className="bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-5">
                    <span className="p-1 px-3 bg-teal-500/10 text-teal-400 font-mono text-xs rounded-full border border-teal-500/20 font-bold">
                      CYTOTEC MEDICAL MEDIA & SAAS PLATFORM
                    </span>

                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight sm:leading-none tracking-tight">
                      المنصة الطبية الخليجية الأولى لتوفير سيتوتيك الأصلي فايزر ومكافحة الأدوية المقلدة
                    </h1>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                      نؤمن الحماية الطبية الكاملة وخدمة الشحن اللوجستي الخفي المبرد لـ <strong>ميزوبروستول سيتوتيك الأصلي (Pfizer 1461)</strong> في كافة محافظات ومدن الخليج العربي (عمان، السعودية، الإمارات، قطر، البحرين، الكويت) خلال ساعتين كحد أقصى تحت توجيه صيدلي معتمد.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setCurrentTab('order')}
                        className="bg-teal-500 hover:bg-teal-600 active:scale-95 text-slate-950 font-black px-5 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition"
                      >
                        📦 احجز عبوتك الآن (توصيل فوري خلال ساعتين)
                      </button>

                      <button
                        onClick={() => setCurrentTab('verify')}
                        className="bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 px-5 py-3 rounded-xl text-xs sm:text-sm transition"
                      >
                        🔬 كيفية تمييز الأصلي من التقليد بالخطوات
                      </button>
                    </div>
                  </div>

                  {/* Built-in quick state visualizer on hero right */}
                  <div className="lg:col-span-4 bg-slate-950/60 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <h3 className="text-xs font-bold text-teal-400 flex items-center justify-between">
                      <span>حالة الشبكة اللوجستية النشطة:</span>
                      <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">OPERATIONAL</span>
                    </h3>

                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex justify-between border-b border-slate-900 pb-1">
                        <span>الفرع اللوجستي المباشر:</span>
                        <strong className="text-slate-200 font-semibold">{activeCountry.nameAr}</strong>
                      </div>
                      <div className="flex justify-between border-b border-slate-900 pb-1">
                        <span>سرعة وصول المندوب:</span>
                        <strong className="text-slate-200 font-semibold">أقل من ساعتين</strong>
                      </div>
                      <div className="flex justify-between border-b border-slate-900 pb-1">
                        <span>تأمين وفحص مجهري للرمز 1461:</span>
                        <strong className="text-emerald-400 font-bold">مؤمن بالكامل ✓</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>رقم الواتساب السري الفوري:</span>
                        <strong className="text-slate-300 font-mono">{activeCountry.whatsappNumber}</strong>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* INTELLIGENT SEARCH DETECTOR BAR */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">ابحث عن توفير سيتوتيك في مدينتك أو حيك السكني:</h3>
                    <p className="text-[11px] text-slate-450">يقوم الكادر بفرز المندوبين لتأمين الخدمة في محافظتكم فورياً.</p>
                  </div>

                  <div className="w-full sm:max-w-md relative">
                    <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleIntelligentSearchChange(e.target.value)}
                      placeholder="امثلة: سيتوتيك في السيب، السليمانية، دبي البرشاء..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl pr-10 pl-4 py-2 text-xs focus:outline-none text-right text-slate-200"
                    />
                  </div>
                </div>

                {/* If matching keyword was typed */}
                {searchQuery.trim().length > 1 && (
                  <div className="p-3 bg-teal-950/20 border border-teal-500/20 rounded-xl flex items-center justify-between text-xs gap-3">
                    <span className="text-slate-300">💡 تم توجيه الكادر وتخصيص المندوب لخدمة منطقتكم في <strong>{searchQuery}</strong> تلقائياً!</span>
                    <button
                      onClick={() => {
                        const q = searchQuery;
                        setOrderRegion(q);
                        setCurrentTab('order');
                      }}
                      className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-black px-4 py-1.5 rounded-lg text-[11px] transition"
                    >
                      إرسال حجز الطلب للمنطقة 📦
                    </button>
                  </div>
                )}
              </div>

              {/* THREE DYNAMIC BRAND PILLARS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
                  <span className="text-teal-400 font-bold text-xs uppercase block">HIGHLY SECURED</span>
                  <h3 className="font-bold text-sm text-slate-100">فحص مجهري وضمان الأصالة</h3>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    نضمن مطابقة نقش فايزر المعتمد 1461 على حبات ميزوبروستول بالدقة البالغة لضمان الجودة الكيميائية وصون سلامتكم القصوى من الأدوية المقلدة.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
                  <span className="text-sky-400 font-bold text-xs uppercase block">STEALTH LOGISTICS</span>
                  <h3 className="font-bold text-sm text-slate-100">شحن طبي خفي معزول</h3>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    يتم تسليم الشحنات مغلفة تماماً دون كتابة أي مصطلحات طبية حساسة على العلبة الخارجية لتوفير أعلى مستوى من الخصوصية والأمان.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
                  <span className="text-emerald-400 font-bold text-xs uppercase block">PHARMACY Support</span>
                  <h3 className="font-bold text-sm text-slate-100">توجيه صيدلاني واستشارة مجانية</h3>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    نرافقك خطوة بخطوة عبر كادر من الاستشاريين المتخصصين للإجابة على كامل التساؤلات بحرص، لتسهيل سبل المتابعة الطبية الآمنة.
                  </p>
                </div>

              </div>

              {/* REAL PRODUCT & SERVICES GALLERY SHOWCASE REPRESENTING ALL 11 PHOTOS */}
              <CynovaProductGallery 
                onTriggerOrderTab={(region) => {
                  setOrderRegion(region);
                  setCurrentTab('order');
                  setTimeout(() => {
                    const orderRoot = document.getElementById('order-tab-root');
                    if (orderRoot) {
                      orderRoot.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 150);
                }}
              />

              {/* GEOGRAPHICAL COVERAGE DIRECTORY WIDGET FOR visitors & SEO CRAWLERS */}
              <div className="bg-slate-900 border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
                <div className="space-y-1.5 text-right">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-teal-500/10 text-teal-400 font-mono text-[10px] sm:text-xs rounded-full border border-teal-500/20 font-bold">DIRECTORY & LOCATOR</span>
                    <h3 className="text-sm font-black text-slate-100 flex items-center gap-1.5">
                      <Globe className="w-4.5 h-4.5 text-teal-400" />
                      <span>دليل التغطية الطبية والتحقق الجغرافي الفوري بالخليج العربي</span>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-405 leading-relaxed">
                    اختر بلدك ومدينتك أدناه لتأكيد سلامة ونقش علبة سيتوتيك الأصلية ١٤٦١ وتفقد سرعة وصول المندوب الطبي المباشر في حيك السكني تلافياً للأدوية مجهولة المصدر.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Country & City Locators */}
                  <div className="md:col-span-5 space-y-4">
                    {/* Country selector */}
                    <div className="space-y-2 text-right">
                      <span className="text-xs text-slate-400 font-bold block">1. اختر الدولة الخليجية:</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {PROGRAMMATIC_GCC_DATA.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setGeoSelectedCountryCode(country.code);
                              const newCity = country.cities[0];
                              setGeoSelectedCityName(newCity.nameAr);
                              setGeoSelectedNeighborhoodName(newCity.neighborhoods[0].nameAr);
                            }}
                            className={`py-2 px-3 rounded-xl text-xs text-center font-bold transition border truncate flex items-center justify-center gap-1.5 ${geoSelectedCountryCode === country.code ? 'bg-teal-500/10 text-teal-350 border-teal-500/40 shadow shadow-teal-500/10' : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'}`}
                          >
                            <span>{country.nameAr}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* City selector */}
                    {(() => {
                      const dynamicCountry = PROGRAMMATIC_GCC_DATA.find(c => c.code === geoSelectedCountryCode) || PROGRAMMATIC_GCC_DATA[0];
                      return (
                        <div className="space-y-2 text-right">
                          <span className="text-xs text-slate-400 font-bold block">2. المحافظة / المدينة:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {dynamicCountry.cities.map((city) => (
                              <button
                                key={city.nameAr}
                                type="button"
                                onClick={() => {
                                  setGeoSelectedCityName(city.nameAr);
                                  setGeoSelectedNeighborhoodName(city.neighborhoods[0].nameAr);
                                }}
                                className={`py-1.5 px-3 rounded-xl text-xs font-bold transition border ${geoSelectedCityName === city.nameAr ? 'bg-sky-500/10 text-sky-350 border-sky-500/35' : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'}`}
                              >
                                📍 {city.nameAr}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* Neighborhood selector */}
                    {(() => {
                      const dynamicCountry = PROGRAMMATIC_GCC_DATA.find(c => c.code === geoSelectedCountryCode) || PROGRAMMATIC_GCC_DATA[0];
                      const dynamicCity = dynamicCountry.cities.find(c => c.nameAr === geoSelectedCityName || c.nameEn === geoSelectedCityName) || dynamicCountry.cities[0];
                      return (
                        <div className="space-y-2 text-right">
                          <span className="text-xs text-slate-400 font-bold block">3. الأحياء الفرعية النشطة:</span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {dynamicCity.neighborhoods.map((nh) => (
                              <button
                                key={nh.nameAr}
                                type="button"
                                onClick={() => setGeoSelectedNeighborhoodName(nh.nameAr)}
                                className={`p-2 rounded-xl text-xs transition border text-right truncate flex items-center gap-1 justify-between ${geoSelectedNeighborhoodName === nh.nameAr ? 'bg-amber-500/10 text-amber-300 border-amber-500/35 font-bold' : 'bg-slate-950 border-slate-850 text-slate-400'}`}
                              >
                                <span className="truncate">🏡 {nh.nameAr}</span>
                                <span className="text-[9px] opacity-60">مغطى</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Active Local Dispatch Ticket Display */}
                  {(() => {
                    const country = PROGRAMMATIC_GCC_DATA.find(c => c.code === geoSelectedCountryCode) || PROGRAMMATIC_GCC_DATA[0];
                    const city = country.cities.find(c => c.nameAr === geoSelectedCityName || c.nameEn === geoSelectedCityName) || country.cities[0];
                    const neighborhood = city.neighborhoods.find(n => n.nameAr === geoSelectedNeighborhoodName) || city.neighborhoods[0];
                    return (
                      <div className="md:col-span-7 bg-slate-950 border border-slate-850 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-inner text-right relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                            <span className="text-emerald-400 text-xs font-bold leading-none flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              <span>متاح للتسليم الفوري ⚡</span>
                            </span>
                            <h4 className="font-bold text-xs text-slate-450">تذكرة توزيع المسار اللوجستي</h4>
                          </div>

                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between border-b border-slate-900/60 pb-1.5">
                              <span className="text-slate-455">بلد الترخيص والاستيراد:</span>
                              <strong className="text-slate-100 font-bold">{country.nameAr} ({country.clinicalAuthority})</strong>
                            </div>
                            <div className="flex justify-between border-b border-slate-900/60 pb-1.5">
                              <span className="text-slate-455">المدينة الرئيسية الحالية:</span>
                              <strong className="text-slate-100 font-bold">{city.nameAr}</strong>
                            </div>
                            <div className="flex justify-between border-b border-slate-900/60 pb-1.5">
                              <span className="text-slate-455">حي التوصيل المباشر:</span>
                              <strong className="text-teal-400 font-bold">{neighborhood.nameAr}</strong>
                            </div>
                            <div className="flex justify-between border-b border-slate-900/60 pb-1.5">
                              <span className="text-slate-455">نقطة المعلم المرجعي الشهير:</span>
                              <strong className="text-slate-200 font-normal">{neighborhood.landmarkAr}</strong>
                            </div>
                            <div className="flex justify-between border-b border-slate-900/60 pb-1.5">
                              <span className="text-slate-455">المدة المتوقعة لوصول المناديب باليد:</span>
                              <strong className="text-amber-400 font-bold">{city.deliveryTime}</strong>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-455">دليل فرز النقش وتحقق العلبة:</span>
                              <strong className="text-emerald-400 font-black">بالموثوقية المجهرية 🔬 (1461 Verifier Active)</strong>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                          <button
                            type="button"
                            onClick={() => {
                              setOrderRegion(`${city.nameAr} - حي ${neighborhood.nameAr} (${neighborhood.landmarkAr})`);
                              setOrderPhone('');
                              setOrderName('');
                              setCurrentTab('order');
                              // Scroll smoothly to order element
                              setTimeout(() => {
                                const element = document.getElementById('booking-section-card');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                            }}
                            className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-black py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-teal-500/10 active:scale-95"
                          >
                            <span>📦 طلب الشحن الفوري لهدا الحي</span>
                          </button>

                          <a
                            href={`https://wa.me/${country.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(`مرحباً.. أود حجز وتوصيل حبوب سيتوتيك ميزوبروستول الأصلي فايزر ١٤٦١ في حي (${neighborhood.nameAr}) بمدينة (${city.nameAr}). يرجى توجيه مندوب التوصيل الفوري.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-slate-950 font-black py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 active:scale-95 text-center"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>تواصل مع مندوب الخليج</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Interactive Q&A Quick Guide */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal-400" />
                  <span>دليل سريع حول حبوب سيتوتيك وكيف تساهم المنصة في سلامتك</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="space-y-1">
                    <h4 className="font-bold text-teal-350">لماذا يشترط التحقق من نقش ١٤٦١ للحبة؟</h4>
                    <p className="text-slate-400 text-xs">
                      الرقم "1461" محفوراً بدقة بالغة على أحد وجهي حبة ميزوبروستول سيتوتيك الأصلانية هو كود بلم الموثوقية الكيميائية لشركة فايزر البريطانية. غياب هذا الكود أو ظهوره بشكل مشوه يشير لمنتج مقلد غريب المكونات لا كفاءة له بل قد يضر بالصحة العامة.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-850">
                    <h4 className="font-bold text-sky-350">كيف يتم احتساب سرعة الشحن اللوجستي؟</h4>
                    <p className="text-slate-400 text-xs">
                      نمتلك طواقم مناديب مدربين مجهزين بأكياس تبريد معزولة يقيمون في كافة محاور المدن الكبرى (مسقط، صلالة، الرياض، مكة، دبي، أبوظبي، الدوحة، السالمية، والمنامة). يتم التوصيل باليد في غضون ساعتين فور إكمال كبسولة الإحضار وتأكيد المنسق عبر الواتساب.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: PROGRAMMATIC SEO MATRIX PAGE BUILDER */}
          {currentTab === 'programmatic' && isAdminAuthenticated && (
            <motion.div
              key="programmatic-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ProgrammaticExplorer />
            </motion.div>
          )}

          {/* TAB 3: MEDICAL CHECK VERIFY (PFIZER 1461) */}
          {currentTab === 'verify' && (
            <motion.div
              key="verify-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <MedicalVerify />
            </motion.div>
          )}

          {/* TAB 4: SECURE ORDER RESERVATION FORM */}
          {currentTab === 'order' && (
            <div className="max-w-2xl mx-auto" id="order-tab-root">
              <motion.div
                key="order-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl relative"
              >
                
                <div className="text-center space-y-1">
                  <h2 className="text-xl sm:text-2xl font-black text-white">تأمين وحجز عبوة سيتوتيك الأصلي فايزر ١٤٦١</h2>
                  <p className="text-xs text-slate-450 leading-normal">املأ بياناتك لربطك مع مندوب التوصيل الأقرب لحيك السكني خلال ساعتين كحد أقصى وبسرية كبرى.</p>
                </div>

                {orderSuccessMessage && tempCreatedOrder ? (
                  <div className="bg-slate-950 p-6 rounded-xl border border-emerald-500/30 text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-pulse" />
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-100">تم تسجيل حجزك وتشفيره بالمنصة بنجاح!</h3>
                      <p className="text-xs text-slate-400 mt-1">الرقم المرجعي للطلب: <strong>{tempCreatedOrder.id}</strong> • المندوب جاهز ومقرب لتوصيل الطرد الخفي.</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
                      <p>الاسم المسجل: <strong>{tempCreatedOrder.name}</strong></p>
                      <p>الحي والمنطقة: <strong>{tempCreatedOrder.region}</strong></p>
                    </div>

                    <div className="pt-2">
                      <a 
                        href={buildWhatsAppLink(tempCreatedOrder)}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-500 hover:bg-green-600 active:scale-95 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 transition shadow-lg shadow-green-500/20"
                      >
                        <Phone className="w-4 h-4" />
                        <span>انقر هنا لإرسال بيانات الحجز للواتساب وإتمام الشحن فورا 💬</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleOrderSubmit} className="space-y-4 text-right">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">اسم العميل (مستعار أو حركي للسرية):</label>
                        <input
                          type="text"
                          required
                          value={orderName}
                          onChange={(e) => setOrderName(e.target.value)}
                          placeholder="مثال: أحمد العماني"
                          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-2 text-xs focus:outline-none text-right text-slate-200"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">رقم الهاتف للتوصيل والمتابعة:</label>
                        <input
                          type="text"
                          required
                          value={orderPhone}
                          onChange={(e) => setOrderPhone(e.target.value)}
                          placeholder="مثال: +96876636098"
                          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-2 text-xs focus:outline-none text-right text-slate-200 font-mono ltr-dir"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">الدولة المحددة:</label>
                        <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-xs text-slate-350">
                          📍 {activeCountry.nameAr} ({activeCountry.code})
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">المحافظة والحي السكني بدقة:</label>
                        <input
                          type="text"
                          required
                          value={orderRegion}
                          onChange={(e) => setOrderRegion(e.target.value)}
                          placeholder="مثال: مسقط - السيب الموالح"
                          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-2 text-xs focus:outline-none text-right text-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">الكمية المطلوبة:</label>
                        <select
                          value={orderQty}
                          onChange={(e) => setOrderQty(Number(e.target.value))}
                          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-2 text-xs focus:outline-none text-right text-slate-200"
                        >
                          <option value={1}>عبوة واحدة (شامل التوجيه الطبي)</option>
                          <option value={2}>عبوتين (لحالات الأورام الخاصة)</option>
                          <option value={3}>ثلاث عبوات (مستورد للتوفير عائلي)</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">نوع التوصيل اللوجستي:</label>
                        <select
                          value={orderDeliveryType}
                          onChange={(e) => setOrderDeliveryType(e.target.value as any)}
                          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-2 text-xs focus:outline-none text-right text-slate-200"
                        >
                          <option value="express">شحن طبي مبرد معقم عسكري (خلال ساعتين)</option>
                          <option value="standard">شحن عادي (خلال ٢٤ ساعة)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 block font-medium">ملاحظات خاصة للفرع (الخصوصية المطلوبة):</label>
                      <textarea
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        placeholder="امثلة: عدم الاتصال بالهاتف مباشرة بل عبر الواتساب، الحفاظ على سلامة الغلاف خفي تماماً..."
                        className="w-full h-20 bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-2 text-xs focus:outline-none text-right text-slate-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-sky-450 hover:from-teal-605 hover:to-sky-500 text-slate-955 font-extrabold py-3 rounded-xl transition shadow-lg shadow-teal-500/15 text-xs sm:text-sm"
                    >
                      تأمين الحجز السري وتوليد رابط الواتساب لمندوب الدولة
                    </button>

                  </form>
                )}

              </motion.div>
            </div>
          )}

          {/* TAB 5: ARTICLES DIRECTORY & EXPORT ENGINES */}
          {currentTab === 'articles' && (
            <motion.div
              key="articles-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 text-right animate-fade-in"
            >
              
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">القاموس والموسوعة الطبية لنظم الأرشفة ومكافحة التزوير</h2>
                  <p className="text-xs text-slate-400 mt-1">المحتوى المعزز بمواصفات SGE محلياً للخليج بالكامل.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <select 
                    value={articleCategoryFilter}
                    onChange={(e) => setArticleCategoryFilter(e.target.value)}
                    className="bg-slate-950 text-slate-200 text-xs rounded-xl px-3 py-1.5 border border-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="all">جميع فئات الدستور</option>
                    <option value="الوعي الطبي والتحقق">الوعي الطبي والتحقق</option>
                    <option value="توفير وتوزيع طبي">توفير وتوزيع طبي</option>
                    <option value="إرشاد وتوزيع معتمد">إرشاد وتوزيع معتمد</option>
                  </select>

                  <input
                    type="text"
                    value={articleSearchText}
                    onChange={(e) => setArticleSearchText(e.target.value)}
                    placeholder="البحث بالكلمات في الأرشفة..."
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1 text-xs text-slate-200 focus:outline-none text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Side List */}
                <div className="lg:col-span-4 space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  {articles
                    .filter(a => {
                      const matchCat = articleCategoryFilter === 'all' || a.category === articleCategoryFilter;
                      const q = articleSearchText.toLowerCase();
                      const matchText = a.title.toLowerCase().includes(q) || a.content.toLowerCase().includes(q);
                      return matchCat && matchText;
                    })
                    .map(art => (
                      <div
                        key={art.id}
                        onClick={() => setActiveArticleId(art.id)}
                        className={`p-4 rounded-xl border transition cursor-pointer text-right space-y-2 ${activeArticleId === art.id ? 'bg-teal-500/10 border-teal-500/40 text-white font-bold' : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-350'}`}
                      >
                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                          <span className="bg-slate-850 px-2 py-0.5 rounded">{art.category}</span>
                          <span>{art.lastUpdated}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm line-clamp-2 leading-snug">{art.title}</h4>
                      </div>
                    ))}
                </div>

                {/* Article detail render */}
                <div className="lg:col-span-8 bg-slate-900 border border-slate-800 p-6 rounded-2xl min-h-[350px]">
                  {activeArticleId ? (
                    (() => {
                      const art = articles.find(a => a.id === activeArticleId);
                      if (!art) return <p className="text-xs text-slate-400">لا يوجد بيانات</p>;
                      return (
                        <div className="space-y-5">
                          <div className="border-b border-slate-800 pb-4 space-y-2">
                            <span className="bg-teal-550/10 text-teal-400 text-[10px] font-bold px-2 py-0.5 rounded border border-teal-500/20">{art.category}</span>
                            <h3 className="text-lg sm:text-xl font-black text-white">{art.title}</h3>
                            <p className="text-[10px] text-slate-500">تحرير: {art.author} • آخر تحديث: {art.lastUpdated}</p>
                          </div>

                          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                            {art.content}
                          </div>

                          {isAdminAuthenticated && (
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs text-slate-400 space-y-1.5">
                              <span className="text-[10px] text-teal-450 block">🏷️ البيانات الوصفية للأرشفة جوجل:</span>
                              <p>الهوية المستهدفة: <strong>{art.dialect}</strong></p>
                              <p>روابط الكلمات للبدء: <strong>{art.keywords.join(' / ')}</strong></p>
                            </div>
                          )}

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(`https://web.cytotec.fun/#article-${art.id}`);
                                alert("تم نسخ رابط المقال للمشاركة بنجاح.");
                              }}
                              className="px-4 py-1.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-900 text-xs transition"
                            >
                              مشاركة رابط المقال 🔗
                            </button>
                            {isAdminAuthenticated && (
                              <button
                                onClick={() => handleDeleteArticle(art.id)}
                                className="px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-550/10 text-red-400 text-xs hover:bg-red-500/20 transition"
                              >
                                مسح من الفهرس
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="text-center py-20 text-slate-500 space-y-2">
                      <FileText className="w-12 h-12 mx-auto text-slate-700" />
                      <p className="text-xs">يرجى اختيار مقال من القائمة لقراءته والتحقق من مواصفات التحسين.</p>
                    </div>
                  )}
                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 6: PREMIUM WHATSAPP CRM */}
          {currentTab === 'crm' && isAdminAuthenticated && (
            <motion.div
              key="crm-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <CRMManagement />
            </motion.div>
          )}

          {/* TAB 7: ENGINE PERFORMANCE INDS (LIGHTHOUSE METRICS) */}
          {currentTab === 'analytics' && isAdminAuthenticated && (
            <motion.div
              key="analytics-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AnalyticsSection />
            </motion.div>
          )}

          {/* TAB 8: ADMIN CONTROL SUITE  */}
          {currentTab === 'admin' && (
            <motion.div
              key="admin-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 text-right animate-fade-in"
            >
              {!isAdminAuthenticated ? (
                // Authentic security system with 519911
                <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 shadow-2xl text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto">
                    <Settings className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">تسجيل الدخول لبوابة الإدارة والـ AI</h3>
                    <p className="text-[11px] text-slate-450 mt-1">يلزم إدخال رمز الأمان الحصري للمدير للمتابعة.</p>
                  </div>

                  <form onSubmit={handleAdminAuth} className="space-y-3.5">
                    <input
                      type="password"
                      required
                      value={adminPasswordInput}
                      onChange={(e) => setAdminPasswordInput(e.target.value)}
                      placeholder="ادخل رمز المشرف المكون من 6 أرقام..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-teal-400 text-center font-mono"
                    />
                    {adminError && <p className="text-[11px] text-rose-400">{adminError}</p>}
                    <button
                      type="submit"
                      className="w-full py-2 rounded-xl bg-teal-500 hover:bg-teal-600 active:scale-95 text-slate-950 font-black text-xs transition"
                    >
                      دخول الإدارة العامة
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Auth status block */}
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black text-white flex items-center gap-2">
                        <span>لوحة تسيير الأرشفة السحابية ونشر الـ AI</span>
                        <span className="bg-green-550/15 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full">المشرف متصل</span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">حقن كلمات البحث، الإطلاق التلقائي لصفحات السكيما السريعة.</p>
                    </div>

                    <button
                      onClick={() => {
                        setIsAdminAuthenticated(false);
                        localStorage.removeItem('is_admin_authed');
                      }}
                      className="px-3.5 py-1.5 rounded-lg border border-red-500/20 bg-red-550/10 text-red-400 hover:bg-red-500/20 text-xs transition"
                    >
                      خروج آمن
                    </button>
                  </div>

                  {/* Admin Inner Navigation */}
                  <div className="flex flex-wrap gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                    <button
                      onClick={() => setAdminSubTab('content')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-155 ${adminSubTab === 'content' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-black' : 'text-slate-400 hover:text-slate-205'}`}
                    >
                      🤖 مصنع المقالات والـ AI
                    </button>
                    <button
                      onClick={() => setAdminSubTab('programmatic')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-155 ${adminSubTab === 'programmatic' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-black' : 'text-slate-400 hover:text-slate-205'}`}
                    >
                      🌍 الصفحات المحلية والـ SEO
                    </button>
                    <button
                      onClick={() => setAdminSubTab('crm')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-155 ${adminSubTab === 'crm' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-black' : 'text-slate-400 hover:text-slate-205'}`}
                    >
                      💬 إدارة عملاء الواتساب CRM
                    </button>
                    <button
                      onClick={() => setAdminSubTab('analytics')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-155 ${adminSubTab === 'analytics' ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-black' : 'text-slate-400 hover:text-slate-205'}`}
                    >
                      ⚡ أداء السيرفر والأرشفة
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* SUB-TAB 1: CONTENT ENGINE */}
                    {adminSubTab === 'content' && (
                      <motion.div
                        key="subtab-content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                      >
                        {/* Left: SEO Keywords Injecter */}
                        <div className="lg:col-span-6 space-y-6">
                          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                            <h3 className="text-xs font-bold text-teal-350 border-b border-slate-850 pb-2 flex items-center gap-1">
                              <Plus className="w-4 h-4 text-teal-400" />
                              <span>إدراج كبسولات كلمات دلالية للزحف</span>
                            </h3>

                            <form onSubmit={handleAddKeyword} className="space-y-3">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                <div className="sm:col-span-2">
                                  <label className="text-[10px] text-slate-500 block mb-1">الكلمة أو الجملة المستهدفة بالبحث:</label>
                                  <input
                                    type="text"
                                    required
                                    value={newKeywordPhrase}
                                    onChange={(e) => setNewKeywordPhrase(e.target.value)}
                                    placeholder="مثال: توصيل سيتوتيك في الموالح مسقط"
                                    className="w-full bg-slate-950 border border-slate-805 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none"
                                  />
                                </div>

                                <div>
                                  <label className="text-[10px] text-slate-505 block mb-1">بلد الزحف:</label>
                                  <select
                                    value={newKeywordCountry}
                                    onChange={(e) => setNewKeywordCountry(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-805 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none"
                                  >
                                    {GCC_ST_CONFIGS.map(c => (
                                      <option key={c.code} value={c.code}>{c.nameAr}</option>
                                    ))}
                                    <option value="GLOBAL">عالمي (الكل)</option>
                                  </select>
                                </div>
                              </div>

                              <button
                                type="submit"
                                className="bg-teal-500 hover:bg-teal-600 font-extrabold text-slate-950 text-xs px-4 py-2 rounded-lg transition"
                              >
                                حفظ وحقن الكلمة
                              </button>
                            </form>

                            {/* Keyword display log */}
                            <div className="space-y-4 max-h-48 overflow-y-auto pt-3 border-t border-slate-850">
                              {keywords.map(kw => (
                                <div key={kw.id} className="bg-slate-950 p-2.5 rounded-lg border border-slate-850 flex items-center justify-between text-xs">
                                  <div>
                                    <span className="font-bold text-slate-200 font-mono">#{kw.phrase}</span>
                                    <span className="text-[9px] text-slate-500 block">الدولة: {kw.country} | حجم الاهتمام: {kw.searchVolume}%</span>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteKeyword(kw.id)}
                                    className="p-1 text-slate-600 hover:text-red-400 transition"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: AI Article publisher */}
                        <div className="lg:col-span-6 space-y-6">
                          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                            <h3 className="text-xs font-bold text-teal-355 border-b border-slate-850 pb-2 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-sky-450" />
                              <span>توليد ونشر آلي للمقالات بالـ AI Content Engine</span>
                            </h3>

                            <div className="space-y-3">
                              <div>
                                <label className="text-[10px] text-slate-450 block mb-1">اختر الكملة المفتاحية المستهدفة لإنتاج المحتوى الطبي:</label>
                                <select
                                  value={aiSelectedKeyword}
                                  onChange={(e) => setAiSelectedKeyword(e.target.value)}
                                  className="w-full bg-slate-950 text-slate-350 text-xs rounded-xl px-2.5 py-1.5 border border-slate-800 focus:outline-none focus:border-teal-400 cursor-pointer"
                                >
                                  <option value="">اختر كلمة للبدء</option>
                                  {keywords.map(k => (
                                    <option key={k.id} value={k.phrase}>{k.phrase}</option>
                                  ))}
                                </select>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="text-[10px] text-slate-450 block mb-1">الدولة المستهدفة بالإنتاج:</label>
                                  <select
                                    value={aiSelectedCountry}
                                    onChange={(e) => setAiSelectedCountry(e.target.value)}
                                    className="w-full bg-slate-950 text-slate-350 text-xs rounded-xl px-2.5 py-1.5 border border-slate-800 focus:outline-none"
                                  >
                                    {GCC_ST_CONFIGS.map(c => (
                                      <option key={c.code} value={c.code}>{c.nameAr}</option>
                                    ))}
                                  </select>
                                </div>

                                <div>
                                  <label className="text-[10px] text-slate-455 block mb-1">المقاطعة/الحي (للهجة الـ SGE):</label>
                                  <input
                                    type="text"
                                    value={aiSelectedRegion}
                                    onChange={(e) => setAiSelectedRegion(e.target.value)}
                                    placeholder="مثال: ذفار صلالة"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-205 focus:outline-none"
                                  />
                                </div>
                              </div>

                              <button
                                onClick={handleGenerateAIArticle}
                                disabled={aiGenerating}
                                className={`w-full py-2 bg-gradient-to-r from-teal-500 to-sky-455 hover:from-teal-600 hover:to-sky-505 rounded-xl font-bold text-slate-950 text-xs transition flex items-center justify-center gap-1.5 ${aiGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                              >
                                <Sparkles className="w-4 h-4" />
                                <span>{aiGenerating ? 'جاري صياغة المقال والروابط بالذكاء الاصطناعي مبرمجاً...' : 'توليد ونشر فوري بالـ AI (Gemini)'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* SUB-TAB 2: PROGRAMMATIC LOCAL PAGES */}
                    {adminSubTab === 'programmatic' && (
                      <motion.div
                        key="subtab-prog"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <ProgrammaticExplorer />
                      </motion.div>
                    )}

                    {/* SUB-TAB 3: WHATSAPP CRM */}
                    {adminSubTab === 'crm' && (
                      <motion.div
                        key="subtab-crm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CRMManagement />
                      </motion.div>
                    )}

                    {/* SUB-TAB 4: SERVERS / LIGHTHOUSE ANALYTICS */}
                    {adminSubTab === 'analytics' && (
                      <motion.div
                        key="subtab-analytics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AnalyticsSection />
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* FIXED FLOATING WHATSAPP CRM HOOK WITH AUTO TRIGGER */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم ورحمة الله، أود حجز وشراء حبوب سيتوتيك الأصلية من فايزر مع مندوب التوصيل وتلقي الدعم والاستشارة المجانية.')}`}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 text-slate-950 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-150 relative group"
          id="whatsapp-crm-floating-trigger"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <Phone className="w-6 h-6 shrink-0" />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-12 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="font-bold text-slate-205">منصة سيتوتيك الخليجية المعتمدة - شبكة المطبقات الطبي السري اللوجستي</p>
          <p className="text-[11px] leading-relaxed max-w-2xl mx-auto">
            جميع المواد والمعلومات الطبية المنشورة بالمنصة والصفحات المحلية المبرمجة تهدف لتوفير الدائرة التوعوية للعملاء من التقليد صوناً لسلامتهم. لا نقوم بمشاركة أو تداول الملفات الحساسة للأعضاء خارج الكادر الصيدلاني المرخص.
          </p>
          <div className="flex justify-center gap-5 text-[10px] text-slate-500 font-mono flex-wrap">
            <span>Server Latency: <strong className="text-emerald-400 font-bold">14ms</strong></span>
            <span>•</span>
            <span>Index Status: <strong className="text-teal-405 font-bold">Passing (SGE Ready)</strong></span>
            <span>•</span>
            <span>Infrastructure: <strong className="text-sky-400 font-bold">Docker Node.js Caching</strong></span>
            <span>•</span>
            <span>Gateway: <button onClick={() => { setCurrentTab('admin'); }} className="text-slate-500 hover:text-teal-400 font-bold transition cursor-pointer">بوابة المنسقين 🔐</button></span>
          </div>
          <p className="text-[10px] text-slate-600 font-mono pt-2">© 2026 CYTOTEC GCC SAAS & PERFORMANCE PORTAL. ALL CONFIDENTIAL RIGHTS RESERVED.</p>
        </div>
      </footer>

    </div>
  );
}
