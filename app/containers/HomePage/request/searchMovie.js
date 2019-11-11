import Request from 'utils/request';

export const searchMovie = txt => Request.get({ url: `search${txt}` });
