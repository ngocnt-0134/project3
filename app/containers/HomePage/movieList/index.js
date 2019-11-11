import React from 'react';
import PropTypes from 'prop-types';
import MovieList from 'components/CardboxMovie/CardWrapper';
import CardItem from './item/index';

function MovieListBlock({ movies }) {
  return (
    <MovieList>
      {movies.map(movie => (
        <CardItem key={movie.id} movie={movie} />
      ))}
    </MovieList>
  );
}
MovieListBlock.propTypes = {
  movies: PropTypes.array,
};
export default MovieListBlock;
