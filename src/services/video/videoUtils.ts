
import { Video } from '@/types/video';

/**
 * Search videos based on query string
 */
export const searchVideos = (query: string, videos: Video[]): Video[] => {
  if (!query) return [];
  
  return videos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase())
  );
};

/**
 * Get videos by their IDs
 */
export const getVideosByIds = (ids: number[], allVideos: Video[]): Video[] => {
  if (!ids || !Array.isArray(ids) || ids.length === 0) return [];
  
  return allVideos.filter(video => ids.includes(video.id));
};

/**
 * Update video saved status based on saved IDs
 */
export const updateVideoSavedStatus = (
  videos: Video[], 
  savedIds: number[]
): Video[] => {
  if (!videos || !Array.isArray(videos)) return [];
  if (!savedIds || !Array.isArray(savedIds)) return videos;
  
  return videos.map(video => ({
    ...video,
    saved: savedIds.includes(video.id)
  }));
};
