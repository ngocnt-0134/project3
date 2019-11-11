// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const registerUser = data =>
  Request.post({
    url: 'register',
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirm,
    },
  });
