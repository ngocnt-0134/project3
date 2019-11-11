import React, { useEffect } from 'react';
function Logout() {
  useEffect(() => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('PAGE');
    localStorage.removeItem('SORT');
    localStorage.removeItem('ORDER');
    localStorage.removeItem('TEXT');

    window.location = '/';
  }, []);
  return <React.Fragment />;
}
export default Logout;
