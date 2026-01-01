import * as kv from '../../supabase/functions/server/kv_store';

// Keys for different content types
export const CONTENT_KEYS = {
  HOME_HERO: 'cms:home:hero',
  HOME_HIGHLIGHTS: 'cms:home:highlights',
  HOME_SUBSIDY: 'cms:home:subsidy',
  HOME_FINANCING: 'cms:home:financing',
  ABOUT_OVERVIEW: 'cms:about:overview',
  ABOUT_MISSION: 'cms:about:mission',
  ABOUT_VALUES: 'cms:about:values',
  SERVICES_LIST: 'cms:services:list',
  PROJECTS_LIST: 'cms:projects:list',
  TESTIMONIALS: 'cms:testimonials',
  SAFETY_PROTOCOLS: 'cms:safety:protocols',
  SAFETY_CERTIFICATIONS: 'cms:safety:certifications',
  CONTACT_INFO: 'cms:contact:info',
};

export type HeroContent = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaButtons: Array<{
    text: string;
    link: string;
    type: 'primary' | 'secondary';
  }>;
};

export type HighlightCard = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type ServiceData = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  imageUrl: string;
  order: number;
};

export type ProjectData = {
  id: string;
  title: string;
  client: string;
  location: string;
  scope: string;
  findings: string;
  result: string;
  imageUrl: string;
  order: number;
};

export type TestimonialData = {
  id: string;
  content: string;
  author: string;
  position: string;
};

// Default content for initialization
export const DEFAULT_HERO_CONTENT: HeroContent = {
  title: 'Empower Your Home with Solar Rooftop – Clean, Affordable Energy for Tamil Nadu & Pondicherry',
  subtitle: 'Transform your residential or commercial space into a sustainable powerhouse. Enjoy government subsidies, fast ROI, and zero upfront hassle with our expert EPC services.',
  imageUrl: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
  ctaButtons: [
    { text: 'Book Free Site Assessment', link: '/contact', type: 'primary' },
    { text: 'Explore Subsidy Calculator', link: '#subsidy', type: 'secondary' },
    { text: 'Download ROI Guide', link: '#roi', type: 'secondary' },
  ],
};
