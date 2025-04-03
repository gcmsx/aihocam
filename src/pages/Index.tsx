
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import HomeTabs from '@/components/home/HomeTabs';
import HomeSearchResults from '@/components/home/HomeSearchResults';
import SubjectGrid from '@/components/SubjectGrid';
import { useHomeVideos } from '@/hooks/useHomeVideos';

const Index = () => {
  const [version, setVersion] = useState('0.318');
  
  // Load version from localStorage
  useEffect(() => {
    const storedVersion = localStorage.getItem('appVersion') || '0.318';
    setVersion(storedVersion);
    
    const handleVersionUpdate = (e: CustomEvent) => {
      if (e.detail && e.detail.version) {
        setVersion(e.detail.version);
      }
    };
    
    window.addEventListener('versionUpdated', handleVersionUpdate as EventListener);
    
    return () => {
      window.removeEventListener('versionUpdated', handleVersionUpdate as EventListener);
    };
  }, []);
  
  const { 
    activeTab,
    setActiveTab,
    searchQuery,
    videos,
    filteredAllVideos,
    handleSearch,
    handleVideoClick,
    handleSaveVideo
  } = useHomeVideos();

  return (
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          AI Hocam <span className="text-sm text-muted-foreground">(Kapalı Beta v{version})</span>
        </h1>
        <SearchBar onChange={handleSearch} placeholder="Tüm videolarda arayın..." />
        
        <HomeSearchResults 
          searchQuery={searchQuery}
          filteredVideos={filteredAllVideos}
          handleVideoClick={handleVideoClick}
          handleSaveVideo={handleSaveVideo}
        />
        
        {(!searchQuery || filteredAllVideos.length === 0) && (
          <>
            <SubjectGrid />
            
            <HomeTabs 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              videos={videos}
              handleVideoClick={handleVideoClick}
              handleSaveVideo={handleSaveVideo}
            />
          </>
        )}
      </div>
      <NavBar />
    </div>
  );
};

export default Index;
