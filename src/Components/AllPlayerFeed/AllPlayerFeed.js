import './AllPlayerFeed.css';

import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import {
  useAuthenticatedFetch,
  useLazyAuthenticatedFetch,
} from '../../hooks';
import TopPlayer from '../TopPlayerFeed/Components/TopPlayer';
import AllPlayers from './Components/AllPlayers';

// import { Button } from '@material-ui/core';
function AllPlayerFeed() {
  const [player, setPlayer] = useState([]);
  const [topPlayer, setTopPlayer] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { isProcessing, data } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/players`,
  );
  const {
    isProcessing: searchIsProcessing,
    data: searchData,
    fetchData: searchFetch,
  } = useLazyAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/players?match_on_name=${searchText}`,
  );

  useEffect(() => {
    if (!searchIsProcessing && searchData) {
      setPlayer(searchData);
    }
  }, [searchIsProcessing, searchData]);

  useEffect(() => {
    if (!isProcessing && data) {
      setPlayer(data);
      const topPlayers = data
        .sort((a, b) => b.average_projection - a.average_projection)
        .slice(0, 5);

      setTopPlayer(topPlayers);
    }
  }, [isProcessing, data]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    searchFetch();
  };

  return (
    <div className="allPlayerFrame">
      <div className="allPlayerFrame_search">
        <div className="allPlayerFrame__text">
          <input
            className="allPlayerFrame__searchField"
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={handleChange}
          />
          <Button className="allPlayerFrame__searchButton">
            {
              <img
                className="allPlayerFrame__searchButtonImage"
                alt=""
                src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
              />
            }
          </Button>
        </div>
      </div>
      <div>
        {topPlayer &&
          topPlayer.map((topPlayer) => {
            return (
              <TopPlayer
                key={topPlayer.id}
                name={topPlayer.name}
                image={'topPlayer.image'}
                position={topPlayer.position}
                FFP={topPlayer.average_projection}
              />
            );
          })}
        {player &&
          player.map((player) => {
            return (
              <AllPlayers
                key={player.id}
                name={player.name}
                image={'player.image'}
                position={player.position}
                FFP={player.average_projection}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AllPlayerFeed;
