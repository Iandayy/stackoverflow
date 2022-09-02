import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuestionWrapper = styled.section`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #d6d9dc;
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.button`
  margin-bottom: 4px;
  text-align: left;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #0073cc;
  cursor: pointer;
`;

const Body = styled.div`
  margin-bottom: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tag = styled.div`
  padding: 4.8px 6px;
  color: #5688ac;
  background-color: #e1ecf4;
  border-radius: 3px;
  font-size: 14px;
`;

const User = styled.div``;

const QuestionItem = ({ item }) => {
  const navigate = useNavigate();

  const titleHandler = async () => {
    try {
      const res = await axios.get(`/v1/questions/${item.question_id}`);
      localStorage.setItem('userSelect', JSON.stringify(res.data.data));
      navigate('/questions/select');
    } catch {
      console.log('err');
    }
  };

  return (
    <QuestionWrapper>
      <CountWrapper>
        <p>{item.answerCount} answers</p>
        <p>{item.viewCount} views</p>
      </CountWrapper>
      <ContentWrapper>
        <Title onClick={titleHandler}>{item.title}</Title>
        <Body>{item.content}</Body>
        <InfoContainer>
          {item.tags.map((el) => (
            <Tag key={item.tags.indexOf(el)}>{el}</Tag>
          ))}
          <User>{item.memberName}</User>
        </InfoContainer>
      </ContentWrapper>
    </QuestionWrapper>
  );
};

export default QuestionItem;
