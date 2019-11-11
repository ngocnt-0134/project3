import React from 'react';
import { Redirect } from 'react-router-dom';
const withAuthenticate = Wrapper => {
  const AuthenticatedComponent = props => {
    const isAuthenticate = localStorage.getItem('ACCESS_TOKEN');
    if (isAuthenticate) {
      return <Wrapper {...props} />;
    }

    return <Redirect to="/login" />;
  };

  return AuthenticatedComponent;
};

export default withAuthenticate;
