import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => { navigate('/login') }}>登出</button>
  );
}

export default function Todo () {
  return (
    <>
      <h2>待辦事項</h2>
      <LogOut />
    </>
  );
}