import React, { useState } from 'react';

interface Example {
  question: string;
  options?: string[];
  answer?: string;
  explanation?: string;
}

interface VideoExamplesProps {
  examples: Example[];
}

const VideoExamples = ({ examples }: VideoExamplesProps) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<{[key: number]: string | null}>({});

  const handleOptionClick = (questionIndex: number, selectedOption: string) => {
    if (!answeredQuestions[questionIndex]) {
      setAnsweredQuestions(prev => ({
        ...prev,
        [questionIndex]: selectedOption
      }));
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
