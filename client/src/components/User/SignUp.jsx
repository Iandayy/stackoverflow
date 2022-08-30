import { useState } from 'react'; // eslint-disable-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import signUpInputState from '../../state/signUpInputState';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
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

// const FormWrapper = styled.div`
//   width: 220px;
//   height: 32px;
// `;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-basis: 22%;
`;

const Input = styled.input`
  width: 100%;
  padding: 7.8px 9.1px;
  border: 1px solid #bbb;
  font-size: 14px;
  border-radius: 3px;
`;

const SignUpBtn = styled.button`
  /* flex-basis: 22%; */
  width: 220px;
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

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const setValue = useSetRecoilState(signUpInputState);
  const item = useRecoilValue(signUpInputState);
  console.log(item);

  const navigate = useNavigate();

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setValue((prev) => [
      ...prev,
      {
        name: inputValue.name,
        email: inputValue.email,
        password: inputValue.password,
      },
    ]);

    alert('회원가입 되었습니다. 환영합니다.');

    navigate('/login');
  };

  return (
    <Section>
      <SignUpContainer>
        <form
          id="login-form"
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
              onChange={inputValueChangeHandler}
            />
          </Label>
          <SignUpBtn>Sign up</SignUpBtn>
        </form>
      </SignUpContainer>
      <div>
        Already have an account?
        <Link to="/signup">Log in</Link>
      </div>
    </Section>
  );
};

export default SignUp;
