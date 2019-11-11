// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const loginAuth = data =>
  Request.post({
    url: 'login',
    data: {
      email: data.email,
      password: data.password,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
