import './TopPlayerFeed.css';

import React, { useState } from 'react';

import useAuthenticatedFetch from '../../hooks/useAuthenticatedFetch';
import TopPlayer from './Components/TopPlayer';

function TopPlayerFeed() {
  const { data } = useAuthenticatedFetch('/players');
  const [player, setPlayer] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  if (data) {
    const sortedData = data.sort(
      (a, b) => b.average_projection - a.average_projection,
    );
    setPlayer(sortedData.slice(0, 5));
  }

  return (
    <div className="topPlayerFrame">
      <h2 className="topPlayerFrame__title">Today's Hot Picks</h2>
      <p className="topPlayerFrame__date">
        ---------{currentDate}---------
      </p>
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
