/* eslint-disable no-console */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

// import React, { useEffect, memo } from 'react';
import React, { useEffect, useState, memo, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Main from 'containers/HomePage/Main';
// Pagination
import theme from 'components/Theme/index';
import LoadingAnimation from 'components/loading/LoadingWrapper';
import PaginationBlock from 'containers/HomePage/pagination';
// Filter Block
import FilterBox from 'containers/HomePage/filter';
// Order Block
import OrderBlock from 'containers/HomePage/order';
// Search box
import SearchBoxCotainer from './search';
// import { loadRepos } from '../App/actions';
import { fetchMovie } from './actions/index';
import { makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import MovieListBlock from './movieList';
const MovieListBlock = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => resolve(import('./movieList')), 3000);
    }),
);
const key = 'movies';

export function HomePage({
  movies,
  location,
  history,
  // loading,
  // error,
  // repos,
  getListMovie,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const loading = [
    { id: 1, item: '' },
    { id: 2, item: '' },
    { id: 3, item: '' },
    { id: 4, item: '' },
    { id: 5, item: '' },
    { id: 6, item: '' },
    { id: 7, item: '' },
    { id: 8, item: '' },
    { id: 9, item: '' },
    { id: 10, item: '' },
    { id: 11, item: '' },
    { id: 12, item: '' },
  ];

  // sort
  const link = localStorage.getItem('Link');

  const [sort, setSort] = useState('All');
  // order
  const [order, setOrder] = useState('order=1');
  // page
  const [page, setPage] = useState('page=1');
  // HandleRoute
  function handlePage(route) {
    setPage(route);
  }
  function handleFilter(filter) {
    setSort(filter.to);
  }
  function handleOrder(value) {
    setOrder(value);
  }
  function setLink() {
    localStorage.setItem('Link', `?${sort}&${order}&${page}`);
    if (link) {
      history.push(link);
    } else {
      history.push(`?${sort}&${order}&${page}`);
    }
  }
  // Component Did mount
  useEffect(() => {
    setLink();
    getListMovie(location);
  }, [location.search, sort, page, order]);
  return (
    <Main>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <FilterBox id={sort} onGetFilter={filter => handleFilter(filter)} />
      <SearchBoxCotainer />
      <OrderBlock
        currentOrder={order}
        location={location}
        onGetOrder={value => handleOrder(value)}
      />
      <Suspense
        fallback={
          <LoadingAnimation theme={theme}>
            {loading.map(item => (
              <div key={item.id}>{item.item}</div>
            ))}
          </LoadingAnimation>
        }
      >
        <MovieListBlock movies={movies || ''} />
      </Suspense>
      <PaginationBlock
        currentPage={page}
        onGetPage={selectPage => handlePage(selectPage)}
      />
    </Main>
  );
}

HomePage.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  getListMovie: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getListMovie: location => dispatch(fetchMovie(location)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
