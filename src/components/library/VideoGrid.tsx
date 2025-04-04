
import React from 'react';
import VideoCard from '@/components/VideoCard';
import EmptyState from './EmptyState';
import { useNavigate } from 'react-router-dom';

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
}

interface VideoGridProps {
  videos: Video[];
  onVideoClick: (videoId: number) => void;
  onSaveVideo: (videoId: number) => void;
  emptyMessage?: string;
}

const VideoGrid = ({ videos, onVideoClick, onSaveVideo, emptyMessage }: VideoGridProps) => {
  const navigate = useNavigate();
  
  if (videos.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }
  
  const handleVideoClick = (videoId: number) => {
    // Call the parent handler (for tracking purposes)
    onVideoClick(videoId);
    
    // Navigate to the video detail page
    navigate(`/video/${videoId}`);
  };
  
  return (
    <div className="flex flex-col space-y-4">
      {videos.map(video => (
        <VideoCard 
          key={video.id}
          id={video.id}
          title={video.title}
          thumbnailUrl={video.thumbnailUrl}
          duration={video.duration}
          onClick={() => handleVideoClick(video.id)}
          saved={video.saved}
          onSave={() => onSaveVideo(video.id)}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
