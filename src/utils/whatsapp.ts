import { ContactFormData } from '../types';

// Internal business phone number - strictly internal for tel: and WhatsApp API links
// Note: Must NEVER be rendered as visible text on the website!
const INTERNAL_PHONE_NUMBER = '918122290945';
export const OFFICIAL_EMAIL = 'globallyitsolutions@gmail.com';

export type WhatsAppActionType = 
  | 'demo'
  | 'website'
  | 'automation'
  | 'general'
  | 'general_requirement'
  | 'quote'
  | 'custom';

export const WHATSAPP_MESSAGES: Record<WhatsAppActionType, string> = {
  demo: 'Hello Globally IT Solutions, I would like to request a demo and know more about your solutions.',
  website: 'Hello Globally IT Solutions, I am interested in getting a website for my business. I would like to discuss my requirements.',
  automation: 'Hello Globally IT Solutions, I am interested in automating some of my business processes. I would like to discuss my requirements.',
  general: 'Hello Globally IT Solutions, I would like to know more about your services.',
  general_requirement: 'Hello Globally IT Solutions, I would like to know more about your services and discuss a requirement for my business.',
  quote: 'Hello Globally IT Solutions, I would like to discuss a project and get a quote. Please let me know how we can proceed.',
  custom: 'Hello Globally IT Solutions, I have a project inquiry for my business.',
};

/**
 * Returns a fully encoded WhatsApp URL with the specified pre-filled message
 */
export function getWhatsAppUrl(type: WhatsAppActionType = 'general', customText?: string): string {
  const message = customText && customText.trim().length > 0 
    ? customText 
    : WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.general;
  
  return `https://wa.me/${INTERNAL_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a structured WhatsApp message from the contact form
 */
export function generateFormWhatsAppUrl(data: ContactFormData): string {
  const lines: string[] = [
    'New enquiry for Globally IT Solutions',
    '',
    `Name: ${data.name || 'Not provided'}`,
    `Business: ${data.businessName || 'Not provided'}`,
    `Service: ${data.service}`,
    `Email: ${data.email || 'Not provided'}`,
  ];

  if (data.phone && data.phone.trim().length > 0) {
    lines.push(`Phone: ${data.phone.trim()}`);
  }

  lines.push(`Requirement: ${data.message || 'I would like to discuss this requirement.'}`);

  const formattedMessage = lines.join('\n');
  return `https://wa.me/${INTERNAL_PHONE_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
}

/**
 * Returns internal tel: link without ever exposing phone text
 */
export function getTelUrl(): string {
  return `tel:+${INTERNAL_PHONE_NUMBER}`;
}

/**
 * Returns mailto link
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${OFFICIAL_EMAIL}${query}`;
}
