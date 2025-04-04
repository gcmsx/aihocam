
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
      <div className="flex flex-col space-y-4">
        {filteredVideos.map(video => (
          <VideoCard 
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            onClick={() => handleVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSearchResults;
