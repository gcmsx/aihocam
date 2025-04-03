
import React, { useState, useEffect } from 'react';

interface Example {
  question: string;
  options?: string[];
  answer?: string;
  explanation?: string;
}

interface VideoExamplesProps {
  examples: Example[];
  videoId?: number;
}

const VideoExamples = ({ examples, videoId }: VideoExamplesProps) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<{[key: number]: string | null}>({});
  
  // Get previously answered questions from localStorage on mount
  useEffect(() => {
    if (videoId) {
      const savedAnswers = localStorage.getItem(`answeredQuestions_${videoId}`);
      if (savedAnswers) {
        setAnsweredQuestions(JSON.parse(savedAnswers));
      }
    }
  }, [videoId]);

  // Check if all questions have been answered
  useEffect(() => {
    if (!videoId || examples.length === 0) return;
    
    const allQuestionsAnswered = examples.every((_, index) => answeredQuestions[index] !== undefined);
    
    if (allQuestionsAnswered && Object.keys(answeredQuestions).length > 0) {
      // Count correct answers
      let correctCount = 0;
      examples.forEach((example, index) => {
        if (answeredQuestions[index] === example.answer) {
          correctCount++;
        }
      });
      
      // Calculate score percentage
      const scorePercentage = Math.round((correctCount / examples.length) * 100);
      
      // Update completed questions tracking
      updateCompletedQuestions(videoId, scorePercentage);
    }
  }, [answeredQuestions, examples, videoId]);

  const updateCompletedQuestions = (videoId: number, score: number) => {
    // Get current completed questions
    const completedQuestionsJSON = localStorage.getItem('completedQuestions') || '{}';
    const completedQuestions = JSON.parse(completedQuestionsJSON);
    
    // Skip if already completed
    if (completedQuestions[videoId]) return;
    
    // Add this video's questions to completed list
    completedQuestions[videoId] = {
      completedAt: new Date().toISOString(),
      score: score,
      questionsCount: examples.length
    };
    
    // Save back to localStorage
    localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
    
    // Update achievements count
    updateAchievements();
    
    // Dispatch an event so other components can update
    window.dispatchEvent(new CustomEvent('questionsCompleted', { 
      detail: { videoId, score } 
    }));
  };

  const updateAchievements = () => {
    // Calculate total achievements based on videos with completed questions
    const completedQuestionsJSON = localStorage.getItem('completedQuestions') || '{}';
    const completedQuestions = JSON.parse(completedQuestionsJSON);
    
    const completedVideosCount = Object.keys(completedQuestions).length;
    
    // Get current achievements
    const achievementsJSON = localStorage.getItem('achievements') || '{"count": 0}';
    const achievements = JSON.parse(achievementsJSON);
    
    // Update achievements count - each completed question set is one achievement
    achievements.count = completedVideosCount;
    
    // Save back to localStorage
    localStorage.setItem('achievements', JSON.stringify(achievements));
  };

  const handleOptionClick = (questionIndex: number, selectedOption: string) => {
    if (!answeredQuestions[questionIndex]) {
      const newAnsweredQuestions = {
        ...answeredQuestions,
        [questionIndex]: selectedOption
      };
      
      setAnsweredQuestions(newAnsweredQuestions);
      
      // Save to localStorage if videoId is provided
      if (videoId) {
        localStorage.setItem(`answeredQuestions_${videoId}`, JSON.stringify(newAnsweredQuestions));
      }
    }
  };

  const getOptionClassName = (questionIndex: number, option: string, correctAnswer: string | undefined) => {
    if (!answeredQuestions[questionIndex]) {
      return "p-2 border rounded cursor-pointer hover:bg-muted";
    }

    if (answeredQuestions[questionIndex] === option) {
      return option === correctAnswer 
        ? "p-2 border rounded bg-green-500 text-white"
        : "p-2 border rounded bg-red-500 text-white";
    }

    if (option === correctAnswer && answeredQuestions[questionIndex] !== null) {
      return "p-2 border rounded bg-green-500 text-white";
    }

    return "p-2 border rounded";
  };

  return (
    <div className="space-y-6">
      {examples.map((example, index) => (
        <div key={index} className="space-y-4 border rounded-lg p-4">
          <div className="font-medium">Soru {index + 1}: {example.question}</div>
          
          {example.options && (
            <div className="space-y-2">
              {example.options.map((option, optionIndex) => (
                <div 
                  key={optionIndex}
                  className={getOptionClassName(index, option, example.answer)}
                  onClick={() => handleOptionClick(index, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          
          {answeredQuestions[index] && (
            <div className="mt-4 bg-muted p-3 rounded animate-fade-in">
              <div className="font-medium text-sm">Açıklama:</div>
              <div className="text-sm">{example.explanation}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoExamples;
