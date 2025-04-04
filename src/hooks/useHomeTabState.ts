
import { useState } from 'react';
import { Video } from '@/types/video';

export const useHomeTabState = () => {
  const [activeTab, setActiveTab] = useState('trend');
  
  return {
    activeTab,
    setActiveTab
  };
};
