import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import ProfileWrapper from 'components/ProfileUser/ProfileWrapper';
import Wrapper from 'components/ProfileUser/Wrapper';
// component
import theme from 'components/Theme/index';
import SidebarWrapper from 'containers/ProfilePage/sidebar';
import Logout from 'containers/logout';
import EditProfilePage from 'containers/ProfilePage/formEdit';
// import ChangePasswordPage from 'containers/ProfilePage/formChangePassword';
// import HistoryPage from 'containers/ProfilePage/historyBooking';
import NotFound from 'containers/NotFoundPage';
import withAuthenticate from 'containers/App/withAuthen';
import UserDetail from './UserDetail';

function ProfilePage({ user }) {
  return (
    <ProfileWrapper theme={theme}>
      <Wrapper>
        <SidebarWrapper user={user} />
        <Switch>
          <Route path="/user/change_password" component={NotFound} />
          <Route
            path="/user/update"
            component={props => <EditProfilePage user={user} {...props} />}
          />
          <Route path="/user/history" component={NotFound} />
          <Route path="/user/logout" component={Logout} />
          <Route
            exact
            path="/user/"
            component={props => <UserDetail user={user} {...props} />}
          />
        </Switch>
      </Wrapper>
    </ProfileWrapper>
  );
}
ProfilePage.propTypes = {
  user: PropTypes.object,
};
export default withAuthenticate(ProfilePage);
