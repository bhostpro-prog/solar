import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

const supabaseUrl = `https://${projectId}.supabase.co`;

export const supabase = createClient(supabaseUrl, publicAnonKey);

export type PageContent = {
  id: string;
  page: string;
  section: string;
  key: string;
  content: any;
  updated_at: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  location: string;
  scope: string;
  findings: string;
  result: string;
  image_url: string;
  order: number;
  created_at: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  image_url: string;
  order: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  content: string;
  author: string;
  position: string;
  created_at: string;
};
