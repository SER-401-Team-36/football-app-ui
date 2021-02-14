import './Draft.css';

import React from 'react';
import { Button } from 'react-bootstrap';

import { DraftFeed } from '../../Components/DraftFeed';
//import TopPlayerFeed from '../../Components/TopPlayerFeed';

const ViewDraft = () => {
  return (
    <div className="draft">
      <div className="draft__background">
        <main id="draft__viewPage">
          <div id="draft__analysis">
            <DraftFeed />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewDraft;
