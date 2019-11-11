/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const bookingMovie = data =>
  Request.post({ url: `bookable_seat`, data });
