import './Draft.css';

import React from 'react';
import { Button } from 'react-bootstrap';

import { DraftFeed } from '../../Components/DraftFeed';
//import TopPlayerFeed from '../../Components/TopPlayerFeed';

const ViewDraft = () => {
  return (
    <div className="draft">
      <div className="draft__background">
        <header className="draft__header">
          <div id="draft__positions">
            <Button className="draft__positions__btn">All</Button>
            <Button className="draft__positions__btn">QB</Button>
            <Button className="draft__positions__btn">RB</Button>
            <Button className="draft__positions__btn">TE</Button>
          </div>
        </header>

        <main id="draft__viewPage">
          <div id="draft__analysis">
            <DraftFeed />
          </div>

          <div className="draft__hotPicks"></div>
        </main>
      </div>
    </div>
  );
};

export default ViewDraft;
