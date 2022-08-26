// 홈 (/)
// 로그인 (/login)
// 회원가입 (/signup)

// 질문 페이지 (/questions)
// 질문 작성 페이지 (/questions/ask)

// tag 페이지 (/tags)
// users 목록 페이지 (/users)
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import TopBar from './components/Common/TopBar';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
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

          <Route path="/questions">질문 페이지</Route>
          <Route path="/questions/ask">질문 작성 페이지</Route>

          <Route path="/tags">tags 페이지</Route>
          <Route path="/users">users 페이지</Route>
        </Routes>
        <TopBar />
      </main>
    </div>
  );
}

export default App;
