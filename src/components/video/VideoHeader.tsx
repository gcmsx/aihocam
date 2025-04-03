
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoHeaderProps {
  title: string;
  subject?: string;
  duration: string;
  saved: boolean;
  onSave: () => void;
}

const VideoHeader = ({ title, subject, duration, saved, onSave }: VideoHeaderProps) => {
  return (
    <div className="bg-primary/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <Link to="/" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onSave}
          aria-label={saved ? "Kaydedilmiş videoyu kaldır" : "Videoyu kaydet"}
        >
          <Bookmark size={24} fill={saved ? "currentColor" : "none"} />
        </Button>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{subject} • {duration}</p>
    </div>
  );
};

export default VideoHeader;
