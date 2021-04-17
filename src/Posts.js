import React, { useContext, useState } from 'react';
import { context } from './contecxt/context';
const Posts = () => {
  const { posts, setPosts, count, id } = useContext(context);
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onClickHandler = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setPosts(posts.concat(json)), console.log(posts));
  };

  return (
    <div>
      this is a POSTS component
      <button onClick={() => setShow(!show)}>Hide Posts</button>
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
