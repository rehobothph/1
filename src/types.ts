export type Language = 'kn' | 'en';

export interface ServiceTiming {
  id: string;
  titleKn: string;
  titleEn: string;
  dayKn: string;
  dayEn: string;
  timeKn: string;
  timeEn: string;
  type: string;
  descriptionKn: string;
  descriptionEn: string;
}

export interface PrayerSubmission {
  name: string;
  phone?: string;
  place?: string;
  message: string;
}
