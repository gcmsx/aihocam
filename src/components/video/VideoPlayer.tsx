import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
}

const VideoPlayer = ({ thumbnailUrl, title, videoUrl }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && playerRef.current) {
      playerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      ref={playerRef}
      className="aspect-video bg-black mb-4 rounded-lg overflow-hidden relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {!isPlaying && (
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover absolute inset-0 z-10"
        />
      )}
      
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-contain"
        onEnded={handleVideoEnd}
        onClick={togglePlay}
        playsInline
      />
      
      {(!isPlaying || showControls) && (
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex justify-end">
            <button 
              onClick={toggleFullscreen} 
              className="text-white p-2 hover:bg-black/30 rounded-full"
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={togglePlay}
              className="bg-primary rounded-full p-3 text-white hover:bg-primary/90 transition"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="text-white p-2 hover:bg-black/30 rounded-full"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
