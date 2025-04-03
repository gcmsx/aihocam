
import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { 
  getVideos, 
  searchVideos, 
  getSavedVideosFromStorage, 
  getRecentVideosFromStorage, 
  saveVideo, 
  getVideosByIds, 
  updateVideoSavedStatus,
  downloadVideo
} from '@/services/videoService';

export const useVideoLibrary = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [savedVideos, setSavedVideos] = useState<Video[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  // Tüm videoları yükle
  useEffect(() => {
    setAllVideos(getVideos());
  }, []);

  // Kaydedilen ve son izlenen videoları yükle
  useEffect(() => {
    if (allVideos.length === 0) return;

    // İndirilen videoları yükle
    const savedIds = getSavedVideosFromStorage();
    const savedVideosList = getVideosByIds(savedIds, allVideos);
    setSavedVideos(updateVideoSavedStatus(savedVideosList, savedIds));
    
    // Son izlenen videoları yükle
    const recentIds = getRecentVideosFromStorage();
    const recentVideosList = getVideosByIds(recentIds, allVideos);
    setRecentVideos(updateVideoSavedStatus(recentVideosList, savedIds));
    
  }, [allVideos]);

  // Video indirme işlemi sonrası state'i güncelle
  useEffect(() => {
    const handleStorageChange = () => {
      if (allVideos.length === 0) return;
      
      const savedIds = getSavedVideosFromStorage();
      const savedVideosList = getVideosByIds(savedIds, allVideos);
      setSavedVideos(updateVideoSavedStatus(savedVideosList, savedIds));
      
      // Son izlenen videoları da güncelle
      const recentIds = getRecentVideosFromStorage();
      const recentVideosList = getVideosByIds(recentIds, allVideos);
      setRecentVideos(updateVideoSavedStatus(recentVideosList, savedIds));
    };

    // IndexedDB ve LocalStorage değişikliklerini dinle
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('videoDownloaded', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('videoDownloaded', handleStorageChange);
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
      
      // Video indirme işlemini gerçekleştir
      const updatedSavedIds = await downloadVideo(videoId, video);
      
      // İndirilen videoları güncelle
      const updatedSavedVideos = getVideosByIds(updatedSavedIds, allVideos);
      setSavedVideos(updateVideoSavedStatus(updatedSavedVideos, updatedSavedIds));
      
      // Son izlenen videoları güncelle
      setRecentVideos(prevVideos => 
        updateVideoSavedStatus(prevVideos, updatedSavedIds)
      );
      
      // Değişikliği bildirmek için özel bir event yayınla
      window.dispatchEvent(new Event('videoDownloaded'));
      
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
