export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}
