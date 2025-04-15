
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import HomeTabs from '@/components/home/HomeTabs';
import HomeSearchResults from '@/components/home/HomeSearchResults';
import SubjectGrid from '@/components/SubjectGrid';
import { useHomeVideos } from '@/hooks/useHomeVideos';

const Index = () => {
  const [version, setVersion] = useState('0.345');
  
  // Load version from localStorage
  useEffect(() => {
    // Set the version in localStorage instead of reading from it
    localStorage.setItem('appVersion', '0.345');
    
    const handleVersionUpdate = (e: CustomEvent) => {
      if (e.detail && e.detail.version) {
        setVersion(e.detail.version);
      }
    };
    
    const handleContentCleared = () => {
      // Force refresh the page to clear all in-memory data
      window.location.reload();
    };
    
    window.addEventListener('versionUpdated', handleVersionUpdate as EventListener);
    window.addEventListener('allContentCleared', handleContentCleared as EventListener);
    
    return () => {
      window.removeEventListener('versionUpdated', handleVersionUpdate as EventListener);
      window.removeEventListener('allContentCleared', handleContentCleared as EventListener);
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
    handleSaveVideo,
    clearHomeVideos
  } = useHomeVideos();
  
  // Listen for reset home content event
  useEffect(() => {
    const handleResetHomeContent = () => {
      clearHomeVideos();
    };
    
    window.addEventListener('resetHomeContent', handleResetHomeContent as EventListener);
    
    return () => {
      window.removeEventListener('resetHomeContent', handleResetHomeContent as EventListener);
    };
  }, [clearHomeVideos]);

  return (
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          AI Hocam <span className="text-sm text-muted-foreground">(Kapalı Beta GEN-1 final v.{version})</span>
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
