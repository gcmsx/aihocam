
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';

// Filter out videos with specific topic names like "Cumhuriyetin İlanı" or "Periyodik Tablo"
const unwantedTopics = ["Cumhuriyetin İlanı", "Periyodik Tablo", "Osmanlı İmparatorluğu", "İnteraktif Deney"];

// Helper function to clean unwanted videos from mockVideos array
const cleanMockVideos = () => {
  const indexesToRemove: number[] = [];
  
  // Find videos with unwanted topics
  mockVideos.forEach((video, index) => {
    if (unwantedTopics.some(topic => video.title.includes(topic))) {
      indexesToRemove.push(index);
    }
  });
  
  // Remove videos from highest index to lowest to avoid index shifting issues
  for (let i = indexesToRemove.length - 1; i >= 0; i--) {
    mockVideos.splice(indexesToRemove[i], 1);
  }
};

// Clean up mockVideos array on module initialization
cleanMockVideos();

export const getSubjectVideos = (subject: string): Video[] => {
  // Get all videos for the specific subject
  const subjectVideos = mockVideos.filter(
    video => video.subject && video.subject === subject
  );

  // If there are fewer than 4 videos, generate additional mock videos
  if (subjectVideos.length < 4) {
    const additionalVideos: Video[] = [];
    
    // Calculate how many additional videos we need
    const videosToAdd = 4 - subjectVideos.length;
    
    // Create unique IDs for new videos
    const maxId = mockVideos.length > 0 ? Math.max(...mockVideos.map(v => v.id)) : 0;
    
    // List of placeholder images we can use
    const placeholderImages = [
      '/placeholder.svg',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    ];
    
    for (let i = 0; i < videosToAdd; i++) {
      const videoNumber = subjectVideos.length + i + 1;
      const newVideo = {
        id: maxId + i + 1,
        title: `${subject} Dersi ${videoNumber}. Video`,
        subject: subject,
        thumbnailUrl: placeholderImages[i % placeholderImages.length], 
        duration: `${Math.floor(Math.random() * 20 + 5)} dk`,
        saved: false
      };
      
      // Push to both mock videos array and our result array
      mockVideos.push(newVideo);
      additionalVideos.push(newVideo);
    }

    console.log(`Added ${additionalVideos.length} videos for ${subject}. Total: ${subjectVideos.length + additionalVideos.length}`);
    return [...subjectVideos, ...additionalVideos];
  }

  return subjectVideos;
};

// Function to get videos for a specific subject and grade
export const getSubjectGradeVideos = (subject: string, grade: GradeLevel): Video[] => {
  // First try to find videos that already have the grade specified
  const existingVideos = mockVideos.filter(
    video => video.subject === subject && video.grade === grade
  );
  
  // If we have sufficient videos, return them
  if (existingVideos.length >= 4) {
    return existingVideos;
  }
  
  // Otherwise, create grade-specific videos
  const additionalVideos: Video[] = [];
  
  // Calculate how many additional videos we need
  const videosToAdd = 4 - existingVideos.length;
  
  // Create unique IDs for new videos
  const maxId = mockVideos.length > 0 ? Math.max(...mockVideos.map(v => v.id)) : 0;
  
  // List of placeholder images we can use
  const placeholderImages = [
    '/placeholder.svg',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  ];
  
  for (let i = 0; i < videosToAdd; i++) {
    const videoNumber = existingVideos.length + i + 1;
    const newVideo = {
      id: maxId + i + 1,
      title: `${subject} ${grade}. Sınıf - ${videoNumber}. Video`,
      subject: subject,
      grade: grade,
      thumbnailUrl: placeholderImages[i % placeholderImages.length], 
      duration: `${Math.floor(Math.random() * 20 + 5)} dk`,
      saved: false
    };
    
    // Push to both mock videos array and our result array
    mockVideos.push(newVideo);
    additionalVideos.push(newVideo);
  }

  console.log(`Added ${additionalVideos.length} videos for ${subject} ${grade}. sınıf. Total: ${existingVideos.length + additionalVideos.length}`);
  return [...existingVideos, ...additionalVideos];
};
