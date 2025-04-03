
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';
import { subjectTopics } from '@/data/subjectData';
import { Card } from '@/components/ui/card';

interface VideoSectionProps {
  videos: Video[];
  onSaveVideo: (videoId: number) => void;
  onVideoClick: (videoId: number) => void;
}

const VideoSection = ({ videos, onSaveVideo, onVideoClick }: VideoSectionProps) => {
  // Get the subject from the first video if available
  const subject = videos.length > 0 ? videos[0].subject : undefined;
  // Get topics for this subject or empty array if not found
  const topics = subject ? subjectTopics[subject] || [] : [];
  
  // Filter by clicked topic (would be implemented here)
  const handleTopicClick = (topic: string) => {
    console.log(`Selected topic: ${topic}`);
    // Future implementation: filter videos by topic
  };

  return (
    <div className="mb-6">
      {/* Subject topics grid */}
      {subject && topics.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Konu Başlıkları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {topics.map((topic, index) => (
              <Card 
                key={index}
                className="p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleTopicClick(topic)}
              >
                <p className="text-sm font-medium text-center">{topic}</p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Videos section */}
      <h2 className="text-lg font-semibold mb-4">Önerilen Dersler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map(video => (
          <VideoCard 
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            saved={video.saved}
            onSave={() => onSaveVideo(video.id)}
            onClick={() => onVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
