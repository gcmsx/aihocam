
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookmarkCheck, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface VideoHeaderProps {
  title: string;
  subject?: string;
  duration: string;
  saved: boolean;
  onSave: () => void;
}

const VideoHeader = ({ title, subject, duration, saved, onSave }: VideoHeaderProps) => {
  const handleSave = () => {
    onSave();
    toast({
      title: saved ? "Video kaldırıldı" : "Video kaydedildi",
      description: saved 
        ? "Video kaydedilenlerden kaldırıldı." 
        : "Video başarıyla kaydedildi."
    });
  };

  return (
    <div className="bg-primary/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <Link to="/" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleSave}
          aria-label={saved ? "Kaydedilmiş videoyu kaldır" : "Videoyu kaydet"}
        >
          {saved ? (
            <BookmarkCheck size={24} className="text-primary" />
          ) : (
            <Bookmark size={24} />
          )}
        </Button>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{subject} • {duration}</p>
    </div>
  );
};

export default VideoHeader;
