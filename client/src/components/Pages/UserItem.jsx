import styled from 'styled-components';

const Item = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const User = styled.button`
  border: 1px solid white;
  color: #7088c1;
  background-color: white;
`;

const UserItem = ({ item }) => {
  return (
    <Item>
      <User>{item.name}</User>
    </Item>
  );
};

export default UserItem;
