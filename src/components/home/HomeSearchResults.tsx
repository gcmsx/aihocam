
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types/video';
import { subjectTopics } from '@/data/subjectData';
import { Card } from '@/components/ui/card';

interface HomeSearchResultsProps {
  searchQuery: string;
  filteredVideos: Video[];
  handleVideoClick: (videoId: number) => void;
  handleSaveVideo: (videoId: number) => void;
}

const HomeSearchResults = ({ 
  searchQuery, 
  filteredVideos, 
  handleVideoClick, 
  handleSaveVideo 
}: HomeSearchResultsProps) => {
  if (!searchQuery || filteredVideos.length === 0) {
    return null;
  }

  // Group videos by subject
  const videosBySubject: Record<string, Video[]> = {};
  filteredVideos.forEach(video => {
    if (video.subject) {
      if (!videosBySubject[video.subject]) {
        videosBySubject[video.subject] = [];
      }
      videosBySubject[video.subject].push(video);
    }
  });

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Arama Sonuçları</h2>
      
      {Object.entries(videosBySubject).map(([subject, subjectVideos]) => (
        <div key={subject} className="mb-8">
          <h3 className="text-md font-medium mb-3">{subject}</h3>
          
          {/* Subject topics grid */}
          {subjectTopics[subject] && (
            <div className="mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {subjectTopics[subject].map((topic, index) => (
                  <Card 
                    key={index}
                    className="p-3 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => console.log(`Selected topic: ${topic}`)}
                  >
                    <p className="text-xs font-medium text-center">{topic}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Videos for this subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjectVideos.map(video => (
              <VideoCard 
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                duration={video.duration}
                saved={video.saved}
                onSave={() => handleSaveVideo(video.id)}
                onClick={() => handleVideoClick(video.id)}
              />
            ))}
          </div>
        </div>
      ))}
      
      {/* Videos without subject */}
      {filteredVideos.filter(v => !v.subject).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVideos.filter(v => !v.subject).map(video => (
            <VideoCard 
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              duration={video.duration}
              saved={video.saved}
              onSave={() => handleSaveVideo(video.id)}
              onClick={() => handleVideoClick(video.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeSearchResults;
