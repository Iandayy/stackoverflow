import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
// import LogIn from '../User/LogIn';
// import SignUp from '../User/SignUp';

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  background-color: #f8f9f9;
  width: 100%;
  height: 47px;
  /* font-size: 1em; */
  /* margin: 1em; */
  /* padding: 0.25em 1em; */
  /* border: 2px solid palevioletred; */
  /* border-radius: 3px; */
`;

const Logo = styled.img`
  width: 150px;
  height: 30px;
  margin: 8px;
`;

const Form = styled.form`
  display: flex;
  position: relative;
  width: 70%;
  height: 32px;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: white;
  margin-left: 8px;
  margin-right: 8px;
`;

const SearchIcon = styled.img`
  width: 22px;
  transform: translateX(5px);
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 3px;
  padding: 10px 12px;
  font-size: 14px;
  border: none;
  outline: none;
`;

// const BtnWrapper = styled.div`
//   /* position: absolute; */
//   transform: translateX(50%);
// `;

const LogIn = styled.button`
  width: 60px;
  height: 33px;
  margin-right: 4px;
  color: #5688ac;
  background-color: #e1ecf4;
  border: 1px solid #83a9c5;
  border-radius: 3px;
  &:hover {
    color: #2b5876;
    background-color: #b3d3ea;
    /* border: 1px solid #2b5876; */
    cursor: pointer;
  }
`;

const SignUp = styled.button`
  width: 60px;
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

const TopBar = () => {
  return (
    <TopBarWrapper>
      <Logo src={LogoImg} alt="logo" />
      <Form>
        <SearchIcon
          alt="search-icon"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIxIDMgQyAxMS42MDE1NjMgMyA0IDEwLjYwMTU2MyA0IDIwIEMgNCAyOS4zOTg0MzggMTEuNjAxNTYzIDM3IDIxIDM3IEMgMjQuMzU1NDY5IDM3IDI3LjQ2MDkzOCAzNi4wMTU2MjUgMzAuMDkzNzUgMzQuMzQzNzUgTCA0Mi4zNzUgNDYuNjI1IEwgNDYuNjI1IDQyLjM3NSBMIDM0LjUgMzAuMjgxMjUgQyAzNi42Nzk2ODggMjcuNDIxODc1IDM4IDIzLjg3ODkwNiAzOCAyMCBDIDM4IDEwLjYwMTU2MyAzMC4zOTg0MzggMyAyMSAzIFogTSAyMSA3IEMgMjguMTk5MjE5IDcgMzQgMTIuODAwNzgxIDM0IDIwIEMgMzQgMjcuMTk5MjE5IDI4LjE5OTIxOSAzMyAyMSAzMyBDIDEzLjgwMDc4MSAzMyA4IDI3LjE5OTIxOSA4IDIwIEMgOCAxMi44MDA3ODEgMTMuODAwNzgxIDcgMjEgNyBaIj48L3BhdGg+PC9zdmc+"
        />
        <Input type="text" placeholder="Search..." />
      </Form>
      {/* <BtnWrapper> */}
      <LogIn>Log in</LogIn>
      <SignUp>Sign up</SignUp>
      {/* </BtnWrapper> */}
    </TopBarWrapper>
  );
};

export default TopBar;
