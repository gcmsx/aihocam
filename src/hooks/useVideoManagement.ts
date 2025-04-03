
import { useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, downloadVideo, getAllSavedVideos } from '@/services/videoService';

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

  // Listen for video save/download events
  useEffect(() => {
    const handleVideoUpdate = () => {
      updateVideoSavedStatus();
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        updateVideoSavedStatus();
      }
    };
    
    // Listen for both custom events and storage events
    window.addEventListener('videoSaved', handleVideoUpdate);
    window.addEventListener('videoDownloaded', handleVideoUpdate);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoUpdate);
      window.removeEventListener('videoDownloaded', handleVideoUpdate);
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
      
      // Immediately update UI to reflect that the video saving state is changing
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
      
      // Process the download
      downloadVideo(videoId, video).catch(error => {
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

  return {
    videos,
    allVideos,
    handleVideoClick,
    handleSaveVideo
  };
};
