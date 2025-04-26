
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import VideoHeader from '@/components/video/VideoHeader';
import VideoPlayer from '@/components/video/VideoPlayer';
import ContentTabs from '@/components/video/ContentTabs';
import { Video } from '@/types/video';
import { 
  getFullVideoDetails, 
  downloadVideo, 
  getVideoFromIndexedDB,
  getSubjectExamples,
  getSubjectDescription
} from '@/services/video';
import { toast } from '@/hooks/use-toast';

const VideoDetailPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      return;
    }

    const fetchVideoDetails = async () => {
      setLoading(true);

      try {
        const id = parseInt(videoId);
        if (isNaN(id)) {
          toast({
            title: "Hata",
            description: "Geçersiz video ID'si",
            variant: "destructive"
          });
          navigate('/');
          return;
        }

        // Get complete video details
        const videoDetails = await getFullVideoDetails(id);
        
        if (!videoDetails) {
          // Check if we have an offline version
          const offlineVideo = await getVideoFromIndexedDB(id);
          
          if (offlineVideo) {
            setVideo(offlineVideo);
            setSaved(true);
          } else {
            toast({
              title: "Video bulunamadı",
              description: "İstediğiniz video mevcut değil",
              variant: "destructive"
            });
            navigate('/');
            return;
          }
        } else {
          setVideo(videoDetails);
          setSaved(videoDetails.saved);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
        toast({
          title: "Hata",
          description: "Video yüklenirken bir hata oluştu",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
    
    // Listen for online/offline events
    const handleOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };
    
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [videoId, navigate]);
  
  // Listen for video download events
  useEffect(() => {
    if (!video) return;
    
    const handleVideoDownloaded = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && video && customEvent.detail.videoId === video.id) {
        setSaved(customEvent.detail.saved);
      }
    };
    
    window.addEventListener('videoDownloaded', handleVideoDownloaded);
    window.addEventListener('videoSaved', handleVideoDownloaded);
    
    return () => {
      window.removeEventListener('videoDownloaded', handleVideoDownloaded);
      window.removeEventListener('videoSaved', handleVideoDownloaded);
    };
  }, [video]);
  
  const handleSaveVideo = async () => {
    if (!video) return;
    
    try {
      // Update UI immediately for better responsiveness
      setSaved(!saved);
      
      // Process the download
      await downloadVideo(video.id, video);
    } catch (error) {
      console.error("Error saving video:", error);
      // Revert UI state if error occurs
      setSaved(saved);
      toast({
        title: "Hata",
        description: "Video kaydedilirken bir hata oluştu",
        variant: "destructive"
      });
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Video yükleniyor...</p>
        </div>
      </div>
    );
  }
  
  if (!video) {
    return (
      <div className="p-4 text-center">
        <p>{isOffline ? 
          "Bu video çevrimdışı kullanım için indirilmemiş." : 
          "Video bulunamadı."}
        </p>
        <button 
          className="mt-4 bg-primary text-white px-4 py-2 rounded"
          onClick={() => navigate('/')}
        >
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }
  
  // Get subject-specific content
  const description = video.description || getSubjectDescription(video.subject || '');
  const examples = video.examples || getSubjectExamples(video.subject || '');
  
  return (
    <div className="pb-16">
      <VideoHeader 
        title={video.title}
        subject={video.subject}
        duration={video.duration}
        saved={saved}
        onSave={handleSaveVideo}
      />
      
      <div className="p-4">
        <VideoPlayer 
          thumbnailUrl={video.thumbnailUrl}
          title={video.title}
          videoUrl={video.videoUrl || "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}
        />
        
        <ContentTabs 
          description={description}
          examples={examples}
          videoId={video.id}
        />
      </div>
      
      {isOffline && (
        <div className="bg-yellow-100 p-2 text-center text-sm">
          Çevrimdışı modda izliyorsunuz
        </div>
      )}
      
      <NavBar />
    </div>
  );
};

export default VideoDetailPage;
