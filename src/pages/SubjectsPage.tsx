
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VideoCard } from '@/components/VideoCard';
import NavBar from '@/components/NavBar';
import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { subjectIcons } from '@/data/subjectIcons';

const SubjectsPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  
  // Get videos for this subject
  const subjectVideos = mockVideos.filter(
    video => video.subject && video.subject === subject
  );
  
  // Handle back button
  const handleBack = () => {
    navigate('/');
  };
  
  // Handle video click
  const handleVideoClick = (videoId: number) => {
    navigate(`/video/${videoId}`);
  };
  
  if (!subject) {
    return <div className="p-4">Konu bulunamadı.</div>;
  }

  return (
    <div className="pb-16">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            className="h-9 w-9"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="text-primary">
              {subjectIcons[subject] || subjectIcons["default"]}
            </div>
            <h1 className="text-2xl font-bold">{subject}</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subjectVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              duration={video.duration}
              saved={video.saved}
              onClick={() => handleVideoClick(video.id)}
            />
          ))}
        </div>
        
        {subjectVideos.length === 0 && (
          <div className="text-center p-8">
            <p className="text-muted-foreground">Bu konuda video bulunamadı.</p>
          </div>
        )}
      </div>
      <NavBar />
    </div>
  );
};

export default SubjectsPage;
