
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import VideoCard from '@/components/VideoCard';
import SearchBar from '@/components/SearchBar';
import { BookOpen, BookMarked, Clock } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
}

const Library = () => {
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
    // Load saved videos
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    if (savedVideosFromStorage) {
      const savedIds = JSON.parse(savedVideosFromStorage);
      
      const updatedSavedVideos = allVideos
        .filter(video => savedIds.includes(video.id))
        .map(video => ({ ...video, saved: true }));
      
      setSavedVideos(updatedSavedVideos);
    }
    
    // Load recently viewed videos
    const recentlyViewedFromStorage = localStorage.getItem('recentlyViewedVideos');
    if (recentlyViewedFromStorage && allVideos.length > 0) {
      const recentIds = JSON.parse(recentlyViewedFromStorage);
      
      // Get the recently viewed videos from allVideos by ID
      const recentlyViewedVideos: Video[] = [];
      
      recentIds.forEach((id: number) => {
        const video = allVideos.find(v => v.id === id);
        if (video) {
          recentlyViewedVideos.push({
            ...video,
            saved: savedVideos.some(saved => saved.id === id)
          });
        }
      });
      
      setRecentVideos(recentlyViewedVideos);
    }
  }, [allVideos, savedVideos.length]);

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
    // Video click handler (empty for now)
  };

  const handleSaveVideo = (videoId: number) => {
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    let savedIds = savedVideosFromStorage ? JSON.parse(savedVideosFromStorage) : [];
    
    if (savedIds.includes(videoId)) {
      savedIds = savedIds.filter(id => id !== videoId);
    } else {
      savedIds.push(videoId);
    }
    
    localStorage.setItem('savedVideos', JSON.stringify(savedIds));
    
    const updateVideoSavedStatus = (videos) => 
      videos.map(video => 
        video.id === videoId 
          ? { ...video, saved: !video.saved } 
          : video
      );
    
    setSavedVideos(prevVideos => {
      const updatedVideos = updateVideoSavedStatus(prevVideos);
      return activeTab === 'saved' 
        ? updatedVideos.filter(video => video.saved) 
        : updatedVideos;
    });
    
    setRecentVideos(prevVideos => updateVideoSavedStatus(prevVideos));
    
    if (!savedIds.includes(videoId)) {
      // Video was unsaved - no toast
    } else {
      const videoToAdd = allVideos.find(v => v.id === videoId);
      if (videoToAdd && !savedVideos.some(v => v.id === videoId)) {
        setSavedVideos(prev => [...prev, { ...videoToAdd, saved: true }]);
      }
      // Video was saved - no toast
    }
  };

  return (
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Kütüphane</h1>
        <SearchBar 
          placeholder="Tüm videolarda arayın..." 
          onChange={handleSearch}
        />
        
        <div className="mt-6">
          <div className="flex border-b mb-4 justify-center">
            <button 
              className={`pb-2 px-4 text-sm font-medium flex items-center gap-1 ${activeTab === 'saved' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('saved')}
            >
              <BookMarked size={16} />
              Kaydedilenler
            </button>
            <button 
              className={`pb-2 px-4 text-sm font-medium flex items-center gap-1 ${activeTab === 'recent' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('recent')}
            >
              <Clock size={16} />
              Son İzlenenler
            </button>
          </div>
          
          {searchQuery && filteredAllVideos.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Arama Sonuçları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAllVideos.map(video => (
                  <VideoCard 
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    thumbnailUrl={video.thumbnailUrl}
                    duration={video.duration}
                    saved={savedVideos.some(v => v.id === video.id)}
                    onSave={() => handleSaveVideo(video.id)}
                    onClick={() => handleVideoClick(video.title)}
                  />
                ))}
              </div>
            </div>
          )}
          
          {(getActiveVideos().length > 0 && (!searchQuery || searchQuery && getActiveVideos().length > 0)) ? (
            <div>
              {searchQuery && <h2 className="text-lg font-semibold mb-2">{activeTab === 'saved' ? 'Kaydedilenler' : 'Son İzlenenler'}</h2>}
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
            </div>
          ) : (
            <div className="py-8 text-center">
              <BookOpen size={48} className="mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Bu kategoride henüz video yok.</p>
            </div>
          )}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Library;
