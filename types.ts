export interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: 'ClipboardCheck' | 'Leaf' | 'UserCheck' | 'ShieldCheck';
}

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
}

export interface ImageData {
  url: string;
  alt: string;
  context: string;
}