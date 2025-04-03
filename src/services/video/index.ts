
// Main entry point for video services

// Re-export all functionality from the sub-modules
export * from './mockData';
export * from './videoDatabase';
export * from './videoStorage';
export * from './videoUtils';

// Provide a centralized API for getting videos
import { mockVideos } from './mockData';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, getRecentVideosFromStorage } from './videoStorage';

/**
 * Get all available videos
 */
export const getVideos = (): Video[] => {
  return mockVideos;
};

/**
 * Get videos by IDs
 */
export const getVideosByIds = (ids: number[], allVideos: Video[]): Video[] => {
  return ids.map(id => {
    const video = allVideos.find(v => v.id === id);
    return video || null;
  }).filter((video): video is Video => video !== null);
};

/**
 * Update video saved status based on saved IDs
 */
export const updateVideoSavedStatus = (videos: Video[], savedIds: number[]): Video[] => {
  return videos.map(video => ({
    ...video,
    saved: savedIds.includes(video.id)
  }));
};

/**
 * Search for videos by title
 */
export const searchVideos = (query: string, videos: Video[]): Video[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  return videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    (video.subject && video.subject.toLowerCase().includes(searchTerm))
  );
};
