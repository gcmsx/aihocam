
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
    
    // Clear all lesson data
    clearAllLessonData();
    
    // Initialize selected grade if not set
    if (!localStorage.getItem('selected_grade')) {
      localStorage.setItem('selected_grade', '9');
    }
  }, []);
  
  // Function to clear all lesson data from the application
  const clearAllLessonData = () => {
    // Keys to remove from localStorage
    const keysToRemove = [
      'recentlyViewedVideos',       // Recently viewed videos
      'savedVideos',                // Saved/downloaded videos
      'completedQuestions',         // All completed questions
      'achievements',               // User achievements
      'lastProfileVisit'            // Last profile visit timestamp
    ];
    
    // Remove all answeredQuestions entries
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('answeredQuestions_')) {
        keysToRemove.push(key);
      }
    }
    
    // Remove all dailyProgress entries
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('dailyProgress_')) {
        keysToRemove.push(key);
      }
    }
    
    // Remove all progress entries
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('progress_')) {
        keysToRemove.push(key);
      }
    }
    
    // Remove all keys
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });
    
    // Clear IndexedDB database for videos
    clearVideosDatabase();
    
    // Show toast notification
    toast({
      title: "Tüm ders verileri silindi",
      description: "İzlenen videolar, tamamlanan sorular ve ilerleme durumu başarıyla temizlendi.",
      variant: "default",
    });
    
    // Notify all components about data reset
    window.dispatchEvent(new CustomEvent('lessonDataCleared'));
  };
  
  // Function to clear the IndexedDB database for videos
  const clearVideosDatabase = () => {
    try {
      const request = indexedDB.deleteDatabase('VideoDatabase');
      
      request.onsuccess = () => {
        console.log('Video database successfully deleted');
      };
      
      request.onerror = () => {
        console.error('Error deleting video database');
      };
    } catch (error) {
      console.error('Error accessing IndexedDB:', error);
    }
  };
  
  return (
    <div className="pb-16">
      <UserProfile />
      <NavBar />
    </div>
  );
};

export default Profile;
