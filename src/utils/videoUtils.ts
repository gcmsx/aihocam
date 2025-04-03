
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';

export const getSubjectVideos = (subject: string): Video[] => {
  // Get all videos for the specific subject
  const subjectVideos = mockVideos.filter(
    video => video.subject && video.subject === subject
  );

  // If there are fewer than 4 videos, generate additional mock videos
  if (subjectVideos.length < 4) {
    const additionalVideos: Video[] = [];
    
    for (let i = subjectVideos.length; i < 4; i++) {
      additionalVideos.push({
        id: Math.max(...mockVideos.map(v => v.id)) + i + 1,
        title: `${subject} Dersi ${i + 1}. Video`,
        subject: subject,
        thumbnailUrl: '/placeholder.svg', // Use a placeholder image
        duration: `${Math.floor(Math.random() * 20 + 5)} dk`,
        saved: false
      });
    }

    return [...subjectVideos, ...additionalVideos];
  }

  return subjectVideos;
};

