
import { useState } from 'react';

export const useHomeTabState = (initialTab: string = '9') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return {
    activeTab,
    setActiveTab
  };
};
