export interface ServiceBenefit {
  title: string;
  desc: string;
  metric?: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  desc: string;
}

export interface Service {
  id: string;
  areaId: 'energia' | 'mantenimiento' | 'subestaciones';
  areaName: string;
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  heroPhrase: string;
  summary: string;
  iconName: string;
  coverImage: string;
  description: {
    whatIs: string;
    whatFor: string;
    problemSolved: string;
    clientBenefits: string;
  };
  scopeActivities: string[];
  benefits: ServiceBenefit[];
  applications: string[];
  methodology: ServiceStep[];
  equipmentHomologated?: string;
  realCasesExecuted?: string[];
}

export interface Area {
  id: 'energia' | 'mantenimiento' | 'subestaciones';
  number: string;
  title: string;
  subtitle: string;
  heroPhrase: string;
  description: string;
  icon: string;
  badge: string;
  servicesCount: number;
  featuredStats: { label: string; value: string }[];
}

export interface ProjectCase {
  id: string;
  number: number;
  title: string;
  client: string;
  date: string;
  category: 'energia' | 'mantenimiento' | 'subestaciones';
  descriptionPoints: string[];
  equipmentOrScope?: string;
  location?: string;
  badge: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'ENERGÍA' | 'MANTENIMIENTO' | 'ELECTRICIDAD' | 'SUBESTACIONES' | 'ENERGÍAS RENOVABLES' | 'SEGURIDAD' | 'CASOS DE ESTUDIO';
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
  featured?: boolean;
}

export type BlogArticle = BlogPost;

export interface CompanyValue {
  number: number;
  title: string;
  desc: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  specialties: string[];
  experience: string;
}
