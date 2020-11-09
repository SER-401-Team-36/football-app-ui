import React from "react";
import './ViewAnalytics.css';
import {Button} from 'react-bootstrap';
import TopPlayerFeed from "./TopPlayerFeed";
import AllPlayerFeed from "./AllPlayerFeed";

const ViewAnalytics = () => {
  const currentDate=new Date().toLocaleDateString();

  return ( 
    <div className="App">
      <header className="App-header">
        <h1 id="Analytics">Analytics</h1>

        <div id="Positions">
          <Button className="Buttons">All</Button>
          <Button className="Buttons">QB</Button>
          <Button className="Buttons">RB</Button>
          <Button className="Buttons">TE</Button>
        </div>
      </header>

      <main id="ViewPage">

          <div id="Analysis">
            <AllPlayerFeed />
          </div>

          <div className="HotPicks">
            <TopPlayerFeed />
          </div>
      </main>
    </div>
  );
}

export default ViewAnalytics;
