/* eslint-disable no-console */
import React, { memo, useEffect } from 'react';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectEditProfileUser } from 'containers/ProfilePage/formEdit/selector';
import SlideBox from 'containers/SlidesBanner';
import { makeSelectUser } from './selector';
import { fetchUser } from './actions';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderWrapper from './Header';
import Logo from './Logo';
import NavList from './NavList';
import Star from './Star';
import Routes from './routes';
import saga from './saga';
import reducer from './reducer';
import theme from '../Theme/index';

// Movie
// eslint-disable-next-line react/prop-types
const key = 'user';
function Header({ t, user, getUser, userNew, hide }) {
  const token = localStorage.getItem('ACCESS_TOKEN');
  console.log(userNew);
  function handleLogout() {
    localStorage.removeItem('ACCESS_TOKEN');
    window.location = '/';
  }
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (token) getUser();
  }, [userNew]);

  return (
    <HeaderWrapper theme={theme} className={hide ? 'hide' : ''}>
      <NavBar>
        <NavList>
          <Logo theme={theme} to="/">
            {' '}
            <Star> </Star> {t('Star Cineplex')}
          </Logo>
          {Routes.map(item => (
            <HeaderLink
              key={item.value}
              theme={theme}
              to={item.to}
              className={item.value === 'home' ? 'active' : item.class}
            >
              {item.value}
            </HeaderLink>
          ))}
          {!token && (
            <React.Fragment>
              <HeaderLink to="/login" theme={theme} className="right">
                Login
              </HeaderLink>
              <HeaderLink to="/register" theme={theme} className="right">
                Register{' '}
              </HeaderLink>
            </React.Fragment>
          )}
          {token && (
            <React.Fragment>
              <HeaderLink to="/user" theme={theme} className="right">
                <i className="fas fa-user" /> {user ? user.name : 'Profile'}
              </HeaderLink>
              <HeaderLink
                to="/logout"
                theme={theme}
                className="right"
                onClick={handleLogout}
              >
                Logout
              </HeaderLink>
            </React.Fragment>
          )}
        </NavList>
      </NavBar>
      <SlideBox />
    </HeaderWrapper>
  );
}
Header.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object,
  hide: PropTypes.bool,
  userNew: PropTypes.object,
  t: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  userNew: makeSelectEditProfileUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(fetchUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withTranslation()(Header));
