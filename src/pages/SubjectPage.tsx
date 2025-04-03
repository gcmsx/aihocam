import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import NavBar from '@/components/NavBar';
import VideoCard from '@/components/VideoCard';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Video } from '@/types/video';  // Use only the imported Video type
import { 
  getSavedVideosFromStorage, 
  saveVideo, 
  updateRecentlyViewed 
} from '@/services/videoService';

// Konu başlıklarına göre arkaplan renkleri
const subjectColors: Record<string, string> = {
  'Tarih': '#1A1B41',
  'Coğrafya': '#3E1F47',
  'Felsefe': '#6A3FB2',
  'Matematik': '#00B8D4',
  'Fizik': '#3E1F47',
  'Kimya': '#1A1B41',
  'Biyoloji': '#00B8D4',
  'İngilizce': '#6A3FB2',
  'Edebiyat': '#3E1F47',
};

// Konulara göre alt başlıklar
const subjectTopics: Record<string, string[]> = {
  'Tarih': ['Osmanlı Tarihi', 'Cumhuriyet Tarihi', 'İnkılap Tarihi', 'Dünya Tarihi'],
  'Coğrafya': ['Fiziki Coğrafya', 'Beşeri Coğrafya', 'Ekonomik Coğrafya', 'Türkiye Coğrafyası'],
  'Felsefe': ['Bilgi Felsefesi', 'Varlık Felsefesi', 'Ahlak Felsefesi', 'Din Felsefesi'],
  'Matematik': ['Sayılar', 'Cebir', 'Geometri', 'Trigonometri'],
  'Fizik': ['Mekanik', 'Elektrik', 'Optik', 'Modern Fizik'],
  'Kimya': ['Atomun Yapısı', 'Periyodik Tablo', 'Kimyasal Tepkimeler', 'Organik Kimya'],
  'Biyoloji': ['Hücre', 'Sistem', 'Kalıtım', 'Ekoloji'],
  'İngilizce': ['Temel İngilizce', 'Gramer', 'Kelime Bilgisi', 'Konuşma'],
  'Edebiyat': ['Şiir', 'Roman', 'Öykü', 'Tiyatro'],
};

// Örnek video verileri
const getSubjectVideos = (subject: string): Video[] => {
  return [
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: Temel Kavramlar ve Giriş`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7',
      duration: '18:30',
      saved: false,
      subject: subject
    },
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: İleri Düzey Konular`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8',
      duration: '24:15',
      saved: false,
      subject: subject
    },
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: Soru Çözüm Teknikleri`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      duration: '15:45',
      saved: false,
      subject: subject
    },
    {
      id: 100 + Math.floor(Math.random() * 900),
      title: `${subject}: Konu Özeti`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6',
      duration: '12:20',
      saved: false,
      subject: subject
    },
  ];
};

interface SubjectStatProps {
  topic: string;
  progress: number;
  color: string;
}

const SubjectStat = ({ topic, progress, color }: SubjectStatProps) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{topic}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2">
        <div 
          className="h-full rounded-full" 
          style={{ backgroundColor: color, width: `${progress}%` }} 
        />
      </Progress>
    </div>
  );
};

const SubjectPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const [videos, setVideos] = useState<Video[]>([]);  // Use imported Video type
  
  if (!subject || !subjectColors[subject]) {
    return <div className="p-4">Konu bulunamadı.</div>;
  }
  
  const topics = subjectTopics[subject] || [];
  const color = subjectColors[subject];
  
  useEffect(() => {
    const subjectVideos = getSubjectVideos(subject);
    
    // Check localStorage for saved videos
    const savedVideosFromStorage = getSavedVideosFromStorage();
    
    // Update videos with saved state
    const updatedVideos = subjectVideos.map(video => ({
      ...video,
      saved: savedVideosFromStorage.includes(video.id)
    }));
    
    setVideos(updatedVideos);
  }, [subject]);
  
  const handleVideoClick = (title: string, videoId: number) => {
    // Add to recently viewed videos
    updateRecentlyViewed(videoId);
    
    toast({
      title: "Video",
      description: `'${title}' videosu açılıyor...`,
    });
  };
  
  const handleSaveVideo = (videoId: number) => {
    // Toggle save status using the videoService
    const updatedSavedIds = saveVideo(videoId);
    
    // Update UI state
    setVideos(prevVideos => 
      prevVideos.map(video => 
        video.id === videoId 
          ? { ...video, saved: updatedSavedIds.includes(videoId) } 
          : video
      )
    );
    
    // Show toast notification
    const isNowSaved = updatedSavedIds.includes(videoId);
    toast({
      title: isNowSaved ? "Video kaydedildi" : "Video kaldırıldı",
      description: isNowSaved 
        ? "Video başarıyla kaydedildi." 
        : "Video kaydedilenlerden kaldırıldı.",
    });
  };
  
  return (
    <div className="pb-16">
      <div 
        className="p-4" 
        style={{ backgroundColor: color }}
      >
        <div className="flex items-center mb-4">
          <Link to="/" className="text-white">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold ml-2 text-white">{subject}</h1>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Önerilen Dersler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map(video => (
              <VideoCard 
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                duration={video.duration}
                saved={video.saved}
                onSave={() => handleSaveVideo(video.id)}
                onClick={() => handleVideoClick(video.title, video.id)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">İlerleme Durumu</h2>
          <div className="card p-4">
            {topics.map((topic, index) => (
              <SubjectStat 
                key={index}
                topic={topic}
                progress={Math.floor(Math.random() * 100)}
                color={color}
              />
            ))}
          </div>
          
          <div className="mt-4 p-4 card">
            <h3 className="font-semibold mb-2">Genel Durum</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Tamamlanan Video</p>
                <p className="text-2xl font-bold">{Math.floor(Math.random() * 20 + 5)}</p>
              </div>
              <div>
                <p className="text-sm">Harcanan Zaman</p>
                <p className="text-2xl font-bold">{Math.floor(Math.random() * 10 + 2)} saat</p>
              </div>
              <div>
                <p className="text-sm">Başarı Oranı</p>
                <p className="text-2xl font-bold">%{Math.floor(Math.random() * 30 + 70)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
      <Toaster />
    </div>
  );
};

export default SubjectPage;
