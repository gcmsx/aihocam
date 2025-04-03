
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import VideoCard from '@/components/VideoCard';
import SearchBar from '@/components/SearchBar';
import { BookOpen, BookMarked, Clock, Star } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Library = () => {
  const [activeTab, setActiveTab] = useState('saved');

  const savedVideos = [
    {
      id: 1,
      title: "Dünya Coğrafyası: Kıtalar ve Okyanuslar",
      thumbnailUrl: "https://images.unsplash.com/photo-1589519160732-57fc498494f8",
      duration: "1:00",
      saved: true
    },
    {
      id: 2,
      title: "İngilizce: Günlük Konuşma Kalıpları",
      thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
      duration: "1:00",
      saved: true
    },
  ];

  const recentVideos = [
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
  ];

  const favoriteVideos = [
    {
      id: 5,
      title: "Fizik: Hareket Kanunları ve Uygulamaları",
      thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      duration: "1:00",
      saved: true
    },
  ];

  const getActiveVideos = () => {
    switch(activeTab) {
      case 'saved':
        return savedVideos;
      case 'recent':
        return recentVideos;
      case 'favorites':
        return favoriteVideos;
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
    toast({
      title: "Video Kaydedildi",
      description: "Video kütüphanenize eklendi.",
    });
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
            <button 
              className={`pb-2 px-4 text-sm font-medium flex items-center gap-1 ${activeTab === 'favorites' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('favorites')}
            >
              <Star size={16} />
              Favoriler
            </button>
          </div>
          
          {getActiveVideos().length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getActiveVideos().map(video => (
                <VideoCard 
                  key={video.id}
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
