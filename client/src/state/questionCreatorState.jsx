import { selector } from 'recoil';
import axios from 'axios';
import questionInput from './questionInputState';

const questionCreatorState = selector({
  key: 'questionCreatorState',
  get: async ({ get }) => {
    const value = get(questionInput);
    const res = await axios.post('/v1/questions/', {
      headers: { 'Content-Type': 'application/Json' },
      body: JSON.stringify(value),
    });
    return res;
  },
});

export default questionCreatorState;
