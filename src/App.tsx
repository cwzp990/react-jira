import React from 'react';
import { ProjectList } from './screens/project-list';
import { Login } from './screens/login';
import { useAuth } from './context/auth-context';

import './App.css';

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {/* <ProjectList /> */}
      {user ? <ProjectList /> : <Login />}
    </div>
  );
}

export default App;
