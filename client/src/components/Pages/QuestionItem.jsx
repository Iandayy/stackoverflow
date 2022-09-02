import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

const Main = styled.article`
  border: 1px solid gray;
`;

const Content = styled.section`
  display: flex;
  justify-content: center;
  div {
    margin: 10px;
  }
  .title {
    cursor: pointer;
  }
`;

const Tag = styled.button`
  color: blue;
  background-color: skyblue;
`;

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
    <Main>
      <Content>
        <div>
          <p>{item.answerCount} answers</p>
          <p>{item.viewCount} views</p>
        </div>
        <div>
          <button onClick={titleHandler}>{item.title}</button>
          <p>{item.content}</p>
        </div>
      </Content>
      <Content>
        <div>
          <p>
            {item.tags.map((el) => (
              <Tag key={item.tags.indexOf(el)}>{el}</Tag>
            ))}
          </p>
        </div>
        <div>
          <p>{item.memberName}</p>
        </div>
      </Content>
    </Main>
  );
};

export default QuestionItem;
