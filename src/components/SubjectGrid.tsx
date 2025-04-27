
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { subjectIcons } from '@/data/subjectIcons';
import { subjectColors } from '@/data/subjectData';

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
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="text-xl font-semibold mb-4">Dersler</h2>
      
      {/* Subject Buttons Grid - Perfectly centered with max-width */}
      <div className="grid grid-cols-3 gap-3 mb-5 max-w-md mx-auto w-full">
        {allSubjects.map((subject) => (
          <Button
            key={subject}
            variant="outline"
            className="flex-col h-24 gap-2 p-2"
            onClick={() => handleSubjectClick(subject)}
          >
            <div className="text-primary">
              {subjectIcons[subject] || subjectIcons["default"]}
            </div>
            <span className="text-sm">{subject}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;
