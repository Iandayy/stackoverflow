import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.article`
  background-color: #f3f3f3;
  padding: 10px;
  padding-bottom: 30px;
`;

const H1 = styled.h1`
  margin: 40px;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Input = styled.section`
  padding: 20px;
  background-color: white;
  input {
    width: 100%;
    height: 3vh;
  }
  textarea {
    width: 100%;
    height: 20vh;
  }
`;

const Btn = styled.button`
  width: 15%;
  height: 5vh;
  color: white;
  background-color: #0b96fe;
  border: none;
  border-radius: 3px;
  margin-left: 40px;

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

  const token = localStorage.getItem('Authorization');
  const member_id = localStorage.getItem('member_id');

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let item = {
      member_id: Number(member_id),
      title: inputValue.title,
      content: inputValue.body,
      tags: [inputValue.tags],
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
        alert('글이 등록되었습니다 !');
        window.location.replace('/questions');
      })
      .catch((err) => {
        console.log('err', err);
      });

    setInputValue({
      title: '',
      body: '',
      tags: '',
    });
  };

  return (
    <Container>
      <H1>Ask a public question</H1>
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
              // size="65"
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
              // size="65"
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
    </Container>
  );
};

export default Ask;
