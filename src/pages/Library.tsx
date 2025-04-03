
import React from 'react';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import LibraryTabs from '@/components/library/LibraryTabs';
import SearchResults from '@/components/library/SearchResults';
import TabContent from '@/components/library/TabContent';
import { useVideoLibrary } from '@/hooks/useVideoLibrary';

const Library = () => {
  const {
    activeTab,
    setActiveTab,
    searchQuery,
    handleSearch,
    filteredAllVideos,
    getActiveVideos,
    handleVideoClick,
    handleSaveVideo
  } = useVideoLibrary();

  return (
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Kütüphane</h1>
        <SearchBar 
          placeholder="Tüm videolarda arayın..." 
          onChange={handleSearch}
        />
        
        <div className="mt-6">
          <LibraryTabs 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          <SearchResults 
            searchQuery={searchQuery}
            videos={filteredAllVideos}
            onVideoClick={handleVideoClick}
            onSaveVideo={handleSaveVideo}
          />
          
          <TabContent 
            activeTab={activeTab}
            searchQuery={searchQuery}
            videos={getActiveVideos()}
            onVideoClick={handleVideoClick}
            onSaveVideo={handleSaveVideo}
          />
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Library;
