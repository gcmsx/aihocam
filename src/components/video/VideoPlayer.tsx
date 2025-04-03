
import React from 'react';
import { BookOpen } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  title: string;
}

const VideoPlayer = ({ thumbnailUrl, title }: VideoPlayerProps) => {
  return (
    <div className="aspect-video bg-black mb-4 rounded-lg overflow-hidden relative">
      <img 
        src={thumbnailUrl} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-primary/80 p-4 rounded-full">
          <BookOpen size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
