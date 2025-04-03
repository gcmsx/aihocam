
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface SubjectHeaderProps {
  subject: string;
  color: string;
}

const SubjectHeader = ({ subject, color }: SubjectHeaderProps) => {
  return (
    <div 
      className="p-4" 
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center mb-4">
        <Link to="/" className="text-white">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold ml-2 text-white">{subject}</h1>
      </div>
    </div>
  );
};

export default SubjectHeader;
