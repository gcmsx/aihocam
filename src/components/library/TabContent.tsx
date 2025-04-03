
import React from 'react';
import VideoGrid from './VideoGrid';

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
}

interface TabContentProps {
  activeTab: string;
  searchQuery: string;
  videos: Video[];
  onVideoClick: (videoId: number) => void;
  onSaveVideo: (videoId: number) => void;
}

const TabContent = ({ activeTab, searchQuery, videos, onVideoClick, onSaveVideo }: TabContentProps) => {
  // Return null only if there are no videos and no search query
  if (videos.length === 0 && !searchQuery) {
    return null;
  }

  return (
    <div>
      {!searchQuery && <h2 className="text-lg font-semibold mb-2">{activeTab === 'saved' ? 'İndirilenler' : 'Son İzlenenler'}</h2>}
      <VideoGrid 
        videos={videos}
        onVideoClick={onVideoClick}
        onSaveVideo={onSaveVideo}
        emptyMessage={activeTab === 'saved' ? 'Henüz indirilmiş video bulunmamaktadır.' : 'Henüz izlenmiş video bulunmamaktadır.'}
      />
    </div>
  );
};

export default TabContent;
