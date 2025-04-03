
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface SubjectStatProps {
  topic: string;
  progress: number;
  color: string;
}

const SubjectStat = ({ topic, progress, color }: SubjectStatProps) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{topic}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2">
        <div 
          className="h-full rounded-full" 
          style={{ backgroundColor: color, width: `${progress}%` }} 
        />
      </Progress>
    </div>
  );
};

export default SubjectStat;
