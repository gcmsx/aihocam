
import { Video } from '@/types/video';

// IndexedDB database setup
const setupDatabase = () => {
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

// Mock video verileri
const mockVideos: Video[] = [
  {
    id: 1,
    title: "Modern Türkiye Tarihinin Dönüm Noktaları - Cumhuriyetin İlanı",
    thumbnailUrl: "https://images.unsplash.com/photo-1596005554384-d293674c91d7",
    duration: "1:00",
    saved: false
  },
  {
    id: 2,
    title: "Dünya Coğrafyası: Kıtalar ve Okyanuslar",
    thumbnailUrl: "https://images.unsplash.com/photo-1589519160732-57fc498494f8",
    duration: "1:00",
    saved: false
  },
  {
    id: 3,
    title: "Matematik: Türev Kavramı ve Uygulamaları",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "1:00",
    saved: false
  },
  {
    id: 4,
    title: "Fizik: Hareket Kanunları ve Uygulamaları",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "1:00",
    saved: false
  },
  {
    id: 5,
    title: "Biyoloji: Hücre Yapısı ve İşlevi",
    thumbnailUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
    duration: "1:00",
    saved: false
  },
  {
    id: 6,
    title: "İngilizce: Günlük Konuşma Kalıpları",
    thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    duration: "1:00",
    saved: false
  },
  {
    id: 7,
    title: "Kimya: Periyodik Tablo ve Elementler",
    thumbnailUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    duration: "1:00",
    saved: false
  },
  {
    id: 8,
    title: "Edebiyat: Şiir Analizi Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe",
    duration: "1:00",
    saved: false
  },
  {
    id: 9,
    title: "Felsefe: Varoluşçuluk Akımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
    duration: "1:00",
    saved: false
  },
  {
    id: 10,
    title: "Kimya: Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    duration: "1:00",
    saved: false
  },
  {
    id: 11,
    title: "Fizik: Soru Çözüm Stratejileri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "1:00",
    saved: false
  },
  {
    id: 12,
    title: "Matematik: Soru Çözüm Yaklaşımları",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "1:00",
    saved: false
  },
];

export const getVideos = (): Video[] => {
  return mockVideos;
};

export const searchVideos = (query: string, videos: Video[]): Video[] => {
  if (!query) return [];
  
  return videos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase())
  );
};

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

// Save a video to IndexedDB and localStorage
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
      
      store.delete(videoId);
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
      
      store.put(videoData);
    }
    
    // Update localStorage
    localStorage.setItem('savedVideos', JSON.stringify(updatedSavedIds));
    console.log("Updated downloaded videos IDs:", updatedSavedIds);
    
    return updatedSavedIds;
  } catch (error) {
    console.error("Error in downloadVideo:", error);
    throw error;
  }
};

// Original saveVideo function kept for compatibility
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
  
  return updatedSavedIds;
};

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

export const getVideosByIds = (ids: number[], allVideos: Video[]): Video[] => {
  if (!ids || !Array.isArray(ids) || ids.length === 0) return [];
  
  return allVideos.filter(video => ids.includes(video.id));
};

export const updateVideoSavedStatus = (
  videos: Video[], 
  savedIds: number[]
): Video[] => {
  if (!videos || !Array.isArray(videos)) return [];
  if (!savedIds || !Array.isArray(savedIds)) return videos;
  
  return videos.map(video => ({
    ...video,
    saved: savedIds.includes(video.id)
  }));
};

// Get a video from IndexedDB
export const getVideoFromIndexedDB = async (videoId: number): Promise<any> => {
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
