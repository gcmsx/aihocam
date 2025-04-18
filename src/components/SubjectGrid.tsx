import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { subjectIcons } from '@/data/subjectIcons';

// Define all subjects that should be shown
const allSubjects = [
  'Tarih',
  'Coğrafya',
  'Felsefe',
  'Matematik',
  'Fizik',
  'Kimya',
  'Biyoloji',
  'İngilizce',
  'Edebiyat'
];

const SubjectGrid = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full max-w-4xl mx-auto px-4">
      <div className="glass-panel w-full p-6">
        <h2 className="text-xl font-semibold mb-6 text-center text-primary">Dersler</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {allSubjects.map((subject) => (
            <Button
              key={subject}
              variant="outline"
              className="flex flex-col h-24 gap-2 p-2 bg-white/50 hover:bg-white/70 transition-all duration-300"
              onClick={() => handleSubjectClick(subject)}
            >
              <div className="text-primary">
                {subjectIcons[subject] || subjectIcons["default"]}
              </div>
              <span className="text-sm font-medium">{subject}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectGrid;
