import TopBar from '../Common/TopBar';
import SideBar from '../Common/SideBar';
import Footer from '../Common/Footer';

import styled from 'styled-components';

const Container = styled.div``;

const Layout = () => {
  return (
    <Container>
      <header>
        <TopBar />
      </header>
      <main>
        <SideBar />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default Layout;
