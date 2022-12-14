/* eslint-disable react/prop-types */
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isModalState from '../../state/isModalState';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
<FontAwesomeIcon icon="fa-regular fa-inbox" />;

const Header = styled.header`
  display: flex;
  background-color: #f8f9f9;
  width: 100%;
  height: 47px;
  position: fixed;
  box-shadow: 0 0 6px 0 #cdd0d3;
`;

const BlankBox = styled.div`
  width: 100%;
  flex: 1;
  @media (max-width: 1264px) {
    display: none;
  }
`;

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1264px;
  @media (max-width: 1264px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 32px;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: white;
  margin-left: 4px;
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
  height: 32px;
  margin-right: 8px;
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

const Btn = styled.button`
  margin: 8px;
  width: 30px;
  color: gray;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TopBar = ({ children }) => {
  const navigate = useNavigate();

  const login = localStorage.getItem('login');

  const setIsMadal = useSetRecoilState(isModalState);

  const logoHandler = () => {
    setIsMadal(false);
    navigate('/');
  };

  const loginHandler = () => {
    setIsMadal(true);
    navigate('/login');
  };

  const signupHandler = () => {
    setIsMadal(true);
    navigate('/signup');
  };

  const logoutHandler = () => {
    localStorage.clear();

    alert('???????????? ???????????????.');

    navigate('/');
  };
  return (
    <Header>
      <BlankBox />
      <TopBarWrapper>
        <Logo src={LogoImg} alt="logo" onClick={logoHandler} />
        <Form>
          <SearchIcon
            alt="search-icon"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIxIDMgQyAxMS42MDE1NjMgMyA0IDEwLjYwMTU2MyA0IDIwIEMgNCAyOS4zOTg0MzggMTEuNjAxNTYzIDM3IDIxIDM3IEMgMjQuMzU1NDY5IDM3IDI3LjQ2MDkzOCAzNi4wMTU2MjUgMzAuMDkzNzUgMzQuMzQzNzUgTCA0Mi4zNzUgNDYuNjI1IEwgNDYuNjI1IDQyLjM3NSBMIDM0LjUgMzAuMjgxMjUgQyAzNi42Nzk2ODggMjcuNDIxODc1IDM4IDIzLjg3ODkwNiAzOCAyMCBDIDM4IDEwLjYwMTU2MyAzMC4zOTg0MzggMyAyMSAzIFogTSAyMSA3IEMgMjguMTk5MjE5IDcgMzQgMTIuODAwNzgxIDM0IDIwIEMgMzQgMjcuMTk5MjE5IDI4LjE5OTIxOSAzMyAyMSAzMyBDIDEzLjgwMDc4MSAzMyA4IDI3LjE5OTIxOSA4IDIwIEMgOCAxMi44MDA3ODEgMTMuODAwNzgxIDcgMjEgNyBaIj48L3BhdGg+PC9zdmc+"
          />
          <Input type="text" placeholder="Search..." />
        </Form>
        {login && (
          <>
            <Btn>
              <FontAwesomeIcon icon={faFaceSmile} size="2x" />
            </Btn>
            <Btn>
              <FontAwesomeIcon icon={faInbox} size="2x" />
            </Btn>
            <Btn onClick={logoutHandler}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />
            </Btn>
          </>
        )}
        {!login && (
          <>
            <LogIn onClick={loginHandler}>Log in</LogIn>
            <SignUp onClick={signupHandler}>Sign up</SignUp>
          </>
        )}
      </TopBarWrapper>
      <BlankBox />
    </Header>
  );
};

export default TopBar;
