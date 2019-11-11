// eslint-disable-next-line import/no-unresolved
import Request from 'utils/request';

export const updateUser = data => Request.post({ url: `user/update`, data });
