
import { useState } from 'react';
import { Video } from '@/types/video';

export const useHomeSearch = (allVideos: Video[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredAllVideos = searchQuery 
    ? allVideos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
    filteredAllVideos
  };
};
