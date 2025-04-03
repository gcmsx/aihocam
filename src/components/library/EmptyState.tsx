
import React from 'react';
import { BookOpen } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = "Bu kategoride henüz video yok." }: EmptyStateProps) => {
  return (
    <div className="py-8 text-center">
      <BookOpen size={48} className="mx-auto text-muted-foreground mb-2" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
};

export default EmptyState;
