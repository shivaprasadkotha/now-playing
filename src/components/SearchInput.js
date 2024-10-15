import React, { useRef, useState } from "react";
import './searchInput.css'; // Import the CSS

const SearchInput = ({value = '', setValue , onSearch}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null)

  const handleSearchClick = () => {
     if(isFocused || value.length > 0) {
         onSearch();
     } else{
        setIsFocused(true)
        inputRef.current.focus()
        onSearch();
     }
    
  }

  return (
    <div className="search-container" data-testid='search-input-container'>
      <input
        type="text"
        className={`search-input ${isFocused || value.length > 0 ? 'expanded' : ''}`}
        placeholder="Search..."
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        data-testid='search-input'
      />
      <button className="search-button" data-testid='search-input-button' onClick={handleSearchClick}>
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchInput;
