
import React from 'react';
import VideoCard from '@/components/VideoCard';
import EmptyState from './EmptyState';

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
  if (videos.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map(video => (
        <VideoCard 
          key={video.id}
          id={video.id}
          title={video.title}
          thumbnailUrl={video.thumbnailUrl}
          duration={video.duration}
          saved={video.saved}
          onSave={() => onSaveVideo(video.id)}
          onClick={() => onVideoClick(video.id)}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
