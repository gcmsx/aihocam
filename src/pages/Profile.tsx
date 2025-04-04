
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  // Update the beta version when making changes to this page
  useEffect(() => {
    const currentVersion = localStorage.getItem('appVersion') || 'GEN-1 final v.0345';
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
    
    // Initialize selected grade if not set
    if (!localStorage.getItem('selected_grade')) {
      localStorage.setItem('selected_grade', '9');
    }
    
    // Add subject field to completed questions if needed
    const completedQuestionsStr = localStorage.getItem('completedQuestions');
    if (completedQuestionsStr) {
      const completedQuestions = JSON.parse(completedQuestionsStr);
      let hasChanges = false;
      
      Object.entries(completedQuestions).forEach(([videoId, data]: [string, any]) => {
        if (!data.subject) {
          // Assign a random subject for existing data
          const subjects = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat', 'Felsefe', 'İngilizce'];
          data.subject = subjects[Math.floor(Math.random() * subjects.length)];
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
      }
    }
    
    // Add subject field to recently viewed videos if needed
    const recentlyViewedStr = localStorage.getItem('recentlyViewedVideos');
    if (recentlyViewedStr) {
      const recentlyViewed = JSON.parse(recentlyViewedStr);
      let hasChanges = false;
      
      recentlyViewed.forEach((video: any) => {
        if (!video.subject) {
          // Assign a random subject for existing data
          const subjects = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat', 'Felsefe', 'İngilizce'];
          video.subject = subjects[Math.floor(Math.random() * subjects.length)];
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        localStorage.setItem('recentlyViewedVideos', JSON.stringify(recentlyViewed));
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
