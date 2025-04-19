
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';
import { getGradeTopics } from '@/utils/videoUtils';

interface VideoSectionProps {
  videos: Video[];
  onVideoClick: (videoId: number) => void;
  onSaveVideo?: (videoId: number) => void;
  title?: string;
  subject?: string;
  grade?: number;
}

const VideoSection = ({ 
  videos, 
  onVideoClick, 
  onSaveVideo, 
  title = "Önerilen Dersler",
  subject,
  grade 
}: VideoSectionProps) => {
  
  // Get topics for the subject and grade
  const topics = subject && grade ? getGradeTopics(subject, grade) : [];
  
  // Group videos by topic
  const videosByTopic = videos.reduce((acc, video) => {
    const topic = video.title.split(':')[1]?.trim() || 'Genel';
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(video);
    return acc;
  }, {} as Record<string, Video[]>);

  if (!subject || !grade) {
    return (
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map(video => (
            <VideoCard 
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              duration={video.duration}
              onClick={() => onVideoClick(video.id)}
              saved={video.saved}
              onSave={onSaveVideo ? () => onSaveVideo(video.id) : undefined}
            />
          ))}
          
          {videos.length === 0 && (
            <div className="text-center p-8 col-span-2">
              <p className="text-muted-foreground">Bu ders için video bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {topics.map((topic) => (
        <div key={topic} className="mb-6">
          <h2 className="text-lg font-semibold mb-4">{topic}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(videosByTopic[topic] || []).map(video => (
              <VideoCard 
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                duration={video.duration}
                onClick={() => onVideoClick(video.id)}
                saved={video.saved}
                onSave={onSaveVideo ? () => onSaveVideo(video.id) : undefined}
              />
            ))}
            
            {(!videosByTopic[topic] || videosByTopic[topic].length === 0) && (
              <div className="text-center p-8 col-span-2">
                <p className="text-muted-foreground">{topic} için video bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSection;

