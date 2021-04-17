import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from './contecxt/context';

const Users = () => {
  const { setPosts, id, setId, setCount } = useContext(context);

  const onClickHandler = (event) => {
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  return (
    <div>
      <form>
        <label htmlFor="userID"> Please Enter Your User ID </label>
        <input
          onChange={(e) => setId(e.target.value)}
          id="userId"
          placeholder="your ID"
        />
        <label htmlFor="postsCount">
          Please Enter How Many Posts You Want To See
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
