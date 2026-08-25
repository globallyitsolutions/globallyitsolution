export type ServiceType = 
  | 'Business Website'
  | 'AI & Business Automation'
  | 'Custom Web Application'
  | 'Website Maintenance'
  | 'Other';

export interface ServiceCardItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  isFlagship: boolean;
  features: string[];
  ctaText: string;
  ctaAction: 'website' | 'automation' | 'custom' | 'quote' | 'demo';
  iconName: string;
}

export interface AutomationUseCase {
  id: string;
  title: string;
  description: string;
  iconName: string;
  exampleScenario: string;
  businessBenefit: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: ServiceType;
  message: string;
}
