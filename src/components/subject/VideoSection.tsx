
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';

interface VideoSectionProps {
  videos: Video[];
  onVideoClick: (videoId: number) => void;
  onSaveVideo?: (videoId: number) => void;
}

const VideoSection = ({ videos, onVideoClick, onSaveVideo }: VideoSectionProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Önerilen Dersler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map(video => (
          <VideoCard 
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            onClick={() => onVideoClick(video.id)}
            saved={video.saved}
            onSave={onSaveVideo ? () => onSaveVideo(video.id) : undefined}
          />
        ))}
        
        {videos.length === 0 && (
          <div className="text-center p-8 col-span-2">
            <p className="text-muted-foreground">Bu ders için video bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
