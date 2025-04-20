
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';
import { getSubjectGradeTopicVideos } from '@/utils/videoUtils';
import { GradeLevel } from '@/data/gradeData';

interface VideoSectionProps {
  videos: Video[];
  onVideoClick: (videoId: number) => void;
  onSaveVideo?: (videoId: number) => void;
  title?: string;
  topic?: string;
  subject?: string;
  grade?: GradeLevel; // Explicitly use GradeLevel type here
}

const VideoSection = ({ 
  videos, 
  onVideoClick, 
  onSaveVideo, 
  title = "Önerilen Dersler", 
  topic,
  subject,
  grade
}: VideoSectionProps) => {
  
  // İki filtreleme senaryosu:
  // 1. Doğrudan topic prop'una göre (geriye dönük uyumluluk)
  // 2. Hem subject, grade ve topic'e göre (yeni özellik)
  let filteredVideos = videos;
  
  if (topic && subject && grade) {
    // subject, grade ve topic bilgisi varsa, bunlara göre filtreleme yap veya yeni video oluştur
    const topicVideos = getSubjectGradeTopicVideos(subject, grade, topic);
    
    if (topicVideos.length > 0) {
      filteredVideos = topicVideos;
    }
  } else if (topic) {
    // Sadece topic bilgisi varsa, basit filtreleme yap (geriye dönük uyumluluk)
    filteredVideos = videos.filter(video => video.topic === topic);
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">
        {title}
        {topic ? ` - ${topic}` : ""}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredVideos.map(video => (
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
        
        {filteredVideos.length === 0 && (
          <div className="text-center p-8 col-span-2">
            <p className="text-muted-foreground">Bu ders ve konu için video bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
