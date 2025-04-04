
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  // Update the beta version when making changes to this page
  useEffect(() => {
    const currentVersion = localStorage.getItem('appVersion') || 'GEN-1 final v.0342';
    localStorage.setItem('appVersion', currentVersion);
    
    // Dispatch an event to notify index page to update version
    window.dispatchEvent(new CustomEvent('versionUpdated', {
      detail: { version: currentVersion }
    }));
    
    // Check if this is the first time visiting the profile page today
    const today = new Date().toLocaleDateString();
    const lastVisit = localStorage.getItem('lastProfileVisit');
    
    if (lastVisit !== today) {
      localStorage.setItem('lastProfileVisit', today);
      
      // Reset daily progress for a new day if needed
      const dailyProgressKey = `dailyProgress_${today}`;
      if (!localStorage.getItem(dailyProgressKey)) {
        localStorage.setItem(dailyProgressKey, JSON.stringify({
          videosWatched: 0,
          goalReached: false
        }));
        
        toast({
          title: "Yeni Gün!",
          description: "Bugün için yeni bir hedefin var: 5 video izle.",
          variant: "default",
        });
      }
    }
  }, []);
  
  return (
    <div className="pb-16">
      <UserProfile />
      <NavBar />
    </div>
  );
};

export default Profile;
