import React, {Component} from "react";
import './ViewPlayers.css';
import {Button} from 'react-bootstrap';
import { render } from 'react-dom';
import TopPlayerFeed from "./TopPlayerFeed";

const ViewPlayers = () => {

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

          <div className="HotPicks">
            <TopPlayerFeed />
          </div>
      </main>

      

    </div>
  );
}

export default ViewPlayers;
