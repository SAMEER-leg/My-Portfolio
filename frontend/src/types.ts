export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  whyMade: string;
  link?: string;
  features?: { title: string, description: string }[];
  purpose?: string;
  fullTechStack?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  /** Digits only (country code + number) for https://wa.me/ */
  whatsappNumber: string;
  /** Human-readable, e.g. +92 3293021285 */
  whatsappDisplay: string;
  email: string;
  projects: Project[];
  services: Service[];
  experience: Experience[];
  socialLinks: SocialLink[];
}
