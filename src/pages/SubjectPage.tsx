
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Video } from '@/types/video';
import { 
  updateRecentlyViewed,
  downloadVideo,
  getSavedVideosFromStorage
} from '@/services/video';
import SubjectHeader from '@/components/subject/SubjectHeader';
import VideoSection from '@/components/subject/VideoSection';
import ProgressSection from '@/components/subject/ProgressSection';
import { subjectColors } from '@/data/subjectData';
import { gradeTopics } from '@/data/gradeData';
import { getSubjectVideos } from '@/utils/videoUtils';

const SubjectPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();
  
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
  
  // Use 9th grade topics as default (since we don't have grade selection on this page)
  const defaultGrade = 9;
  const topics = gradeTopics[subject]?.[defaultGrade] || [];
  const color = subjectColors[subject];
  
  useEffect(() => {
    // Get videos for this subject
    const subjectVideos = getSubjectVideos(subject);
    
    // Update with saved status
    const savedIds = getSavedVideosFromStorage();
    const updatedVideos = subjectVideos.map(video => ({
      ...video,
      saved: savedIds.includes(video.id)
    }));
    
    setVideos(updatedVideos);
  }, [subject]);
  
  // Listen for video save/download events
  useEffect(() => {
    const handleVideoUpdate = () => {
      if (!subject) return;
      
      const savedIds = getSavedVideosFromStorage();
      
      setVideos(prevVideos => 
        prevVideos.map(video => ({
          ...video,
          saved: savedIds.includes(video.id)
        }))
      );
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'savedVideos') {
        handleVideoUpdate();
      }
    };
    
    window.addEventListener('videoSaved', handleVideoUpdate);
    window.addEventListener('videoDownloaded', handleVideoUpdate);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('videoSaved', handleVideoUpdate);
      window.removeEventListener('videoDownloaded', handleVideoUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [subject]);
  
  const handleVideoClick = (videoId: number) => {
    updateRecentlyViewed(videoId);
    navigate(`/video/${videoId}`);
  };
  
  const handleSaveVideo = async (videoId: number) => {
    try {
      const video = videos.find(v => v.id === videoId);
      if (!video) return;
      
      setVideos(prevVideos => 
        prevVideos.map(v => 
          v.id === videoId ? { ...v, saved: !v.saved } : v
        )
      );
      
      await downloadVideo(videoId, video);
    } catch (error) {
      console.error("Error saving video:", error);
      const savedIds = getSavedVideosFromStorage();
      
      setVideos(prevVideos => 
        prevVideos.map(v => ({
          ...v,
          saved: savedIds.includes(v.id)
        }))
      );
    }
  };
  
  return (
    <div className="pb-16">
      <SubjectHeader subject={subject} color={color} />
      
      <div className="p-4">
        <VideoSection 
          videos={videos} 
          onVideoClick={handleVideoClick}
          onSaveVideo={handleSaveVideo}
        />
        
        <ProgressSection topics={topics} color={color} />
      </div>
      <NavBar />
    </div>
  );
};

export default SubjectPage;
