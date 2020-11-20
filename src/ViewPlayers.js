import React from "react";
import './ViewPlayers.css';
import {Button} from 'react-bootstrap';
import TopPlayerFeed from "./TopPlayerFeed";
import AllPlayerFeed from "./AllPlayerFeed";

const ViewPlayers = () => {

  return ( 
    <div className="players">
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

          <div className="players__hotPicks">
            <TopPlayerFeed />
          </div>
      </main>

      

    </div>
  );
}

export default ViewPlayers;
