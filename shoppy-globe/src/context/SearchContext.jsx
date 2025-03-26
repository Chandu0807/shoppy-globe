import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: () => {}
});

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);