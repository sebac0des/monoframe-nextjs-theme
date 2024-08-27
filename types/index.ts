export interface VideoCardItem {
  id: number;
  videoUrl: string;
  title: string;
  short_desc?:string
  posterUrl?: string;
}

export interface AudienceItem {
    id: number,
    iconImageUrl: string,
    title: string,
    desc: string,
  }

export interface Testimonial {
  id: number;
  name: string;
  reviewFont: string;
  content: string;
  image: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  desc?: string;
}

export interface QuestionItem {
  id: number;
  title: string;
  content: string;
}

export interface Settings {
  social: SocialSettings
}

export interface SocialSettings {
    username: string;
    instagram: string;
    facebook: string;
    tiktok: string;
    google_maps:string
}
