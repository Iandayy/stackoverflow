import { selector } from 'recoil';

import axios from 'axios';

const homeAllState = selector({
  key: 'homeAllState',
  get: async ({ get }) => {
    const res = await axios.get('/?page=1&size=10');
    return res;
  },
});

export default homeAllState;
