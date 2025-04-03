
import React from 'react';
import VideoCard from '@/components/VideoCard';

interface HomeTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  videos: {
    [key: string]: {
      id: number;
      title: string;
      thumbnailUrl: string;
      duration: string;
      saved: boolean;
    }[];
  };
  handleVideoClick: (videoId: number) => void;
  handleSaveVideo: (videoId: number) => void;
}

const HomeTabs = ({ activeTab, setActiveTab, videos, handleVideoClick, handleSaveVideo }: HomeTabsProps) => {
  const getActiveVideos = () => {
    const activeVideos = videos[activeTab] || [];
    return activeVideos;
  };

  return (
    <div className="mt-8">
      <div className="flex border-b mb-4">
        <button 
          className={`pb-2 px-4 text-sm font-medium ${activeTab === 'trend' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('trend')}
        >
          Trend
        </button>
        <button 
          className={`pb-2 px-4 text-sm font-medium ${activeTab === 'recommended' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Önerilen
        </button>
        <button 
          className={`pb-2 px-4 text-sm font-medium ${activeTab === 'popular' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('popular')}
        >
          Popüler
        </button>
      </div>
      
      {getActiveVideos().length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          Arama sonucu bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getActiveVideos().map(video => (
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
      )}
    </div>
  );
};

export default HomeTabs;
