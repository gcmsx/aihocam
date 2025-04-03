
import React from 'react';

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
                  className={`p-2 border rounded cursor-pointer ${option === example.answer ? 'bg-green-100 border-green-300' : 'hover:bg-muted'}`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4 bg-muted p-3 rounded">
            <div className="font-medium text-sm">Açıklama:</div>
            <div className="text-sm">{example.explanation}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoExamples;
