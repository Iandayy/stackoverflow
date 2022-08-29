/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Footer from '../Common/Footer';
import SideBar from '../Common/SideBar';

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Body>
        <SideBar />
        {children}
      </Body>
      <Footer />
    </div>
  );
};

export default Layout;
