/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
import isAuthState from '../../state/isLoginState';

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f9f9;
  width: 100%;
  height: 47px;
`;

const Logo = styled.img`
  width: 150px;
  height: 30px;
  margin: 8px;
`;

const Form = styled.form`
  display: flex;
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
  /* border: 1px solid #bbb; */
  border-radius: 3px;
  padding: 10px 12px;
  font-size: 14px;
  border: none;
  outline: none;
`;

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

const TopBar = ({ children }) => {
  const navigate = useNavigate();

  const login = localStorage.getItem('login');

  const logoutHandler = () => {
    alert('로그아웃 되었습니다.');

    localStorage.removeItem('Authorization');
    localStorage.removeItem('login');

    navigate('/');
  };
  return (
    <TopBarWrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="logo" />
      </Link>
      <Form>
        <SearchIcon
          alt="search-icon"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIxIDMgQyAxMS42MDE1NjMgMyA0IDEwLjYwMTU2MyA0IDIwIEMgNCAyOS4zOTg0MzggMTEuNjAxNTYzIDM3IDIxIDM3IEMgMjQuMzU1NDY5IDM3IDI3LjQ2MDkzOCAzNi4wMTU2MjUgMzAuMDkzNzUgMzQuMzQzNzUgTCA0Mi4zNzUgNDYuNjI1IEwgNDYuNjI1IDQyLjM3NSBMIDM0LjUgMzAuMjgxMjUgQyAzNi42Nzk2ODggMjcuNDIxODc1IDM4IDIzLjg3ODkwNiAzOCAyMCBDIDM4IDEwLjYwMTU2MyAzMC4zOTg0MzggMyAyMSAzIFogTSAyMSA3IEMgMjguMTk5MjE5IDcgMzQgMTIuODAwNzgxIDM0IDIwIEMgMzQgMjcuMTk5MjE5IDI4LjE5OTIxOSAzMyAyMSAzMyBDIDEzLjgwMDc4MSAzMyA4IDI3LjE5OTIxOSA4IDIwIEMgOCAxMi44MDA3ODEgMTMuODAwNzgxIDcgMjEgNyBaIj48L3BhdGg+PC9zdmc+"
        />
        <Input type="text" placeholder="Search..." />
      </Form>
      {isLogin && <button onClick={logoutHandler}>Log out</button>}
      {!isLogin && (
        <>
          <Link to="/login">
            <LogIn>Log in</LogIn>
          </Link>
          <Link to="/signup">
            <SignUp>Sign up</SignUp>
          </Link>
        </>
      )}
    </TopBarWrapper>
  );
};

export default TopBar;
