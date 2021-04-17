import './App.css';
import Users from './Users';
import { context } from './contecxt/context';
import Posts from './Posts';
import { useState } from 'react';
import { Redirect, Route } from 'react-router';

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState(null);
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/user" />
      </Route>
      <context.Provider value={{ setCount, setPosts, posts, count, id, setId }}>
        <Route path="/user" component={Users} />

        <Route path="/posts" component={Posts} />
      </context.Provider>
    </div>
  );
}

export default App;
