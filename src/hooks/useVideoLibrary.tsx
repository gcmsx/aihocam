
import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { 
  getVideos, 
  searchVideos, 
  getSavedVideosFromStorage, 
  getRecentVideosFromStorage, 
  getAllSavedVideos,
  getAllRecentVideos,
  downloadVideo
} from '@/services/videoService';

export const useVideoLibrary = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [savedVideos, setSavedVideos] = useState<Video[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  // Load all videos
  useEffect(() => {
    setAllVideos(getVideos());
  }, []);

  // Load saved and recent videos
  useEffect(() => {
    if (allVideos.length === 0) return;

    // Load saved videos
    setSavedVideos(getAllSavedVideos(allVideos));
    
    // Load recent videos
    setRecentVideos(getAllRecentVideos(allVideos));
    
  }, [allVideos]);

  // Listen for video download/save events and storage changes
  useEffect(() => {
    const handleVideoSaved = () => {
      if (allVideos.length === 0) return;
      
      // Reload saved and recent videos
      setSavedVideos(getAllSavedVideos(allVideos));
      setRecentVideos(getAllRecentVideos(allVideos));
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos' || e.key === 'recentlyViewedVideos') {
        if (allVideos.length === 0) return;
        
        // Reload saved and recent videos
        setSavedVideos(getAllSavedVideos(allVideos));
        setRecentVideos(getAllRecentVideos(allVideos));
      }
    };
    
    // Listen for both custom events and storage events
    window.addEventListener('videoSaved', handleVideoSaved);
    window.addEventListener('videoDownloaded', handleVideoSaved);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoSaved);
      window.removeEventListener('videoDownloaded', handleVideoSaved);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [allVideos]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getActiveVideos = () => {
    let videos;
    switch(activeTab) {
      case 'saved':
        videos = savedVideos;
        break;
      case 'recent':
        videos = recentVideos;
        break;
      default:
        videos = savedVideos;
    }
    
    if (!searchQuery) {
      return videos;
    }
    
    return searchVideos(searchQuery, videos);
  };

  // Search through all videos, including subject-specific ones
  const filteredAllVideos = searchQuery 
    ? searchVideos(searchQuery, allVideos)
    : [];

  const handleVideoClick = (title: string) => {
    console.log("Video clicked:", title);
  };

  const handleSaveVideo = async (videoId: number) => {
    try {
      const video = allVideos.find(v => v.id === videoId);
      if (!video) return;
      
      setIsDownloading(true);
      
      // Immediately update UI for better responsiveness
      setSavedVideos(prevVideos => {
        const videoExists = prevVideos.some(v => v.id === videoId);
        if (videoExists) {
          return prevVideos.filter(v => v.id !== videoId);
        } else {
          return [...prevVideos, {...video, saved: true}];
        }
      });
      
      // Process the download without waiting for the response
      downloadVideo(videoId, video).catch(error => {
        console.error("Error downloading video:", error);
        // Revert UI state if there's an error
        setSavedVideos(getAllSavedVideos(allVideos));
      });
      
    } catch (error) {
      console.error("Error downloading video:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    handleSearch,
    savedVideos,
    recentVideos,
    allVideos,
    getActiveVideos,
    filteredAllVideos,
    handleVideoClick,
    handleSaveVideo,
    isDownloading
  };
};
