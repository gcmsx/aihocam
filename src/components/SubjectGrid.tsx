
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, Globe, Brain, Calculator, Atom, Beaker, Leaf, Languages, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SubjectCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  onClick: () => void;
}

const SubjectCard = ({ icon, title, color, onClick }: SubjectCardProps) => {
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
          <h3 className="font-medium text-sm">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

const SubjectGrid = () => {
  const navigate = useNavigate();
  
  const subjects = [
    { id: 1, title: 'Tarih', icon: <BookText size={20} />, color: '#1A1B41' },
    { id: 2, title: 'Coğrafya', icon: <Globe size={20} />, color: '#3E1F47' },
    { id: 3, title: 'Felsefe', icon: <Brain size={20} />, color: '#6A3FB2' },
    { id: 4, title: 'Matematik', icon: <Calculator size={20} />, color: '#00B8D4' },
    { id: 5, title: 'Fizik', icon: <Atom size={20} />, color: '#3E1F47' },
    { id: 6, title: 'Kimya', icon: <Beaker size={20} />, color: '#1A1B41' },
    { id: 7, title: 'Biyoloji', icon: <Leaf size={20} />, color: '#00B8D4' },
    { id: 8, title: 'İngilizce', icon: <Languages size={20} />, color: '#6A3FB2' },
    { id: 9, title: 'Edebiyat', icon: <BookOpen size={20} />, color: '#3E1F47' },
  ];

  const handleSubjectClick = (subject: string) => {
    console.log(`Subject selected: ${subject}`);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {subjects.map((subject) => (
        <SubjectCard 
          key={subject.id}
          icon={subject.icon}
          title={subject.title}
          color={subject.color}
          onClick={() => handleSubjectClick(subject.title)}
        />
      ))}
    </div>
  );
};

export default SubjectGrid;
