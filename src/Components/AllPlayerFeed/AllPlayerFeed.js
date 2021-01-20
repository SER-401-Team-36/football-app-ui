import './AllPlayerFeed.css';

import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';

import AllPlayers from './Components/AllPlayers';

function AllPlayerFeed() {
  const [player, setPlayer] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('/players').then((res) =>
      res.json().then((data) => {
        setPlayer(data);
      }),
    );
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    const results = await fetch(
      `/players?match_on_name=${searchText}`,
    );
    setPlayer(await results.json());
  };

  return (
    <div className="allPlayerFrame">
      <div className="allPlayerFrame_search">
        <h4 className="allPlayerFrame__text">
          <input
            className="allPlayerFrame__searchField"
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={handleChange}
          />
          <Button
            className="allPlayerFrame__searchButton"
            onClick={handleSearchClick}
          >
            {
              <img
                className="allPlayerFrame__searchButtonImage"
                alt=""
                src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
              />
            }
          </Button>
        </h4>
      </div>
      <div>
        {player &&
          player.map((player) => {
            return (
              <AllPlayers
                key={player.id}
                name={player.name}
                image={'player.image'}
                position={player.position}
                FFP={player.average_projection}
                TD={'100'}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AllPlayerFeed;
