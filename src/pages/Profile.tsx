
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
    // Clear all localStorage data
    localStorage.clear();
    
    // Reset critical app settings
    localStorage.setItem('appVersion', '0.345');
    localStorage.setItem('selected_grade', '9');
    
    // Clear IndexedDB database for videos
    clearAllDatabases();
    
    // Show toast notification
    toast({
      title: "Tüm ders verileri silindi",
      description: "İzlenen videolar, tamamlanan sorular ve ilerleme durumu başarıyla temizlendi.",
      variant: "default",
    });
    
    // Notify all components about data reset
    window.dispatchEvent(new CustomEvent('lessonDataCleared'));
    window.dispatchEvent(new CustomEvent('allContentCleared'));
    
    // Reset trending, recommended and popular videos
    window.dispatchEvent(new CustomEvent('resetHomeContent'));
  };
  
  // Function to clear all IndexedDB databases
  const clearAllDatabases = () => {
    try {
      // Get all database names
      const databases = indexedDB.databases ? indexedDB.databases() : Promise.resolve([]);
      
      databases.then((dbs) => {
        dbs.forEach(db => {
          if (db.name) {
            try {
              console.log(`Deleting database: ${db.name}`);
              const request = indexedDB.deleteDatabase(db.name);
              
              request.onsuccess = () => {
                console.log(`Database ${db.name} successfully deleted`);
              };
              
              request.onerror = (error) => {
                console.error(`Error deleting database ${db.name}:`, error);
              };
            } catch (error) {
              console.error(`Error accessing database ${db.name}:`, error);
            }
          }
        });
      }).catch(error => {
        console.error('Error listing databases:', error);
        
        // Fallback: try to delete VideoDatabase directly
        try {
          const request = indexedDB.deleteDatabase('VideoDatabase');
          
          request.onsuccess = () => {
            console.log('Video database successfully deleted');
          };
          
          request.onerror = (error) => {
            console.error('Error deleting video database:', error);
          };
        } catch (error) {
          console.error('Error accessing IndexedDB:', error);
        }
      });
    } catch (error) {
      console.error('Error accessing IndexedDB:', error);
      
      // Fallback: try to delete VideoDatabase directly
      try {
        const request = indexedDB.deleteDatabase('VideoDatabase');
        
        request.onsuccess = () => {
          console.log('Video database successfully deleted');
        };
        
        request.onerror = (error) => {
          console.error('Error deleting video database:', error);
        };
      } catch (error) {
        console.error('Error accessing IndexedDB:', error);
      }
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
