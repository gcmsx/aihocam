
import { Video } from '@/types/video';

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
  // İlave videolar
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

export const getVideosByIds = (ids: number[], allVideos: Video[]): Video[] => {
  return allVideos.filter(video => ids.includes(video.id));
};

export const updateVideoSavedStatus = (
  videos: Video[], 
  savedIds: number[]
): Video[] => {
  return videos.map(video => ({
    ...video,
    saved: savedIds.includes(video.id)
  }));
};
