import { atom } from 'recoil';

const questionInputState = atom({
  key: 'questionInputState',
  default: [],
});

export default questionInputState;
