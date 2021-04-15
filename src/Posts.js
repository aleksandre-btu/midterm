import React, { useContext } from 'react';
import { usersContext } from './contecxt/usersContext';

const Posts = () => {
  const { posts } = useContext(usersContext);

  const onClickHandler = () => {
    console.log(posts);
  };

  return (
    <div>
      this is a POSTS component
      {/* <h1>{posts}</h1> */}
      <button onClick={onClickHandler}>Change value</button>
    </div>
  );
};
export default Posts;
