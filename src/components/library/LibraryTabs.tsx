
import React from 'react';
import { Download, Clock } from 'lucide-react';

interface LibraryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const LibraryTabs = ({ activeTab, onTabChange }: LibraryTabsProps) => {
  return (
    <div className="flex border-b mb-4 justify-center">
      <button 
        className={`pb-2 px-4 text-sm font-medium flex items-center gap-1 ${activeTab === 'saved' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
        onClick={() => onTabChange('saved')}
      >
        <Download size={16} />
        İndirilenler
      </button>
      <button 
        className={`pb-2 px-4 text-sm font-medium flex items-center gap-1 ${activeTab === 'recent' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
        onClick={() => onTabChange('recent')}
      >
        <Clock size={16} />
        Son İzlenenler
      </button>
    </div>
  );
};

export default LibraryTabs;
