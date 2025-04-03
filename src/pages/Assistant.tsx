
import React from 'react';
import NavBar from '@/components/NavBar';
import AIAssistant from '@/components/AIAssistant';

const Assistant = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden">
        <AIAssistant />
      </div>
      <NavBar />
    </div>
  );
};

export default Assistant;
