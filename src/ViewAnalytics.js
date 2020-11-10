import React from "react";
import './ViewAnalytics.css';
import {Button} from 'react-bootstrap';
import TopPlayerFeed from "./TopPlayerFeed";


const ViewAnalytics = () => {
  const currentDate=new Date().toLocaleDateString();

  function refreshPageAll() {
    window.location.reload(false);
  }
  function refreshPageQB() {
    window.location.reload(false);
  }
  function refreshPageRB() {
    window.location.reload(false);
  }
  function refreshPageTE() {
    window.location.reload(false);
  }

  return ( 
    <div className="App">
      <header className="App-header">
        <h1 id="Analytics">Analytics</h1>

        <div id="Positions">
          <Button className="Buttons" onClick={refreshPageAll}>All</Button>
          <Button className="Buttons" onClick={refreshPageQB}>QB</Button>
          <Button className="Buttons" onClick={refreshPageRB}>RB</Button>
          <Button className="Buttons" onClick={refreshPageTE}>TE</Button>
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

export default ViewAnalytics;
