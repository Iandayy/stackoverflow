import { atom } from 'recoil';

const isModalState = atom({
  key: 'isModalState',
  default: false,
});

export default isModalState;
