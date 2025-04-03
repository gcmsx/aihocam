
import React from 'react';
import { Play, Clock, Bookmark, BookmarkCheck, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  duration: string;
  saved?: boolean;
  onSave?: () => void;
  onClick?: () => void;
  id: number;
}

const VideoCard = ({ 
  title, 
  thumbnailUrl, 
  duration, 
  saved = false,
  onSave,
  onClick,
  id
}: VideoCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // Navigate to the video detail page
    navigate(`/video/${id}`);
  };
  
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSave) {
      onSave();
    }
  };
  
  return (
    <div className="video-card w-full aspect-video">
      <div 
        className="relative w-full h-full cursor-pointer"
        onClick={handleClick}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
          <h3 className="text-white font-medium text-sm line-clamp-2">{title}</h3>
        </div>
        <div className="video-duration flex items-center gap-1 absolute bottom-2 right-2 bg-black/60 text-white px-1.5 py-0.5 rounded text-xs">
          <Clock size={12} />
          <span>{duration}</span>
        </div>
        <div className="absolute top-2 left-2">
          <button 
            className="p-1.5 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
            onClick={handleSave}
            aria-label={saved ? "Kaydedilenlerden kaldır" : "Videoyu kaydet"}
          >
            {saved ? (
              <BookmarkCheck size={16} className="text-white" />
            ) : (
              <Save size={16} />
            )}
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-primary/80 p-3 rounded-full">
            <Play size={24} className="text-white" fill="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
