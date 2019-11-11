import React from 'react';
import PropTypes from 'prop-types';
import theme from 'components/Theme/index';
import ListMovie from './ListMovie';
import MovieBlock from './MovieBlock';
import MovieBlockContent from './MovieBlockContent';
import IconPlay from './PlayButton';
import TittleMovie from './TittleMovie';

function Movie({ movies, onGetHandleSlide }) {
  const path = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ListMovie>
      {movies.map(item => (
        <MovieBlock
          bg={`${path}${item.poster_path}`}
          key={item.id}
          theme={theme}
        >
          <MovieBlockContent onClick={() => onGetHandleSlide(item.id)}>
            <IconPlay />
            <TittleMovie> {item.title} </TittleMovie>
          </MovieBlockContent>
        </MovieBlock>
      ))}
    </ListMovie>
  );
}

Movie.propTypes = {
  movies: PropTypes.array,
  onGetHandleSlide: PropTypes.func,
};
export default Movie;
