import './App.css';
import { HashRouter, NavLink, Routes, Route, useParams, Outlet } from 'react-router-dom';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Todo from './pages/todo.jsx';

const Post = () => {
  return (
    <div>
      <h3>Post 頁面</h3>
      <Outlet />
    </div>
  );
}

const PostId = () => {
  let parameters = useParams();

  return (
    <p>Post: {parameters.postId}</p>
  );
}

function App () {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<h1>首頁</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
