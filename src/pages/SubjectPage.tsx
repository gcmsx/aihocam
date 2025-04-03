
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Video } from '@/types/video';
import { 
  getSavedVideosFromStorage, 
  downloadVideo, 
  updateRecentlyViewed,
  getAllSavedVideos
} from '@/services/videoService';
import SubjectHeader from '@/components/subject/SubjectHeader';
import VideoSection from '@/components/subject/VideoSection';
import ProgressSection from '@/components/subject/ProgressSection';
import { subjectColors, subjectTopics } from '@/data/subjectData';
import { getSubjectVideos } from '@/utils/videoUtils';

const SubjectPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const [videos, setVideos] = useState<Video[]>([]);
  
  if (!subject || !subjectColors[subject]) {
    return <div className="p-4">Konu bulunamadı.</div>;
  }
  
  // Store current subject in sessionStorage for use in VideoDetail
  useEffect(() => {
    if (subject) {
      sessionStorage.setItem('currentSubject', subject);
    }
    
    return () => {
      // Optional: clear when leaving the page if needed
      // sessionStorage.removeItem('currentSubject');
    };
  }, [subject]);
  
  const topics = subjectTopics[subject] || [];
  const color = subjectColors[subject];
  
  useEffect(() => {
    // Get videos for this subject
    const subjectVideos = getSubjectVideos(subject);
    
    // Update videos with saved state from storage
    const savedIds = getSavedVideosFromStorage();
    const updatedVideos = subjectVideos.map(video => ({
      ...video,
      saved: savedIds.includes(video.id)
    }));
    
    setVideos(updatedVideos);
    
    // Function to update saved status
    const updateSavedStatus = () => {
      const currentSavedIds = getSavedVideosFromStorage();
      setVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: currentSavedIds.includes(video.id)
        }))
      );
    };
    
    // Event listeners for video download and storage changes
    const handleVideoUpdate = () => {
      updateSavedStatus();
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        updateSavedStatus();
      }
    };
    
    window.addEventListener('videoDownloaded', handleVideoUpdate);
    window.addEventListener('videoSaved', handleVideoUpdate);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoDownloaded', handleVideoUpdate);
      window.removeEventListener('videoSaved', handleVideoUpdate);
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
      
      // Process the download
      downloadVideo(videoId, video).catch(error => {
        console.error("Error downloading video:", error);
        // Revert UI state if there's an error
        const savedIds = getSavedVideosFromStorage();
        setVideos(prevVideos => 
          prevVideos.map(video => ({
            ...video,
            saved: savedIds.includes(video.id)
          }))
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
