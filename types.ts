export interface ProjectScope {
  complexity: number;
  estimatedWeeks: number;
  costEstimate: string;
  techStack: string[];
  features: string[];
  summary: string;
}

export enum ServiceType {
  WEB_DEV = 'Web Development',
  MOBILE_APP = 'Mobile Application',
  UI_UX = 'UI/UX Design',
  CONSULTING = 'Tech Consulting'
}

export interface NavItem {
  label: string;
  page: Page;
}

export type Page = 'home' | 'services' | 'process' | 'work' | 'about' | 'contact';