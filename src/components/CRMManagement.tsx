import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  User, 
  ShoppingBag, 
  Clock, 
  MapPin, 
  MessageSquare, 
  Filter, 
  Trash2, 
  Compass, 
  TrendingUp, 
  CheckCircle, 
  Layers, 
  ArrowLeftRight, 
  CornerDownLeft, 
  AlertCircle 
} from 'lucide-react';
import { GCC_ST_CONFIGS } from '../data';

interface LocalOrder {
  id: string;
  name: string;
  phone: string;
  country: string;
  region: string;
  quantity: number;
  deliveryType: 'express' | 'standard';
  notes?: string;
  status: 'pending' | 'completed' | 'cancelled' | 'contacted' | 'shipped';
  createdAt: string;
}

const INITIAL_MOCK_CRM_ORDERS: LocalOrder[] = [
  {
    id: 'ord-101',
    name: 'أحمد بن عبد الله البوسعيدي',
    phone: '+96876636098',
    country: 'OM',
    region: 'مسقط - الموالح',
    quantity: 1,
    deliveryType: 'express',
    notes: 'توصيل عاجل لموالح السيب بجوار سيتي سنتر',
    status: 'completed',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'ord-102',
    name: 'سارة العتيبي',
    phone: '+966504221199',
    country: 'SA',
    region: 'الرياض - السليمانية',
    quantity: 2,
    deliveryType: 'express',
    notes: 'يرجى الاتصال قبل التسليم بنصف ساعة',
    status: 'pending',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 'ord-103',
    name: 'حمدان الشامسي',
    phone: '+97152990011',
    country: 'AE',
    region: 'دبي - البرشاء ١',
    quantity: 1,
    deliveryType: 'express',
    notes: 'توصيل سري خفي للموثوقية الكبرى',
    status: 'shipped',
    createdAt: new Date(Date.now() - 3600000).toISOString()
  }
];

export default function CRMManagement() {
  const [orders, setOrders] = useState<LocalOrder[]>([]);
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  // Custom templates
  const [selectedTemplate, setSelectedTemplate] = useState<string>('greeting');
  const [agentRoutingMode, setAgentRoutingMode] = useState<'central' | 'smart'>('smart');
  const [autoReplyEnabled, setAutoReplyEnabled] = useState<boolean>(true);

  // Template pre-fill
  const templates: Record<string, string> = {
    greeting: "أهلاً بك يا فندم بخصوص استشارتك حول سيتوتيك الأصلي، تتوفر حالياً شحنات مضمونة برمز فايزر 1461 مع شحن مبرد طبي خفي خلال ساعتين.",
    pricing: "نوفر العبوة الطبية الأصلية مباشرة من التوكيل المعتمد، السعر يتضمن التوجيه والاستشارة والمتابعة المجانية المتواصلة مع استشاري التوزيع.",
    delivery: "تم تفويض المندوب السري الأقرب لتوصيل طلبك المبرد إلى عنوانك المتفق عليه. يُرجى الحفاظ على سرية استلام الطرد.",
    verification: "للتحقق من أصالة حبوب سيتوتيك الموفرة لديك، يُرجى فحص نقش 1461 السداسي ومطابقة الأقراص مع العلبة الموثقة الموضحة بالمنصة."
  };

  const loadCrmData = () => {
    const stored = localStorage.getItem('local_orders_crm');
    if (!stored) {
      localStorage.setItem('local_orders_crm', JSON.stringify(INITIAL_MOCK_CRM_ORDERS));
      setOrders(INITIAL_MOCK_CRM_ORDERS);
    } else {
      setOrders(JSON.parse(stored));
    }
  };

  useEffect(() => {
    loadCrmData();
    
    // Listen to updates from other pages
    const handleCrmUpdate = () => {
      loadCrmData();
    };
    window.addEventListener('crm_updated', handleCrmUpdate);
    return () => {
      window.removeEventListener('crm_updated', handleCrmUpdate);
    };
  }, []);

  const handleStatusChange = (orderId: string, nextStatus: any) => {
    const updated = orders.map(o => {
      if (o.id === orderId) {
        return { ...o, status: nextStatus };
      }
      return o;
    });
    setOrders(updated);
    localStorage.setItem('local_orders_crm', JSON.stringify(updated));
  };

  const handleDeleteOrder = (orderId: string) => {
    if (!confirm('هل تريد مسح هذا العميل/الطلب نهائيا؟')) return;
    const updated = orders.filter(o => o.id !== orderId);
    setOrders(updated);
    localStorage.setItem('local_orders_crm', JSON.stringify(updated));
  };

  // Compute conversion metrics
  const totalLeads = orders.length;
  const completedCount = orders.filter(o => o.status === 'completed').length;
  const pendingCount = orders.filter(o => o.status === 'pending').length;
  const shippedCount = orders.filter(o => o.status === 'shipped').length;
  const contactedCount = orders.filter(o => o.status === 'contacted').length;
  const conversionRate = totalLeads > 0 ? ((completedCount / totalLeads) * 100).toFixed(1) : '0';

  // Smart WhatsApp Router numbers mapping
  const getSmartRoutingNumber = (countryCode: string) => {
    if (agentRoutingMode === 'central') return '96876636098'; // central Amman dispatch
    const countryConfig = GCC_ST_CONFIGS.find(c => c.code === countryCode);
    return countryConfig ? countryConfig.whatsappNumber.replace('+', '') : '96876636098';
  };

  const triggerDirectMsgTemplate = (order: LocalOrder) => {
    const textMsg = `عزيزي ${order.name}، بخصوص طلبك رقم (${order.id}) لحي (${order.region}):\n${templates[selectedTemplate]}\nالمرجع الآمن: web.cytotec.fun`;
    const num = getSmartRoutingNumber(order.country);
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(textMsg)}`, '_blank');
  };

  return (
    <div className="space-y-6" id="crm-management-root">
      
      {/* Analytics counter widget */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-right">
          <span className="text-[10px] text-slate-500 font-mono block">TOTAL CRM LEADS</span>
          <span className="text-2xl font-black text-slate-100 font-mono mt-1 block">{totalLeads}</span>
          <p className="text-[10px] text-teal-400 mt-1">✓ شامل نقرات الواتساب والطلبات</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-right">
          <span className="text-[10px] text-slate-500 font-mono block font-bold">CONVERSION RATE</span>
          <span className="text-2xl font-black text-green-400 font-mono mt-1 block">{conversionRate}%</span>
          <p className="text-[10px] text-slate-400 mt-1">العملاء المحولين فعلياً</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-right">
          <span className="text-[10px] text-slate-500 font-mono block">WAITING CALL</span>
          <span className="text-2xl font-black text-yellow-405 font-mono mt-1 block">{pendingCount}</span>
          <p className="text-[10px] text-slate-400 mt-1">بانتظار المراسلة وربط المندوب</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-right">
          <span className="text-[10px] text-slate-500 font-mono block">SHIPPED CHANNELS</span>
          <span className="text-2xl font-black text-sky-400 font-mono mt-1 block">{shippedCount}</span>
          <p className="text-[10px] text-slate-400 mt-1">قيد الشحن الطبي الخفي</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-right col-span-2 md:col-span-1">
          <span className="text-[10px] text-slate-500 font-mono block">COMPLETED DELIVERED</span>
          <span className="text-2xl font-black text-emerald-400 font-mono mt-1 block">{completedCount}</span>
          <p className="text-[10px] text-emerald-500 mt-1">تم الاستلام والموثوقية</p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEADS TABLE AND ACTION ROWS */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-1.5 font-sans">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>إدارة بيانات العملاء والـ Leads النشطين بالخليج</span>
            </h3>

            {/* Filters */}
            <div className="flex gap-2 text-xs">
              <select
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
                className="bg-slate-950 text-slate-350 px-2 py-1.5 rounded-lg border border-slate-850 outline-none cursor-pointer text-xs"
              >
                <option value="all">كل الدول المستفيدة</option>
                {GCC_ST_CONFIGS.map(c => (
                  <option key={c.code} value={c.code}>{c.nameAr}</option>
                ))}
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-950 text-slate-350 px-2 py-1.5 rounded-lg border border-slate-850 outline-none cursor-pointer text-xs"
              >
                <option value="all">جميع الحالات</option>
                <option value="pending">بانتظار الرد (Pending)</option>
                <option value="contacted">تم التواصل (Contacted)</option>
                <option value="shipped">قيد الشحن (Shipped)</option>
                <option value="completed">تم التسليم (Completed)</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {orders.filter(item => {
              const matchCountry = filterCountry === 'all' || item.country === filterCountry;
              const matchStatus = filterStatus === 'all' || item.status === filterStatus;
              return matchCountry && matchStatus;
            }).length === 0 ? (
              <div className="text-center py-12 space-y-3.5 bg-slate-950/40 rounded-xl border border-dashed border-slate-800">
                <AlertCircle className="w-8 h-8 text-slate-650 mx-auto" />
                <p className="text-xs text-slate-500">لا يوجد عملاء أو حجوزات مطابقة لمعايير البحث حالياً.</p>
              </div>
            ) : (
              orders.filter(item => {
                const matchCountry = filterCountry === 'all' || item.country === filterCountry;
                const matchStatus = filterStatus === 'all' || item.status === filterStatus;
                return matchCountry && matchStatus;
              }).map(o => (
                <div 
                  key={o.id}
                  className="bg-slate-955 border border-slate-800/80 p-4 rounded-xl space-y-3 hover:border-slate-700 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
                    
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-900 rounded-lg text-teal-400 border border-slate-800">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-150 leading-none">{o.name}</h4>
                          <span className="bg-slate-900 text-[9px] text-slate-450 px-1.5 py-0.5 rounded uppercase font-mono border border-slate-800">{o.id}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1 leading-none font-mono">{o.phone}</p>
                      </div>
                    </div>

                    {/* Status badge toggler */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <span className="text-[10px] text-slate-500 hidden sm:inline">الحالة:</span>
                      <select
                        value={o.status}
                        onChange={(e) => handleStatusChange(o.id, e.target.value as any)}
                        className={`text-[10px] font-bold rounded-lg px-2 py-1 border outline-none cursor-pointer ${
                          o.status === 'completed' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : o.status === 'shipped'
                            ? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                            : o.status === 'contacted'
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                            : 'bg-yellow-500/10 text-yellow-405 border-yellow-500/20'
                        }`}
                      >
                        <option value="pending" className="bg-slate-950 text-slate-300">⏳ قيد الانتظار</option>
                        <option value="contacted" className="bg-slate-950 text-slate-300">💬 تم التواصل</option>
                        <option value="shipped" className="bg-slate-950 text-slate-300">🚚 قيد الشحن</option>
                        <option value="completed" className="bg-slate-950 text-slate-300">🟢 اكتمل وتم الاستلام</option>
                        <option value="cancelled" className="bg-slate-950 text-slate-300">❌ ملغي</option>
                      </select>

                      <button 
                        onClick={() => handleDeleteOrder(o.id)}
                        className="p-1 px-1.5 bg-slate-900 text-slate-600 hover:text-red-400 rounded-md hover:bg-slate-950 transition border border-slate-800"
                        title="حذف الطلب"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                  {/* Order meta spec */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-850 text-xs text-slate-300">
                    <div>
                      <span className="text-[10px] text-slate-500 block">المحافظة / الحي المستهدف للأرشفة:</span>
                      <span className="font-semibold text-sky-300 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>📍 {o.region} ({o.country})</span>
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 block">الكمية ونوع الحجز والمناديب:</span>
                      <span className="font-bold text-slate-200 mt-0.5 block">
                        📦 {o.quantity} أقراص فايزر • {o.deliveryType === 'express' ? 'توصيل عسكري سريع' : ' عادي'}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 block">وقت التسجيل وتتبع الكبسولة:</span>
                      <span className="font-mono text-slate-400 block mt-0.5">
                        ⏱️ {new Date(o.createdAt).toLocaleString('ar-EG', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })}
                      </span>
                    </div>
                  </div>

                  {o.notes && (
                    <p className="text-[11px] text-slate-400 bg-slate-900/40 p-2 rounded border border-slate-850 leading-relaxed text-right">
                      💡 <strong>ملاحظة إضافية للفرع:</strong> {o.notes}
                    </p>
                  )}

                  {/* Immediate actions */}
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => triggerDirectMsgTemplate(o)}
                      className="bg-green-500 hover:bg-green-600 text-slate-950 font-black text-[11px] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>اتصال المندوب وإرسال تيكست الواتساب</span>
                    </button>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>

        {/* INTEGRATIONS AND WEB HOOK SYSTEM CONFIG */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-5 shadow-xl">
          
          <h3 className="text-sm font-bold text-slate-150 border-b border-slate-800 pb-3 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>إعدادات تحويل ورسائل الـ CRM التلقائية</span>
          </h3>

          {/* CRM Routing select */}
          <div className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-xs text-slate-400 block">توجيه المحادثات الذكي (Smart Routing):</label>
              <div className="space-y-1.5">
                {[
                  { id: 'smart', title: 'التوجيه اللامركزي المباشر لمندوب الدولة', desc: 'كل عميل يوجه تلقائياً لرقم الواتساب المحلي لبلده.' },
                  { id: 'central', title: 'التوجيه المركزي الموحد', desc: 'تثبيت الإدارة المركزية على فرع مسقط الرئيسي (+968).' }
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setAgentRoutingMode(r.id as any)}
                    className={`w-full text-right p-3 rounded-xl text-xs transition border flex flex-col gap-1 ${agentRoutingMode === r.id ? 'bg-teal-500/10 border-teal-500/30 text-teal-300' : 'bg-slate-950 border-slate-800 text-slate-450'}`}
                  >
                    <span className="font-bold flex items-center justify-between">
                      <span>{r.title}</span>
                      <span className={`w-2 h-2 rounded-full ${agentRoutingMode === r.id ? 'bg-teal-400' : 'bg-transparent'}`} />
                    </span>
                    <span className="text-[10px] text-slate-500 leading-normal">{r.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Auto reply logic toggle */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 font-bold">🟢 الرد الآلي بالواتساب (Auto Reply):</span>
                <input
                  type="checkbox"
                  checked={autoReplyEnabled}
                  onChange={(e) => setAutoReplyEnabled(e.target.checked)}
                  className="w-4 h-4 text-teal-500 bg-slate-900 rounded border-slate-800 focus:ring-teal-500 cursor-pointer"
                />
              </div>
              <p className="text-[10px] text-slate-500 leading-normal">
                عند النقر على الأزرار بالمنصة، يقوم المحرك بربط العميل فوراً برسالة ترحيبية مهيكلة تمنع التفريط أو الانتظار وتتضمن معالم المنطقة.
              </p>
            </div>

            {/* WhatsApp template selection */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <label className="text-xs text-slate-400 block font-medium">اختر قالب الرد والمراسلة النشط:</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-teal-400 cursor-pointer text-right"
              >
                <option value="greeting">👋 قالب ترحيبي بموثوقية 1461</option>
                <option value="pricing">💰 قالب الأسعار والمتابعة الطبية</option>
                <option value="delivery">🚀 قالب تفويض المندوب السري والشحن</option>
                <option value="verification">🔬 قالب كيف تميز الأصلي</option>
              </select>

              <div className="p-3.5 bg-slate-950 border border-slate-850 rounded-xl space-y-1.5">
                <span className="text-[10px] text-slate-505 block">معاينة نص القالب الذي سيرسل بالواتساب:</span>
                <p className="text-[10px] text-slate-300 leading-relaxed text-right italic">
                  "{templates[selectedTemplate]}"
                </p>
              </div>
            </div>

            {/* Lead tracking pixel config instruction */}
            <div className="p-4 bg-sky-950/20 border border-sky-500/20 rounded-xl space-y-1 text-right">
              <h4 className="font-bold text-xs text-sky-450">مستشعر التحويل بكسل (Conversion Tracker):</h4>
              <p className="text-[9px] text-slate-400 leading-relaxed">
                نقرات الرقم التوجيهي تقوم تلقائياً بضخ إشعارات Pixels للمنظومة الإعلانية لجمع جمهور التحويل الخليجي المهتم بدواء سيتوتيك.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
