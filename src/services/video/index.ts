
// Main entry point for video services

// Re-export all functionality from the sub-modules
export * from './mockData';
export * from './videoDatabase';
export * from './videoStorage';
export * from './videoUtils';

// Provide a centralized API for getting videos
import { mockVideos } from './mockData';
import { Video } from '@/types/video';

/**
 * Get all available videos
 */
export const getVideos = (): Video[] => {
  return mockVideos;
};
