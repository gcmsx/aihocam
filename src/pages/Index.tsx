import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import SubjectGrid from '@/components/SubjectGrid';
import { useHomeSearch } from '@/hooks/useHomeSearch';

const Index = () => {
  const [version, setVersion] = useState('0.345');
  
  useEffect(() => {
    localStorage.setItem('appVersion', '0.345');
    
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

  const { searchQuery, handleSearch } = useHomeSearch([]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="p-4 flex-1 relative">
        <div className="glass-panel p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">
            AI Hocam <span className="text-sm text-muted-foreground">(Kapalı Beta GEN-1 final v.{version})</span>
          </h1>
          <SearchBar onChange={handleSearch} placeholder="Tüm videolarda arayın..." />
          
          <div className="flex justify-center items-center flex-1 mt-4">
            <SubjectGrid />
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Index;
