
// Main entry point for video services

// Re-export all functionality from the sub-modules
export * from './mockData';
export * from './videoDatabase';
export * from './videoStorage';
export * from './videoUtils';

// Provide a centralized API for getting videos
import { mockVideos } from './mockData';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, getRecentVideosFromStorage, getVideoFromIndexedDB } from './videoStorage';

/**
 * Get all available videos
 */
export const getVideos = (): Video[] => {
  return mockVideos;
};

/**
 * Get video by ID from all available videos
 */
export const getVideoById = (id: number, allVideos: Video[] = mockVideos): Video | null => {
  return allVideos.find(v => v.id === id) || null;
};

/**
 * Get videos by IDs
 */
export const getVideosByIds = (ids: number[], allVideos: Video[] = mockVideos): Video[] => {
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
 * Search for videos by title or subject
 */
export const searchVideos = (query: string, videos: Video[]): Video[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  return videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    (video.subject && video.subject.toLowerCase().includes(searchTerm))
  );
};

/**
 * Get a video with full details, first checking IndexedDB then falling back to mockVideos
 */
export const getFullVideoDetails = async (videoId: number): Promise<Video | null> => {
  try {
    // First check if we have the video in IndexedDB (for offline support)
    const offlineVideo = await getVideoFromIndexedDB(videoId);
    if (offlineVideo) {
      return {
        ...offlineVideo,
        saved: true // If it's in IndexedDB, it's saved
      };
    }
    
    // If not in IndexedDB, get from our mocked data
    const video = getVideoById(videoId);
    if (!video) return null;
    
    // Check if the video is saved
    const savedIds = getSavedVideosFromStorage();
    return {
      ...video,
      saved: savedIds.includes(videoId)
    };
  } catch (error) {
    console.error("Error getting full video details:", error);
    return null;
  }
};
