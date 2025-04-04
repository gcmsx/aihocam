
import React from 'react';
import { Button } from '@/components/ui/button';
import { gradeNames, GradeLevel } from '@/data/gradeData';

interface GradeSelectorProps {
  selectedGrade: GradeLevel | null;
  onGradeSelect: (grade: GradeLevel) => void;
  color: string;
}

const GradeSelector: React.FC<GradeSelectorProps> = ({
  selectedGrade,
  onGradeSelect,
  color
}) => {
  const grades = Object.entries(gradeNames).map(([grade, label]) => ({
    value: parseInt(grade) as GradeLevel,
    label
  }));

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Sınıf Seçimi</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {grades.map(grade => (
          <Button
            key={grade.value}
            variant={selectedGrade === grade.value ? "default" : "outline"}
            onClick={() => onGradeSelect(grade.value)}
            style={{
              backgroundColor: selectedGrade === grade.value ? color : undefined,
              borderColor: color,
              color: selectedGrade === grade.value ? 'white' : undefined
            }}
            className="h-12"
          >
            {grade.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GradeSelector;
