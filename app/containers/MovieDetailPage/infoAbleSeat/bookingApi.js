/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const bookingMovie = (data, id) => {
  console.log(data);
  return Request.post({
    url: `bookable_seat/${id}`,
    data: {
      seat: JSON.parse(data),
    },
  });
};
