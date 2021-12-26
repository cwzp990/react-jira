import { ProjectList } from './screens/project-list';
import { Login } from './screens/login';
import { useAuth } from './context/auth-context';
import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDocumentTitle } from './utils/hooks';

import './App.css';

function App() {
  const { logout } = useAuth()
  useDocumentTitle('我是首页', false)
  return (     
    <div className="App">
      {/* <ProjectList /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/list' element={<ProjectList />}></Route>
        </Routes>
      </Router>
      <Button onClick={logout}>登出</Button>
    </div>
  );
}

export default App;
