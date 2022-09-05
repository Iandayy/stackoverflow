import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import questionsAllState from '../../state/questionsAllState';
import QuestionItem from './QuestionItem';
import isModalState from '../../state/isModalState';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.title`
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => (props.role === 'title' ? '24px;' : null)};
  padding-right: 24px;
  padding-bottom: ${(props) => (props.role === 'title' ? '24px;' : '12px;')};
  padding-left: 24px;
  border-bottom: ${(props) =>
    props.role === 'title' ? null : '1px solid #d6d9dc;'};
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

const Count = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
`;

const BtnWrapper = styled.div`
  border-top: 1px solid #434242;
  border-bottom: 1px solid #434242;
  border-left: 1px solid #434242;
  border-radius: 3px;
`;

const Btn = styled.button`
  padding: 9px;
  color: #898989;
  background-color: #ffffff;
  border: none;
  border-right: 1px solid #434242;
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #e3e6e8;
  }
  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:hover {
    color: #434242;
    background-color: #f6f6f6;
    cursor: pointer;
  }
`;

const FilterBtn = styled.button`
  padding: 9px;
  margin-left: 9px;
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

const Content = styled.div`
  border-bottom: 1px solid #d6d9dc;
`;

const Questions = () => {
  const questions = useRecoilValue(questionsAllState);
  const setIsMadal = useSetRecoilState(isModalState);

  const navigate = useNavigate();

  const askHandler = () => {
    setIsMadal(true);
    navigate('/questions/ask');
  };

  return (
    <Container>
      <Wrapper role="title">
        <h1>All Questions</h1>
        <AskBtn onClick={askHandler}>Ask Question</AskBtn>
      </Wrapper>
      <Wrapper>
        <Count>{`${questions.length} questions`}</Count>
        <BtnWrapper>
          <Btn>Newest</Btn>
          <Btn>Active</Btn>
          <Btn>Bountied</Btn>
          <Btn>Unanswered</Btn>
          <Btn>More</Btn>
        </BtnWrapper>
        <FilterBtn>Fliter</FilterBtn>
      </Wrapper>
      <Content>
        {questions.map((question) => (
          <QuestionItem key={question.question_id} item={question} />
        ))}
      </Content>
    </Container>
  );
};

export default Questions;
