
import { GradeLevel } from '@/data/gradeData';

export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
  subject?: string;
  grade?: GradeLevel;
  description?: string;
  topic?: string;  // Add topic field
  videoUrl: string; // Make videoUrl required
  examples?: Array<{
    question: string;
    options?: string[];
    answer?: string;
    explanation?: string;
  }>;
}
