import { selector } from 'recoil';

import axios from 'axios';

const usersAllState = selector({
  key: 'usersAllState',
  get: async ({ get }) => {
    const res = await axios.get('/v1/members?page=1&size=10');
    return res.data.data;
  },
});

export default usersAllState;
