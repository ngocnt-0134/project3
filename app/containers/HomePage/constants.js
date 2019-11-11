/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_URL = 'http://18.139.163.192/api/';
export const loading = [
  { id: 1, item: '' },
  { id: 2, item: '' },
  { id: 3, item: '' },
  { id: 4, item: '' },
  { id: 5, item: '' },
  { id: 6, item: '' },
  { id: 7, item: '' },
  { id: 8, item: '' },
  { id: 9, item: '' },
  { id: 10, item: '' },
  { id: 11, item: '' },
  { id: 12, item: '' },
];
