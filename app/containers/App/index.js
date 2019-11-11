/* eslint-disable no-console */
import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import SlideBlock from 'containers/SlidesBanner';
import Login from 'containers/FormPage/LoginPage';
import Register from 'containers/FormPage/RegisterPage';
import Header from 'components/Header';
// import Footer from 'components/Footer';
import { ToastContainer } from 'react-toastify';
import ProfilePage from 'containers/ProfilePage/index';
// import MovieListBlock from 'containers/HomePage/movieList/index';
import { makeSelectMovies } from 'containers/HomePage/selectors';
import Logout from 'containers/logout';
import SeatAbleInfo from 'containers/MovieDetailPage/infoAbleSeat';
// import { makeSelectInfoBooking } from 'containers/MovieDetailPage/selector';
import { makeSelectBookingMovie } from 'containers/MovieDetailPage/infoAbleSeat/selector';
import GlobalStyle from '../../global-styles';
// import { fetchUser } from './actions/authen';
import { makeSelectUser } from './selectors/authenSelector';
import { makeSelectSlide } from './selectors/featureMovieSelector';

import MovieDetailPage from '../MovieDetailPage';
const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App({ user, userNew }) {
  useEffect(() => {}, [userNew, user]);
  return (
    <AppWrapper>
      <ToastContainer autoClose={8000} />
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header hide />
      {/* <SlideBlock /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route
          path="/user"
          component={props => <ProfilePage user={user} {...props} />}
        />
        <Route path="/categorie" component={FeaturePage} />
        <Route path="/recommended" component={FeaturePage} />
        <Route path="/news" component={FeaturePage} />
        <Route
          exact
          path="/movie/:id"
          component={props => <MovieDetailPage {...props} user={user} />}
        />
        <Route
          exact
          path="/movie/seat/:id"
          component={props => <SeatAbleInfo user={user} {...props} />}
        />

        <Route path="/logout" component={Logout} />
        <Route path="/newsletter" component={FeaturePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="" component={NotFoundPage} />
        <Redirect from="/" to="/?page=1" />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}
App.propTypes = {
  getFetchFeatureMovie: PropTypes.func,
  user: PropTypes.object,
  userNew: PropTypes.object,
  slides: PropTypes.array,
  // movies: PropTypes.array,
  // book: PropTypes.any,
  // info: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  slides: makeSelectSlide(),
  movies: makeSelectMovies(),
  // info: makeSelectInfoBooking(),
  book: makeSelectBookingMovie(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(App);
