import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Input = styled.section`
  padding: 10px;
`;

const Btn = styled.button`
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

const Ask = () => {
  const [inputValue, setInputValue] = useState({
    title: '',
    body: '',
    tags: '',
  });

  let token = localStorage.getItem('Authorization');

  const navigate = useNavigate();

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let item = {
      // member_id: 1,
      title: inputValue.title,
      content: inputValue.body,
      tags: inputValue.tags,
    };

    console.log(item);

    await axios
      .post('http://211.41.205.19:8080/v1/questions', item, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err', err);
      });

    setInputValue({
      title: '',
      body: '',
      tags: '',
    });

    navigate('/questions');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Card>
          <Input>
            <label htmlFor="title">
              <strong>Title</strong>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={inputValue.title}
              onChange={inputValueChangeHandler}
              placeholder="e.g. Is there an R funcion for finding th index of an element in a vector?"
            />
          </Input>
          <Input>
            <label htmlFor="body">
              <strong>Body</strong>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                id="body"
                type="text"
                name="body"
                value={inputValue.body}
                onChange={inputValueChangeHandler}
              />
            </label>
          </Input>
          <Input>
            <label htmlFor="tags">
              <strong>Tags</strong>
              <p>Add up to 5 tags to describe what your question is about</p>
            </label>
            <input
              id="tags"
              type="text"
              name="tags"
              value={inputValue.tags}
              onChange={inputValueChangeHandler}
              placeholder="e.g. (augular sql-server string)"
            />
          </Input>
        </Card>
        <Btn>Review your question</Btn>
      </form>
    </div>
  );
};

export default Ask;
