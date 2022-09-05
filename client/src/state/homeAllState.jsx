import { selector } from 'recoil';

import axios from 'axios';

const homeAllState = selector({
  key: 'homeAllState',
  get: async ({ get }) => {
    const res = await axios.get('http://211.41.205.19:8080/?page=1&size=10');
    return res.data.data;
  },
});

export default homeAllState;
