
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
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
          aria-label={saved ? "İndirilmiş video" : "Videoyu indir"}
        >
          {saved ? (
            <CheckCircle size={24} className="text-primary" />
          ) : (
            <Download size={24} />
          )}
        </Button>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{subject} • {duration}</p>
    </div>
  );
};

export default VideoHeader;
