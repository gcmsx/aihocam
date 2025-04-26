
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';

interface VideoSectionProps {
  videos: Video[];
  onVideoClick: (videoId: number) => void;
}

const VideoSection = ({ videos, onVideoClick }: VideoSectionProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Önerilen Dersler</h2>
      <div className="flex flex-col space-y-4">
        {videos.map(video => (
          <VideoCard 
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            onClick={() => onVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
