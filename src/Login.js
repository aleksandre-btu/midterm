import React, { useContext } from 'react';
import { context } from './context/context';
import classnames from 'classnames';
import classes from './App.module.css';

const Login = () => {
  const { setToken } = useContext(context);
  let something = false;
  const mainClass = classnames(classes.login__form, classes.notGood, {
    'classes.notGood': something,
  });
  const onClickHandler = (event) => {
    event.preventDefault();
    const data = {
      'email': event.target[0].value,
      'password': event.target[1].value,
    };
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.token));
  };

  return (
    <div className={classes.login}>
      <form className={mainClass} onSubmit={(e) => onClickHandler(e)}>
        <h1>Please log in</h1>
        <div>
          <h3>Your email</h3>
          <input id="email" type="email" />
        </div>
        <div>
          <h3>Your password</h3>
          <input
            id="password"
            type="text"
            onChange={(e) => {
              if (e.target.value.length > 3) {
                something = true;
              } else {
                something = false;
              }
            }}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
