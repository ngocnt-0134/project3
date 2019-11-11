// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const fetchMovieList = query => Request.get({ url: `movies${query}` });
// http://18.139.163.192/api/feature_movie
