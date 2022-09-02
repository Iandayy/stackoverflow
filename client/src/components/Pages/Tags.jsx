import { useRecoilValue } from 'recoil';
import tagsAllState from '../../state/tagsAllState';

const Tags = () => {
  const tags = useRecoilValue(tagsAllState);

  return (
    <div>
      {tags.map((tag) => (
        <p key={tag.tagName}>{tag.tagName}</p>
      ))}
    </div>
  );
};

export default Tags;
