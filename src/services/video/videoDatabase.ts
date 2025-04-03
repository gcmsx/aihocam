
// Database-related functions for video management

/**
 * Sets up the IndexedDB database for offline video storage
 */
export const setupDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('VideoDatabase', 1);
    
    request.onerror = (event) => {
      console.error('IndexedDB error:', event);
      reject('Error opening database');
    };
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      // Create object store for videos
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos', { keyPath: 'id' });
      }
    };
    
    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };
  });
};

/**
 * Internal function to get a video from IndexedDB - renamed to avoid export conflict
 * This function is not exported to avoid conflicts with videoStorage.ts
 */
const getVideoFromIndexedDBInternal = async (videoId: number): Promise<any> => {
  try {
    const db = await setupDatabase() as IDBDatabase;
    const transaction = db.transaction(['videos'], 'readonly');
    const store = transaction.objectStore('videos');
    
    return new Promise((resolve, reject) => {
      const request = store.get(videoId);
      
      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };
      
      request.onerror = (event) => {
        reject('Error getting video from IndexedDB');
      };
    });
  } catch (error) {
    console.error("Error in getVideoFromIndexedDB:", error);
    throw error;
  }
};
