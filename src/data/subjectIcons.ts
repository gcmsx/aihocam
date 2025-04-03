
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
  "Tarih": React.createElement(BookOpen, { className: "h-6 w-6" }),
  "Coğrafya": React.createElement(Globe, { className: "h-6 w-6" }),
  "Matematik": React.createElement(Calculator, { className: "h-6 w-6" }),
  "Fizik": React.createElement(Atom, { className: "h-6 w-6" }),
  "Kimya": React.createElement(BookText, { className: "h-6 w-6" }),
  "Biyoloji": React.createElement(Leaf, { className: "h-6 w-6" }),
  "İngilizce": React.createElement(Languages, { className: "h-6 w-6" }),
  "Edebiyat": React.createElement(BookOpen, { className: "h-6 w-6" }),
  "Felsefe": React.createElement(Brain, { className: "h-6 w-6" }),
  "default": React.createElement(BookOpen, { className: "h-6 w-6" })
};
