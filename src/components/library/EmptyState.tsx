
import React from 'react';
import { Library } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "Bu kategoride herhangi bir video bulunamadı." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="bg-muted/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Library size={32} className="text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-1">Henüz içerik yok</h3>
      <p className="text-muted-foreground text-sm max-w-md">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
