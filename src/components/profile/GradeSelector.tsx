
import React from 'react';
import { Button } from '@/components/ui/button';
import { gradeNames, GradeLevel } from '@/data/gradeData';

interface GradeSelectorProps {
  selectedGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
}

const GradeSelector: React.FC<GradeSelectorProps> = ({
  selectedGrade,
  onGradeChange
}) => {
  const grades = Object.entries(gradeNames).map(([grade, label]) => ({
    value: parseInt(grade) as GradeLevel,
    label
  }));

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
      <div className="flex gap-2">
        {grades.slice(0, 2).map(grade => (
          <Button
            key={grade.value}
            variant={selectedGrade === grade.value ? "default" : "outline"}
            size="sm"
            onClick={() => onGradeChange(grade.value)}
          >
            {grade.label}
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        {grades.slice(2).map(grade => (
          <Button
            key={grade.value}
            variant={selectedGrade === grade.value ? "default" : "outline"}
            size="sm"
            onClick={() => onGradeChange(grade.value)}
          >
            {grade.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GradeSelector;
