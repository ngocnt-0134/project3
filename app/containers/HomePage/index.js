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
import FilterBox from 'containers/HomePage/filterBox';
// Order Block
import OrderBlock from 'containers/HomePage/order';
import Header from 'components/Header';
import Footer from 'components/Footer';

// Button
import MoreBtn from 'components/Button/MoreBtn';
// Search box
import SearchBoxCotainer from './searchBox';
// import { loadRepos } from '../App/actions';
import { fetchMovie, searchMovie } from './actions/index';
import { makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';

const MovieListBlock = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => resolve(import('containers/HomePage/movieList')), 3000);
    }),
);

export function HomePage({
  movies,
  location,
  history,
  // loading,
  // error,
  // repos,
  getListMovie,
  // getListFromSearchMovie,
}) {
  // sort
  const [sort, setSort] = useState('');
  const currentSort = localStorage.getItem('SORT');
  // order
  const [order, setOrder] = useState('1');
  const currentOrder = localStorage.getItem('ORDER');
  // page
  const [page, setPage] = useState('1');
  const currentPage = localStorage.getItem('PAGE');
  // search txt
  const [text, setText] = useState('');
  const currentText = localStorage.getItem('SEARCH');
  const key = 'movies';
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

  // console.log(currentOrder, currentPage, currentSort);
  // Handle Sort Order Page
  function handleFilter(filter) {
    setSort(filter.to);
    localStorage.setItem('SORT', filter.to);
  }
  function handleOrder(value) {
    setOrder(value);
    localStorage.setItem('ORDER', value);
  }
  function handlePage(route) {
    setPage(route);
    localStorage.setItem('PAGE', route);
  }
  // Handle Search Page
  function handleGetText(value) {
    setText(value);
    localStorage.setItem('SEARCH', value);
    handleSearch();
  }
  // search
  function handleSearch() {
    if (currentText && currentText !== '') {
      history.push(`?search=${currentText}`);
    } else if (!currentSort && !currentOrder && !currentPage) {
      history.push(`?sort=${sort}&order=${order}&page=${page}`);
    } else {
      history.push(
        `?sort=${currentSort}&order=${currentOrder}&page=${currentPage}`,
      );
    }

    return getListMovie(location);
  }
  // Component Did mount
  useEffect(() => {
    handleSearch();
    getListMovie(location);
  }, [location.search, sort, order, page, currentText]);

  const [coefficient, setCoefficient] = useState(1);
  const array = movies.length > 10 ? movies.slice(0, coefficient * 20) : movies;
  function handleCheckLength() {
    if (array.length < movies.length) {
      setCoefficient(coefficient + 1);
    } else {
      setCoefficient(coefficient - 1);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <FilterBox
          className={currentText !== '' ? 'hide' : ''}
          id={currentSort || sort}
          onGetFilter={filter => handleFilter(filter)}
        />
        {/* Seach box */}
        <SearchBoxCotainer
          currentText={currentText || text}
          onGetText={txt => handleGetText(txt)}
          onSearchFirm={handleSearch}
        />
        <OrderBlock
          className={currentText !== '' ? 'hide' : ''}
          currentOrder={currentOrder || order}
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
          <MovieListBlock movies={array || ''} />
        </Suspense>
        <MoreBtn
          type="button"
          theme={theme}
          className={movies.length <= 10 ? 'hide' : ''}
          onClick={() => handleCheckLength(array)}
        >
          {array.length < movies.length && (
            <i className="fas fa-chevron-down" />
          )}
          {array.length >= movies.length && <i className="fas fa-chevron-up" />}
        </MoreBtn>
        <PaginationBlock
          // isShow={currentText === '' ? 'hide' : ''}
          currentPage={currentPage || page}
          onGetPage={selectPage => handlePage(selectPage)}
        />
      </Main>
      <Footer />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  getListMovie: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  // getListFromSearchMovie: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getListMovie: location => {
      const currentText = localStorage.getItem('SEARCH');
      if (!currentText || currentText === '') {
        dispatch(fetchMovie(location));
      } else {
        dispatch(searchMovie(location));
      }
    },
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
