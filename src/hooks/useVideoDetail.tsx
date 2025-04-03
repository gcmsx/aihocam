
import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, saveVideo, updateRecentlyViewed, downloadVideo } from '@/services/videoService';
import { getSubjectExamples, getSubjectDescription } from '@/services/video/videoUtils';

export interface Example {
  question: string;
  options?: string[];
  answer?: string;
  explanation?: string;
}

export interface VideoDetails extends Video {
  description?: string;
  examples?: Example[];
}

// Function to get video details
const getVideoDetails = (videoId: string): VideoDetails => {
  // Get the last viewed subject from sessionStorage
  const currentSubject = sessionStorage.getItem('currentSubject') || 'Fizik';
  
  return {
    id: parseInt(videoId),
    title: `${currentSubject} Soru Çözüm Teknikleri`,
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "10:00",
    saved: false,
    subject: currentSubject,
    description: getSubjectDescription(currentSubject),
    examples: getSubjectExamples(currentSubject)
  };
};

export const useVideoDetail = (videoId: string | undefined) => {
  const [video, setVideo] = useState<VideoDetails | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Function to update saved status
  const updateSavedStatus = () => {
    if (!video) return;
    
    const savedIds = getSavedVideosFromStorage();
    setSaved(savedIds.includes(video.id));
  };
  
  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    
    try {
      // Get video details
      const videoDetails = getVideoDetails(videoId);
      
      // Check if the video is saved
      const savedIds = getSavedVideosFromStorage();
      videoDetails.saved = savedIds.includes(videoDetails.id);
      setSaved(videoDetails.saved);
      
      setVideo(videoDetails);
      
      // Add to recently viewed videos
      if (videoDetails) {
        updateRecentlyViewed(videoDetails.id);
        
        // Dispatch an event to notify other components about the watched video
        window.dispatchEvent(new CustomEvent('videoWatched', {
          detail: { videoId: videoDetails.id }
        }));
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
    } finally {
      setLoading(false);
    }
  }, [videoId]);
  
  // Listen for saved status changes
  useEffect(() => {
    if (!video) return;
    
    const handleVideoSaved = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && video && customEvent.detail.videoId === video.id) {
        setSaved(customEvent.detail.saved);
      } else {
        updateSavedStatus();
      }
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        updateSavedStatus();
      }
    };
    
    window.addEventListener('videoSaved', handleVideoSaved);
    window.addEventListener('videoDownloaded', handleVideoSaved);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoSaved);
      window.removeEventListener('videoDownloaded', handleVideoSaved);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [video]);
  
  const handleSaveVideo = async () => {
    if (!video) return;
    
    // Update UI immediately for responsiveness
    setSaved(!saved);
    
    // If we're using the newer download functionality
    try {
      await downloadVideo(video.id, video);
    } catch (error) {
      console.error("Error saving video:", error);
      // Revert UI state if error occurs
      setSaved(!saved);
    }
  };
  
  return { video, saved, loading, handleSaveVideo };
};
