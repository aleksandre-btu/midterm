import React, { useContext, useEffect, useState } from 'react';
import { context } from './context/context';

const Posts = () => {
  const { posts, setPosts, count, setCount, id } = useContext(context);
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onClickHandler = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        userId: id,
        title: title,
        body: body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setPosts(posts.concat(json));
        console.log(json);
      });
  };

  const confirmAmountHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="posts">
      this is a POSTS component
      <button onClick={() => setShow(!show)}>Hide Posts</button>
      <form>
        <label htmlFor="postAmount"> hom many posts you want to see </label>
        <input id="postAmount" onChange={(e) => setCount(e.target.value)} />
        <button type="submit" onClick={(e) => confirmAmountHandler(e)}>
          Confirm
        </button>
      </form>
      {posts && posts.length > 0 && show === true
        ? posts.map((e, index) => {
            return (
              <div key={index}>
                <h1>{e.title}</h1>
                <p>{e.body}</p>
              </div>
            );
          })
        : null}
      <form>
        <label htmlFor="userID"> Post Title </label>
        <input id="userId" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="postsCount">Post</label>
        <input id="postsCount" onChange={(e) => setBody(e.target.value)} />

        <button type="submit" onClick={(e) => onClickHandler(e)}>
          Publish
        </button>
      </form>
    </div>
  );
};
export default Posts;
