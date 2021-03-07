import './Draft.css';

import React, { useEffect } from 'react';

import { DraftFeed } from './Components/DraftFeed';
import {
  useAuthenticatedFetch,
  useLazyAuthenticatedFetch,
} from '../../hooks';

const ViewDraft = () => {
  const { isProcessing, data, status } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/draft`,
  );
  const { fetchData, data: lazyData } = useLazyAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/draft`,
  );

  useEffect(() => {
    if (status === 404) {
      fetchData({ method: 'POST' });
    }
  }, [fetchData, status]);

  if (isProcessing) {
    return null;
  }

  return (
    <div className="draft">
      <div className="draft__background">
        <main id="draft__viewPage">
          <div id="draft__analysis">
            <DraftFeed draft={data || lazyData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewDraft;
