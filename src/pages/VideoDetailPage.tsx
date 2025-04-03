
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

interface VideoDetails {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved: boolean;
  subject?: string;
  description?: string;
  examples?: {
    question: string;
    options?: string[];
    answer?: string;
    explanation?: string;
  }[];
}

// Mock function to get video details (in a real app this would fetch from API)
const getVideoDetails = (videoId: string): VideoDetails => {
  // This is sample data. In a real app, you would fetch this from an API
  return {
    id: parseInt(videoId),
    title: `Video ${videoId}`,
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "10:00",
    saved: false,
    subject: "Fizik",
    description: "Bu videoda, fiziğin temel prensiplerini ve günlük hayatta nasıl uygulandığını öğreneceksiniz. Newton'un hareket kanunları, enerji korunumu ve momentum gibi temel kavramlar ele alınacaktır. Ayrıca, pratik örneklerle teorik bilgilerin nasıl uygulanacağı gösterilecektir.",
    examples: [
      {
        question: "Bir cisim 10 m/s hızla hareket ederken, 5 saniye boyunca 2 m/s² sabit ivme ile hızlanıyor. Son hızı nedir?",
        options: ["20 m/s", "15 m/s", "18 m/s", "22 m/s"],
        answer: "20 m/s",
        explanation: "v = v₀ + at formülünü kullanarak: v = 10 m/s + (2 m/s² × 5 s) = 10 m/s + 10 m/s = 20 m/s"
      },
      {
        question: "Bir cismin kütlesi 5 kg ve üzerine 10 N kuvvet uygulanıyor. Cismin ivmesi nedir?",
        options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²"],
        answer: "2 m/s²",
        explanation: "F = ma formülünü kullanarak: a = F/m = 10 N / 5 kg = 2 m/s²"
      },
      {
        question: "Yerden 20 metre yükseklikten serbest bırakılan bir cisim yere kaç saniyede ulaşır? (g = 10 m/s²)",
        options: ["1 s", "2 s", "3 s", "4 s"],
        answer: "2 s",
        explanation: "h = (1/2)gt² formülünü kullanarak: 20 m = (1/2) × 10 m/s² × t², t² = 4, t = 2 s"
      }
    ]
  };
};

const VideoDetailPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<VideoDetails | null>(null);
  const [saved, setSaved] = useState(false);
  
  useEffect(() => {
    if (!videoId) return;
    
    // In a real app, you would fetch this from an API
    const videoDetails = getVideoDetails(videoId);
    
    // Check if this video is saved
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    if (savedVideosFromStorage) {
      const savedIds = JSON.parse(savedVideosFromStorage);
      videoDetails.saved = savedIds.includes(videoDetails.id);
      setSaved(videoDetails.saved);
    }
    
    setVideo(videoDetails);
  }, [videoId]);
  
  const handleSaveVideo = () => {
    if (!video) return;
    
    // Get current saved videos from localStorage
    const savedVideosFromStorage = localStorage.getItem('savedVideos');
    let savedIds = savedVideosFromStorage ? JSON.parse(savedVideosFromStorage) : [];
    
    // Toggle save status
    const newSaveStatus = !saved;
    setSaved(newSaveStatus);
    
    if (newSaveStatus) {
      // Add to saved videos if not already saved
      if (!savedIds.includes(video.id)) {
        savedIds.push(video.id);
      }
    } else {
      // Remove from saved videos
      savedIds = savedIds.filter((id: number) => id !== video.id);
    }
    
    // Update localStorage
    localStorage.setItem('savedVideos', JSON.stringify(savedIds));
  };
  
  if (!video) {
    return <div className="p-4">Video yükleniyor...</div>;
  }
  
  return (
    <div className="pb-16">
      <div className="bg-primary/10 p-4">
        <div className="flex items-center justify-between mb-2">
          <Link to="/" className="text-primary">
            <ArrowLeft size={24} />
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSaveVideo}
            aria-label={saved ? "Kaydedilmiş videoyu kaldır" : "Videoyu kaydet"}
          >
            <Bookmark size={24} fill={saved ? "currentColor" : "none"} />
          </Button>
        </div>
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <p className="text-muted-foreground text-sm">{video.subject} • {video.duration}</p>
      </div>
      
      <div className="p-4">
        {/* Video Player */}
        <div className="aspect-video bg-black mb-4 rounded-lg overflow-hidden relative">
          <img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/80 p-4 rounded-full">
              <BookOpen size={32} className="text-white" />
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="content">Konu Anlatımı</TabsTrigger>
            <TabsTrigger value="questions">Örnek Sorular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="mt-4">
            <div className="prose">
              <p>{video.description}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="questions" className="mt-4 space-y-6">
            {video.examples?.map((example, index) => (
              <div key={index} className="space-y-4 border rounded-lg p-4">
                <div className="font-medium">Soru {index + 1}: {example.question}</div>
                
                {example.options && (
                  <div className="space-y-2">
                    {example.options.map((option, optionIndex) => (
                      <div 
                        key={optionIndex}
                        className={`p-2 border rounded cursor-pointer ${option === example.answer ? 'bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-800' : 'hover:bg-muted'}`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 bg-muted p-3 rounded">
                  <div className="font-medium text-sm">Açıklama:</div>
                  <div className="text-sm">{example.explanation}</div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
      
      <NavBar />
    </div>
  );
};

export default VideoDetailPage;
