import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import './PlayerSearchBar.css';

const PlayerSearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <>
      <input
        className="player_search__field"
        type="text"
        placeholder="Search.."
        value={searchText}
        onChange={handleChange}
      />
      <Button
        className="player_search__button"
        onClick={handleSearchClick}
      >
        <img
          className="player_search__button__image"
          alt=""
          src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
        />
      </Button>
    </>
  );
};

export default PlayerSearchBar;
