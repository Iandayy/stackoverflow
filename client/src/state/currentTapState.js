import { atom } from 'recoil';

const currentTapState = atom({
  key: 'currentTapState',
  default: '',
});

export default currentTapState;
