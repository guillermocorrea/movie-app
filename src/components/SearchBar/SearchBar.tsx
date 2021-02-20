import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import SearchLogo from './search.svg';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' onClick={() => onSearch(inputValue)}>
          <img src={SearchLogo} alt='Search' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
