
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';

interface HomeTabsProps {
  videos: Video[];
  handleVideoClick: (videoId: number) => void;
  handleSaveVideo: (videoId: number) => void;
}

const HomeTabs = ({ videos, handleVideoClick, handleSaveVideo }: HomeTabsProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Videolar</h2>
      
      {videos.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          Arama sonucu bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map(video => (
            <VideoCard 
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              duration={video.duration}
              onClick={() => handleVideoClick(video.id)}
              saved={video.saved}
              onSave={() => handleSaveVideo(video.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeTabs;
