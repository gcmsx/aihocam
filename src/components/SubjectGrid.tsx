
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen,
  Globe,
  Calculator,
  Atom,
  BookText,
  Languages,
  Brain,
  Leaf
} from 'lucide-react';

const subjectIcons = {
  "Tarih": <BookOpen className="h-6 w-6" />,
  "Coğrafya": <Globe className="h-6 w-6" />,
  "Matematik": <Calculator className="h-6 w-6" />,
  "Fizik": <Atom className="h-6 w-6" />,
  "Kimya": <BookText className="h-6 w-6" />,
  "Biyoloji": <Leaf className="h-6 w-6" />,
  "İngilizce": <Languages className="h-6 w-6" />,
  "Edebiyat": <BookOpen className="h-6 w-6" />,
  "Felsefe": <Brain className="h-6 w-6" />
};

const subjects = [
  "Tarih", 
  "Coğrafya", 
  "Matematik", 
  "Fizik", 
  "Kimya", 
  "Biyoloji", 
  "İngilizce", 
  "Edebiyat", 
  "Felsefe"
];

const SubjectGrid = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Konular</h2>
      <div className="grid grid-cols-3 gap-3">
        {subjects.map((subject) => (
          <div
            key={subject}
            className="flex flex-col items-center justify-center p-3 bg-background border rounded-lg shadow-sm hover:border-primary transition-colors cursor-pointer"
            onClick={() => handleSubjectClick(subject)}
          >
            <div className="text-primary mb-2">
              {subjectIcons[subject] || <BookOpen className="h-6 w-6" />}
            </div>
            <span className="text-sm font-medium text-center">{subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;
