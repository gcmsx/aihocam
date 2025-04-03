
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
  }, []);

  const handleVideoClick = (title: string) => {
    console.log("Video clicked:", title);
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
      
      await downloadVideo(videoId, video);
      
      window.dispatchEvent(new Event('videoDownloaded'));
    } catch (error) {
      console.error("Error saving video:", error);
    }
  };

  return {
    videos,
    allVideos,
    handleVideoClick,
    handleSaveVideo
  };
};
