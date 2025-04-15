
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';

// Filter out all videos to match the user's request to delete all educational content
const cleanMockVideos = () => {
  // Clear the mockVideos array completely
  mockVideos.length = 0;
};

// Clean up mockVideos array on module initialization
cleanMockVideos();

// Disabled function to get subject videos - now returns empty array
export const getSubjectVideos = (subject: string): Video[] => {
  return [];
};

// Disabled function to get subject and grade videos - now returns empty array
export const getSubjectGradeVideos = (subject: string, grade: GradeLevel): Video[] => {
  return [];
};

// Disabled function to ensure subjects have videos - now does nothing
const ensureAllSubjectsHaveVideos = () => {
  // Do nothing - we want to clear all videos
};

// Initialize by doing nothing (previously would ensure all subjects have videos)
// ensureAllSubjectsHaveVideos();
