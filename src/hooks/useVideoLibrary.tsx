
import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { 
  getVideos, 
  searchVideos, 
  getSavedVideosFromStorage, 
  getRecentVideosFromStorage, 
  saveVideo, 
  getVideosByIds, 
  updateVideoSavedStatus 
} from '@/services/videoService';

export const useVideoLibrary = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [savedVideos, setSavedVideos] = useState<Video[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Tüm videoları yükle
  useEffect(() => {
    setAllVideos(getVideos());
  }, []);

  // Kaydedilen ve son izlenen videoları yükle
  useEffect(() => {
    if (allVideos.length === 0) return;

    // Kaydedilen videoları yükle
    const savedIds = getSavedVideosFromStorage();
    const savedVideosList = getVideosByIds(savedIds, allVideos);
    setSavedVideos(updateVideoSavedStatus(savedVideosList, savedIds));
    
    // Son izlenen videoları yükle
    const recentIds = getRecentVideosFromStorage();
    const recentVideosList = getVideosByIds(recentIds, allVideos);
    setRecentVideos(updateVideoSavedStatus(recentVideosList, savedIds));
    
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

  const filteredAllVideos = searchQuery 
    ? searchVideos(searchQuery, allVideos)
    : [];

  const handleVideoClick = (title: string) => {
    console.log("Video clicked:", title);
  };

  const handleSaveVideo = (videoId: number) => {
    try {
      // Video kaydetme işlemini gerçekleştir
      const updatedSavedIds = saveVideo(videoId);
      
      // Kaydedilen videoları güncelle
      const updatedSavedVideos = getVideosByIds(updatedSavedIds, allVideos);
      setSavedVideos(updateVideoSavedStatus(updatedSavedVideos, updatedSavedIds));
      
      // Son izlenen videoları güncelle
      setRecentVideos(prevVideos => 
        updateVideoSavedStatus(prevVideos, updatedSavedIds)
      );
      
    } catch (error) {
      console.error("Error updating saved videos:", error);
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
    handleSaveVideo
  };
};
