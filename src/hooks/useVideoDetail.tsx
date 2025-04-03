
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Video } from '@/types/video';
import { getSavedVideosFromStorage, saveVideo, updateRecentlyViewed } from '@/services/videoService';

export interface Example {
  question: string;
  options?: string[];
  answer?: string;
  explanation?: string;
}

export interface VideoDetails extends Video {
  description?: string;
  examples?: Example[];
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

export const useVideoDetail = (videoId: string | undefined) => {
  const [video, setVideo] = useState<VideoDetails | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    
    try {
      // Video detaylarını getir
      const videoDetails = getVideoDetails(videoId);
      
      // Videonun kaydedilmiş olup olmadığını kontrol et
      const savedIds = getSavedVideosFromStorage();
      videoDetails.saved = savedIds.includes(videoDetails.id);
      setSaved(videoDetails.saved);
      
      setVideo(videoDetails);
      
      // Son izlenen videolara ekle
      if (videoDetails) {
        updateRecentlyViewed(videoDetails.id);
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
      toast({
        title: "Hata!",
        description: "Video detayları yüklenirken bir hata oluştu.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [videoId, toast]);
  
  const handleSaveVideo = () => {
    if (!video) return;
    
    // Toggle save status
    const updatedSavedIds = saveVideo(video.id);
    const newSaveStatus = updatedSavedIds.includes(video.id);
    setSaved(newSaveStatus);
    
    // Kullanıcıya bildirim göster
    toast({
      title: newSaveStatus ? "Video kaydedildi" : "Video kaldırıldı",
      description: newSaveStatus
        ? "Video başarıyla kaydedildi."
        : "Video kaydedilenlerden kaldırıldı.",
    });
  };
  
  return { video, saved, loading, handleSaveVideo };
};
