import { selector } from 'recoil';

import axios from 'axios';

const test = selector({
  key: 'test',
  get: async ({ get }) => {
    const res = await axios.get('v1/members/1');
    return res.data;
  },
});

export default test;
