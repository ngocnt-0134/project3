/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { memo, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import SlideBox from 'components/Header/slides/SlideBox';
import SlideItemBox from 'containers/SlidesBanner/item';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectSlide } from 'containers/App/selectors/featureMovieSelector';
import { fetchFeatureMovie } from 'containers/App/actions/featureMovie';

import reducer from './reducer';
import saga from './saga';

// const path = 'https://image.tmdb.org/t/p/w500/';
function SlidesBlock({ slides, getFetchFeatureMovie }) {
  const key = 'slides';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getFetchFeatureMovie();
  }, []);

  return (
    <SlideBox>
      <SlideItemBox slides={slides} />
    </SlideBox>
  );
}
SlidesBlock.propTypes = {
  slides: PropTypes.array,
  getFetchFeatureMovie: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  slides: makeSelectSlide(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getFetchFeatureMovie: () => dispatch(fetchFeatureMovie()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(SlidesBlock);
