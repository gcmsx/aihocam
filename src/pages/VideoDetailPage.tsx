
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import VideoHeader from '@/components/video/VideoHeader';
import VideoPlayer from '@/components/video/VideoPlayer';
import ContentTabs from '@/components/video/ContentTabs';
import { useVideoDetail } from '@/hooks/useVideoDetail';
import { getVideoFromIndexedDB } from '@/services/video';

const VideoDetailPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const { video, saved, loading, handleSaveVideo } = useVideoDetail(videoId);
  const [offlineVideo, setOfflineVideo] = useState<any>(null);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  
  useEffect(() => {
    // Check if the video is available offline
    const checkOfflineAvailability = async () => {
      if (!videoId) return;
      
      try {
        const offlineData = await getVideoFromIndexedDB(parseInt(videoId));
        setOfflineVideo(offlineData);
      } catch (error) {
        console.error("Error checking offline availability:", error);
      }
    };
    
    checkOfflineAvailability();
    
    // Listen for online/offline events
    const handleOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };
    
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [videoId]);
  
  if (loading && !offlineVideo) {
    return <div className="p-4">Video yükleniyor...</div>;
  }
  
  // Use offline video data if available or if we're offline
  const videoToDisplay = (isOffline && offlineVideo) ? offlineVideo : video;
  
  if (!videoToDisplay) {
    return (
      <div className="p-4 text-center">
        {isOffline ? 
          "Bu video çevrimdışı kullanım için indirilmemiş." : 
          "Video bulunamadı."}
      </div>
    );
  }
  
  return (
    <div className="pb-16">
      <VideoHeader 
        title={videoToDisplay.title}
        subject={videoToDisplay.subject}
        duration={videoToDisplay.duration}
        saved={saved || (offlineVideo !== null)}
        onSave={handleSaveVideo}
      />
      
      <div className="p-4">
        <VideoPlayer 
          thumbnailUrl={videoToDisplay.thumbnailUrl}
          title={videoToDisplay.title}
          videoUrl={videoToDisplay.videoUrl || "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}
        />
        
        <ContentTabs 
          description={videoToDisplay.description}
          examples={videoToDisplay.examples}
          videoId={videoToDisplay.id}
        />
      </div>
      
      {isOffline && offlineVideo && (
        <div className="bg-yellow-100 p-2 text-center text-sm">
          Çevrimdışı modda izliyorsunuz
        </div>
      )}
      
      <NavBar />
    </div>
  );
};

export default VideoDetailPage;
