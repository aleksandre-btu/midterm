import './App.css';
import Users from './Users';
import { usersContext } from './contecxt/usersContext';
import { postsContext } from './contecxt/postsContext';
import Posts from './Posts';
import { useState } from 'react';
import { Redirect, Route } from 'react-router';

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/user" />
      </Route>
      <usersContext.Provider value={{ posts, setPosts }}>
        <Route path="/user" component={Users} />
      </usersContext.Provider>
      <postsContext.Provider value={{ posts }}>
        <Route path="/posts" component={Posts} />
      </postsContext.Provider>
    </div>
  );
}

export default App;
