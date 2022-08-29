// 홈 (/)
// 로그인 (/login)
// 회원가입 (/signup)

// 질문 페이지 (/questions)
// 질문 작성 페이지 (/questions/ask)

// tag 페이지 (/tags)
// users 목록 페이지 (/users)

import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './components/Common/GlobalStyle';
import Home from './components/Pages/Home';
import Layout from './components/Pages/Layout';
import Questions from './components/Pages/Questions';
import Tags from './components/Pages/Tags';
import Users from './components/Pages/Users';

function App() {
  return (
    <RecoilRoot className="App">
      <GlobalStyle />
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Home />}>
              home
            </Route>
            <Route path="/login">login</Route>
            <Route path="/signup">signup</Route>

            <Route path="/questions" element={<Questions />}>
              Questions
            </Route>
            <Route path="/questions/ask">질문 작성 페이지</Route>

            <Route path="/tags" element={<Tags />}>
              Tags
            </Route>
            <Route path="/users" element={<Users />}>
              Users
            </Route>
          </Routes>
        </main>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
