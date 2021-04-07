import './SavedTeamFeed.css';

import React, { useEffect, useState } from 'react';

import { useAuthenticatedFetch } from '../../hooks';
import SavedPlayer from '../SavedTeamFeed/Components/SavedPlayer';

function SavedPlayerFeed() {
  const [savedPlayer, setSavedPlayer] = useState([]);
  const { isProcessing, data } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/draft/2/player`,
  );

  useEffect(() => {
    if (!isProcessing && data) {
      setSavedPlayer(
        data.filter(
          (draftPlayer) =>
            !draftPlayer.available && draftPlayer.user_id,
        ),
      );
    }
  }, [isProcessing, data]);

  return (
    <div className="savedPlayerFrame">
      <div>
        {savedPlayer &&
          savedPlayer.map((draftPlayer) => {
            return (
              <SavedPlayer
                key={draftPlayer.id}
                name={draftPlayer.name}
                position={draftPlayer.position}
                FFP={draftPlayer.average_projection}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SavedPlayerFeed;
