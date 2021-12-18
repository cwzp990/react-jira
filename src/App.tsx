import { ProjectList } from './screens/project-list';
import { Login } from './screens/login';
import { useAuth } from './context/auth-context';
import { Button } from 'antd';

import './App.css';
import { useDocumentTitle } from './utils/hooks';

function App() {
  const { user, logout } = useAuth()
  useDocumentTitle('我是首页', false)
  return (
    <div className="App">
      {/* <ProjectList /> */}
      {user ? <ProjectList /> : <Login />}
      <Button onClick={logout}>登出</Button>
    </div>
  );
}

export default App;
