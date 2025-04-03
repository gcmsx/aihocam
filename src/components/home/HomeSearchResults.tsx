
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';

interface HomeSearchResultsProps {
  searchQuery: string;
  filteredVideos: Video[];
  handleVideoClick: (videoId: number) => void;
  handleSaveVideo: (videoId: number) => void;
}

const HomeSearchResults = ({ 
  searchQuery, 
  filteredVideos, 
  handleVideoClick, 
  handleSaveVideo 
}: HomeSearchResultsProps) => {
  if (!searchQuery || filteredVideos.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Arama Sonuçları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVideos.map(video => (
          <VideoCard 
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            saved={video.saved}
            onSave={() => handleSaveVideo(video.id)}
            onClick={() => handleVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSearchResults;
