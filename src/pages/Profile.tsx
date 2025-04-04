
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import UserProfile from '@/components/UserProfile';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  // Update the beta version when making changes to this page
  useEffect(() => {
    // Set the version to 0.345
    localStorage.setItem('appVersion', '0.345');
    
    // Dispatch an event to notify index page to update version
    window.dispatchEvent(new CustomEvent('versionUpdated', {
      detail: { version: '0.345' }
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
    
    // Add subject and grade fields to completed questions if needed
    const completedQuestionsStr = localStorage.getItem('completedQuestions');
    if (completedQuestionsStr) {
      const completedQuestions = JSON.parse(completedQuestionsStr);
      let hasChanges = false;
      
      Object.entries(completedQuestions).forEach(([videoId, data]: [string, any]) => {
        // Add subject if missing
        if (!data.subject) {
          // Assign a random subject for existing data
          const subjects = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat', 'Felsefe', 'İngilizce'];
          data.subject = subjects[Math.floor(Math.random() * subjects.length)];
          hasChanges = true;
        }
        
        // Add grade if missing
        if (!data.grade) {
          // Assign a grade based on videoId to ensure consistent assignment
          const videoIdNum = parseInt(videoId);
          const grades = [9, 10, 11, 12];
          data.grade = grades[videoIdNum % 4];
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
      }
    }
    
    // Add subject and grade fields to recently viewed videos if needed
    const recentlyViewedStr = localStorage.getItem('recentlyViewedVideos');
    if (recentlyViewedStr) {
      try {
        const recentlyViewed = JSON.parse(recentlyViewedStr);
        
        // Check if recentlyViewed is an array
        if (Array.isArray(recentlyViewed)) {
          let hasChanges = false;
          let updatedRecentlyViewed = [...recentlyViewed];
          
          // Convert to proper format if it's just an array of numbers
          if (recentlyViewed.length > 0 && typeof recentlyViewed[0] !== 'object') {
            const subjects = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat', 'Felsefe', 'İngilizce'];
            const grades = [9, 10, 11, 12];
            
            updatedRecentlyViewed = recentlyViewed.map((videoId: any) => {
              // Ensure the videoId is treated correctly whether it's a number or an object
              if (typeof videoId === 'object' && videoId !== null) return videoId;
              
              return {
                id: Number(videoId),
                subject: subjects[Number(videoId) % subjects.length],
                grade: grades[Number(videoId) % grades.length]
              };
            });
            
            hasChanges = true;
          } else {
            // It's already an array of objects, add subject and grade if missing
            updatedRecentlyViewed.forEach((video: any) => {
              if (!video) return;
              
              if (!video.subject) {
                const subjects = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat', 'Felsefe', 'İngilizce'];
                video.subject = subjects[video.id % subjects.length];
                hasChanges = true;
              }
              
              if (!video.grade) {
                const grades = [9, 10, 11, 12];
                video.grade = grades[video.id % grades.length];
                hasChanges = true;
              }
            });
          }
          
          if (hasChanges) {
            localStorage.setItem('recentlyViewedVideos', JSON.stringify(updatedRecentlyViewed));
          }
        }
      } catch (error) {
        console.error('Error processing recently viewed videos:', error);
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
