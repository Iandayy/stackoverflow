import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import Footer from './components/Common/Footer';
import GlobalStyle from './components/Common/GlobalStyle';
import Layout from './components/Common/Layout';
import TopBar from './components/Common/TopBar';
import Home from './components/Pages/Home';
import Questions from './components/Pages/Questions';
import Tags from './components/Pages/Tags';
import Users from './components/Pages/Users';
import LogIn from './components/User/LogIn';
import SignUp from './components/User/SignUp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <RecoilRoot className="App">
      <Suspense fallback={<p>Loading..</p>}>
        <GlobalStyle />
        <Container>
          <TopBar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/questions/ask" />
              <Route path="/tags" element={<Tags />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Layout>
          <Footer />
        </Container>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
