import axios from 'axios';
import { useState } from 'react'; // eslint-disable-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isModalState from '../../state/isModalState';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background-color: #f1f2f3;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border: 1px solid #bbb;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-evenly;
  height: 90%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
`;

const Input = styled.input`
  /* width: 100%; */
  padding: 7.8px 9.1px;
  border: 1px solid #bbb;
  font-size: 14px;
  border-radius: 3px;
`;

const SignUpBtn = styled.button`
  flex-basis: 80%;
  height: 32px;
  color: white;
  background-color: #0b96fe;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #0073cc;
    cursor: pointer;
  }
`;

const LinkBox = styled.div`
  margin-top: 20px;
`;

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const setIsMadal = useSetRecoilState(isModalState);

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
      email: inputValue.email,
      name: inputValue.name,
      password: inputValue.password,
    };

    await axios
      .post('http://211.41.205.19:8080/v1/members', item, {
        credentials: 'include',
      })
      .then(() => {
        alert('회원가입 되었습니다 ! 환영합니다 :)');
        setIsMadal(false);
        navigate('/login');
      })
      .catch((e) => {
        console.log('err', e);
        alert('에러입니다 !');
      });

    setInputValue({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Section>
      <SignUpContainer>
        <Form
          id="signup-form"
          action="/v1/members"
          method="post"
          onSubmit={submitHandler}
        >
          <Label htmlFor="display-name">
            Display name
            <Input
              id="display-name"
              type="text"
              size="30"
              maxlength="100"
              name="name"
              value={inputValue.name}
              onChange={inputValueChangeHandler}
            />
          </Label>
          <Label htmlFor="email">
            Email
            <Input
              id="email"
              type="email"
              size="30"
              maxlength="100"
              name="email"
              value={inputValue.email}
              onChange={inputValueChangeHandler}
            />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              id="password"
              type="password"
              autocomplete="off"
              name="password"
              value={inputValue.password}
              onChange={inputValueChangeHandler}
            />
          </Label>
          <SignUpBtn>Sign up</SignUpBtn>
        </Form>
      </SignUpContainer>
      <LinkBox>
        Already have an account?&nbsp;&nbsp;
        <Link to="/login">Log in</Link>
      </LinkBox>
    </Section>
  );
};

export default SignUp;
