import './SavedTeamFeed.css';

import React, { useEffect, useState } from 'react';

import { useAuthenticatedFetch } from '../../hooks';
import SavedPlayer from '../SavedTeamFeed/Components/SavedPlayer';

function SavedPlayerFeed() {
  const [savedPlayer, setSavedPlayer] = useState([]);
  const { isProcessing, data } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/players`,
  );

  useEffect(() => {
    if (!isProcessing && data) {
      const savedPlayers = data
        .sort((a, b) => b.average_projection - a.average_projection)
        .slice(0, 20);

      setSavedPlayer(savedPlayers);
    }
  }, [isProcessing, data]);

  return (
    <div className="savedPlayerFrame">
      <div>
        {savedPlayer &&
          savedPlayer.map((savedPlayer) => {
            return (
              <SavedPlayer
                key={savedPlayer.id}
                name={savedPlayer.name}
                position={savedPlayer.position}
                FFP={savedPlayer.average_projection}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SavedPlayerFeed;
