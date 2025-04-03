
import React, { useState } from 'react';
import SubjectGrid from '@/components/SubjectGrid';
import SearchBar from '@/components/SearchBar';
import VideoCard from '@/components/VideoCard';
import NavBar from '@/components/NavBar';
import { Bookmark, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('trend');
  
  const handleSubjectClick = (subject: string) => {
    toast({
      title: subject,
      description: `${subject} kategorisi seçildi.`,
    });
  };

  const handleVideoClick = (title: string) => {
    toast({
      title: "Video",
      description: `'${title}' videosu oynatılıyor...`,
    });
  };

  const trendVideos = [
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
      saved: true
    },
    {
      id: 3,
      title: "Matematik: Türev Kavramı ve Uygulamaları",
      thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      duration: "1:00",
      saved: false
    },
  ];

  const recommendedVideos = [
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
      saved: true
    },
  ];

  const popularVideos = [
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

  const getActiveVideos = () => {
    switch(activeTab) {
      case 'trend':
        return trendVideos;
      case 'recommended':
        return recommendedVideos;
      case 'popular':
        return popularVideos;
      default:
        return trendVideos;
    }
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
        <h1 className="text-2xl font-bold mb-4">Hızlı Öğrenme</h1>
        <SearchBar />
        
        <h2 className="text-lg font-semibold mt-6 mb-4">Konular</h2>
        <SubjectGrid onSubjectClick={handleSubjectClick} />
        
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
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Index;
