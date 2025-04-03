
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
    
    // Function to update videos when save status changes
    const updateSavedStatus = () => {
      const currentSavedIds = getSavedVideosFromStorage();
      setVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: currentSavedIds.includes(video.id)
        }))
      );
    };
    
    // Listen for video download events
    const handleVideoDownload = () => {
      updateSavedStatus();
    };
    
    const handleVideoSaved = () => {
      updateSavedStatus();
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        updateSavedStatus();
      }
    };
    
    window.addEventListener('videoDownloaded', handleVideoDownload);
    window.addEventListener('videoSaved', handleVideoSaved);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoDownloaded', handleVideoDownload);
      window.removeEventListener('videoSaved', handleVideoSaved);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [subject]);
  
  const handleVideoClick = (title: string, videoId: number) => {
    // Add to recently viewed videos
    updateRecentlyViewed(videoId);
  };
  
  const handleSaveVideo = async (videoId: number) => {
    try {
      // Find the video
      const video = videos.find(v => v.id === videoId);
      if (!video) return;
      
      // Update UI immediately for better responsiveness
      setVideos(prevVideos => 
        prevVideos.map(video => 
          video.id === videoId 
            ? { ...video, saved: !video.saved } 
            : video
        )
      );
      
      // Process the download without waiting for the response
      // The event listeners will handle updating the UI when the operation completes
      downloadVideo(videoId, video).catch(error => {
        console.error("Error downloading video:", error);
        // Revert UI state if there's an error
        setVideos(prevVideos => 
          prevVideos.map(video => 
            video.id === videoId 
              ? { ...video, saved: !video.saved } 
              : video
          )
        );
      });
    } catch (error) {
      console.error("Error downloading video:", error);
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
