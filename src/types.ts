export interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  country: string; // "all" or specific GCC country code
  region?: string;  // specific region if applicable
  keywords: string[];
  dialect: string;  // GCC specific terms
  lastUpdated: string;
  author: string;
}

export interface SEOKeyword {
  id: string;
  phrase: string;
  country: string; // e.g. "OM", "SA", "AE", "QA", "BH", "KW", "GLOBAL"
  searchVolume: number; // simulated rating for SEO feedback
  status: 'active' | 'pending';
}

export interface OrderRequest {
  id: string;
  name: string;
  phone: string;
  country: string;
  region: string;
  quantity: number;
  deliveryType: 'express' | 'standard';
  notes?: string;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface GCCStateConfig {
  code: string;
  nameAr: string;
  nameEn: string;
  whatsappNumber: string;
  deliveryTime: string;
  regions: string[];
  localDialectTerms: string[];
  disclaimer: string;
}

export interface SystemSettings {
  whatsappNumber: string;
  deliveryHoursLimit: number;
  allowAIReservations: boolean;
}
