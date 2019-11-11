import Request from 'utils/request';

export const fetchFeatureMovie = () => Request.get({ url: 'feature_movie' });
