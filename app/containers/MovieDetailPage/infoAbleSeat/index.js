/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// redux saga reselect
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import InfoSeatWrapper from 'components/MovieDetail/seatMovie/InfoSeatWrapper';
import ItemSeat from 'components/MovieDetail/seatMovie/itemSeat';
// SEAT -> titleBlock
import TitleBlockSeat from 'components/MovieDetail/seatMovie/titleBlock';
import TitleSeat from 'components/MovieDetail/seatMovie/titleBlock/titleSeat';
import ButtonClose from 'components/MovieDetail/seatMovie/titleBlock/btnClose';
import ButtonBooking from 'components/MovieDetail/seatMovie/titleBlock/btnBooking';
// SEAT -> menu
import Menu from 'components/MovieDetail/seatMovie/menu/index';
import Item from 'components/MovieDetail/seatMovie/menu/item';
// Wrapper Seat
import WrapperSeat from 'components/MovieDetail/seatMovie/WrapperSeat';
import SeatList from 'components/MovieDetail/seatMovie/SeatList';
import NumberSeat from 'components/MovieDetail/seatMovie/TitleSeat';
// Theme
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import withAuthenticate from 'containers/App/withAuthen';
import theme from 'components/Theme/index';
import reducer from './reducer';
import saga from './saga';
import { bookingMovie } from './actions/index';
import { makeSelectBookingMovie } from './selector';
import { makeSelectInfoBooking } from '../selector';

function SeatAbleInfo({ info, onClose, id, bookingMovieAc, user, show }) {
  let value = false;
  const key = 'book';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {}, [id, user]);

  async function handleBooking(item, x, y) {
    value = item === null;
    const obj = { x, y, value };
    const array = [];
    array.push(obj);
    await bookingMovieAc(JSON.stringify(array), id);
    localStorage.setItem('BOOKING', JSON.stringify(array));
  }
  async function handleRemoveBooking(item, x, y) {
    value = item === user.id && false;
    const obj = { x, y, value };
    const array = [];
    array.push(obj);
    await bookingMovieAc(JSON.stringify(array), id);
  }
  function showSeat() {
    let result = null;
    if (info.length !== 0) {
      result = info.map((item, x) => (
        <SeatList
          key={`${item}+ ${Math.random(1000 * 4) + Math.random(12312412 * 5)}`}
        >
          <NumberSeat theme={theme}> {x + 1} </NumberSeat>
          {item.map((i, y) => (
            <ItemSeat
              key={`${i}+ ${Math.random(1000 * 4) + Math.random(12312412 * 5)}`}
              theme={theme}
              className={i ? '' : 'null'}
            >
              {i !== null && i !== user.id && (
                <ButtonBooking theme={theme} disabled>
                  <i className="fas fa-user" />
                </ButtonBooking>
              )}

              {user.id === i && (
                <ButtonBooking
                  theme={theme}
                  className="success"
                  onClick={() => handleRemoveBooking(i, y, x)}
                >
                  <i className="fas fa-check-circle" />
                </ButtonBooking>
              )}

              {i === null && user.id !== i && (
                <ButtonBooking
                  theme={theme}
                  onClick={() => handleBooking(i, y, x)}
                >
                  <i className="fas fa-ticket-alt" />
                </ButtonBooking>
              )}
            </ItemSeat>
          ))}
        </SeatList>
      ));
    }
    return result;
  }

  return (
    <InfoSeatWrapper theme={theme} className={show ? 'show' : 'hide'}>
      <Helmet>
        <title>Info Seat</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <TitleBlockSeat>
        <TitleSeat theme={theme}>Movie seats</TitleSeat>
        <Menu >
          <Item className="item1" theme={theme}>
            <i className="fas fa-user" /> not available
          </Item>
          <Item className="item2" theme={theme}>
            <i className="fas fa-ticket-alt" /> available
          </Item>
          <Item className="item3" theme={theme}>
            <i className="fas fa-check-circle" /> your booking
          </Item>
        </Menu>
        <ButtonClose theme={theme} type="button" onClick={() => onClose()}>
          <i className="fas fa-door-open" />
        </ButtonClose>
      </TitleBlockSeat>
      {/* SEAT */}
      <WrapperSeat>{info && showSeat()}</WrapperSeat>
    </InfoSeatWrapper>
  );
}

SeatAbleInfo.propTypes = {
  info: PropTypes.array,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  id: PropTypes.string,
  user: PropTypes.object,
  bookingMovieAc: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  book: makeSelectBookingMovie(),
  info: makeSelectInfoBooking(),
});

export function mapDispatchToProps(dispatch) {
  return {
    bookingMovieAc: (data, id) => dispatch(bookingMovie(data, id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SeatAbleInfo);
