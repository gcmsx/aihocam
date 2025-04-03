
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import VideoCard from '@/components/VideoCard';
import SearchBar from '@/components/SearchBar';
import { BookOpen, BookMarked, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

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

  // Video data for all videos in the application
  useEffect(() => {
    // This would typically come from an API, but for now we'll hardcode it
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
    ];
    
    setAllVideos(videoData);
    
    // For demo, set some videos as recent
    setRecentVideos([
      {
        id: 3,
        title: "Modern Türkiye Tarihinin Dönüm Noktaları - Cumhuriyetin İlanı",
        thumbnailUrl: "https://images.unsplash.com/photo-1596005554384-d293674c91d7",
        duration: "1:00",
        saved: false
      },
      {
        id: 4,
        title: "Matematik: Türev Kavramı ve Uygulamaları",
        thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        duration: "1:00",
        saved: false
      },
    ]);
  }, []);

  // Load saved videos from localStorage
  useEffect(() => {
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    if (savedVideosFromStorage) {
      const savedIds = JSON.parse(savedVideosFromStorage);
      
      // Update saved videos based on the IDs from localStorage
      const updatedSavedVideos = allVideos
        .filter(video => savedIds.includes(video.id))
        .map(video => ({ ...video, saved: true }));
      
      setSavedVideos(updatedSavedVideos);
      
      // Also update saved status in other video categories
      setRecentVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: savedIds.includes(video.id)
        }))
      );
    }
  }, [allVideos]);

  const getActiveVideos = () => {
    switch(activeTab) {
      case 'saved':
        return savedVideos;
      case 'recent':
        return recentVideos;
      default:
        return savedVideos;
    }
  };

  const handleVideoClick = (title: string) => {
    toast({
      title: "Video",
      description: `'${title}' videosu oynatılıyor...`,
    });
  };

  const handleSaveVideo = (videoId: number) => {
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
    
    // Update UI state
    const updateVideoSavedStatus = (videos) => 
      videos.map(video => 
        video.id === videoId 
          ? { ...video, saved: !video.saved } 
          : video
      );
    
    setSavedVideos(prevVideos => {
      const updatedVideos = updateVideoSavedStatus(prevVideos);
      // If a video is unsaved, remove it from the saved tab
      return activeTab === 'saved' 
        ? updatedVideos.filter(video => video.saved) 
        : updatedVideos;
    });
    
    setRecentVideos(prevVideos => updateVideoSavedStatus(prevVideos));
    
    // If a video was saved, make sure it appears in the saved videos list
    if (!savedIds.includes(videoId)) {
      // Video was unsaved
      toast({
        title: "Video Kaldırıldı",
        description: "Video kaydedilenlerden kaldırıldı.",
      });
    } else {
      // Video was saved
      const videoToAdd = allVideos.find(v => v.id === videoId);
      if (videoToAdd && !savedVideos.some(v => v.id === videoId)) {
        setSavedVideos(prev => [...prev, { ...videoToAdd, saved: true }]);
      }
      
      toast({
        title: "Video Kaydedildi",
        description: "Video kütüphanenize eklendi.",
      });
    }
  };

  return (
    <div className="pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Kütüphane</h1>
        <SearchBar placeholder="Kütüphanenizde arayın..." />
        
        <div className="mt-6">
          <div className="flex border-b mb-4">
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
          
          {getActiveVideos().length > 0 ? (
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
