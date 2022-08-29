import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
// import LogIn from '../User/LogIn';
// import SignUp from '../User/SignUp';

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f8f9f9;
  width: 100%;
  height: 47px;
  /* font-size: 1em; */
  /* margin: 1em; */
  /* padding: 0.25em 1em; */
  /* border: 2px solid palevioletred; */
  /* border-radius: 3px; */
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 70%;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
`;

const SearchIcon = styled.img`
  width: 15px;
  height: 15px;
  /* position: ; */
`;

const LogIn = styled.button`
  position: relative;
  width: 50px;
`;

const SignUp = styled.button`
  position: relative;
  width: 50px;
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <img src={LogoImg} alt="logo" />
      <SearchBar>
        <SearchIcon
          alt="search-icon"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIxIDMgQyAxMS42MDE1NjMgMyA0IDEwLjYwMTU2MyA0IDIwIEMgNCAyOS4zOTg0MzggMTEuNjAxNTYzIDM3IDIxIDM3IEMgMjQuMzU1NDY5IDM3IDI3LjQ2MDkzOCAzNi4wMTU2MjUgMzAuMDkzNzUgMzQuMzQzNzUgTCA0Mi4zNzUgNDYuNjI1IEwgNDYuNjI1IDQyLjM3NSBMIDM0LjUgMzAuMjgxMjUgQyAzNi42Nzk2ODggMjcuNDIxODc1IDM4IDIzLjg3ODkwNiAzOCAyMCBDIDM4IDEwLjYwMTU2MyAzMC4zOTg0MzggMyAyMSAzIFogTSAyMSA3IEMgMjguMTk5MjE5IDcgMzQgMTIuODAwNzgxIDM0IDIwIEMgMzQgMjcuMTk5MjE5IDI4LjE5OTIxOSAzMyAyMSAzMyBDIDEzLjgwMDc4MSAzMyA4IDI3LjE5OTIxOSA4IDIwIEMgOCAxMi44MDA3ODEgMTMuODAwNzgxIDcgMjEgNyBaIj48L3BhdGg+PC9zdmc+"
        />
        <Input />
      </SearchBar>
      <LogIn></LogIn>
      <SignUp></SignUp>
    </TopBarWrapper>
  );
};

export default TopBar;
