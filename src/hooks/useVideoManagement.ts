
import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, downloadVideo } from '@/services/videoService';

export const useVideoManagement = (initialVideos: { [key: string]: Video[] }) => {
  const [videos, setVideos] = useState<{[key: string]: Video[]}>(initialVideos);
  const [allVideos, setAllVideos] = useState<Video[]>([]);

  // Combine all videos into a single array
  useEffect(() => {
    const combinedVideos = [
      ...videos.trend,
      ...videos.recommended,
      ...videos.popular,
      // Additional videos could be added here
    ];
    
    setAllVideos(combinedVideos);
    
    // Update saved status from localStorage
    updateVideoSavedStatus();
  }, []);

  // Function to update saved status
  const updateVideoSavedStatus = () => {
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    if (savedVideosFromStorage) {
      try {
        const savedIds = JSON.parse(savedVideosFromStorage);
        
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
      } catch (error) {
        console.error("Error parsing saved videos:", error);
      }
    }
  };

  // Listen for video save/download events
  useEffect(() => {
    const handleVideoSaved = () => {
      updateVideoSavedStatus();
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        updateVideoSavedStatus();
      }
    };
    
    // Listen for both custom event and storage event
    window.addEventListener('videoSaved', handleVideoSaved);
    window.addEventListener('videoDownloaded', handleVideoSaved);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoSaved);
      window.removeEventListener('videoDownloaded', handleVideoSaved);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleVideoClick = (title: string) => {
    console.log("Video clicked:", title);
  };

  const handleSaveVideo = async (videoId: number) => {
    try {
      const video = allVideos.find(v => v.id === videoId);
      if (!video) return;
      
      // Start the download process without waiting for it to complete
      // We'll rely on the events to update the UI state
      downloadVideo(videoId, video).catch(error => {
        console.error("Error saving video:", error);
      });
      
      // Immediately update UI to reflect that the video is being downloaded
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
      
    } catch (error) {
      console.error("Error handling save video:", error);
    }
  };

  return {
    videos,
    allVideos,
    handleVideoClick,
    handleSaveVideo
  };
};
