import { selector } from 'recoil';

import axios from 'axios';

const tagsAllState = selector({
  key: 'tagsAllState',
  get: async ({ get }) => {
    const res = await axios.get(
      'http://211.41.205.19:8080/v1/tags?page=1&size=10'
    );
    return res.data.data;
  },
});

export default tagsAllState;
