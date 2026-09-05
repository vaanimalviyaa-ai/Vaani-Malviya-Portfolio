export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  tagline: string;
  bullets: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  bullets: string[];
  framework: string;
  methodology: string;
  keyInsights: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  impact: string;
  badge: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  highlights?: string[];
}
