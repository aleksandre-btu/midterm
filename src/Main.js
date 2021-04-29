import React, { useContext } from 'react';
import Login from './Login';
import { context } from './context/context';
import YourPage from './YourPage';

const Main = () => {
  const { token } = useContext(context);
  let page = <Login />;
  if (token) {
    page = <YourPage />;
  }
  return <div>{page}</div>;
};

export default Main;
