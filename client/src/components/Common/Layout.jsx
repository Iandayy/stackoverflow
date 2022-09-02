/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SideBar from '../Common/SideBar';

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 47px;
`;

const BlankBox = styled.div`
  width: 100%;
  flex: 1;
  @media (max-width: 1264px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 1264px;
  @media (max-width: 1264px) {
    width: 100%;
  }
`;

const Main = styled.main`
  width: 100%;
  margin-bottom: 24px;z
`;

const Layout = ({ children }) => {
  return (
    <Body>
      <BlankBox />
      <ContentWrapper>
        <SideBar />
        <Main>{children}</Main>
      </ContentWrapper>
      <BlankBox />
    </Body>
  );
};

export default Layout;
