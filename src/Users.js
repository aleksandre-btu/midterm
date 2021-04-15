import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { usersContext } from './contecxt/usersContext';

const Users = () => {
  const { posts, setPosts } = useContext(usersContext);
  const [id, setId] = useState(null);
  const [count, setCount] = useState(null);

  const onClickHandler = (event) => {
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  return (
    <div>
      <form>
        <label htmlFor="userID"> Please Ender Your User ID </label>
        <input
          onChange={(e) => setId(e.target.value)}
          id="userId"
          placeholder="your ID"
        />
        <label htmlFor="postsCount">
          Please Ender How Much Posts You Want To See
        </label>
        <input
          onChange={(e) => setCount(e.target.value)}
          id="postsCount"
          placeholder="Posts Count"
        />

        <button type="submit" onClick={onClickHandler}>
          <Link to="/posts">Continue</Link>
        </button>
      </form>
    </div>
  );
};

export default Users;
