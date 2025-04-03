
import React from 'react';
import VideoGrid from './VideoGrid';

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
}

interface SearchResultsProps {
  searchQuery: string;
  videos: Video[];
  onVideoClick: (videoId: number) => void;
  onSaveVideo: (videoId: number) => void;
}

const SearchResults = ({ searchQuery, videos, onVideoClick, onSaveVideo }: SearchResultsProps) => {
  if (!searchQuery || videos.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Arama Sonuçları</h2>
      <VideoGrid 
        videos={videos}
        onVideoClick={onVideoClick}
        onSaveVideo={onSaveVideo}
        emptyMessage="Arama sonucu bulunamadı."
      />
    </div>
  );
};

export default SearchResults;
