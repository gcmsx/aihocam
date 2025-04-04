
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Video } from '@/types/video';
import { 
  updateRecentlyViewed 
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
    setVideos(subjectVideos);
  }, [subject]);
  
  const handleVideoClick = (videoId: number) => {
    // Add to recently viewed videos
    updateRecentlyViewed(videoId);
    
    // Navigate to video detail page
    navigate(`/video/${videoId}`);
  };
  
  return (
    <div className="pb-16">
      <SubjectHeader subject={subject} color={color} />
      
      <div className="p-4">
        <VideoSection 
          videos={videos} 
          onVideoClick={handleVideoClick} 
        />
        
        <ProgressSection topics={topics} color={color} />
      </div>
      <NavBar />
    </div>
  );
};

export default SubjectPage;
