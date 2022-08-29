// 홈 (/)
// 로그인 (/login)
// 회원가입 (/signup)

// 질문 페이지 (/questions)
// 질문 작성 페이지 (/questions/ask)

// tag 페이지 (/tags)
// users 목록 페이지 (/users)

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './components/Common/GlobalStyle';
import Home from './components/Pages/Home';
import Layout from './components/Pages/Layout';
import Questions from './components/Pages/Questions';
import Tags from './components/Pages/Tags';
import Users from './components/Pages/Users';
import TopBar from './components/Common/TopBar';
import Footer from './components/Common/Footer';

function App() {
  return (
    <RecoilRoot className="App">
      <Suspense fallback={<p>Loading..</p>}>
        <GlobalStyle />
        <TopBar />
        <Layout>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" />
              <Route path="/signup" />

              <Route path="/questions" element={<Questions />} />
              <Route path="/questions/ask" />

              <Route path="/tags" element={<Tags />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </main>
        </Layout>
        <Footer />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
