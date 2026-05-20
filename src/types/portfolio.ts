export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatar: string;
  email: string;
  socials: SocialLink[];
  focusAreas: string[];
  strengths: string[];
};

export type Project = {
  title: string;
  summary: string;
  cover: string;
  tags: string[];
  outcome?: string;
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
};

export type ContactInfo = {
  title: string;
  description: string;
  email: string;
  socials: SocialLink[];
};
