
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
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          AI Hocam <span className="text-sm text-muted-foreground">(Kapalı Beta GEN-1 final v.{version})</span>
        </h1>
        <SearchBar onChange={handleSearch} placeholder="Tüm videolarda arayın..." />
        
        <SubjectGrid />
      </div>
      <NavBar />
    </div>
  );
};

export default Index;
