
import { useState, useEffect } from 'react';
import { 
  getSavedVideosFromStorage, 
  downloadVideo 
} from '@/services/videoService';

export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
}

export const useHomeVideos = () => {
  const [activeTab, setActiveTab] = useState('trend');
  const [searchQuery, setSearchQuery] = useState('');
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [videos, setVideos] = useState<{[key: string]: Video[]}>({
    trend: [
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
    ],
    recommended: [
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
    ],
    popular: [
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
    ]
  });

  const additionalVideos = [
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

  useEffect(() => {
    const combinedVideos = [
      ...videos.trend,
      ...videos.recommended,
      ...videos.popular,
      ...additionalVideos
    ];
    
    setAllVideos(combinedVideos);
    
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    if (savedVideosFromStorage) {
      try {
        const savedIds = JSON.parse(savedVideosFromStorage);
        console.log("Index page - Saved IDs from storage:", savedIds);
        
        setVideos(prevVideos => {
          const updatedVideos = { ...prevVideos };
          
          for (const category in updatedVideos) {
            updatedVideos[category] = updatedVideos[category].map(video => ({
              ...video,
              saved: savedIds.includes(video.id)
            }));
          }
          
          return updatedVideos;
        });

        setAllVideos(prevAllVideos => 
          prevAllVideos.map(video => ({
            ...video,
            saved: savedIds.includes(video.id)
          }))
        );
      } catch (error) {
        console.error("Error parsing saved videos:", error);
      }
    }
  }, []);
  
  const handleVideoClick = (title: string) => {
    console.log("Video clicked:", title);
  };

  const handleSaveVideo = async (videoId: number) => {
    try {
      const video = allVideos.find(v => v.id === videoId);
      if (!video) return;
      
      setVideos(prevVideos => {
        const updatedVideos = { ...prevVideos };
        
        for (const category in updatedVideos) {
          updatedVideos[category] = updatedVideos[category].map(video => 
            video.id === videoId ? { ...video, saved: !video.saved } : video
          );
        }
        
        return updatedVideos;
      });
      
      setAllVideos(prevAllVideos => 
        prevAllVideos.map(video => 
          video.id === videoId ? { ...video, saved: !video.saved } : video
        )
      );
      
      await downloadVideo(videoId, video);
      
      window.dispatchEvent(new Event('videoDownloaded'));
    } catch (error) {
      console.error("Error saving video:", error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredAllVideos = searchQuery 
    ? allVideos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    videos,
    allVideos,
    filteredAllVideos,
    handleSearch,
    handleVideoClick,
    handleSaveVideo
  };
};
