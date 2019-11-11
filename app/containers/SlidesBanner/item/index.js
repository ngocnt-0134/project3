/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SlideItem from 'components/Header/slides/SlideItem';
import SlideContent from 'components/Header/slides/SlideContent';
import TittleMovie from 'components/Header/slides/TittleMovie';
// import SubTittleMovie from 'components/Header/slides/SubTittleMovie';
import ImgSlide from 'components/Header/slides/ImgSlide';
import DescriptionMovie from 'components/Header/slides/DescriptionMovie';
import SlideButton from 'components/Header/slides/SlideButton';
import IconButton from 'components/IssueIcon/IconButton';
// import NextSlideButton from 'components/Header/slides/NextSlideButton';
import Movie from 'components/Header/movie/';
import theme from 'components/Theme/index';

function SlideItemBox({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const path = 'https://image.tmdb.org/t/p/original/';
  const otherMovie = slides.filter(item => item.id !== currentSlide);

  function handleCurrentSlide(id) {
    setCurrentSlide(id);
  }

  return (
    <React.Fragment>
      {slides.map(slide => (
        <SlideItem
          key={slide.id}
          // to={`/movie/${slide.id}`}
          className={slide.id === currentSlide ? 'active' : ''}
          theme={theme}
        >
          <ImgSlide src={`${path}${slide.backdrop_path}`} alt="photo1" />
          <SlideContent to={`/movie/${slide.id}`} theme={theme}>
            <TittleMovie>{slide.title}</TittleMovie>
            <DescriptionMovie>{slide.overview}</DescriptionMovie>
            <SlideButton theme={theme}>
              Watch me
              <IconButton />
            </SlideButton>
          </SlideContent>

          <Movie
            movies={otherMovie}
            onGetHandleSlide={id => handleCurrentSlide(id)}
          />
        </SlideItem>
      ))}
    </React.Fragment>
  );
}
SlideItemBox.propTypes = {
  slides: PropTypes.array,
};
export default SlideItemBox;
