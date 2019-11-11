// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const fetchUser = () => Request.get({ url: 'user' });
