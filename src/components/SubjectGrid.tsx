
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, Globe, Brain, Calculator, Atom, Beaker, Leaf, Languages, BookOpen } from 'lucide-react';

interface SubjectCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  onClick: () => void;
}

const SubjectCard = ({ icon, title, color, onClick }: SubjectCardProps) => {
  return (
    <div 
      className="card flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
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
    onSubjectClick(subject);
    navigate(`/subject/${subject}`);
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
