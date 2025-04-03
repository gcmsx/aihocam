
import React from 'react';
import SubjectGrid from '@/components/SubjectGrid';
import SearchBar from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import HomeTabs from '@/components/home/HomeTabs';
import HomeSearchResults from '@/components/home/HomeSearchResults';
import { useHomeVideos } from '@/hooks/useHomeVideos';

const Index = () => {
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
        <h1 className="text-2xl font-bold mb-4">Hızlı Öğrenme</h1>
        <SearchBar onChange={handleSearch} placeholder="Tüm videolarda arayın..." />
        
        <HomeSearchResults 
          searchQuery={searchQuery}
          filteredVideos={filteredAllVideos}
          handleVideoClick={handleVideoClick}
          handleSaveVideo={handleSaveVideo}
        />
        
        {(!searchQuery || filteredAllVideos.length === 0) && (
          <>
            <h2 className="text-lg font-semibold mt-6 mb-4">Konular</h2>
            <SubjectGrid onSubjectClick={() => {}} />
            
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
