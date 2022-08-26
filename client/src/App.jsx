// 홈 (/)
// 로그인 (/login)
// 회원가입 (/signup)

// 질문 페이지 (/questions)
// 질문 작성 페이지 (/questions/ask)

// tag 페이지 (/tags)
// users 목록 페이지 (/users)

import { RecoilRoot } from 'recoil';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import Questions from './components/Pages/Questions';
import Tags from './components/Pages/Tags';
import Users from './components/Pages/Users';
import Layout from './components/Pages/Layout';

function App() {
  return (
    <RecoilRoot className="App">
      <header>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/questions">질문 페이지</Link>
        <Link to="/questions/ask">질문 작성 페이지</Link>
        <Link to="/tags">tags 페이지</Link>
        <Link to="/users">users 페이지</Link>
      </header>
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
        <Layout />
      </main>
    </RecoilRoot>
  );
}

export default App;
