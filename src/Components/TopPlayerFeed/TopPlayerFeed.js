import './TopPlayerFeed.css';

import React, { useEffect, useState } from 'react';

import TopPlayer from './Components/TopPlayer';

function TopPlayerFeed() {
  const [player, setPlayer] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    fetch('/players').then((res) =>
      res
        .json()
        .then((data) =>
          data.sort((a, b) => b.average_projection - a.average_projection),
        )
        .then((data) => {
          setPlayer(data.slice(0, 5));
        }),
    );
  }, []);

  return (
    <div className="topPlayerFrame">
      <h2 className="topPlayerFrame__title">Today's Hot Picks</h2>
      <p className="topPlayerFrame__date">---------{currentDate}---------</p>
      <div className="topPlayerFrame__players">
        {player &&
          player.map((player) => {
            return (
              <TopPlayer
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

export default TopPlayerFeed;
