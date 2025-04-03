
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ placeholder = "Konu, video veya ders ara...", onChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <Search className="absolute left-3 text-muted-foreground h-4 w-4" />
      <input 
        type="text" 
        placeholder={placeholder} 
        className="search-input"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
