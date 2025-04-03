
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Video } from '@/types/video';
import { 
  getSavedVideosFromStorage, 
  downloadVideo, 
  updateRecentlyViewed 
} from '@/services/videoService';
import SubjectHeader from '@/components/subject/SubjectHeader';
import VideoSection from '@/components/subject/VideoSection';
import ProgressSection from '@/components/subject/ProgressSection';
import { subjectColors, subjectTopics } from '@/data/subjectData';
import { getSubjectVideos } from '@/utils/videoUtils';

const SubjectPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  
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
    
    // Listen for video download events
    const handleVideoDownload = () => {
      const savedVideosFromStorage = getSavedVideosFromStorage();
      setVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: savedVideosFromStorage.includes(video.id)
        }))
      );
    };
    
    window.addEventListener('videoDownloaded', handleVideoDownload);
    
    return () => {
      window.removeEventListener('videoDownloaded', handleVideoDownload);
    };
  }, [subject]);
  
  const handleVideoClick = (title: string, videoId: number) => {
    // Add to recently viewed videos
    updateRecentlyViewed(videoId);
  };
  
  const handleSaveVideo = async (videoId: number) => {
    try {
      setIsDownloading(true);
      
      // Find the video
      const video = videos.find(v => v.id === videoId);
      if (!video) return;
      
      // Download the video
      const updatedSavedIds = await downloadVideo(videoId, video);
      
      // Update UI state
      setVideos(prevVideos => 
        prevVideos.map(video => 
          video.id === videoId 
            ? { ...video, saved: updatedSavedIds.includes(videoId) } 
            : video
        )
      );
      
      // Dispatch event
      window.dispatchEvent(new Event('videoDownloaded'));
    } catch (error) {
      console.error("Error downloading video:", error);
    } finally {
      setIsDownloading(false);
    }
  };
  
  return (
    <div className="pb-16">
      <SubjectHeader subject={subject} color={color} />
      
      <div className="p-4">
        <VideoSection 
          videos={videos} 
          onSaveVideo={handleSaveVideo} 
          onVideoClick={handleVideoClick} 
        />
        
        <ProgressSection topics={topics} color={color} />
      </div>
      <NavBar />
    </div>
  );
};

export default SubjectPage;
