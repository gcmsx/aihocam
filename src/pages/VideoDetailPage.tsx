
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Toaster } from '@/components/ui/toaster';
import VideoHeader from '@/components/video/VideoHeader';
import VideoPlayer from '@/components/video/VideoPlayer';
import ContentTabs from '@/components/video/ContentTabs';
import { useVideoDetail } from '@/hooks/useVideoDetail';

const VideoDetailPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const { video, saved, loading, handleSaveVideo } = useVideoDetail(videoId);
  
  if (loading) {
    return <div className="p-4">Video yükleniyor...</div>;
  }
  
  if (!video) {
    return <div className="p-4">Video bulunamadı.</div>;
  }
  
  return (
    <div className="pb-16">
      <VideoHeader 
        title={video.title}
        subject={video.subject}
        duration={video.duration}
        saved={saved}
        onSave={handleSaveVideo}
      />
      
      <div className="p-4">
        <VideoPlayer 
          thumbnailUrl={video.thumbnailUrl}
          title={video.title}
        />
        
        <ContentTabs 
          description={video.description}
          examples={video.examples}
        />
      </div>
      
      <NavBar />
      <Toaster />
    </div>
  );
};

export default VideoDetailPage;
