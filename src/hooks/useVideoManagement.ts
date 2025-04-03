import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, downloadVideo, getAllSavedVideos } from '@/services/videoService';

export const useVideoManagement = (initialVideos: { [key: string]: Video[] }) => {
  const [videos, setVideos] = useState<{[key: string]: Video[]}>(initialVideos);
  const [allVideos, setAllVideos] = useState<Video[]>([]);

  useEffect(() => {
    const combinedVideos = [
      ...videos.trend,
      ...videos.recommended,
      ...videos.popular,
    ];
    
    setAllVideos(combinedVideos);
    
    updateVideoSavedStatus();
  }, []);

  const updateVideoSavedStatus = () => {
    const savedIds = getSavedVideosFromStorage();
    
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

    setAllVideos(prevAllVideos => 
      prevAllVideos.map(video => ({
        ...video,
        saved: savedIds.includes(video.id)
      }))
    );
  };

  useEffect(() => {
    const handleVideoUpdate = () => {
      updateVideoSavedStatus();
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        updateVideoSavedStatus();
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

  const handleVideoClick = (videoId: number) => {
    console.log("Video clicked:", videoId);
  };

  const handleSaveVideo = async (videoId: number) => {
    try {
      const video = allVideos.find(v => v.id === videoId);
      if (!video) return;
      
      setVideos(prevVideos => {
        const updatedVideos = { ...prevVideos };
        
        for (const category in updatedVideos) {
          updatedVideos[category] = updatedVideos[category].map(video => 
            video.id === videoId ? { ...video, saved: !video.saved } : video
          );
        }
        
        return updatedVideos;
      });
      
      setAllVideos(prevAllVideos => 
        prevAllVideos.map(video => 
          video.id === videoId ? { ...video, saved: !video.saved } : video
        )
      );
      
      downloadVideo(videoId, video).catch(error => {
        console.error("Error saving video:", error);
        updateVideoSavedStatus();
      });
      
    } catch (error) {
      console.error("Error handling save video:", error);
      updateVideoSavedStatus();
    }
  };

  return {
    videos,
    allVideos,
    handleVideoClick,
    handleSaveVideo
  };
};
