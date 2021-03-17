import React from 'react';
import DraftablePlayer from '../DraftablePlayers';

const RecommendedPlayers = ({
  availablePlayers,
  onUserSelection,
  onNonUserSelection,
}) => {
  const topPlayer = availablePlayers.sort(
    (a, b) => b.average_projection - a.average_projection,
  )[0];

  return (
    <div>
      <h3>Recommended Player: </h3>
      {topPlayer && (
        <DraftablePlayer
          player={topPlayer}
          onUserSelection={onUserSelection}
          onNonUserSelection={onNonUserSelection}
        />
      )}
    </div>
  );
};

export default RecommendedPlayers;
