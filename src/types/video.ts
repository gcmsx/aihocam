
export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
  subject?: string;
  description?: string;
  examples?: Array<{
    question: string;
    options?: string[];
    answer?: string;
    explanation?: string;
  }>;
  videoUrl?: string;
}
