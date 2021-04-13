import './DraftFeed.css';

import React, { useEffect, useState } from 'react';
import {
  useAuthenticatedFetch,
  useLazyAuthenticatedFetch,
} from '../../../../hooks';
import PlayerSearchBar from '../../../../Components/PlayerSearchBar';
import AvailablePlayers from './Components/AvailablePlayers';
import TakenPlayers from './Components/TakenPlayers';
import RecommendedPlayers from './Components/RecommendedPlayers';

export function DraftFeed({ draft }) {
  const [allPlayer, setAllPlayer] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState(null);
  const [userPlayers, setUserPlayers] = useState([]);
  const [nonUserPlayers, setNonUserPlayers] = useState([]);
  const { isProcessing, data } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/draft/${draft.id}/player`,
  );
  const {
    fetchData,
    ok,
    isProcessing: addPlayerIsProcessing,
  } = useLazyAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/draft/${draft.id}/player`,
  );
  const {
    fetchData: resetDraft,
    ok: resetOk,
    isProcessing: resetDraftIsProcessing,
  } = useLazyAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/draft/${draft.id}/reset`,
  );

  useEffect(() => {
    if (!isProcessing && data) {
      setAvailablePlayers(
        data.filter((draftPlayer) => draftPlayer.available),
      );
      setAllPlayer(data);
      setUserPlayers(
        data.filter(
          (draftPlayer) =>
            !draftPlayer.available && draftPlayer.user_id,
        ),
      );
      setNonUserPlayers(
        data.filter(
          (draftPlayer) =>
            !draftPlayer.available && !draftPlayer.user_id,
        ),
      );
    }
  }, [isProcessing, data]);

  const handleSearch = (search) => {
    console.log(search);
    if (search === '') {
      setFilteredPlayers(null);
    } else {
      setFilteredPlayers(
        availablePlayers.filter((player) =>
          new RegExp(search, 'i').test(player.name),
        ),
      );
    }
  };

  const handleUserSelection = (selectedPlayer) => {
    fetchData({
      params: {
        for_user: true,
      },
      method: 'POST',
      body: {
        player_id: selectedPlayer.id,
      },
    });
    setAvailablePlayers(
      availablePlayers.filter(
        (player) => player.id !== selectedPlayer.id,
      ),
    );

    setUserPlayers([...userPlayers, selectedPlayer]);
  };

  const handleNonUserSelection = (selectedPlayer) => {
    fetchData({
      method: 'POST',
      body: {
        player_id: selectedPlayer.id,
      },
    });
    setAvailablePlayers(
      availablePlayers.filter(
        (player) => player.id !== selectedPlayer.id,
      ),
    );

    setNonUserPlayers([...nonUserPlayers, selectedPlayer]);
  };

  const handleReset = () => {
    resetDraft({
      method: 'POST',
    });

    setAvailablePlayers(allPlayer);
    setUserPlayers([]);
    setNonUserPlayers([]);
  };

  if (!addPlayerIsProcessing && ok === false) {
    return <p>There was an issue adding your player</p>;
  }

  if (!resetDraftIsProcessing && resetOk === false) {
    return <p>There was an issue reseting your draft</p>;
  }

  return (
    <div className="draftFeed">
      <div className="draftFeed_search">
        <PlayerSearchBar onSearch={handleSearch} />
        <button className="draftFeed__saveTeam" onClick={handleReset}>
          Reset Draft
        </button>
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
      <RecommendedPlayers
        availablePlayers={availablePlayers}
        onUserSelection={handleUserSelection}
        onNonUserSelection={handleNonUserSelection}
      />
    </div>
  );
}
