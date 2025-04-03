
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockVideos } from '@/services/video/mockData';
import { Button } from './ui/button';
import { subjectIcons } from '@/data/subjectIcons';

// Get unique subjects from mock data
const getUniqueSubjects = (): string[] => {
  const subjects = mockVideos
    .map(video => video.subject)
    .filter((subject): subject is string => subject !== undefined);
  
  return [...new Set(subjects)];
};

const SubjectGrid = () => {
  const navigate = useNavigate();
  const subjects = getUniqueSubjects();

  const handleSubjectClick = (subject: string) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div className="mt-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Dersler</h2>
      
      {/* Subject Buttons Grid */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {subjects.map((subject) => (
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
