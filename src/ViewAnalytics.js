import React from "react";
import './ViewAnalytics.css';
import {Button} from 'react-bootstrap';
import TopPlayerFeed from "./TopPlayerFeed";
import AllPlayerFeed from "./AllPlayerFeed";

const ViewAnalytics = () => {

  return ( 
    <div className="analytics">
      <header className="analytics__header">
        <h1 id="analytics__text">Analytics</h1>
        <div id="analytics__positions">
          <Button className="analytics__positions__btn">All</Button>
          <Button className="analytics__positions__btn">QB</Button>
          <Button className="analytics__positions__btn">RB</Button>
          <Button className="analytics__positions__btn">TE</Button>
        </div>
      </header>

      <main id="analytics_viewPage">

          <div id="analytics__analysis">
            <AllPlayerFeed />
          </div>

          <div className="analytics__hotPicks">
            <TopPlayerFeed />
          </div>
      </main>
    </div>
  );
}

export default ViewAnalytics;
