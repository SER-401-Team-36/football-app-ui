import './DraftFeed.css';

import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  DraftablePlayers,
  players,
} from './Components/DraftablePlayers';
import { RobotPlayers } from './Components/DraftablePlayers/RobotPlayers';
var robotPick = [];

export function DraftFeed() {
  const [player, setPlayer] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/players/', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTE3MTQ5MjksIm5iZiI6MTYxMTcxNDkyOSwianRpIjoiMjg0NjQ1YzAtMzU5OS00ZjJjLWIyYjUtOTNkMGQ2NDllZjUxIiwiZXhwIjoxNjExNzE1ODI5LCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.M98mjPpObNQLiEf3sUof-cr9QpMHCD5zyNqWkSAGSvU',
      },
    }).then((res) =>
      res.json().then((data) => {
        setPlayer(data);
      }),
    );
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };
  const [cart, setCart] = useState([]);
  function addRobot(e) {
    {
      console.log(robotPick);
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    {
      robotPick.push(
        player[Math.floor(Math.random() * player.length)],
      );
    }
    const item = e.target.value;
    setCart((cart) => [...cart, item]);
  }

  const handleSearchClick = async (event) => {
    event.preventDefault();
    const results = await fetch(
      `http://localhost:5000/players/?match_on_name=${searchText}`,
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTE3MTQ5MjksIm5iZiI6MTYxMTcxNDkyOSwianRpIjoiMjg0NjQ1YzAtMzU5OS00ZjJjLWIyYjUtOTNkMGQ2NDllZjUxIiwiZXhwIjoxNjExNzE1ODI5LCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.M98mjPpObNQLiEf3sUof-cr9QpMHCD5zyNqWkSAGSvU',
        },
      },
    );
    setPlayer(await results.json());
  };
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
          <Button
            className="draftFeed__searchButton"
            onClick={handleSearchClick}
          >
            {
              <img
                className="draftFeed__searchButtonImage"
                alt=""
                src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
              />
            }
          </Button>
        </h4>
      </div>
      <div className="draftFeed__draft">
        <div className="draftFeed__allPlayers">
          {player &&
            player.map((player) => {
              return (
                <DraftablePlayers
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
