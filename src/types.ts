export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string; // Dynamic rendering from Lucide React
  description: string;
  items: ServiceItem[];
}

export interface Project {
  id: string;
  title: string;
  category: "Website Development" | "Branding Projects" | "Social Media Campaigns" | "Marketing Campaigns" | "UI/UX Projects";
  description: string;
  challenge: string;
  solution: string;
  results: string;
  client: string;
  year: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
}
