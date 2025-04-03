
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, Globe, Brain, Calculator, Atom, Beaker, Leaf, Languages, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { subjectColors } from '@/data/subjectData';

interface SubjectCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  videoCount: number;
  completionRate: number;
  onClick: () => void;
}

const SubjectCard = ({ icon, title, color, videoCount, completionRate, onClick }: SubjectCardProps) => {
  return (
    <Card 
      className="cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex flex-col items-center">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mb-2 mt-2"
            style={{ backgroundColor: color }}
          >
            <div className="text-white">{icon}</div>
          </div>
          <h3 className="font-medium text-sm mb-2">{title}</h3>
          <div className="w-full text-xs text-muted-foreground">
            <div className="flex justify-between mb-1">
              <span>{videoCount} Video</span>
              <span>{completionRate}% Tamamlandı</span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full">
              <div 
                className="h-full rounded-full" 
                style={{ width: `${completionRate}%`, backgroundColor: color }} 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SubjectGrid = () => {
  const navigate = useNavigate();
  
  const subjects = [
    { id: 1, title: 'Tarih', icon: <BookText size={20} />, color: '#1A1B41', videoCount: 12, completionRate: 45 },
    { id: 2, title: 'Coğrafya', icon: <Globe size={20} />, color: '#3E1F47', videoCount: 8, completionRate: 30 },
    { id: 3, title: 'Felsefe', icon: <Brain size={20} />, color: '#6A3FB2', videoCount: 6, completionRate: 15 },
    { id: 4, title: 'Matematik', icon: <Calculator size={20} />, color: '#00B8D4', videoCount: 15, completionRate: 60 },
    { id: 5, title: 'Fizik', icon: <Atom size={20} />, color: '#3E1F47', videoCount: 9, completionRate: 25 },
    { id: 6, title: 'Kimya', icon: <Beaker size={20} />, color: '#1A1B41', videoCount: 7, completionRate: 20 },
    { id: 7, title: 'Biyoloji', icon: <Leaf size={20} />, color: '#00B8D4', videoCount: 8, completionRate: 35 },
    { id: 8, title: 'İngilizce', icon: <Languages size={20} />, color: '#6A3FB2', videoCount: 10, completionRate: 50 },
    { id: 9, title: 'Edebiyat', icon: <BookOpen size={20} />, color: '#3E1F47', videoCount: 6, completionRate: 40 },
  ];

  const handleSubjectClick = (subject: string) => {
    console.log(`Subject selected: ${subject}`);
    // Since the SubjectPage route was removed, we won't navigate to it directly
    // Instead, we could filter the current videos by subject or implement a new view later
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {subjects.map((subject) => (
        <SubjectCard 
          key={subject.id}
          icon={subject.icon}
          title={subject.title}
          color={subject.color}
          videoCount={subject.videoCount}
          completionRate={subject.completionRate}
          onClick={() => handleSubjectClick(subject.title)}
        />
      ))}
    </div>
  );
};

export default SubjectGrid;
