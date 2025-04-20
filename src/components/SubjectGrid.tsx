
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { subjectIcons } from '@/data/subjectIcons';
import { subjectColors } from '@/data/subjectData';

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
      <h2 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">Dersler</h2>
      <div className="grid grid-cols-3 gap-3 mb-5 max-w-md mx-auto w-full">
        {allSubjects.map((subject) => (
          <Button
            key={subject}
            variant="outline"
            className="flex-col h-24 gap-2 p-2 bg-transparent hover:bg-white/10 text-white border-white/40 hover:border-white"
            onClick={() => handleSubjectClick(subject)}
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.12)' }}
          >
            <div className="text-white drop-shadow-md">
              {subjectIcons[subject] || subjectIcons["default"]}
            </div>
            <span className="text-sm drop-shadow-md">{subject}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;
