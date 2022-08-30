/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SideBar from '../Common/SideBar';

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Main = styled.main`
  padding: 24px 16px;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Body>
        <SideBar />
        <Main>{children}</Main>
      </Body>
    </div>
  );
};

export default Layout;
