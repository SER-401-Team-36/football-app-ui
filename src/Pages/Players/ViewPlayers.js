import './ViewPlayers.css';

import React from 'react';
import { Button } from 'react-bootstrap';

import AllPlayerFeed from '../../Components/AllPlayerFeed';
//import TopPlayerFeed from '../../Components/TopPlayerFeed';

const ViewPlayers = () => {
  return (
    <div className="players">
      <div className="players__background">
        <header className="players__header">
          <h1 id="players__text">Players</h1>

          <div id="players__positions">
            <Button className="players__positions__btn">All</Button>
            <Button className="players__positions__btn">QB</Button>
            <Button className="players__positions__btn">RB</Button>
            <Button className="players__positions__btn">TE</Button>
          </div>
        </header>

        <main id="players__viewPage">
          <div id="players__analysis">
            <AllPlayerFeed />
          </div>

          <div className="players__hotPicks"></div>
        </main>
      </div>
    </div>
  );
};

export default ViewPlayers;
