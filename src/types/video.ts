
import { GradeLevel } from '@/data/gradeData';

export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
  subject?: string;
  grade?: GradeLevel;
  topic?: string; // YENİ: Konu Alanı
  description?: string;
  examples?: Array<{
    question: string;
    options?: string[];
    answer?: string;
    explanation?: string;
  }>;
  videoUrl?: string;
}
