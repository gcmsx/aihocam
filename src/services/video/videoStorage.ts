import { Video } from '@/types/video';
import { setupDatabase } from './videoDatabase';

/**
 * Get saved video IDs from localStorage
 */
export const getSavedVideosFromStorage = (): number[] => {
  const savedVideosFromStorage = localStorage.getItem('savedVideos');
  
  if (savedVideosFromStorage) {
    try {
      return JSON.parse(savedVideosFromStorage);
    } catch (error) {
      console.error("Error parsing saved videos:", error);
      return [];
    }
  }
  
  return [];
};

/**
 * Get recently viewed video IDs from localStorage
 */
export const getRecentVideosFromStorage = (): number[] => {
  const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
  
  if (recentlyViewedFromStorage) {
    try {
      return JSON.parse(recentlyViewedFromStorage);
    } catch (error) {
      console.error("Error parsing recently viewed videos:", error);
      return [];
    }
  }
  
  return [];
};

/**
 * Save a video to IndexedDB and localStorage
 */
export const downloadVideo = async (videoId: number, video: Video): Promise<number[]> => {
  try {
    // Get current saved videos from localStorage
    const savedIds = getSavedVideosFromStorage();
    
    // Toggle download status
    let updatedSavedIds: number[];
    
    if (savedIds.includes(videoId)) {
      // If already downloaded, remove it
      updatedSavedIds = savedIds.filter(id => id !== videoId);
      
      // Remove from IndexedDB
      const db = await setupDatabase() as IDBDatabase;
      const transaction = db.transaction(['videos'], 'readwrite');
      const store = transaction.objectStore('videos');
      
      const deleteRequest = store.delete(videoId);
      
      // Wait for deletion to complete
      await new Promise((resolve, reject) => {
        deleteRequest.onsuccess = resolve;
        deleteRequest.onerror = reject;
        transaction.oncomplete = resolve;
      });
    } else {
      // If not downloaded, add it
      updatedSavedIds = [...savedIds, videoId];
      
      // Add to IndexedDB for offline viewing
      const db = await setupDatabase() as IDBDatabase;
      const transaction = db.transaction(['videos'], 'readwrite');
      const store = transaction.objectStore('videos');
      
      // Simulating video data download
      const videoData = {
        ...video,
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        saved: true,
        downloaded: true,
        downloadDate: new Date().toISOString()
      };
      
      const putRequest = store.put(videoData);
      
      // Wait for put to complete
      await new Promise((resolve, reject) => {
        putRequest.onsuccess = resolve;
        putRequest.onerror = reject;
        transaction.oncomplete = resolve;
      });
    }
    
    // Make sure localStorage updates immediately and synchronously
    localStorage.setItem('savedVideos', JSON.stringify(updatedSavedIds));
    console.log("Updated downloaded videos IDs:", updatedSavedIds);
    
    // Dispatch an event to notify all components about the change
    window.dispatchEvent(new CustomEvent('videoSaved', { 
      detail: { videoId, saved: !savedIds.includes(videoId) } 
    }));
    
    return updatedSavedIds;
  } catch (error) {
    console.error("Error in downloadVideo:", error);
    throw error;
  }
};

/**
 * Save a video ID to localStorage (legacy method, kept for compatibility)
 */
export const saveVideo = (videoId: number): number[] => {
  // Get current saved videos from localStorage
  const savedIds = getSavedVideosFromStorage();
  
  // Toggle save status
  let updatedSavedIds: number[];
  
  if (savedIds.includes(videoId)) {
    updatedSavedIds = savedIds.filter(id => id !== videoId);
  } else {
    updatedSavedIds = [...savedIds, videoId];
  }
  
  // Update localStorage
  localStorage.setItem('savedVideos', JSON.stringify(updatedSavedIds));
  console.log("Updated saved IDs:", updatedSavedIds);
  
  // Dispatch an event to notify all components about the change
  window.dispatchEvent(new CustomEvent('videoSaved', { 
    detail: { videoId, saved: !savedIds.includes(videoId) } 
  }));
  
  return updatedSavedIds;
};

/**
 * Update recently viewed videos in localStorage
 */
export const updateRecentlyViewed = (videoId: number): number[] => {
  const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
  let recentlyViewed = recentlyViewedFromStorage ? JSON.parse(recentlyViewedFromStorage) : [];
  
  // Remove the video if it's already in the recently viewed list
  recentlyViewed = recentlyViewed.filter((id: number) => id !== videoId);
  
  // Add the video to the beginning of the list
  recentlyViewed.unshift(videoId);
  
  // Keep only the most recent 10 videos
  recentlyViewed = recentlyViewed.slice(0, 10);
  
  // Update localStorage with stringified array
  localStorage.setItem('recentlyViewedVideos', JSON.stringify(recentlyViewed));
  
  console.log("Recently viewed videos updated:", recentlyViewed);
  
  return recentlyViewed;
};
