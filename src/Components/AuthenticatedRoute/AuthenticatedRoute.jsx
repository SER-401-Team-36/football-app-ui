import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useAuthenticatedFetch from '../../hooks/useAuthenticatedFetch';

const AuthenticatedRoute = (props) => {
  const { isProcessing, ok } = useAuthenticatedFetch(
    `${process.env.REACT_APP_API_HOST}/user/current`,
  );

  if (!isProcessing) {
    if (ok) {
      return <Route {...props} />;
    }

    return <Redirect to="/loginPage" />;
  }

  return null;
};

export default AuthenticatedRoute;
