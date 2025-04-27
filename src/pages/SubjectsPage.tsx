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
import { GradeLevel, Topic, getTopicsForSubjectGrade } from '@/data/gradeData';
import { getVideosByIds } from '@/utils/videoUtils';
import { mockVideos } from '@/services/video/mockData'; // Import mockVideos to find video details

const SubjectPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const [topicsWithVideos, setTopicsWithVideos] = useState<Array<Topic & { videos: Video[] }>>([]);
  const navigate = useNavigate();
  
  // Use 9th grade as default for now, as grade selection isn't implemented on this page
  const defaultGrade: GradeLevel = 9;

  if (!subject || !subjectColors[subject]) {
    return <div className="p-4">Konu bulunamadı.</div>;
  }

  const color = subjectColors[subject];

  // Store current subject in sessionStorage for use in VideoDetail
  useEffect(() => {
    if (subject) {
      sessionStorage.setItem('currentSubject', subject);
    }
    return () => {
      // sessionStorage.removeItem('currentSubject'); // Optional cleanup
    };
  }, [subject]);

  // Fetch topics and their videos
  useEffect(() => {
    if (!subject) return;

    const topics = getTopicsForSubjectGrade(subject, defaultGrade);
    const savedIds = getSavedVideosFromStorage();

    const topicsAndVideos = topics.map(topic => {
      const videosForTopic = getVideosByIds(topic.videoIds).map(video => ({
        ...video,
        saved: savedIds.includes(video.id)
      }));
      return { ...topic, videos: videosForTopic };
    });

    setTopicsWithVideos(topicsAndVideos);

  }, [subject, defaultGrade]);

  // Listen for video save/download events to update saved status
  useEffect(() => {
    const handleVideoUpdate = () => {
      if (!subject) return;
      const savedIds = getSavedVideosFromStorage();
      setTopicsWithVideos(prevTopics => 
        prevTopics.map(topic => ({
          ...topic,
          videos: topic.videos.map(video => ({
            ...video,
            saved: savedIds.includes(video.id)
          }))
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
      // Find the video in the mock data (or fetch from service if using real data)
      const video = mockVideos.find(v => v.id === videoId);
      if (!video) return;

      // Optimistically update UI
      setTopicsWithVideos(prevTopics => 
        prevTopics.map(topic => ({
          ...topic,
          videos: topic.videos.map(v => 
            v.id === videoId ? { ...v, saved: !v.saved } : v
          )
        }))
      );

      // Perform the download/save operation
      await downloadVideo(videoId, video);

    } catch (error) {
      console.error("Error saving video:", error);
      // Revert UI on error by fetching the actual saved state
      const savedIds = getSavedVideosFromStorage();
      setTopicsWithVideos(prevTopics => 
        prevTopics.map(topic => ({
          ...topic,
          videos: topic.videos.map(v => ({
            ...v,
            saved: savedIds.includes(v.id)
          }))
        }))
      );
    }
  };

  // Extract just the topic names for the ProgressSection
  const topicNames = topicsWithVideos.map(t => t.name);

  return (
    <div className="pb-16">
      <SubjectHeader subject={subject} color={color} />
      
      <div className="p-4 space-y-6">
        {topicsWithVideos.map(topic => (
          <VideoSection 
            key={topic.name} // Use topic name as key
            title={topic.name} // Use topic name as section title
            videos={topic.videos} 
            onVideoClick={handleVideoClick}
            onSaveVideo={handleSaveVideo}
          />
        ))}

        {/* Display message if no topics/videos found for the default grade */}
        {topicsWithVideos.length === 0 && (
           <div className="text-center p-8">
             <p className="text-muted-foreground">Bu ders ve sınıf seviyesi için konu veya video bulunamadı.</p>
           </div>
        )}
        
        {/* Pass only topic names to ProgressSection */}
        <ProgressSection topics={topicNames} color={color} />
      </div>
      <NavBar />
    </div>
  );
};

export default SubjectPage;

