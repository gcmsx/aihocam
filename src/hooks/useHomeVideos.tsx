
import { useState, useEffect, useCallback } from 'react';
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
  const [videos, setVideos] = useState<Video[]>([]);
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
    
    // Select a subset of videos to display
    const displayVideos = videosWithSavedStatus.slice(0, 12);
    setVideos(displayVideos);
  }, []);

  // Function to clear all home videos
  const clearHomeVideos = useCallback(() => {
    setVideos([]);
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
      
      // Update videos with saved status
      setVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: savedIds.includes(video.id)
        }))
      );
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
      
      setVideos(prevVideos => 
        prevVideos.map(v => 
          v.id === videoId ? { ...v, saved: !v.saved } : v
        )
      );
      
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
    
    setVideos(prevVideos => 
      prevVideos.map(video => ({
        ...video,
        saved: savedIds.includes(video.id)
      }))
    );
  };

  return {
    videos,
    allVideos,
    searchQuery,
    filteredAllVideos,
    handleSearch,
    handleVideoClick,
    handleSaveVideo,
    clearHomeVideos
  };
};
