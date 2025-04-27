import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { GradeLevel, gradeTopics, Topic } from '@/data/gradeData';

// Get all videos based on a list of IDs
export const getVideosByIds = (videoIds: number[]): Video[] => {
  return mockVideos.filter(video => videoIds.includes(video.id));
};

// Get all topics for a specific subject and grade
export const getTopicsForSubjectGrade = (subject: string, grade: GradeLevel): Topic[] => {
  return gradeTopics[subject]?.[grade] || [];
};

// Get all videos for a specific subject (across all grades and topics)
// This might be less useful now, but kept for potential broader views
export const getAllSubjectVideos = (subject: string): Video[] => {
  let subjectVideoIds: number[] = [];
  const grades: GradeLevel[] = [9, 10, 11, 12];

  grades.forEach(grade => {
    const topics = getTopicsForSubjectGrade(subject, grade);
    topics.forEach(topic => {
      subjectVideoIds = [...subjectVideoIds, ...topic.videoIds];
    });
  });

  // Remove duplicates
  const uniqueVideoIds = [...new Set(subjectVideoIds)];
  return getVideosByIds(uniqueVideoIds);
};

// Get videos for a specific topic within a subject and grade
export const getVideosForTopic = (subject: string, grade: GradeLevel, topicName: string): Video[] => {
  const topics = getTopicsForSubjectGrade(subject, grade);
  const targetTopic = topics.find(topic => topic.name === topicName);
  if (targetTopic) {
    return getVideosByIds(targetTopic.videoIds);
  }
  return [];
};

