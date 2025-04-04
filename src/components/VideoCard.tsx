
import React from 'react';
import { Play, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  duration: string;
  id: number;
  onClick?: () => void;
  saved?: boolean;
  onSave?: () => void;
}

const VideoCard = ({ 
  title, 
  thumbnailUrl, 
  duration, 
  onClick,
  id,
  saved = false,
  onSave
}: VideoCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Navigate to the video detail page with the correct ID
      navigate(`/video/${id}`);
    }
  };
  
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (onSave) {
      onSave();
    }
  };
  
  return (
    <div className="video-card w-full aspect-video">
      <div 
        className="relative w-full h-full cursor-pointer group"
        onClick={handleClick}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
          <h3 className="text-white font-medium text-sm line-clamp-2 truncate">{title}</h3>
        </div>
        <div className="video-duration flex items-center gap-1 absolute bottom-2 right-2 bg-black/60 text-white px-1.5 py-0.5 rounded text-xs truncate">
          <span>{duration}</span>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-primary/80 p-3 rounded-full">
            <Play size={24} className="text-white" fill="white" />
          </div>
        </div>
        
        {onSave && (
          <button 
            onClick={handleSaveClick}
            className={`absolute top-2 right-2 p-1.5 rounded-full ${saved ? 'bg-primary text-white' : 'bg-black/50 text-white hover:bg-black/70'}`}
            aria-label={saved ? "Remove from saved" : "Save video"}
          >
            <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
