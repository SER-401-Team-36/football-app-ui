import React from 'react';
import DraftablePlayer from '../DraftablePlayers';

import './AvailablePlayers.css';

const AvailablePlayers = ({
  availablePlayers,
  filteredPlayers,
  onUserSelection,
  onNonUserSelection,
}) => {
  const playersToShow =
    filteredPlayers.length > 0 ? filteredPlayers : availablePlayers;
  return (
    <div className="available_players">
      {playersToShow &&
        playersToShow.map((player) => {
          return (
            <DraftablePlayer
              key={player.id}
              player={player}
              onUserSelection={onUserSelection}
              onNonUserSelection={onNonUserSelection}
            />
          );
        })}
    </div>
  );
};

export default AvailablePlayers;
