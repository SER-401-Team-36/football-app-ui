import React from 'react';
import { DraftablePlayer } from '../DraftablePlayers';

import './AvailablePlayers.css';

const AvailablePlayers = ({ availablePlayers, filteredPlayers }) => {
  const playersToShow =
    filteredPlayers.length > 0 ? filteredPlayers : availablePlayers;
  return (
    <div className="available_players">
      {playersToShow &&
        playersToShow.map((player) => {
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
  );
};

export default AvailablePlayers;
