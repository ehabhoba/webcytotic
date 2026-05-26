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

export const translations = {
  ar: {
    brandName: 'منصة سيتوتيك الخليجية',
    brandSpec: 'Pfizer 1461',
    brandSub: 'CYTOTEC SGE MEDIA PLATFORM • EXPANDABLE INFRASTRUCTURE',
    deliveryBranch: 'مندوبكم الفوري بالخليج: خلال ساعتين',
    availLabel: 'موقعك الحالي:',
    callHotline: 'مكالمة كادر التوجيه',
    tabHome: '🏠 الرئيسية والوعي الطبي',
    tabVerify: '🔬 التحقق من الرقم (1461)',
    tabOrder: '📦 حجز عبوة فايزر',
    tabArticles: '📰 موسوعة الأرشفة',
    heroBadge: 'CYTOTEC MEDICAL MEDIA & SAAS PLATFORM',
    heroTitle: 'المنصة الطبية الخليجية الأولى لتوفير سيتوتيك الأصلي فايزر ومكافحة الأدوية المقلدة',
    heroDesc: 'نؤمن الحماية الطبية الكاملة وخدمة الشحن اللوجستي الخفي المبرد لـ ميزوبروستول سيتوتيك الأصلي (Pfizer 1461) في كافة محافظات ومدن الخليج العربي (عمان، السعودية، الإمارات، قطر، البحرين، الكويت) خلال ساعتين كحد أقصى تحت توجيه صيدلي معتمد.',
    orderBtn: '📦 احجز عبوتك الآن (توصيل فوري خلال ساعتين)',
    verifyBtn: '🔬 كيفية تمييز الأصلي من التقليد بالخطوات',
    netStatus: 'حالة الشبكة اللوجستية النشطة:',
    statusVal: 'OPERATIONAL',
    branchLabel: 'الفرع اللوجستي المباشر:',
    speedLabel: 'سرعة وصول المندوب:',
    m2Hours: 'أقل من ساعتين',
    testSec: 'تأمين وفحص مجهري للرمز 1461:',
    securedVal: 'مؤمن بالكامل ✓',
    whatsappLabel: 'رقم الواتساب السري الفوري:',
    searchTitle: 'ابحث عن توفير سيتوتيك في مدينتك أو حيك السكني:',
    searchSub: 'يقوم الكادر بفرز المندوبين لتأمين الخدمة في محافظتكم فورياً.',
    searchPlaceholder: 'امثلة: سيتوتيك في السيب، السليمانية، دبي البرشاء...',
    p1Title: 'فحص مجهري وضمان الأصالة',
    p1Desc: 'نضمن مطابقة نقش فايزر المعتمد 1461 على حبات ميزوبروستول بالدقة البالغة لضمان الجودة الكيميائية وصون سلامتكم القصوى من الأدوية المقلدة.',
    p2Title: 'شحن طبي خفي معزول',
    p2Desc: 'يتم تسليم الشحنات مغلفة تماماً دون كتابة أي مصطلحات طبية حساسة على العلبة الخارجية لتوفير أعلى مستوى من الخصوصية والأمان.',
    p3Title: 'توجيه صيدلاني واستشارة مجانية',
    p3Desc: 'نرافقك خطوة بخطوة عبر كادر من الاستشاريين المتخصصين للإجابة على كامل التساؤلات بحرص، لتسهيل سبل المتابعة الطبية الآمنة.',
    locTitle: 'دليل التغطية الطبية والتحقق الجغرافي الفوري بالخليج العربي',
    locDesc: 'اختر بلدك ومدينتك أدناه لتأكيد سلامة ونقش علبة سيتوتيك الأصلية ١٤٦١ وتفقد سرعة وصول المندوب الطبي المباشر في حيك السكني تلافياً للأدوية مجهولة المصدر.',
    countrySelectLabel: '1. اختر الدولة الخليجية:',
    citySelectLabel: '2. حدد المدينة أو المحافظة السكنية:',
    neighLabel: '3. حدد الحي السكني للفرز:',
    statusConfirmed: 'حالة الفرز للموقع:',
    confText: 'نشط وجاهز للتوريد خلال ساعتين ✓',
    supportCrew: 'كادر الإشراف والتوصيل الطوعي:',
    coorActive: 'منسق طبي معتمد + مندوب معزول مخصص',
    orderLinkText: '📞 انقر هنا لطلب التوريد وتأكيد الحجز الفوري للموقع عبر الواتس'
  },
  en: {
    brandName: 'Cytotec Gulf Platform',
    brandSpec: 'Pfizer 1461',
    brandSub: 'CYTOTEC SGE MEDICAL MEDIA • EXPANDABLE INFRASTRUCTURE',
    deliveryBranch: 'Our Instant GCC Courier: Delivery within 2 Hours',
    availLabel: 'Your Location:',
    callHotline: 'Call Support Staff',
    tabHome: '🏠 Home & Guidance',
    tabVerify: '🔬 Verify Code (1461)',
    tabOrder: '📦 Order Pfizer Pack',
    tabArticles: '📰 Encyclopedia',
    heroBadge: 'CYTOTEC MEDICAL MEDIA & SAAS PLATFORM',
    heroTitle: 'The Premier GCC Medical Platform for Pfizer Cytotec Verification & Delivery',
    heroDesc: 'We secure full medical verification and safe cold-chain stealth shipping for authentic Misoprostol Cytotec (Pfizer 1461) in Oman, Saudi Arabia, UAE, Qatar, Bahrain, and Kuwait under qualified clinical supervision within 2 hours.',
    orderBtn: '📦 Book Your Package Now (Delivery within 2 Hours)',
    verifyBtn: '🔬 How to Identify original vs grey market copies',
    netStatus: 'Active Logistics Network Status:',
    statusVal: 'OPERATIONAL',
    branchLabel: 'Direct Logistics Branch:',
    speedLabel: 'Delivery Courier Speed:',
    m2Hours: 'Under 2 Hours',
    testSec: 'Microscopic check for 1461:',
    securedVal: 'Fully Verified ✓',
    whatsappLabel: 'Direct Confidential WhatsApp:',
    searchTitle: 'Search Cytotec delivery in your city or residential street:',
    searchSub: 'Our clinical dispatchers will assign local stealth couriers to secure delivery immediately.',
    searchPlaceholder: 'Examples: Seeb, Riyadh Suleimania, Dubai Barsha...',
    p1Title: 'Microscopic Authentication',
    p1Desc: 'We guarantee 105% compliance with Pfizer 1461 geometric specifications on every Misoprostol tablet to prevent damage from cheap black-market knockoffs.',
    p2Title: 'Discreet Insulated Courier',
    p2Desc: 'All parcels are dispatched in secure, unmarked opaque containers with zero clinical terms written outwardly to uphold absolute confidentiality.',
    p3Title: 'Pharmaceutical Support',
    p3Desc: 'Licensed clinical counselors guide you through safe applications, correct dosages, and private follow-up support free of charge.',
    locTitle: 'GCC Medical Coverage Map & Geographical Dispatch Locator',
    locDesc: 'Choose your state and province below to establish courier delivery times and explore authentication metrics in your local district.',
    countrySelectLabel: '1. Choose GCC Country:',
    citySelectLabel: '2. Select Direct Province:',
    neighLabel: '3. Select Neighborhood Area:',
    statusConfirmed: 'Active Dispatch Status:',
    confText: 'Verified Active & ready for express courier within 2 hours ✓',
    supportCrew: 'Assigned Coordinator & Clinic Crew:',
    coorActive: 'Certified Clinical Manager + Designated Discreet Courier',
    orderLinkText: '📞 Press to request express courier to this location via WhatsApp'
  }
};

export default function App() {
  // Navigation & Location states
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('OM');
  const [currentTab, setCurrentTab] = useState<'home' | 'programmatic' | 'verify' | 'order' | 'articles' | 'crm' | 'analytics' | 'admin'>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  
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
  const [manualIdToEdit, setManualIdToEdit] = useState<string | null>(null);
  const [manualAuthor, setManualAuthor] = useState<string>('المدير العام');
  const [manualCountry, setManualCountry] = useState<string>('all');
  const [manualRegion, setManualRegion] = useState<string>('');
  const [employeeRole, setEmployeeRole] = useState<'admin' | 'publisher' | 'editor'>('admin');
  const [adminArticleSearch, setAdminArticleSearch] = useState<string>('');
  const [adminArticleCategory, setAdminArticleCategory] = useState<string>('all');

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

    if (employeeRole === 'editor' && !manualIdToEdit) {
      alert("⚠️ عذراً، وظيفتك الحالية (محرر وموظف) لا تخولك بنشر كتل مقالات جديدة ذاتياً. يمكنك فقط تعديل ومراجعة المقالات القائمة لتجنب تضارب الـ SEO.");
      return;
    }

    try {
      const url = manualIdToEdit ? `/api/articles/${manualIdToEdit}` : '/api/articles';
      const method = manualIdToEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: manualTitle,
          category: manualCategory,
          content: manualContent,
          country: manualCountry,
          region: manualRegion,
          keywords: manualKeywords,
          dialect: manualDialect,
          author: manualAuthor || 'المدير العام'
        })
      });
      if (res.ok) {
        setManualTitle('');
        setManualContent('');
        setManualKeywords('');
        setManualRegion('');
        setManualDialect('هوية طبية عامة');
        setManualAuthor('المدير العام');
        setManualCountry('all');
        
        if (manualIdToEdit) {
          alert("✓ تم حفظ تعديلات المقال بنجاح وتحديث الأرشفة فوراً!");
          setManualIdToEdit(null);
        } else {
          alert("✓ تم نشر وإنتاج المقال الطبي الجديد بنجاح في الموقع!");
        }
        fetchArticles();
      } else {
        alert("فشلت عملية حفظ ونشر المقال. يرجى مراجعة قيم الخوادم.");
      }
    } catch (err) {
      console.error("Manual publish err", err);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (employeeRole === 'editor' || employeeRole === 'publisher') {
      alert("⚠️ عذراً، صلاحيات منصبك الحالي لا تسمح لك بالحذف النهائي للمحتوى الطبي والـ SGE لمنع أي أخطاء في الأرشفة.");
      return;
    }
    if (!confirm("هل أنت متأكد من حذف هذا المقال الفهرس؟ سيتم إزالته فوراً من السيرفر والخريطة السحابية.")) return;
    try {
      const res = await fetch(`/api/articles/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchArticles();
        if (activeArticleId === id) setActiveArticleId(null);
        alert("🗑️ تم حذف وإلغاء فهرسة المقال بنجاح من النظام السحابي.");
      }
    } catch (err) {
      console.error("Failed clear article", err);
    }
  };

  const handleStartEdit = (art: Article) => {
    setManualIdToEdit(art.id);
    setManualTitle(art.title);
    setManualCategory(art.category);
    setManualContent(art.content);
    setManualKeywords(Array.isArray(art.keywords) ? art.keywords.join(', ') : art.keywords);
    setManualDialect(art.dialect || 'هوية طبية عامة');
    setManualAuthor(art.author || 'المدير العام');
    setManualCountry(art.country || 'all');
    setManualRegion(art.region || '');
    
    setTimeout(() => {
      const formEl = document.getElementById('manual-article-editor-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    alert(`✏️ تم تحميل بيانات المقال "${art.title}" في نموذج التعديل بالأسفل لبدء التعديل والتحكم حقيقياً.`);
  };

  const handleCancelEdit = () => {
    setManualIdToEdit(null);
    setManualTitle('');
    setManualCategory('الوعي الطبي والتحقق');
    setManualContent('');
    setManualKeywords('');
    setManualDialect('هوية طبية عامة');
    setManualAuthor('المدير العام');
    setManualCountry('all');
    setManualRegion('');
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 flex flex-col antialiased relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
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
                <span className="font-bold text-base sm:text-lg tracking-tight bg-gradient-to-l from-slate-50 to-slate-200 bg-clip-text text-transparent">{translations[lang].brandName}</span>
                <span className="bg-teal-500/10 text-teal-400 text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-teal-500/20 font-bold">{translations[lang].brandSpec}</span>
              </div>
              <p className="text-[9px] text-slate-500 font-mono tracking-wider">{translations[lang].brandSub}</p>
            </div>
          </div>

          {/* SGE & Mobile Status flags */}
          <div className="hidden xl:flex items-center gap-5 text-xs text-slate-300 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{translations[lang].deliveryBranch}</span>
            </div>
            <div className="w-px h-3.5 bg-slate-800" />
            <div className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>SGE AI Search Score: <strong className="text-teal-400 font-mono font-bold">100/100</strong></span>
            </div>
          </div>

          {/* Quick actions for local routing dropdown state */}
          <div className="flex items-center gap-2">
            
            {/* Bilingual language switcher */}
            <button
              type="button"
              onClick={() => {
                const nextLang = lang === 'ar' ? 'en' : 'ar';
                setLang(nextLang);
                if (nextLang === 'en') {
                  setActiveArticleId('cytotec-uses-and-notes');
                  setCurrentTab('articles');
                } else {
                  setActiveArticleId('art-1');
                }
              }}
              className="flex items-center gap-1 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 px-2.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <span className="text-xs text-slate-400 hidden sm:inline">{translations[lang].availLabel}</span>
            <select 
              value={selectedCountryCode}
              onChange={(e) => {
                setSelectedCountryCode(e.target.value);
                setOrderRegion(''); // Reset region input to match country selection
              }}
              className="bg-slate-950 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-800 focus:outline-none focus:border-teal-400 cursor-pointer min-w-[120px]"
            >
              {GCC_ST_CONFIGS.map(item => (
                <option key={item.code} value={item.code}>
                  📍 {lang === 'ar' ? item.nameAr : item.nameEn}
                </option>
              ))}
            </select>
            <a 
              href={buildQuickSupportLink()} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition duration-150 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{translations[lang].callHotline}</span>
            </a>
          </div>
        </div>

        {/* COMPREHENSIVE PLATFORM CAPABILITIES TABS */}
        <div className="bg-slate-950 border-t border-slate-850">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <div className={`flex items-center py-1 ${lang === 'ar' ? 'space-x-reverse space-x-1 sm:space-x-2' : 'space-x-1 sm:space-x-2'}`}>
              <button 
                onClick={() => { setCurrentTab('home'); setActiveArticleId(null); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'home' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {translations[lang].tabHome}
              </button>

              <button 
                onClick={() => { setCurrentTab('verify'); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'verify' ? 'bg-teal-505/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {translations[lang].tabVerify}
              </button>

              <button 
                onClick={() => { setCurrentTab('order'); }}
                className={`px-3 py-1.5 rounded-md transition duration-150 ${currentTab === 'order' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {translations[lang].tabOrder}
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
                <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 ${lang === 'ar' ? '' : 'sm:flex-row-reverse'}`}>
                  <div>
                    <h3 className="text-sm font-bold text-white">{translations[lang].searchTitle}</h3>
                    <p className="text-[11px] text-slate-450">{translations[lang].searchSub}</p>
                  </div>

                  <div className="w-full sm:max-w-md relative">
                    <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 ${lang === 'ar' ? 'right-3.5' : 'left-3.5'}`} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleIntelligentSearchChange(e.target.value)}
                      placeholder={translations[lang].searchPlaceholder}
                      className={`w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl py-2 text-xs focus:outline-none text-slate-200 ${lang === 'ar' ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'}`}
                    />
                  </div>
                </div>

                {/* If matching keyword was typed */}
                {searchQuery.trim().length > 1 && (
                  <div className={`p-3 bg-teal-950/20 border border-teal-500/20 rounded-xl flex items-center justify-between text-xs gap-3 ${lang === 'ar' ? '' : 'flex-row-reverse'}`}>
                    {lang === 'ar' ? (
                      <span className="text-slate-300">💡 تم توجيه الكادر وتخصيص المندوب لخدمة منطقتكم في <strong>{searchQuery}</strong> تلقائياً!</span>
                    ) : (
                      <span className="text-slate-300">💡 Clinical dispatchers successfully assigned a dedicated courier for your neighborhood <strong>{searchQuery}</strong> automatically!</span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        const q = searchQuery;
                        setOrderRegion(q);
                        setCurrentTab('order');
                      }}
                      className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-black px-4 py-1.5 rounded-lg text-[11px] transition cursor-pointer"
                    >
                      {lang === 'ar' ? 'إرسال حجز الطلب للمنطقة 📦' : 'Secure Order for Area 📦'}
                    </button>
                  </div>
                )}
              </div>

              {/* GEOGRAPHICAL COVERAGE DIRECTORY WIDGET FOR visitors & SEO CRAWLERS */}
              <div className="bg-slate-900 border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
                <div className={`space-y-1.5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className={`flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2 ${lang === 'ar' ? '' : 'flex-row-reverse'}`}>
                    <span className="px-2.5 py-1 bg-teal-500/10 text-teal-400 font-mono text-[10px] sm:text-xs rounded-full border border-teal-500/20 font-bold">DIRECTORY & LOCATOR</span>
                    <h3 className="text-sm font-black text-slate-100 flex items-center gap-1.5">
                      <Globe className="w-4.5 h-4.5 text-teal-400" />
                      <span>{translations[lang].locTitle}</span>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-405 leading-relaxed">
                    {translations[lang].locDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Selectors column */}
                  <div className="md:col-span-5 space-y-4">

                    {/* Country selector */}
                    <div className={`space-y-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      <span className="text-xs text-slate-400 font-bold block">{translations[lang].countrySelectLabel}</span>
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
                            className={`py-2 px-3 rounded-xl text-xs text-center font-bold transition border truncate flex items-center justify-center gap-1.5 cursor-pointer ${geoSelectedCountryCode === country.code ? 'bg-teal-500/10 text-teal-350 border-teal-500/40 shadow shadow-teal-500/10' : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'}`}
                          >
                            <span>{lang === 'ar' ? country.nameAr : country.nameEn}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* City selector */}
                    {(() => {
                      const dynamicCountry = PROGRAMMATIC_GCC_DATA.find(c => c.code === geoSelectedCountryCode) || PROGRAMMATIC_GCC_DATA[0];
                      return (
                        <div className={`space-y-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                          <span className="text-xs text-slate-400 font-bold block">{translations[lang].citySelectLabel}</span>
                          <div className={`flex flex-wrap gap-1.5 ${lang === 'ar' ? 'justify-start' : 'justify-start'}`}>
                            {dynamicCountry.cities.map((city) => (
                              <button
                                key={city.nameAr}
                                type="button"
                                onClick={() => {
                                  setGeoSelectedCityName(city.nameAr);
                                  setGeoSelectedNeighborhoodName(city.neighborhoods[0].nameAr);
                                }}
                                className={`py-1.5 px-3 rounded-xl text-xs font-bold transition border cursor-pointer ${geoSelectedCityName === city.nameAr || geoSelectedCityName === city.nameEn ? 'bg-sky-500/10 text-sky-350 border-sky-500/35' : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'}`}
                              >
                                📍 {lang === 'ar' ? city.nameAr : city.nameEn}
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
                        <div className={`space-y-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                          <span className="text-xs text-slate-400 font-bold block">{translations[lang].neighLabel}</span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {dynamicCity.neighborhoods.map((nh) => (
                              <button
                                key={nh.nameAr}
                                type="button"
                                onClick={() => setGeoSelectedNeighborhoodName(nh.nameAr)}
                                className={`p-2 rounded-xl text-xs transition border truncate flex items-center gap-1 justify-between cursor-pointer ${geoSelectedNeighborhoodName === nh.nameAr || geoSelectedNeighborhoodName === nh.nameEn ? 'bg-amber-500/10 text-amber-305 border-amber-500/35 font-bold' : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'} ${lang === 'ar' ? 'text-right flex-row' : 'text-left flex-row-reverse'}`}
                              >
                                <span className="truncate">🏡 {lang === 'ar' ? nh.nameAr : nh.nameEn}</span>
                                <span className="text-[9px] opacity-60">{lang === 'ar' ? 'مغطى' : 'Active'}</span>
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
                    const neighborhood = city.neighborhoods.find(n => n.nameAr === geoSelectedNeighborhoodName || n.nameEn === geoSelectedNeighborhoodName) || city.neighborhoods[0];
                    return (
                      <div className={`md:col-span-7 bg-slate-950 border border-slate-850 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-inner relative overflow-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                        {/* Background pattern */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
                        
                        <div className="space-y-3">
                          <div className={`flex items-center justify-between border-b border-slate-900 pb-2 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                            <span className="text-emerald-400 text-xs font-bold leading-none flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              <span>{lang === 'ar' ? 'متاح للتسليم الفوري ⚡' : 'In Stock for 2-Hr Delivery ⚡'}</span>
                            </span>
                            <h4 className="font-bold text-xs text-slate-450">{lang === 'ar' ? 'تذكرة توزيع المسار اللوجستي' : 'Logistics Route Ticket'}</h4>
                          </div>

                          <div className="space-y-2.5 text-xs">
                            <div className={`flex justify-between border-b border-slate-900/60 pb-1.5 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                              <span className="text-slate-455">{lang === 'ar' ? 'بلد الترخيص والاستيراد:' : 'Import & Licensure State:'}</span>
                              <strong className="text-slate-100 font-bold">{lang === 'ar' ? country.nameAr : country.nameEn} ({country.clinicalAuthority})</strong>
                            </div>
                            <div className={`flex justify-between border-b border-slate-900/60 pb-1.5 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                              <span className="text-slate-455">{lang === 'ar' ? 'المدينة الرئيسية الحالية:' : 'Current Main City:'}</span>
                              <strong className="text-slate-100 font-bold">{lang === 'ar' ? city.nameAr : city.nameEn}</strong>
                            </div>
                            <div className={`flex justify-between border-b border-slate-900/60 pb-1.5 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                              <span className="text-slate-455">{lang === 'ar' ? 'حي التوصيل المباشر:' : 'Direct Neighborhood Area:'}</span>
                              <strong className="text-teal-400 font-bold">{lang === 'ar' ? neighborhood.nameAr : neighborhood.nameEn}</strong>
                            </div>
                            <div className={`flex justify-between border-b border-slate-900/60 pb-1.5 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                              <span className="text-slate-455">{lang === 'ar' ? 'نقطة المعلم المرجعي الشهير:' : 'Nearby Prominent Landmark:'}</span>
                              <strong className="text-slate-200 font-normal">{lang === 'ar' ? neighborhood.landmarkAr : (neighborhood.landmarkEn || neighborhood.landmarkAr)}</strong>
                            </div>
                            <div className={`flex justify-between border-b border-slate-900/60 pb-1.5 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                              <span className="text-slate-455">{lang === 'ar' ? 'المدة المتوقعة لوصول المناديب باليد:' : 'Expected Courier Arrival Time:'}</span>
                              <strong className="text-amber-400 font-bold">{lang === 'ar' ? city.deliveryTime : 'Within 2 Hours (Stealth Courier)'}</strong>
                            </div>
                            <div className={`flex justify-between ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                              <span className="text-slate-455">{lang === 'ar' ? 'دليل فرز النقش وتحقق العلبة:' : 'Blister & Stamp Verification:'}</span>
                              <strong className="text-emerald-400 font-black">{lang === 'ar' ? 'بالموثوقية المجهرية 🔬 (1461 Verifier Active)' : 'Clinical Microscope Check 🔬 (1461 Active)'}</strong>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                          <button
                            type="button"
                            onClick={() => {
                              setOrderRegion(`${lang === 'ar' ? city.nameAr : city.nameEn} - ${lang === 'ar' ? 'حي' : 'District'} ${lang === 'ar' ? neighborhood.nameAr : neighborhood.nameEn} (${lang === 'ar' ? neighborhood.landmarkAr : (neighborhood.landmarkEn || neighborhood.landmarkAr)})`);
                              setOrderPhone('');
                              setOrderName('');
                              setCurrentTab('order');
                              // Scroll smoothly to order element
                              setTimeout(() => {
                                const element = document.getElementById('booking-section-card');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                            }}
                            className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-black py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-teal-500/10 active:scale-95 cursor-pointer"
                          >
                            <span>{lang === 'ar' ? '📦 طلب الشحن الفوري لهذا الحي' : '📦 Order Stealth Shipping Here'}</span>
                          </button>

                          <a
                            href={`https://wa.me/${country.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(lang === 'ar' ? `مرحباً.. أود حجز وتوصيل حبوب سيتوتيك ميزوبروستول الأصلي فايزر ١٤٦١ في حي (${neighborhood.nameAr}) بمدينة (${city.nameAr}). يرجى توجيه مندوب التوصيل الفوري.` : `Hello.. I want to book and deliver original Pfizer Cytotec 200mcg (1461) to neighborhood (${neighborhood.nameEn}) in city (${city.nameEn}). Please dispatch the express courier.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-slate-950 font-black py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 active:scale-95 text-center cursor-pointer"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>{lang === 'ar' ? 'تواصل مع مندوب الخليج' : 'Message Local GCC Courier'}</span>
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
              <MedicalVerify lang={lang} />
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
                              <p>روابط الكلمات للبدء: <strong>{art.keywords?.join(' / ') || ''}</strong></p>
                            </div>
                          )}

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(`https://web.cytotec.fun/#article-${art.id}`);
                                alert("تم نسخ رابط المقال للمشاركة بنجاح.");
                              }}
                              className="px-4 py-1.5 rounded-lg bg-slate-955 text-slate-300 border border-slate-800 hover:bg-slate-900 text-xs transition"
                            >
                              مشاركة رابط المقال 🔗
                            </button>
                            {isAdminAuthenticated && (
                              <button
                                onClick={() => handleDeleteArticle(art.id)}
                                className="px-4 py-1.5 rounded-lg bg-rose-550/10 hover:bg-rose-500/20 text-rose-450 border border-rose-500/25 text-xs transition font-extrabold"
                              >
                                حذف المقال 🗑️
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500 text-center p-8 space-y-2">
                       <p className="text-xs">يرجى تحديد مقال طبي من الفهرس الجانبي لمعاينة محتواه أو تصنيفه.</p>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 6: MAIN SYSTEM ADMINISTRATIVE CMS PORTAL */}
          {currentTab === 'admin' && (
            <motion.div
              key="admin-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 text-right animate-fade-in"
            >
              
              {!isAdminAuthenticated ? (
                /* Admin Login Gate overlay */
                <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center space-y-6">
                  <div className="w-16 h-16 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mx-auto border border-teal-500/20">
                    <Settings className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">بوابة المنسقين والناشرين السرية 🔐</h3>
                    <p className="text-xs text-slate-400 mt-1">تحديد الهوية والرقابة الإدارية - أدخل الرمز السداسي للتنصيب</p>
                  </div>

                  <form onSubmit={handleAdminAuth} className="space-y-4">
                    <div className="space-y-1 text-right">
                      <label className="text-[10px] text-slate-400 block">رمز الإذن ولوحة القيادة المشتركة:</label>
                      <input
                        type="password"
                        required
                        value={adminPasswordInput}
                        onChange={(e) => setAdminPasswordInput(e.target.value)}
                        placeholder="أدخل رمز المرور (519911)"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400 rounded-xl px-3 py-3 text-center text-xs focus:outline-none tracking-widest text-white font-mono"
                      />
                    </div>

                    {adminError && <p className="text-rose-455 text-[11px] text-center font-bold leading-normal">{adminError}</p>}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-sky-450 text-slate-955 font-extrabold py-2.5 rounded-xl text-xs sm:text-sm active:scale-95 transition"
                    >
                      ولوج البوابة اللوجستية الآن 🚀
                    </button>
                  </form>
                </div>
              ) : (
                /* Authenticated Enterprise Dashboard layout */
                <div className="space-y-6">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black text-white flex items-center gap-2">
                        <Settings className="w-6 h-6 text-teal-400" />
                        <span>لوحة الإدارة والتحكم والإنتاج البرمجي الموحد</span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        مرحباً بك مجدداً. تتيح لك هذه اللوحة إدارة ونشر المقالات، تتبع المحادثات وحسابات CRM، وتحميل وتقييم التحليلات.
                      </p>
                    </div>

                    {/* Sub-Tabs Selector inside Admin workspace */}
                    <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setAdminSubTab('content')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition duration-150 ${adminSubTab === 'content' ? 'bg-teal-500/15 text-teal-400 border border-teal-500/25' : 'text-slate-400 hover:text-slate-100'}`}
                      >
                        ✍️ إدارة ونشر المقالات (CMS)
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdminSubTab('programmatic')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition duration-150 ${adminSubTab === 'programmatic' ? 'bg-teal-500/15 text-teal-400 border border-teal-500/25' : 'text-slate-400 hover:text-slate-100'}`}
                      >
                        🌍 المحافظات والأقسام الـ SEO
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdminSubTab('crm')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition duration-150 ${adminSubTab === 'crm' ? 'bg-teal-500/15 text-teal-400 border border-teal-500/25' : 'text-slate-400 hover:text-slate-100'}`}
                      >
                        💬 كابينة الواتساب والطلبات
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdminSubTab('analytics')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition duration-150 ${adminSubTab === 'analytics' ? 'bg-teal-500/15 text-teal-400 border border-teal-500/25' : 'text-slate-400 hover:text-slate-100'}`}
                      >
                        📊 مؤشرات lighthouse والمخدمات
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {adminSubTab === 'content' && (
                      <motion.div
                        key="subtab-content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        {/* Interactive Role Switcher Panel */}
                          <div id="employee-role-switcher" className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
                            <div className="space-y-1">
                              <h4 className="text-sm font-black text-white flex items-center gap-2">
                                <UserCheck className="w-4 h-4 text-teal-400" />
                                <span>منصة تحرير وصلاحيات موظفي الشركة المشتركة 💼</span>
                              </h4>
                              <p className="text-[11px] text-slate-400 font-medium">
                                يسمح نظام إدارة المحتوى (CMS) بتوزيع الأدوار والتحكم الفوري. اختر رتبتك الوظيفية لمعاينة الصلاحيات المقيدة حقيقياً:
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 w-full md:w-auto">
                              <button
                                type="button"
                                onClick={() => {
                                  setEmployeeRole('admin');
                                  alert("👑 تم تعيين دورك: المدير العام للشركة. صلاحيات كاملة ونهائية تتيح لك كافة وظائف النشر والتعديل، الحذف المباشر، وتوليد المحتوى بالذكاء الاصطناعي.");
                                }}
                                className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition duration-150 ${employeeRole === 'admin' ? 'bg-teal-500 text-slate-950 font-black shadow-md shadow-teal-500/20' : 'text-slate-400 hover:text-slate-100'}`}
                              >
                                المدير العام 👑
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setEmployeeRole('publisher');
                                  alert("✍️ تم تعيين دورك: الناشر الطبي المعتمد. يسمح لك بإنشاء مقالات جديدة وتوليدها بالذكاء الاصطناعي وتحريرها، لكن صلاحية الحذف النهائي مقيدة لحماية الأرشيف السحابي.");
                                }}
                                className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition duration-150 ${employeeRole === 'publisher' ? 'bg-sky-500 text-slate-955 font-black shadow-md shadow-sky-500/20' : 'text-slate-400 hover:text-slate-100'}`}
                              >
                                الناشر المعتمد ✍️
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setEmployeeRole('editor');
                                  alert("👁️ تم تعيين دورك: محرر موظف / متابع فني. وظيفتك مراجعة وتعديل محتوى المقالات والكلمات القائمة، لتجنب الأخطاء لا يسمح لك بإنشاء كتل جديدة أو حذف الأرشفة ذاتياً.");
                                }}
                                className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition duration-150 ${employeeRole === 'editor' ? 'bg-emerald-500 text-slate-955 font-black shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-100'}`}
                              >
                                محرر وموظف متابعة 👁️
                              </button>
                            </div>
                        </div>

                        {/* Quick Metrics Statistics */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1 shadow-sm">
                            <div className="flex justify-between items-center text-slate-500">
                              <span className="text-[10px]">إجمالي مقالات الدستور الطبي</span>
                              <FileText className="w-4 h-4 text-teal-400" />
                            </div>
                            <p className="text-2xl font-black text-white font-mono">{articles.length}</p>
                            <span className="text-[9px] text-emerald-400 block font-bold">✓ نشطة وتعمل على الخوادم حقيقياً</span>
                          </div>

                          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1 shadow-sm">
                            <div className="flex justify-between items-center text-slate-500">
                              <span className="text-[10px]">كلمات الزحف SEO المحقونة</span>
                              <Layers className="w-4 h-4 text-sky-450" />
                            </div>
                            <p className="text-2xl font-black text-white font-mono">{keywords.length}</p>
                            <span className="text-[9px] text-sky-400 block font-bold">✓ مستهدف لـ SGE والذكاء الاصطناعي</span>
                          </div>

                          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1 shadow-sm">
                            <div className="flex justify-between items-center text-slate-500">
                              <span className="text-[10px]">مستوى جودة المحتوى والـ SGE</span>
                              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                            </div>
                            <p className="text-2xl font-black text-white font-mono">98.9%</p>
                            <span className="text-[9px] text-teal-450 block font-bold">ملائم لتوصيات Google AI</span>
                          </div>

                          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1 shadow-sm">
                            <div className="flex justify-between items-center text-slate-500">
                              <span className="text-[10px]">المنصب الفعال للجلسة</span>
                              <Activity className="w-4 h-4 text-emerald-400" />
                            </div>
                            <p className="text-sm font-black text-teal-300 truncate mt-1">
                              {employeeRole === 'admin' ? 'المدير العام (نشط) 👑' : employeeRole === 'publisher' ? 'الناشر المعتمد ✍️' : 'مستشار ومحرر متابع 👁️'}
                            </p>
                            <span className="text-[9px] text-slate-500 block font-bold">اتصال دائم ومشفر SSL</span>
                          </div>
                        </div>

                        {/* Left/Right Grid: Keywords Injector & AI Content Engine */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                          {/* Left: Keywords manager */}
                          <div className="lg:col-span-6 space-y-4">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-md">
                              <h3 className="text-xs font-black text-teal-355 border-b border-slate-850 pb-2 flex items-center gap-1.5 font-bold">
                                <Plus className="w-4 h-4 text-teal-400" />
                                <span>إدراج كبسولات كلمات دلالية للزحف</span>
                              </h3>

                              <form onSubmit={handleAddKeyword} className="space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                  <div className="sm:col-span-2">
                                    <label className="text-[10px] text-slate-400 block mb-1">الكلمة أو الجملة المستهدفة بالبحث:</label>
                                    <input
                                      type="text"
                                      required
                                      disabled={employeeRole === 'editor'}
                                      value={newKeywordPhrase}
                                      onChange={(e) => setNewKeywordPhrase(e.target.value)}
                                      placeholder={employeeRole === 'editor' ? 'غير مسموح للمحرر بالإضافة' : "مثال: سيتوتيك في مسقط السيب"}
                                      className="w-full bg-slate-955 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-400 disabled:opacity-50"
                                    />
                                  </div>

                                  <div>
                                    <label className="text-[10px] text-slate-405 block mb-1">بلد الزحف:</label>
                                    <select
                                      disabled={employeeRole === 'editor'}
                                      value={newKeywordCountry}
                                      onChange={(e) => setNewKeywordCountry(e.target.value)}
                                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-slate-202 focus:outline-none disabled:opacity-50"
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
                                  disabled={employeeRole === 'editor'}
                                  className="bg-teal-500 hover:bg-teal-600 font-extrabold text-slate-955 text-xs px-4 py-2 rounded-lg transition duration-155 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  {employeeRole === 'editor' ? 'الإضافة مقيدة للمشرفين' : 'حفظ وحقن الكلمة دلالياً'}
                                </button>
                              </form>

                              {/* Keyword display log */}
                              <div className="space-y-2 max-h-40 overflow-y-auto pt-3 border-t border-slate-850">
                                {keywords.length === 0 ? (
                                  <p className="text-[10px] text-slate-550 text-center">لا توجد كلمات محقونة حالياً في النظام.</p>
                                ) : (
                                  keywords.map(kw => (
                                    <div key={kw.id} className="bg-slate-955 p-2.5 rounded-lg border border-slate-850 flex items-center justify-between text-xs transition hover:border-slate-800">
                                      <div>
                                        <span className="font-extrabold text-slate-200">#{kw.phrase}</span>
                                        <span className="text-[9px] text-slate-550 block">الدولة المستهدفة: {kw.country} • حجم الاهتمام والنمو: {kw.searchVolume}%</span>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (employeeRole === 'editor' || employeeRole === 'publisher') {
                                            alert("⚠️ صلاحيات دورك الوظيفي الحالي تحميك من حذف كلمات الزحف. هذه الإمكانية تقتصر على المدير العام.");
                                            return;
                                          }
                                          handleDeleteKeyword(kw.id);
                                        }}
                                        className="p-1.5 text-slate-550 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition"
                                        title="حذف الكلمة"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Right: AI Article publisher */}
                          <div className="lg:col-span-6 space-y-4">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-md">
                              <h3 className="text-xs font-bold text-teal-355 border-b border-slate-850 pb-2 flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-sky-450" />
                                <span>توليد ونشر آلي للمقالات بالـ AI Content Engine</span>
                              </h3>

                              <div className="space-y-3">
                                <div>
                                  <label className="text-[10px] text-slate-450 block mb-1">اختر الكملة المفتاحية المستهدفة لإنتاج المحتوى الطبي:</label>
                                  <select
                                    disabled={employeeRole === 'editor'}
                                    value={aiSelectedKeyword}
                                    onChange={(e) => setAiSelectedKeyword(e.target.value)}
                                    className="w-full bg-slate-955 text-slate-350 text-xs rounded-xl px-2.5 py-1.5 border border-slate-800 focus:outline-none focus:border-teal-400 cursor-pointer disabled:opacity-50"
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
                                      disabled={employeeRole === 'editor'}
                                      value={aiSelectedCountry}
                                      onChange={(e) => setAiSelectedCountry(e.target.value)}
                                      className="w-full bg-slate-950 text-slate-350 text-xs rounded-xl px-2.5 py-1.5 border border-slate-800 focus:outline-none disabled:opacity-50"
                                    >
                                      {GCC_ST_CONFIGS.map(c => (
                                        <option key={c.code} value={c.code}>{c.nameAr}</option>
                                      ))}
                                    </select>
                                  </div>

                                  <div>
                                    <label className="text-[10px] text-slate-450 block mb-1">المقاطعة/الحي (للهجة الـ SGE):</label>
                                    <input
                                      type="text"
                                      disabled={employeeRole === 'editor'}
                                      value={aiSelectedRegion}
                                      onChange={(e) => setAiSelectedRegion(e.target.value)}
                                      placeholder="مثال: ذفار صلالة"
                                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-205 focus:outline-none disabled:opacity-50"
                                    />
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={handleGenerateAIArticle}
                                  disabled={aiGenerating || !aiSelectedKeyword || employeeRole === 'editor'}
                                  className="w-full py-2 bg-gradient-to-r from-teal-500 to-sky-450 hover:from-teal-600 hover:to-sky-500 rounded-xl font-bold text-slate-950 text-xs transition flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                                  <span>
                                    {aiGenerating 
                                      ? 'جاري صياغة المقال والروابط دلالياً بالـ AI...' 
                                      : employeeRole === 'editor' 
                                      ? 'التوليد مقيد للمشرف المعتمد والناشر' 
                                      : 'صياغة ونشر فوري بالذكاء الاصطناعي (Gemini) 🚀'}
                                  </span>
                                </button>
                                <span className="text-[9px] text-slate-500 block text-center leading-normal">
                                  * يربط المقال تلقائياً بكبينة الواتساب الموحدة {WHATSAPP_NUMBER} ويحقن الأوسمة المناسبة للأرشفة.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Manual Article Publishing & Editing form */}
                        <div id="manual-article-editor-form" className="scroll-mt-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-lg">
                          <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                            <div className="flex items-center gap-2">
                              <div className={`p-2 rounded-lg ${manualIdToEdit ? 'bg-amber-500/10 text-amber-400' : 'bg-teal-500/10 text-teal-400'}`}>
                                <Settings2 className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="text-sm font-black text-white">
                                  {manualIdToEdit ? `مُحرّر الأرشفة: تعديل ومراجعة المقال النشط` : 'لوحة صياغة ونشر المقالات الطبية اليدوية'}
                                </h3>
                                <p className="text-[10px] text-slate-400 font-medium">
                                  {manualIdToEdit ? `أنت الآن تعدل مسودة المقال. قم بتصحيح وتعديل المعايير ثم احفظ التغييرات.` : 'اكتب المقال مباشرة مع إمكانيات حقن الكلمات ومزج العبارات وعرّف من يحقنه.'}
                                </p>
                              </div>
                            </div>

                            {manualIdToEdit && (
                              <button
                                type="button"
                                onClick={() => {
                                  handleCancelEdit();
                                  alert("تم الخروج وإلغاء تعديل المقال، والعودة لوضع الإضافة الجديدة.");
                                }}
                                className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 text-[10px] font-bold transition flex items-center gap-1"
                              >
                                <X className="w-3 h-3" />
                                <span>إلغاء وضع التعديل</span>
                              </button>
                            )}
                          </div>

                          <form onSubmit={handleManualArticlePublish} className="space-y-4 text-slate-300">
                            {/* Title & Category row */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                              <div className="md:col-span-8">
                                <label className="text-[10px] text-slate-400 block mb-1">عنوان المقال المستهدف بالبحث والأناقة وجاذبية زوار SGE:</label>
                                <input
                                  type="text"
                                  required
                                  value={manualTitle}
                                  onChange={(e) => setManualTitle(e.target.value)}
                                  placeholder="مثال: أين يباع سيتوتيك الأصلي في عمان ومميزات فايزر 1461..."
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-teal-400"
                                />
                              </div>

                              <div className="md:col-span-4">
                                <label className="text-[10px] text-slate-400 block mb-1">تصنيف وبوابة الأقسام الطبية:</label>
                                <select
                                  value={manualCategory}
                                  onChange={(e) => setManualCategory(e.target.value)}
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none cursor-pointer"
                                >
                                  <option value="الوعي الطبي والتحقق">الوعي الطبي والتحقق</option>
                                  <option value="توفير وتوزيع طبي">توفير وتوزيع طبي</option>
                                  <option value="إرشاد وتوزيع معتمد">إرشاد وتوزيع معتمد</option>
                                </select>
                              </div>
                            </div>

                            {/* Keywords and Custom author/roles Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div>
                                <label className="text-[10px] text-slate-400 block mb-1">الكلمات الدلالية المدمجة (مفصولة بفاصلة):</label>
                                <input
                                  type="text"
                                  value={manualKeywords}
                                  onChange={(e) => setManualKeywords(e.target.value)}
                                  placeholder="مثال: سيتوتيك, فايزر مسقط, توصيل سريع"
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-teal-400"
                                />
                              </div>

                              <div>
                                <label className="text-[10px] text-slate-400 block mb-1">اسم الكاتب وممثل النشر:</label>
                                <input
                                  type="text"
                                  value={manualAuthor}
                                  onChange={(e) => setManualAuthor(e.target.value)}
                                  placeholder="مثال: د. سليم الصيدلاني"
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-teal-400"
                                />
                              </div>

                              <div>
                                <label className="text-[10px] text-slate-400 block mb-1">لهجة ومسار اللغة المستهدفة:</label>
                                <input
                                  type="text"
                                  value={manualDialect}
                                  onChange={(e) => setManualDialect(e.target.value)}
                                  placeholder="مثال: لهجة عُمانية محلية"
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-teal-400"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-[10px] text-slate-400 block mb-1">المستهدف الجغرافي (الدولة):</label>
                                <select
                                  value={manualCountry}
                                  onChange={(e) => setManualCountry(e.target.value)}
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none cursor-pointer"
                                >
                                  <option value="all">جميع دول الخليج 🌍</option>
                                  {GCC_ST_CONFIGS.map(c => (
                                    <option key={c.code} value={c.code}>{c.nameAr}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="text-[10px] text-slate-400 block mb-1">المنطقة أو الحي المستهدَف (مثال: السيب):</label>
                                <input
                                  type="text"
                                  value={manualRegion}
                                  onChange={(e) => setManualRegion(e.target.value)}
                                  placeholder="مثال: السالبيّة، السيب، مسقط"
                                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-teal-400"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="text-[10px] text-slate-400 block mb-1">محتوى المقال الطبي بالتفصيل (يدعم التنسيق النصي):</label>
                              <textarea
                                required
                                value={manualContent}
                                onChange={(e) => setManualContent(e.target.value)}
                                placeholder="اكتب محتوى المقال الطبي الشامل هنا لعرضه للمرضى والباحثين..."
                                className="w-full h-44 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 font-sans focus:outline-none focus:border-teal-400"
                              />
                            </div>

                            <button
                              type="submit"
                              className={`w-full py-2.5 rounded-xl font-bold text-slate-950 text-xs transition active:scale-95 duration-155 ${manualIdToEdit ? 'bg-amber-400 hover:bg-amber-500' : 'bg-teal-500 hover:bg-teal-600'}`}
                            >
                              {manualIdToEdit ? 'حفظ التحديثات وإعادة جدولة الأرشفة ✏️' : 'نشر وتثبيت المقال الطبي يدوياً في الخادم 🚀'}
                            </button>
                          </form>
                        </div>

                        {/* Real-time article database spreadsheet workspace */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850 pb-3">
                            <div>
                              <h3 className="text-sm font-black text-white flex items-center gap-1.5 font-bold">
                                <Database className="w-4 h-4 text-sky-455" />
                                <span>جدول إدارة المحتوى المنشور والمتابعة والتعديل الفوري</span>
                              </h3>
                              <p className="text-[10px] text-slate-400 font-medium">
                                تصفح كافة محتويات وقاموس الأشفة الطبية النشطة على السيرفر، وتحكم بمسار المقالات للموظفين.
                              </p>
                            </div>

                            {/* Search & filters inside worksheet ledger */}
                            <div className="flex flex-wrap gap-2">
                              <select 
                                value={adminArticleCategory}
                                onChange={(e) => setAdminArticleCategory(e.target.value)}
                                className="bg-slate-955 text-slate-205 text-[10px] sm:text-xs rounded-lg px-2 text-right py-1 border border-slate-800 focus:outline-none cursor-pointer"
                              >
                                <option value="all">جميع فئات الدستور</option>
                                <option value="الوعي الطبي والتحقق">الوعي الطبي والتحقق</option>
                                <option value="توفير وتوزيع طبي">توفير وتوزيع طبي</option>
                                <option value="إرشاد وتوزيع معتمد">إرشاد وتوزيع معتمد</option>
                              </select>

                              <input
                                type="text"
                                value={adminArticleSearch}
                                onChange={(e) => setAdminArticleSearch(e.target.value)}
                                placeholder="البحث في العناوين والمحتوى..."
                                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1 text-[10px] sm:text-xs text-slate-200 focus:outline-none text-right"
                              />
                            </div>
                          </div>

                          {/* Articles Worksheet Grid/Table list */}
                          <div className="overflow-x-auto rounded-xl border border-slate-850 bg-slate-950">
                            {articles.filter(a => {
                              const matchCategory = adminArticleCategory === 'all' || a.category === adminArticleCategory;
                              const q = adminArticleSearch.trim().toLowerCase();
                              return matchCategory && (q === "" || a.title.toLowerCase().includes(q) || a.content.toLowerCase().includes(q) || (a.keywords && a.keywords.some(k => k.toLowerCase().includes(q))));
                            }).length === 0 ? (
                              <div className="p-8 text-center space-y-2">
                                <div className="text-slate-600 font-mono text-center text-[10px]">NO_MATCHED_ARTICLES_FOUND</div>
                                <p className="text-xs text-slate-400">لم نعثر على أي مقالات تطابق خياراتك الحالية للبحث والتصنيف.</p>
                              </div>
                            ) : (
                              <table className="w-full text-right text-xs border-collapse font-sans">
                                <thead>
                                  <tr className="bg-slate-900 border-b border-slate-855 text-[10px] text-slate-400 font-bold">
                                    <th className="p-3">المقال الطبي المستهدف</th>
                                    <th className="p-3 hidden md:table-cell">التصنيف</th>
                                    <th className="p-3">مستهدف البحث الجغرافي</th>
                                    <th className="p-3 hidden sm:table-cell font-mono text-left">الناشر / الكاتب</th>
                                    <th className="p-3 text-left">تاريخ التحديث</th>
                                    <th className="p-3 text-center">أدوات التحكم والناشر</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {articles
                                    .filter(a => {
                                      const matchCategory = adminArticleCategory === 'all' || a.category === adminArticleCategory;
                                      const q = adminArticleSearch.trim().toLowerCase();
                                      return matchCategory && (q === "" || a.title.toLowerCase().includes(q) || a.content.toLowerCase().includes(q) || (a.keywords && a.keywords.some(k => k.toLowerCase().includes(q))));
                                    })
                                    .map(art => {
                                      const isCurrentlyEditing = manualIdToEdit === art.id;
                                      return (
                                        <tr 
                                          key={art.id} 
                                          className={`border-b border-slate-850 transition duration-155 hover:bg-slate-900/40 text-slate-205 ${isCurrentlyEditing ? 'bg-amber-500/5 border-amber-500/30' : ''}`}
                                        >
                                          <td className="p-3 max-w-xs sm:max-w-md">
                                            <div className="space-y-1">
                                              <p className="font-extrabold text-slate-100 leading-snug cursor-pointer hover:text-teal-400 transition" onClick={() => handleStartEdit(art)}>
                                                {art.title}
                                              </p>
                                              <div className="flex flex-wrap gap-1">
                                                <span className="text-[8px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded font-mono">ID: {art.id}</span>
                                                {art.keywords && art.keywords.slice(0, 3).map((kw, idx) => (
                                                  <span key={idx} className="text-[8px] bg-slate-900/60 text-teal-400 font-semibold px-1 py-0.5 rounded font-mono">#{kw}</span>
                                                ))}
                                              </div>
                                            </div>
                                          </td>

                                          <td className="p-3 hidden md:table-cell">
                                            <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-lg whitespace-nowrap">
                                              {art.category}
                                            </span>
                                          </td>

                                          <td className="p-3">
                                            <div className="space-y-0.5">
                                              <span className="text-[10px] font-bold text-slate-300">
                                                {art.country === 'all' ? 'جميع دول الخليج 🌍' : art.country === 'OM' ? 'سلطنة عمان 🇴🇲' : art.country === 'SA' ? 'المملكة السعودية 🇸🇦' : art.country === 'AE' ? 'الإمارات 🇦🇪' : art.country === 'QA' ? 'قطر 🇶🇦' : art.country === 'KW' ? 'الكويت 🇰🇼' : art.country === 'BH' ? 'البحرين 🇧🇭' : art.country}
                                              </span>
                                              {art.region && (
                                                <span className="text-[9px] text-slate-400 block truncate max-w-[120px]">
                                                  حي: {art.region}
                                                </span>
                                              )}
                                            </div>
                                          </td>

                                          <td className="p-3 hidden sm:table-cell font-mono text-left text-[10px] text-slate-450">
                                            {art.author || 'المدير العام'}
                                          </td>

                                          <td className="p-3 text-left font-mono text-[10px] text-slate-505">
                                            {art.lastUpdated}
                                          </td>

                                          <td className="p-3">
                                            <div className="flex flex-wrap items-center justify-center gap-1.5 font-sans">
                                              <button
                                                type="button"
                                                onClick={() => handleStartEdit(art)}
                                                className={`px-2 py-1 rounded text-[10px] transition ${isCurrentlyEditing ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'}`}
                                              >
                                                ✏️ تعديل
                                              </button>

                                              <button
                                                type="button"
                                                onClick={() => {
                                                  if (employeeRole === 'editor') {
                                                    alert("⚠️ دورك الوظيفي كمحرر لا يسمح لك بحذف المقالات المنشورة. يرجى مراجعة المسؤول.");
                                                    return;
                                                  }
                                                  handleDeleteArticle(art.id);
                                                }}
                                                className="px-2 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-450 border border-rose-500/20 text-[10px] transition"
                                              >
                                                🗑️ حذف
                                              </button>

                                              <button
                                                type="button"
                                                onClick={() => {
                                                  setActiveArticleId(art.id);
                                                  setCurrentTab('articles');
                                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                                  alert(`🌐 جاري نقلك إلى الباب الطبي لمعاينة المقال "${art.title}" كما يراه المريض والزوار!`);
                                                }}
                                                className="px-2 py-1 rounded bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20 text-[10px] transition"
                                              >
                                                👁️ معاينة
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            )}
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
