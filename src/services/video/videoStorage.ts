
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
      const recentlyViewed = JSON.parse(recentlyViewedFromStorage);
      
      // Handle both array of objects and array of numbers
      if (recentlyViewed.length > 0 && typeof recentlyViewed[0] === 'object') {
        return recentlyViewed.map((video: any) => video.id);
      }
      
      return recentlyViewed;
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
      
      console.log(`Video ${videoId} removed from IndexedDB`);
    } else {
      // If not downloaded, add it
      updatedSavedIds = [...savedIds, videoId];
      
      // Add to IndexedDB for offline viewing
      const db = await setupDatabase() as IDBDatabase;
      const transaction = db.transaction(['videos'], 'readwrite');
      const store = transaction.objectStore('videos');
      
      // Ensure we're saving the correct video data
      // Use the passed video object but ensure all required fields are present
      const videoData = {
        id: videoId,
        title: video.title || `Video ${videoId}`,
        thumbnailUrl: video.thumbnailUrl || "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
        duration: video.duration || "10:00",
        subject: video.subject || "",
        saved: true,
        downloaded: true,
        downloadDate: new Date().toISOString(),
        // Include any additional fields from the original video
        ...video
      };
      
      console.log("Saving video to IndexedDB:", videoData);
      
      const putRequest = store.put(videoData);
      
      // Wait for put to complete
      await new Promise((resolve, reject) => {
        putRequest.onsuccess = resolve;
        putRequest.onerror = (error) => {
          console.error("Error saving to IndexedDB:", error);
          reject(error);
        };
        transaction.oncomplete = resolve;
      });
      
      console.log(`Video ${videoId} saved to IndexedDB successfully`);
    }
    
    // Make sure localStorage updates immediately and synchronously
    localStorage.setItem('savedVideos', JSON.stringify(updatedSavedIds));
    console.log("Updated downloaded videos IDs:", updatedSavedIds);
    
    // Dispatch a CUSTOM event to notify all components about the change
    window.dispatchEvent(new CustomEvent('videoDownloaded', { 
      detail: { videoId, saved: !savedIds.includes(videoId) } 
    }));
    
    // For backward compatibility
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
 * Update recently viewed videos in localStorage and ensures the video is properly saved
 */
export const updateRecentlyViewed = (videoId: number): number[] => {
  const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
  let recentlyViewed = [];
  
  // Process existing data or initialize new array
  if (recentlyViewedFromStorage) {
    try {
      const parsed = JSON.parse(recentlyViewedFromStorage);
      
      // Convert to IDs if it's already objects with IDs
      if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0].id) {
        recentlyViewed = parsed.map(item => item.id);
      } else if (Array.isArray(parsed)) {
        recentlyViewed = parsed;
      }
    } catch (error) {
      console.error("Error parsing recentlyViewed:", error);
    }
  }
  
  // Check if the video is already in the list
  const isNewVideo = !recentlyViewed.includes(videoId);
  
  // Remove the video if it's already in the recently viewed list
  recentlyViewed = recentlyViewed.filter((id: number) => id !== videoId);
  
  // Add the video to the beginning of the list
  recentlyViewed.unshift(videoId);
  
  // Keep only the most recent 10 videos
  recentlyViewed = recentlyViewed.slice(0, 10);
  
  // Instead of storing just IDs, store objects with ID, subject and grade
  const subjects = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat', 'Felsefe', 'İngilizce'];
  const grades = [9, 10, 11, 12];
  
  const recentlyViewedObjects = recentlyViewed.map((id: number) => ({
    id: id,
    subject: subjects[id % subjects.length],
    grade: grades[id % grades.length]
  }));
  
  // Update localStorage with stringified array of objects
  localStorage.setItem('recentlyViewedVideos', JSON.stringify(recentlyViewedObjects));
  
  console.log("Recently viewed videos updated:", recentlyViewedObjects);
  
  // Dispatch an event when a new video is added to recently viewed
  if (isNewVideo) {
    // Dispatch a custom event to update daily video count
    window.dispatchEvent(new CustomEvent('recentlyViewedUpdated', { 
      detail: { videoId } 
    }));
    
    // Update daily progress directly
    const today = new Date().toLocaleDateString();
    const dailyProgressStr = localStorage.getItem(`dailyProgress_${today}`);
    const dailyProgress = dailyProgressStr ? JSON.parse(dailyProgressStr) : { videosWatched: 0, goalReached: false };
    
    if (!dailyProgress.goalReached) {
      const newVideosWatched = dailyProgress.videosWatched + 1;
      
      // Check if goal is reached
      if (newVideosWatched >= 5 && !dailyProgress.goalReached) {
        // Add 3 points for completing daily goal
        const achievementsFromStorage = localStorage.getItem('achievements');
        const achievements = achievementsFromStorage ? JSON.parse(achievementsFromStorage) : { count: 0 };
        achievements.count += 3;
        localStorage.setItem('achievements', JSON.stringify(achievements));
        
        // Show a toast notification
        if (typeof window !== 'undefined') {
          const toastEvent = new CustomEvent('toast', {
            detail: {
              title: "Günlük Hedef Tamamlandı!",
              description: "5 video izlediniz ve 3 puan kazandınız.",
              variant: "default"
            }
          });
          window.dispatchEvent(toastEvent);
        }
      }
      
      // Save updated progress
      localStorage.setItem(`dailyProgress_${today}`, JSON.stringify({
        videosWatched: newVideosWatched,
        goalReached: newVideosWatched >= 5
      }));
    }
  }
  
  return recentlyViewed;
};

/**
 * Get all saved videos with full details
 */
export const getAllSavedVideos = (allVideos: Video[]): Video[] => {
  const savedIds = getSavedVideosFromStorage();
  return allVideos.filter(video => savedIds.includes(video.id))
    .map(video => ({...video, saved: true}));
};

/**
 * Get all recently viewed videos with full details
 */
export const getAllRecentVideos = (allVideos: Video[]): Video[] => {
  const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
  const savedIds = getSavedVideosFromStorage();
  let recentIds: number[] = [];
  
  if (recentlyViewedFromStorage) {
    try {
      const parsed = JSON.parse(recentlyViewedFromStorage);
      
      // Handle both formats: array of objects with ID or array of numbers
      if (Array.isArray(parsed)) {
        if (parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0].id) {
          recentIds = parsed.map(item => item.id);
        } else {
          recentIds = parsed;
        }
      }
    } catch (error) {
      console.error("Error parsing recently viewed videos:", error);
    }
  }
  
  // Keep original order of recently viewed videos
  return recentIds
    .map(id => allVideos.find(video => video.id === id))
    .filter((video): video is Video => !!video)
    .map(video => ({...video, saved: savedIds.includes(video.id)}));
};

/**
 * Get a video from IndexedDB by ID
 */
export const getVideoFromIndexedDB = async (videoId: number): Promise<Video | null> => {
  try {
    const db = await setupDatabase() as IDBDatabase;
    const transaction = db.transaction(['videos'], 'readonly');
    const store = transaction.objectStore('videos');
    
    return new Promise((resolve, reject) => {
      const request = store.get(videoId);
      
      request.onsuccess = () => {
        if (request.result) {
          console.log(`Video ${videoId} found in IndexedDB:`, request.result);
          resolve(request.result);
        } else {
          console.log(`Video ${videoId} not found in IndexedDB`);
          resolve(null);
        }
      };
      
      request.onerror = (error) => {
        console.error(`Error getting video ${videoId} from IndexedDB:`, error);
        reject(error);
      };
    });
  } catch (error) {
    console.error(`Error accessing IndexedDB for video ${videoId}:`, error);
    return null;
  }
};
