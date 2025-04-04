
import { useState, useEffect } from 'react';
import { useHomeTabState } from './useHomeTabState';
import { useHomeSearch } from './useHomeSearch';
import { useNavigate } from 'react-router-dom';
import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';
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
    '9': [],
    '10': [],
    '11': [],
    '12': []
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
    
    // Organize videos by grade
    const gradeVideos = {
      '9': [] as Video[],
      '10': [] as Video[],
      '11': [] as Video[],
      '12': [] as Video[]
    };
    
    videosWithSavedStatus.forEach(video => {
      if (video.grade) {
        gradeVideos[video.grade].push(video);
      }
    });
    
    setVideos(gradeVideos);
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
    
    window.addEventListener('videoSaved', handleVideoUpdate);
    window.addEventListener('videoDownloaded', handleVideoUpdate);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoUpdate);
      window.removeEventListener('videoDownloaded', handleVideoUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
      await downloadVideo(videoId, video);
    } catch (error) {
      console.error("Error saving video:", error);
      // If there's an error, revert UI changes by re-fetching the saved IDs
      const savedIds = getSavedVideosFromStorage();
      
      setAllVideos(prevVideos => 
        prevVideos.map(v => ({
          ...v,
          saved: savedIds.includes(v.id)
        }))
      );
      
      setVideos(prevVideos => {
        const updatedVideos = { ...prevVideos };
        
        for (const category in updatedVideos) {
          updatedVideos[category] = updatedVideos[category].map(v => ({
            ...v,
            saved: savedIds.includes(v.id)
          }));
        }
        
        return updatedVideos;
      });
    }
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
    handleSaveVideo
  };
};
