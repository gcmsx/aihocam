import React, { useState, useEffect } from 'react';
import SubjectGrid from '@/components/SubjectGrid';
import SearchBar from '@/components/SearchBar';
import VideoCard from '@/components/VideoCard';
import NavBar from '@/components/NavBar';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('trend');
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState({
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

  useEffect(() => {
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    if (savedVideosFromStorage) {
      const savedIds = JSON.parse(savedVideosFromStorage);
      
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
    }
  }, []);
  
  const handleVideoClick = (title: string) => {
    toast({
      title: "Video",
      description: `'${title}' videosu açılıyor...`,
    });
  };

  const handleSaveVideo = (videoId: number) => {
    setVideos(prevVideos => {
      const updatedVideos = { ...prevVideos };
      
      for (const category in updatedVideos) {
        updatedVideos[category] = updatedVideos[category].map(video => 
          video.id === videoId ? { ...video, saved: !video.saved } : video
        );
      }
      
      const allVideos = Object.values(updatedVideos).flat();
      const savedIds = allVideos.filter(video => video.saved).map(video => video.id);
      localStorage.setItem('savedVideos', JSON.stringify(savedIds));
      
      return updatedVideos;
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getActiveVideos = () => {
    const activeVideos = videos[activeTab] || [];
    
    if (!searchQuery) {
      return activeVideos;
    }
    
    return activeVideos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Hızlı Öğrenme</h1>
        <SearchBar onChange={handleSearch} />
        
        <h2 className="text-lg font-semibold mt-6 mb-4">Konular</h2>
        <SubjectGrid onSubjectClick={() => {}} />
        
        <div className="mt-8">
          <div className="flex border-b mb-4">
            <button 
              className={`pb-2 px-4 text-sm font-medium ${activeTab === 'trend' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('trend')}
            >
              Trend
            </button>
            <button 
              className={`pb-2 px-4 text-sm font-medium ${activeTab === 'recommended' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('recommended')}
            >
              Önerilen
            </button>
            <button 
              className={`pb-2 px-4 text-sm font-medium ${activeTab === 'popular' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('popular')}
            >
              Popüler
            </button>
          </div>
          
          {getActiveVideos().length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              Arama sonucu bulunamadı.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getActiveVideos().map(video => (
                <VideoCard 
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  duration={video.duration}
                  saved={video.saved}
                  onSave={() => handleSaveVideo(video.id)}
                  onClick={() => handleVideoClick(video.title)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Index;
