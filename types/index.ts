export interface WaitlistFormData {
  name: string;
  whatsapp: string;
  university?: string;
}

export interface FeaturePillar {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  badgeText: string;
  badgeColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProblemCard {
  title: string;
  subtitle: string;
  statBadge: string;
  bulletPoints: string[];
}
