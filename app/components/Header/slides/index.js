/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import SlideBox from './SlideBox';
import SlideItem from './SlideItem';
import SlideContent from './SlideContent';
import TittleMovie from './TittleMovie';
import SubTittleMovie from './SubTittleMovie';
import ImgSlide from './ImgSlide';
import SlideButton from './SlideButton';
import IconButton from '../../IssueIcon/IconButton';
import NextSlideButton from './NextSlideButton';
import Movie from '../movie';
import slides from './constants';

class SlidesBlock extends Component {
  state = {
    current: 0,
  };

  handleChangeActive = () => {
    let { current } = this.state;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].isActive = false;
    }
    current = current < slides.length - 1 ? (current += 1) : 0;
    slides[current].isActive = true;
    this.setState({
      sl: slides,
      current,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.handleChangeActive();
    }, 20000);
  }

  render() {
    return (
      <SlideBox>
        {slides.map(slide => (
          <SlideItem key={slide.bg} className={slide.isActive ? 'active' : ''}>
            <ImgSlide src={slide.bg} alt="photo1" />
            <SlideContent>
              <TittleMovie>{slide.title_movie}</TittleMovie>
              {slide.kind_movie.map(item => (
                <SubTittleMovie key={item}>{item}</SubTittleMovie>
              ))}
              <SlideButton bg={slide.bg_button}>
                Watch me
                <IconButton />
              </SlideButton>
            </SlideContent>

            {/* btn next */}
            <NextSlideButton onClick={() => this.handleChangeActive()}>
              <IconButton />
            </NextSlideButton>
            <ul className="listdot">
              <li className="dot">&nbsp;</li>
              <li className="dot">&nbsp;</li>
              <li className="dot">&nbsp;</li>
              <li className="dot">&nbsp;</li>
            </ul>
            <Movie movies={slide.movies} isActive={slide.isActive} />
          </SlideItem>
        ))}
      </SlideBox>
    );
  }
}

export default SlidesBlock;
