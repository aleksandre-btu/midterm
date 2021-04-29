// import './App.css';
import { context } from './context/context';
import Users from './Users';
import { useState } from 'react';
import { Route } from 'react-router';
import Main from './Main';

function App() {
  const [token, setToken] = useState('');
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <div>
      <context.Provider
        value={{ token, setToken, users, setUsers, show, setShow }}>
        <Route path="/" exact component={Main} />
      </context.Provider>
    </div>
  );
}

export default App;
