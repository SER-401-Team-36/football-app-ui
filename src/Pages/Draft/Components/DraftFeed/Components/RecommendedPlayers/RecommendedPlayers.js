import React from 'react';
import DraftablePlayer from '../DraftablePlayers';

import './RecommendedPlayer.css';

const RecommendedPlayers = ({
  availablePlayers,
  onUserSelection,
  onNonUserSelection,
}) => {
  const sortedPlayers = availablePlayers.sort(
    (a, b) => b.average_projection - a.average_projection,
  );
  const topPlayer = sortedPlayers[0];
  const topQB = sortedPlayers.filter(
    (player) => player.position === 'QB',
  )[0];
  const topWR = sortedPlayers.filter(
    (player) => player.position === 'WR',
  )[0];

  return (
    <div className="recommended_players">
      <div className="recommended_players__recommendation">
        <h3>Top Recommended Player: </h3>
        {topPlayer && (
          <DraftablePlayer
            player={topPlayer}
            onUserSelection={onUserSelection}
            onNonUserSelection={onNonUserSelection}
          />
        )}
      </div>
      <div className="recommended_players__recommendation">
        <h3>Top Recommended QB: </h3>
        {topQB && (
          <DraftablePlayer
            player={topQB}
            onUserSelection={onUserSelection}
            onNonUserSelection={onNonUserSelection}
          />
        )}
      </div>
      <div className="recommended_players__recommendation">
        <h3>Top Recommended WR: </h3>
        {topWR && (
          <DraftablePlayer
            player={topWR}
            onUserSelection={onUserSelection}
            onNonUserSelection={onNonUserSelection}
          />
        )}
      </div>
    </div>
  );
};

export default RecommendedPlayers;
