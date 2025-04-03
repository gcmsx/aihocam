
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, Globe, Brain, Calculator, Atom, Beaker, Leaf, Languages, BookOpen, CheckCircle, Download } from 'lucide-react';
import { getSavedVideosFromStorage, downloadVideo } from '@/services/videoService';
import { getVideos } from '@/services/videoService';
import { useState, useEffect } from 'react';

interface SubjectCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  onClick: () => void;
  id: number;
  onSave: () => void;
  saved: boolean;
}

const SubjectCard = ({ icon, title, color, onClick, onSave, saved }: SubjectCardProps) => {
  return (
    <div 
      className="card flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform relative"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className="absolute top-2 right-2">
        <button 
          className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onSave();
          }}
          aria-label={saved ? "İndirilmiş ders" : "Dersi indir"}
        >
          {saved ? (
            <CheckCircle size={16} className="text-white" />
          ) : (
            <Download size={16} className="text-white" />
          )}
        </button>
      </div>
      <div className="text-white mb-2">{icon}</div>
      <span className="text-white font-medium text-sm">{title}</span>
    </div>
  );
};

interface SubjectGridProps {
  onSubjectClick: (subject: string) => void;
}

const SubjectGrid = ({ onSubjectClick }: SubjectGridProps) => {
  const navigate = useNavigate();
  const [savedVideoIds, setSavedVideoIds] = useState<number[]>([]);
  const allVideos = getVideos();
  
  useEffect(() => {
    // Load saved videos from storage
    const savedIds = getSavedVideosFromStorage();
    setSavedVideoIds(savedIds);
    
    // Listen for changes to saved videos
    const handleStorageChange = () => {
      const updatedSavedIds = getSavedVideosFromStorage();
      setSavedVideoIds(updatedSavedIds);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('videoDownloaded', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('videoDownloaded', handleStorageChange);
    };
  }, []);
  
  const subjects = [
    { id: 1, title: 'Tarih', icon: <BookText size={28} />, color: '#1A1B41' },
    { id: 2, title: 'Coğrafya', icon: <Globe size={28} />, color: '#3E1F47' },
    { id: 3, title: 'Felsefe', icon: <Brain size={28} />, color: '#6A3FB2' },
    { id: 4, title: 'Matematik', icon: <Calculator size={28} />, color: '#00B8D4' },
    { id: 5, title: 'Fizik', icon: <Atom size={28} />, color: '#3E1F47' },
    { id: 6, title: 'Kimya', icon: <Beaker size={28} />, color: '#1A1B41' },
    { id: 7, title: 'Biyoloji', icon: <Leaf size={28} />, color: '#00B8D4' },
    { id: 8, title: 'İngilizce', icon: <Languages size={28} />, color: '#6A3FB2' },
    { id: 9, title: 'Edebiyat', icon: <BookOpen size={28} />, color: '#3E1F47' },
  ];

  const handleSubjectClick = (subject: string) => {
    onSubjectClick(subject); // Mevcut fonksiyonu çağır
    navigate(`/subject/${subject}`); // Konu sayfasına yönlendir
  };

  const handleSaveSubject = async (subjectId: number) => {
    try {
      // Find a video related to this subject to use as a representation
      const video = allVideos.find(v => v.id === subjectId);
      if (!video) return;
      
      // Download or remove the video
      const updatedSavedIds = await downloadVideo(subjectId, video);
      setSavedVideoIds(updatedSavedIds);
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('videoDownloaded'));
    } catch (error) {
      console.error("Error downloading subject video:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {subjects.map((subject) => (
        <SubjectCard 
          key={subject.id}
          id={subject.id}
          icon={subject.icon}
          title={subject.title}
          color={subject.color}
          saved={savedVideoIds.includes(subject.id)}
          onSave={() => handleSaveSubject(subject.id)}
          onClick={() => handleSubjectClick(subject.title)}
        />
      ))}
    </div>
  );
};

export default SubjectGrid;
