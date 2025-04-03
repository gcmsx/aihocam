
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (query: string) => void;
}

const SearchBar = ({ placeholder = "Konu, video veya ders ara...", onChange }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="search-bar relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <input 
        type="text" 
        placeholder={placeholder} 
        value={searchValue}
        onChange={handleInputChange}
        className="w-full bg-background border border-input rounded-md py-2 pl-10 pr-4 text-sm"
      />
    </div>
  );
};

export default SearchBar;
