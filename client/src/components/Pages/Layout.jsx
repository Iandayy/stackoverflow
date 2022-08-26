/* eslint-disable react/prop-types */

import SideBar from '../Common/SideBar';

import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Container = styled.div``;

const Contents = styled.section`
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <Contents>{children}</Contents>
    </Container>
  );
};

// Layout.propTypes = {
//   children: PropTypes.element,
// };

export default Layout;
