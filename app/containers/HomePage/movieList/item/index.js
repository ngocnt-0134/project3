import React from 'react';
import PropTypes from 'prop-types';

import CardBox from 'components/CardboxMovie/CardBox';
import CardHeader from 'components/CardboxMovie/CardHeader';
import Box from 'components/CardboxMovie/CardBody';
import CardImg from 'components/CardboxMovie/CardImg';
import CardBtn from 'components/CardboxMovie/CardBtn';
import CardRaiting from 'components/CardboxMovie/CardRaiting';
import CardName from 'components/CardboxMovie/CardName';
import CardDescription from 'components/CardboxMovie/CardDescription';
import theme from 'components/Theme/index';
import nopost from './nopost.jpg';
function CardItem({ movie }) {
  return (
    <CardBox theme={theme}>
      <CardHeader to={`/movie/${movie.id}`} theme={theme}>
        <CardImg
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : nopost
          }
          alt="photo_mv"
        />
        <Box>
          <CardBtn theme={theme}>
            <i className="fas fa-play" />
          </CardBtn>
          <CardRaiting theme={theme}>{movie.vote_average}</CardRaiting>
        </Box>
      </CardHeader>
      <CardName className="card__name">{movie.title}</CardName>
      {movie.genres &&
        movie.genres.map(genre => (
          <CardDescription key={genre.id} theme={theme}>
            {genre.name}
          </CardDescription>
        ))}
    </CardBox>
  );
}
CardItem.propTypes = {
  movie: PropTypes.object,
};
export default CardItem;
