/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const getInfoSeatMovie = id =>
  Request.get({ url: `bookable_seat/${id}` });
