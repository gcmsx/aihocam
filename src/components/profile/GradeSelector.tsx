
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
    <div className="flex flex-wrap gap-2 mb-4">
      {grades.map(grade => (
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
  );
};

export default GradeSelector;
