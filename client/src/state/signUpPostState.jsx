import { selectorFamily } from 'recoil';
import axios from 'axios';

const signUpPostState = selectorFamily({
  key: 'signUpPostState',
  get: (item) => async () => {
    const res = await axios.post('/v1/members', {
      headers: { 'Content-Type': 'application/Json' },
      body: JSON.stringify(item),
    });
    return res;
  },
});

export default signUpPostState;
