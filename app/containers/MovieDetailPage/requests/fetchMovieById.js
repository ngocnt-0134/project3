/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const fetchMovieById = id => Request.get({ url: `movies/${id}` });
