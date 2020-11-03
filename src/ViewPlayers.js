import React from "react";
import './ViewPlayers.css';
import {Button} from 'react-bootstrap';
import { render } from 'react-dom';

function ViewPlayers() {
  const currentDate=new Date().toLocaleDateString();

  return ( 
    <div className="App">
      <header className="App-header">
        <h1 id="Players">Players</h1>

        <div id="Positions">
          <Button className="Buttons">All</Button>
          <Button className="Buttons">QB</Button>
          <Button className="Buttons">RB</Button>
          <Button className="Buttons">TE</Button>
        </div>
      </header>

      <main id="ViewPage">

          <div id="Analysis">

          </div>

          <div id="HotPicks">
            <div id="PickHeader">
              <h4 id="Picks">Top Hot Picks</h4>
              <h5 id="Date">{currentDate}</h5>
            </div>
          </div>
      </main>
    </div>
  );
}

export default ViewPlayers;
