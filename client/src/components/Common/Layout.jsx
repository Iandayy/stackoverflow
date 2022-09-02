/* eslint-disable react/prop-types */
import { useRecoilValue } from 'recoil';
import isModalState from '../../state/isModalState';

import SideBar from '../Common/SideBar';
import styled from 'styled-components';

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
  padding: 24px 16px;
  width: 100%;
`;

const Layout = ({ children }) => {
  const isModal = useRecoilValue(isModalState);
  return (
    <Body>
      <BlankBox />
      <ContentWrapper>
        {!isModal && <SideBar />}
        <Main>{children}</Main>
      </ContentWrapper>
      <BlankBox />
    </Body>
  );
};

export default Layout;
