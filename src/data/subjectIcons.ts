
import React from 'react';
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

// Icon mapping for subjects
export const subjectIcons: Record<string, React.ReactNode> = {
  "Tarih": <BookOpen className="h-6 w-6" />,
  "Coğrafya": <Globe className="h-6 w-6" />,
  "Matematik": <Calculator className="h-6 w-6" />,
  "Fizik": <Atom className="h-6 w-6" />,
  "Kimya": <BookText className="h-6 w-6" />,
  "Biyoloji": <Leaf className="h-6 w-6" />,
  "İngilizce": <Languages className="h-6 w-6" />,
  "Edebiyat": <BookOpen className="h-6 w-6" />,
  "Felsefe": <Brain className="h-6 w-6" />,
  "default": <BookOpen className="h-6 w-6" />
};
