import './AllPlayerFeed.css';

import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';

import AllPlayers from './Components/AllPlayers';
import TopPlayer from '.././TopPlayerFeed/Components/TopPlayer';

function AllPlayerFeed() {
  const [player, setPlayer] = useState([]);
  const [topPlayer, setTopPlayer] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('/players').then((res) =>
      res.json().then((data) => {
        setPlayer(data);
      }),
    );
  }, []);

  useEffect(() => {
    fetch('/players').then((res) =>
      res
        .json()
        .then((data) =>
          data.sort(
            (a, b) => b.average_projection - a.average_projection,
          ),
        )
        .then((data) => {
          setTopPlayer(data.slice(0, 5));
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
        {topPlayer &&
          topPlayer.map((topPlayer) => {
            return (
              <TopPlayer
                key={topPlayer.id}
                name={topPlayer.name}
                image={'topPlayer.image'}
                position={topPlayer.position}
                FFP={topPlayer.average_projection}
                TD={'100'}
              />
            );
          })}
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
