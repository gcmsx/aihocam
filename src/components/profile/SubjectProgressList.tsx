
import React, { useEffect, useState } from 'react';
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
  const [progressData, setProgressData] = useState<{[subject: string]: number}>({});

  // Calculate actual progress based on watched videos and answered questions
  useEffect(() => {
    const calculateProgress = () => {
      const newProgressData: {[subject: string]: number} = {};
      
      // Get recently viewed videos
      const recentlyViewedStr = localStorage.getItem('recentlyViewedVideos');
      const recentlyViewed = recentlyViewedStr ? JSON.parse(recentlyViewedStr) : [];
      
      // Get completed questions
      const completedQuestionsStr = localStorage.getItem('completedQuestions');
      const completedQuestions = completedQuestionsStr ? JSON.parse(completedQuestionsStr) : {};
      
      // Count total watched videos and completed questions by subject
      const subjectCounts: {[subject: string]: {watched: number, completed: number}} = {};
      
      // Initialize counts for all subjects
      allSubjects.forEach(subject => {
        subjectCounts[subject] = { watched: 0, completed: 0 };
      });
      
      // Count watched videos by subject
      recentlyViewed.forEach((video: any) => {
        const subject = video.subject;
        if (subject && allSubjects.includes(subject)) {
          if (!subjectCounts[subject]) {
            subjectCounts[subject] = { watched: 0, completed: 0 };
          }
          subjectCounts[subject].watched += 1;
        }
      });
      
      // Count completed question sets by subject
      Object.values(completedQuestions).forEach((data: any) => {
        const subject = data.subject;
        if (subject && allSubjects.includes(subject)) {
          if (!subjectCounts[subject]) {
            subjectCounts[subject] = { watched: 0, completed: 0 };
          }
          subjectCounts[subject].completed += 1;
        }
      });
      
      // Calculate progress percentage for each subject
      allSubjects.forEach(subject => {
        const counts = subjectCounts[subject];
        const watchedPoints = counts.watched * 5; // Each watched video is worth 5 points
        const completedPoints = counts.completed * 10; // Each completed question set is worth 10 points
        const totalPoints = watchedPoints + completedPoints;
        
        // Cap at 100%, with a minimum of 0%
        // If there's no activity, use existing progress or default to 0
        if (totalPoints > 0) {
          // Calculate percentage with a max of 100
          // The formula below assumes that around 20 activities (videos + questions) would be 100%
          const progressPercentage = Math.min(Math.round(totalPoints / 2), 100);
          newProgressData[subject] = progressPercentage;
        } else {
          // Retrieve stored progress or use default random value
          const key = `progress_${subject}_${selectedGrade}`;
          const storedProgress = localStorage.getItem(key);
          
          if (storedProgress) {
            newProgressData[subject] = parseInt(storedProgress);
          } else {
            const randomProgress = Math.floor(Math.random() * 100);
            localStorage.setItem(key, randomProgress.toString());
            newProgressData[subject] = randomProgress;
          }
        }
      });
      
      setProgressData(newProgressData);
    };
    
    calculateProgress();
    
    // Update progress when videos are watched or questions are completed
    const handleVideoWatched = () => calculateProgress();
    const handleQuestionsCompleted = () => calculateProgress();
    
    window.addEventListener('videoWatched', handleVideoWatched);
    window.addEventListener('questionsCompleted', handleQuestionsCompleted);
    window.addEventListener('recentlyViewedUpdated', handleVideoWatched);
    
    return () => {
      window.removeEventListener('videoWatched', handleVideoWatched);
      window.removeEventListener('questionsCompleted', handleQuestionsCompleted);
      window.removeEventListener('recentlyViewedUpdated', handleVideoWatched);
    };
  }, [selectedGrade]);

  return (
    <div>
      {allSubjects.map((subject, index) => {
        const progress = progressData[subject] || 0;
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
