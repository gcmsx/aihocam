
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { subjectColors } from '@/data/subjectData';
import { gradeTopics, GradeLevel } from '@/data/gradeData';

interface SubjectProgressProps {
  selectedGrade: GradeLevel;
}

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

const SubjectProgressList: React.FC<SubjectProgressProps> = ({ selectedGrade }) => {
  // Generate random progress data
  const getRandomProgress = (subject: string) => {
    // Store the progress in localStorage so it's consistent between renders
    const key = `progress_${subject}_${selectedGrade}`;
    const storedProgress = localStorage.getItem(key);
    
    if (storedProgress) {
      return parseInt(storedProgress);
    }
    
    const newProgress = Math.floor(Math.random() * 100);
    localStorage.setItem(key, newProgress.toString());
    return newProgress;
  };

  return (
    <div>
      {allSubjects.map((subject, index) => {
        const progress = getRandomProgress(subject);
        const color = subjectColors[subject] || '#6A3FB2'; // Default color if not found
        
        return (
          <div className="mb-4" key={subject}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{subject}</span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" style={{ backgroundColor: '#e2e8f0' }}>
              <div 
                className="h-full rounded-full" 
                style={{ width: `${progress}%`, backgroundColor: color }} 
              />
            </Progress>
          </div>
        );
      })}
    </div>
  );
};

export default SubjectProgressList;
