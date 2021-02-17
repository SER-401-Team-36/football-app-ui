import './Draft.css';

import React from 'react';

import { DraftFeed } from '../../Components/DraftFeed';

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
