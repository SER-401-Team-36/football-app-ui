import './DraftFeed.css';

import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  useAuthenticatedFetch,
  useLazyAuthenticatedFetch,
} from '../../hooks';
import {
  DraftablePlayer,
  players,
} from './Components/DraftablePlayers';
import { RobotPlayers } from './Components/DraftablePlayers/RobotPlayers';
var robotPick = [];

export function DraftFeed() {
  const [player, setPlayer] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { isProcessing, data } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/players`,
  );
  const {
    isProcessing: searchIsProcessing,
    data: searchData,
    fetchLazy: searchFetch,
  } = useLazyAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/players?match_on_name=${searchText}`,
  );

  useEffect(() => {
    if (!searchIsProcessing && searchData) {
      setPlayer(searchData);
    }

    if (!isProcessing && data) {
      setPlayer(data);
    }
  }, [isProcessing, data, searchIsProcessing, searchData]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    searchFetch();
    setPlayer(searchData);
  };

  const [, setTeam] = useState([]);
  function addRobot(e) {
    for (var i = 0; i < 16; i++) {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    const item = e.target.value;
    setTeam((team) => [...team, item]);
  }

  return (
    <div className="draftFeed">
      <div className="draftFeed_search">
        <h4 className="draftFeed__text">
          <input
            className="draftFeed__searchField"
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={handleChange}
          />
          <button className="draftFeed__addRobot" onClick={addRobot}>
            Next Round
          </button>
          <button className="draftFeed__saveTeam">Save Team</button>
          <Button
            className="draftFeed__searchButton"
            onClick={handleSearchClick}
          >
            <img
              className="draftFeed__searchButtonImage"
              alt=""
              src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
            />
          </Button>
        </h4>
      </div>
      <div className="draftFeed__draft">
        <div className="draftFeed__allPlayers">
          {player &&
            player.map((player) => {
              return (
                <DraftablePlayer
                  key={player.id}
                  name={player.name}
                  position={player.position}
                  FFP={player.average_projection}
                />
              );
            })}
        </div>
        <div className="draftFeed__userPlayers">
          <ul>
            {players.map(function (name, index) {
              return (
                <h4 key={index}>
                  "User" has selected the player:<br></br>
                  {name}
                </h4>
              );
            })}
          </ul>
        </div>
        <div className="draftFeed__draftLog">
          {robotPick &&
            robotPick.map((robotPick) => {
              return (
                <h4>
                  "Robot" has selected the player:
                  <RobotPlayers
                    key={robotPick.id}
                    name={robotPick.name}
                  />
                </h4>
              );
            })}
        </div>
      </div>
    </div>
  );
}
