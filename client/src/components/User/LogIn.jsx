import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
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

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 250px;
  background-color: white;
  border: 1px solid #bbb;
  border-radius: 8px;
  /* box-shadow:  */
`;

// const FormWrapper = styled.form`
//   width: 220px;
//   height: 32px;
// `;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
`;

const Input = styled.input`
  width: 100%;
  padding: 7.8px 9.1px;
  border: 1px solid #bbb;
  font-size: 14px;
  border-radius: 3px;
`;

const LogInBtn = styled.button`
  width: 220px;
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

const LogIn = () => {
  return (
    <Section>
      <LogInContainer>
        <form id="login-form" action="/v1/members/login" method="post">
          <Label htmlFor="email">
            Email
            <Input
              id="email"
              type="email"
              size="30"
              maxlength="100"
              name="email"
            />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              id="password"
              type="password"
              autocomplete="off"
              name="password"
            />
          </Label>
          <LogInBtn>Log in</LogInBtn>
        </form>
      </LogInContainer>
      <div>
        Don’t have an account?
        <Link to="/signup">Sign up</Link>
      </div>
    </Section>
  );
};

export default LogIn;
