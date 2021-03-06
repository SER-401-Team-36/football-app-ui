import './DraftFeed.css';

import React, { useEffect, useState } from 'react';
import { useAuthenticatedFetch } from '../../hooks';
import PlayerSearchBar from '../PlayerSearchBar';
import AvailablePlayers from './Components/AvailablePlayers';
import TakenPlayers from './Components/TakenPlayers';

export function DraftFeed() {
  const [allPlayer, setAllPlayer] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [userPlayers, setUserPlayers] = useState([]);
  const [nonUserPlayers, setNonUserPlayers] = useState([]);
  const { isProcessing, data } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/players`,
  );

  useEffect(() => {
    if (!isProcessing && data) {
      setAvailablePlayers(data);
      setAllPlayer(data);
    }
  }, [isProcessing, data]);

  const handleSearch = (search) => {
    setFilteredPlayers(
      availablePlayers.filter((player) =>
        player.name.includes(search),
      ),
    );
  };

  const handleUserSelection = (selectedPlayer) => {
    setAvailablePlayers(
      availablePlayers.filter(
        (player) => player.id !== selectedPlayer.id,
      ),
    );

    setUserPlayers([...userPlayers, selectedPlayer]);
  };

  const handleNonUserSelection = (selectedPlayer) => {
    setAvailablePlayers(
      availablePlayers.filter(
        (player) => player.id !== selectedPlayer.id,
      ),
    );

    setNonUserPlayers([...nonUserPlayers, selectedPlayer]);
  };

  return (
    <div className="draftFeed">
      <div className="draftFeed_search">
        <PlayerSearchBar onSearch={handleSearch} />
        <button className="draftFeed__saveTeam">Reset Draft</button>
      </div>
      <div className="draftFeed__draft">
        <AvailablePlayers
          availablePlayers={availablePlayers}
          filteredPlayers={filteredPlayers}
          onUserSelection={handleUserSelection}
          onNonUserSelection={handleNonUserSelection}
        />
        <TakenPlayers
          className="draft_feed__user_players"
          players={userPlayers}
        />
        <TakenPlayers
          className="draft_feed__non_user_players"
          players={nonUserPlayers}
        />
      </div>
    </div>
  );
}
