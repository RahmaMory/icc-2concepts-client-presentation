export type LinkTarget = {
  title: string;
  description: string;
  url: string;
};

export type RelatedProject = LinkTarget & {
  id: string;
  category: string;
  image: string;
  logoText: string;
};

export type ClientConfig = {
  clientName: string;
  industry: string;
  eyebrow: string;
  headline: string;
  intro: string;
  accent: string;
  accentRgb: string;
  proposal: LinkTarget & {
    price: string;
    delivery: string;
    scope: string[];
  };
  mainDemo: LinkTarget & {
    image: string;
  };
  related: RelatedProject[];
  companyWebsite: string;
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    whatsapp: string;
  };
};
