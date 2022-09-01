import { useRecoilValue } from 'recoil';
import tagsAllState from '../../state/tagsAllState';

const Tags = () => {
  const tags = useRecoilValue(tagsAllState);
  console.log(tags);
  return (
    <div>
      {tags.map((el) => (
        <p key={Math.floor(Math.random() * 100) + 1}>{el.tagName}</p>
      ))}
    </div>
  );
};

export default Tags;
