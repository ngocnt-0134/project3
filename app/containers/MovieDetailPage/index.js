/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
import React, { memo, useEffect, useState, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// redux saga reselect
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// wrapper
import MovieWrapper from 'components/MovieDetail/MovieWrapper';
import MovieContent from 'components/MovieDetail/movieContent';
import TitleSection from 'components/MovieDetail/Titles';
import Logo from 'components/MovieDetail/Logo';
import Star from 'components/Header/Star';
// Left
import MovieContentLeft from 'components/MovieDetail/movieContent/leftContent';
import ImgMoive from 'components/MovieDetail/movieContent/leftContent/ImgMovie';
// Right
import MovieContentRight from 'components/MovieDetail/movieContent/rightContent';
import NameMovie from 'components/MovieDetail/movieContent/rightContent/TiltleName';
import SubDate from 'components/MovieDetail/movieContent/rightContent/DateBox';
// Right -> Point
import PointBlock from 'components/MovieDetail/movieContent/rightContent/point';
import PointItem from 'components/MovieDetail/movieContent/rightContent/point/item';
import Badges from 'components/MovieDetail/movieContent/rightContent/point/badges';
// Right -> description
import DescriptionBox from 'components/MovieDetail/movieContent/rightContent/description';
import DescriptionContent from 'components/MovieDetail/movieContent/rightContent/description/content';
// Right-> button
import ButtonBlock from 'components/MovieDetail/movieContent/rightContent/buttons';
import ButtonItem from 'components/MovieDetail/movieContent/rightContent/buttons/item';

// Movie list
import LoadingAnimation from 'components/loading/LoadingWrapper';

// Movie list -> content
import ListMovieContent from 'components/MovieDetail/movieContent/listMovie/content';
import LinkMovie from 'components/MovieDetail/movieContent/listMovie/Link';
import ImgMovieOther from 'components/MovieDetail/movieContent/listMovie/ImgLink';
import SeatAbleInfo from 'containers/MovieDetailPage/infoAbleSeat';
// Theme
import theme from 'components/Theme/index';
// run saga
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectMovies } from 'containers/HomePage/selectors';
// import { makeSelectMovies } from 'containers/HomePage/selectors';
// import { bookingMovie } from './infoAbleSeat/actions/index';

import reducer from './reducer';
import saga from './saga';
import { fetchMovieById, getBookingAbleSeat } from './actions/index';
import { makeSelectMovieDetail, makeSelectInfoBooking } from './selector';

const ContentListMovie = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(
        () => resolve(import('components/MovieDetail/movieContent/listMovie')),
        2000,
      );
    }),
);

function MovieDetailPage({
  match,
  movie,
  movies,
  getMovieById,
  // history,
  info,
  user,
  // book,
  getAbleSeat,
}) {
  const key = 'movie';
  const urlImg = 'https://image.tmdb.org/t/p/w500/';
  const BgImg = 'https://image.tmdb.org/t/p/original/';
  const array = movies.filter(item => item.id !== movie.id && item.poster_path);
  const arrayNew = array.slice(0, 6);
  const [show, setShow] = useState(false);

  console.log(movies);
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
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useInjectReducer({ key: 'info', reducer });
  useInjectSaga({ key: 'info', saga });
  function handleGetInfo() {
    setShow(!show);
    // history.push(`/movie/seat/${movie.id}`);
    getAbleSeat(match);
  }
  useEffect(() => {
    getMovieById(match);
    getAbleSeat(match);
  }, [movie.id, match, movies, show]);

  // useEffect(() => {
  //   getAbleSeat(match);
  // }, [match]);
  function handleClose() {
    setShow(false);
  }

  return (
    <React.Fragment>
      <MovieWrapper theme={theme} bg={`${BgImg}${movie.backdrop_path}`}>
        <Helmet>
          <title>Movie Detail</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Logo theme={theme} to="/">
          <Star /> Star Cineplex
        </Logo>
        <MovieContent>
          <MovieContentLeft>
            <ImgMoive alt="photo" src={`${urlImg}/${movie.poster_path}`} />
          </MovieContentLeft>
          <MovieContentRight theme={theme}>
            <NameMovie theme={theme}>{movie.title}</NameMovie>
            <SubDate>
              <Badges bg={theme['color-primary-light']}>Create At</Badges>
              {movie.created_at}
            </SubDate>
            <PointBlock theme={theme}>
              <PointItem>
                <Badges bg={theme['color-primary-light']}>Imdb</Badges>
                {movie.vote_average}/10
              </PointItem>
              <PointItem>
                <Badges bg={theme['color-primary-light']}>Vote</Badges>
                {movie.vote_count}
              </PointItem>
              <PointItem>
                <Badges bg={theme['color-primary-light']}>POPULARITY</Badges>
                {movie.popularity}
              </PointItem>
            </PointBlock>
            <DescriptionBox theme={theme}>
              <TitleSection theme={theme}>Description</TitleSection>
              <DescriptionContent theme={theme}>
                {movie.overview}
              </DescriptionContent>
            </DescriptionBox>
            <ButtonBlock>
              <ButtonItem to="/watch" theme={theme}>
                Watch Online
              </ButtonItem>
              <ButtonItem to="/watchtrailler" theme={theme}>
                Watch Trailler
              </ButtonItem>
              <ButtonItem onClick={handleGetInfo} theme={theme}>
                Movie Seats
              </ButtonItem>
              {/* <ButtonItem
              theme={theme}
              className={
                currentBooking && currentBooking.value ? 'success' : 'hide'
              }
              // onClick={handleRemoveBooking}
            >
              {currentBooking && 'remove seat'}
            </ButtonItem> */}
            </ButtonBlock>
          </MovieContentRight>
          <Suspense
            fallback={
              <LoadingAnimation>
                {loading.map(item => (
                  <div key={item.id}>{item.item}</div>
                ))}
              </LoadingAnimation>
            }
          >
            <ContentListMovie>
              <TitleSection theme={theme}> Other Movie </TitleSection>
              <ListMovieContent>
                {arrayNew.map(item => (
                  <LinkMovie key={item.id} to={`/movie/${item.id}`}>
                    <ImgMovieOther
                      src={`${urlImg}${item.poster_path}`}
                      alt="movie other"
                    />
                  </LinkMovie>
                ))}
              </ListMovieContent>
            </ContentListMovie>
          </Suspense>
        </MovieContent>
        <SeatAbleInfo
          id={match.params.id}
          show={show}
          onClose={handleClose}
          info={info}
          user={user}
        />
      </MovieWrapper>
    </React.Fragment>
  );
}
MovieDetailPage.propTypes = {
  match: PropTypes.object,
  user: PropTypes.object,
  movie: PropTypes.object,
  movies: PropTypes.array,
  // book: PropTypes.any,
  info: PropTypes.array,
  getMovieById: PropTypes.func,
  // history: PropTypes.object,
  getAbleSeat: PropTypes.func,
  // bookingMovieAc: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  movie: makeSelectMovieDetail(),
  info: makeSelectInfoBooking(),
  movies: makeSelectMovies(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getMovieById: match => dispatch(fetchMovieById(match.params.id)),
    getAbleSeat: match => dispatch(getBookingAbleSeat(match.params.id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MovieDetailPage);
