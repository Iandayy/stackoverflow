import { useRecoilValue } from 'recoil';
import test from '../../state/test';

const Home = () => {
  const data = useRecoilValue(test);
  console.log(data);
  return (
    <div>
      <h1>HOME</h1>
      <p>아 오늘 정말 너무 힘들었어</p>
    </div>
  );
};

export default Home;
