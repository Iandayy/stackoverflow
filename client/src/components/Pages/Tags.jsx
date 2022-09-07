import { useRecoilValue } from 'recoil';
import tagsAllState from '../../state/tagsAllState';
import TagItem from './TagItem';

const Tags = () => {
  const tags = useRecoilValue(tagsAllState);

  return (
    <div>
      <h1>Tags</h1>
      <p>
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>
      <input placeholder="Filter by tag name" />
      <section>
        {tags.map((tag) => (
          <TagItem key={tag.tagName} item={tag} />
        ))}
      </section>
    </div>
  );
};

export default Tags;
