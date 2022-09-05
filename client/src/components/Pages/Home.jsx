import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import homeAllState from '../../state/homeAllState';

import HomeItem from './HomeItem';

import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const AskBtn = styled.button`
  width: 100px;
  height: 33px;
  color: white;
  background-color: #0b96fe;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #0073cc;
    cursor: pointer;
  }
`;

const Btn = styled.button`
  height: 33px;
  margin-left: 4px;
  color: #898989;
  background-color: #ffffff;
  border: 1px solid #878787;
  border-radius: 3px;
  &:hover {
    color: #7d7d7d;
    background-color: #f6f6f6;
    cursor: pointer;
  }
`;

const Content = styled.div``;

const Home = () => {
  const items = useRecoilValue(homeAllState);

  return (
    <Main>
      <Section>
        <h1>Top Questions</h1>
        <Link to="/questions/ask">
          <AskBtn>Ask Question</AskBtn>
        </Link>
      </Section>
      <div>
        <Btn>Newest</Btn>
        <Btn>Active</Btn>
        <Btn>Bountied</Btn>
        <Btn>Unanswered</Btn>
        <Btn>More</Btn>
      </div>
      <Content>
        {items.map((item) => (
          <HomeItem key={item.question_id} item={item} />
        ))}
      </Content>
    </Main>
  );
};

export default Home;
