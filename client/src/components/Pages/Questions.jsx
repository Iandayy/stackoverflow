import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import questionsAll from '../../state/questionsAllState';
import questionInputState from '../../state/questionInputState';
import QuestionItem from './QuestionItem';
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

const FilterBtn = styled.button`
  width: 60px;
  height: 33px;
  margin-left: 4px;
  color: #5688ac;
  background-color: #e1ecf4;
  border: 1px solid #83a9c5;
  border-radius: 3px;
  &:hover {
    color: #2b5876;
    background-color: #b3d3ea;
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

const Questions = () => {
  const questions = useRecoilValue(questionsAll);
  const item = useRecoilValue(questionInputState);
  console.log(item);

  return (
    <Main>
      <Section>
        <h1>All Questions</h1>
        <Link to="/questions/ask">
          <AskBtn>Ask Question</AskBtn>
        </Link>
      </Section>
      <Section>
        <div>{`${questions.length} questions`}</div>
        <div>
          <Btn>Newest</Btn>
          <Btn>Active</Btn>
          <Btn>Bountied</Btn>
          <Btn>Unanswered</Btn>
          <Btn>More</Btn>
        </div>
        <div>
          <FilterBtn>Fliter</FilterBtn>
        </div>
      </Section>
      <Content>
        {questions.map((question) => (
          <QuestionItem key={question.question_id} item={question} />
        ))}
      </Content>
    </Main>
  );
};

export default Questions;
