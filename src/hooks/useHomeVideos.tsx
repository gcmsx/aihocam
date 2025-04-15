
import { useState, useEffect, useCallback } from 'react';
import { useHomeTabState } from './useHomeTabState';
import { useHomeSearch } from './useHomeSearch';
import { useNavigate } from 'react-router-dom';
import { Video } from '@/types/video';
import { 
  getVideos, 
  searchVideos, 
  downloadVideo, 
  updateRecentlyViewed, 
  getSavedVideosFromStorage 
} from '@/services/video';

export const useHomeVideos = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<{[key: string]: Video[]}>({
    trend: [],
    recommended: [],
    popular: []
  });
  const [allVideos, setAllVideos] = useState<Video[]>([]);

  // Load all videos
  useEffect(() => {
    const allAvailableVideos = getVideos();
    const savedIds = getSavedVideosFromStorage();
    
    // Update saved status
    const videosWithSavedStatus = allAvailableVideos.map(video => ({
      ...video,
      saved: savedIds.includes(video.id)
    }));
    
    setAllVideos(videosWithSavedStatus);
    
    // Categorize videos - distribute evenly across categories
    const shuffledVideos = [...videosWithSavedStatus].sort(() => Math.random() - 0.5);
    
    // Take different slices for different categories
    // This ensures we have a good mix of videos in each category
    const trendVideos = shuffledVideos.slice(0, 6);
    const recommendedVideos = shuffledVideos.slice(6, 12);
    const popularVideos = shuffledVideos.slice(12, 18);
    
    setVideos({
      trend: trendVideos,
      recommended: recommendedVideos,
      popular: popularVideos
    });
  }, []);

  // Function to clear all home videos
  const clearHomeVideos = useCallback(() => {
    setVideos({
      trend: [],
      recommended: [],
      popular: []
    });
    
    setAllVideos([]);
  }, []);

  // Listen for video save/download events
  useEffect(() => {
    const handleVideoUpdate = () => {
      const savedIds = getSavedVideosFromStorage();
      
      // Update allVideos with saved status
      setAllVideos(prevAllVideos => 
        prevAllVideos.map(video => ({
          ...video,
          saved: savedIds.includes(video.id)
        }))
      );
      
      // Update videos object with saved status
      setVideos(prevVideos => {
        const updatedVideos = { ...prevVideos };
        
        for (const category in updatedVideos) {
          updatedVideos[category] = updatedVideos[category].map(video => ({
            ...video,
            saved: savedIds.includes(video.id)
          }));
        }
        
        return updatedVideos;
      });
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        handleVideoUpdate();
      }
    };
    
    const handleLessonDataCleared = () => {
      clearHomeVideos();
    };
    
    window.addEventListener('videoSaved', handleVideoUpdate);
    window.addEventListener('videoDownloaded', handleVideoUpdate);
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('lessonDataCleared', handleLessonDataCleared);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoUpdate);
      window.removeEventListener('videoDownloaded', handleVideoUpdate);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('lessonDataCleared', handleLessonDataCleared);
    };
  }, [clearHomeVideos]);

  // Use our refactored hooks
  const { activeTab, setActiveTab } = useHomeTabState();
  const { searchQuery, handleSearch, filteredAllVideos } = useHomeSearch(allVideos);

  const handleVideoClick = (videoId: number) => {
    // Add to recently viewed videos
    updateRecentlyViewed(videoId);
    
    // Navigate to video detail page
    navigate(`/video/${videoId}`);
  };

  const handleSaveVideo = async (videoId: number) => {
    try {
      // Find the video
      const video = allVideos.find(v => v.id === videoId);
      if (!video) return;
      
      // Update local state immediately for better UI responsiveness
      setAllVideos(prevVideos => 
        prevVideos.map(v => 
          v.id === videoId ? { ...v, saved: !v.saved } : v
        )
      );
      
      setVideos(prevVideos => {
        const updatedVideos = { ...prevVideos };
        
        for (const category in updatedVideos) {
          updatedVideos[category] = updatedVideos[category].map(v => 
            v.id === videoId ? { ...v, saved: !v.saved } : v
          );
        }
        
        return updatedVideos;
      });
      
      // Process the download
      await downloadVideo(videoId, video).catch(error => {
        console.error("Error saving video:", error);
        // Revert UI state if there's an error
        updateVideoSavedStatus();
      });
      
    } catch (error) {
      console.error("Error handling save video:", error);
      // Make sure to revert the UI state on error
      updateVideoSavedStatus();
    }
  };

  // Helper to update the saved status of all videos
  const updateVideoSavedStatus = () => {
    const savedIds = getSavedVideosFromStorage();
    
    setAllVideos(prevVideos => 
      prevVideos.map(video => ({
        ...video,
        saved: savedIds.includes(video.id)
      }))
    );
    
    setVideos(prevVideos => {
      const updatedVideos = { ...prevVideos };
      
      for (const category in updatedVideos) {
        updatedVideos[category] = updatedVideos[category].map(video => ({
          ...video,
          saved: savedIds.includes(video.id)
        }));
      }
      
      return updatedVideos;
    });
  };

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    videos,
    allVideos,
    filteredAllVideos,
    handleSearch,
    handleVideoClick,
    handleSaveVideo,
    clearHomeVideos
  };
};
