import styled from 'styled-components';

const Item = styled.section`
  border: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.button`
  border: 1px solid white;
  color: #7088c1;
  background-color: #dff2ff;
`;

const TagItem = ({ item }) => {
  return (
    <Item>
      <Tag>{item.tagName}</Tag>
    </Item>
  );
};

export default TagItem;
