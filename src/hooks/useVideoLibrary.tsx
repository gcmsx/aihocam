
import { useState, useEffect } from 'react';

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
}

export const useVideoLibrary = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [savedVideos, setSavedVideos] = useState<Video[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const videoData = [
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
      // Additional videos for searching
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
    
    setAllVideos(videoData);
  }, []);

  useEffect(() => {
    // Load saved videos from localStorage
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    
    if (savedVideosFromStorage) {
      try {
        const savedIds = JSON.parse(savedVideosFromStorage);
        console.log("Saved IDs from storage:", savedIds);
        
        // Find videos with IDs in the savedIds array
        const updatedSavedVideos = allVideos
          .filter(video => savedIds.includes(video.id))
          .map(video => ({ ...video, saved: true }));
        
        console.log("Updated saved videos:", updatedSavedVideos);
        setSavedVideos(updatedSavedVideos);
      } catch (error) {
        console.error("Error parsing saved videos:", error);
        setSavedVideos([]);
      }
    }
    
    // Load recently viewed videos from localStorage
    const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
    
    if (recentlyViewedFromStorage && allVideos.length > 0) {
      try {
        const recentIds = JSON.parse(recentlyViewedFromStorage);
        console.log("Recent IDs from storage:", recentIds);
        
        // Get the recently viewed videos from allVideos by ID
        const recentlyViewedVideos: Video[] = [];
        
        recentIds.forEach((id: number) => {
          const video = allVideos.find(v => v.id === id);
          if (video) {
            // Check if this video is in savedVideos to set saved status
            const isSaved = savedVideosFromStorage ? 
              JSON.parse(savedVideosFromStorage).includes(id) : false;
            
            recentlyViewedVideos.push({
              ...video,
              saved: isSaved
            });
          }
        });
        
        console.log("Updated recent videos:", recentlyViewedVideos);
        setRecentVideos(recentlyViewedVideos);
      } catch (error) {
        console.error("Error parsing recently viewed videos:", error);
        setRecentVideos([]);
      }
    }
  }, [allVideos]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getActiveVideos = () => {
    let videos;
    switch(activeTab) {
      case 'saved':
        videos = savedVideos;
        break;
      case 'recent':
        videos = recentVideos;
        break;
      default:
        videos = savedVideos;
    }
    
    if (!searchQuery) {
      return videos;
    }
    
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredAllVideos = searchQuery 
    ? allVideos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleVideoClick = (title: string) => {
    console.log("Video clicked:", title);
  };

  const handleSaveVideo = (videoId: number) => {
    try {
      // Get current saved videos from localStorage
      const savedVideosFromStorage = localStorage.getItem('savedVideos');
      let savedIds = savedVideosFromStorage ? JSON.parse(savedVideosFromStorage) : [];
      
      // Toggle save status
      if (savedIds.includes(videoId)) {
        savedIds = savedIds.filter(id => id !== videoId);
      } else {
        savedIds.push(videoId);
      }
      
      // Update localStorage
      localStorage.setItem('savedVideos', JSON.stringify(savedIds));
      console.log("Updated saved IDs:", savedIds);
      
      // Update the UI for saved videos
      setSavedVideos(prevVideos => {
        // Find videos that should be in the saved list
        const updatedVideos = allVideos
          .filter(video => savedIds.includes(video.id))
          .map(video => ({ ...video, saved: true }));
        
        return updatedVideos;
      });
      
      // Update the UI for recent videos
      setRecentVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: savedIds.includes(video.id)
        }))
      );
      
    } catch (error) {
      console.error("Error updating saved videos:", error);
    }
  };

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    handleSearch,
    savedVideos,
    recentVideos,
    allVideos,
    getActiveVideos,
    filteredAllVideos,
    handleVideoClick,
    handleSaveVideo
  };
};
