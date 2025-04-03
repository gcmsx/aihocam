
import React from 'react';
import { BookText, Globe, Brain, Calculator, Atom, Flask, Leaf, Languages, BookOpen } from 'lucide-react';

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
  const subjects = [
    { title: 'Tarih', icon: <BookText size={28} />, color: '#1A1B41' },
    { title: 'Coğrafya', icon: <Globe size={28} />, color: '#3E1F47' },
    { title: 'Felsefe', icon: <Brain size={28} />, color: '#6A3FB2' },
    { title: 'Matematik', icon: <Calculator size={28} />, color: '#00B8D4' },
    { title: 'Fizik', icon: <Atom size={28} />, color: '#3E1F47' },
    { title: 'Kimya', icon: <Flask size={28} />, color: '#1A1B41' },
    { title: 'Biyoloji', icon: <Leaf size={28} />, color: '#00B8D4' },
    { title: 'İngilizce', icon: <Languages size={28} />, color: '#6A3FB2' },
    { title: 'Edebiyat', icon: <BookOpen size={28} />, color: '#3E1F47' },
  ];

  return (
    <div className="grid-container">
      {subjects.map((subject, index) => (
        <SubjectCard 
          key={index}
          icon={subject.icon}
          title={subject.title}
          color={subject.color}
          onClick={() => onSubjectClick(subject.title)}
        />
      ))}
    </div>
  );
};

export default SubjectGrid;
