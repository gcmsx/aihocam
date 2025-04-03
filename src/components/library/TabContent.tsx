
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
  onVideoClick: (title: string) => void;
  onSaveVideo: (videoId: number) => void;
}

const TabContent = ({ activeTab, searchQuery, videos, onVideoClick, onSaveVideo }: TabContentProps) => {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div>
      {searchQuery && <h2 className="text-lg font-semibold mb-2">{activeTab === 'saved' ? 'Kaydedilenler' : 'Son İzlenenler'}</h2>}
      <VideoGrid 
        videos={videos}
        onVideoClick={onVideoClick}
        onSaveVideo={onSaveVideo}
      />
    </div>
  );
};

export default TabContent;
