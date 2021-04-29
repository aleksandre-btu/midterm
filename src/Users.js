import React, { useContext, useEffect } from 'react';
import { context } from './context/context';
import classes from './App.module.css';

const Users = () => {
  const { users } = useContext(context);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className={classes.data}>
      {users && users.data.length > 0 ? (
        users.data.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              {/* <p>{e.body}</p> */}
            </div>
          );
        })
      ) : (
        <div>Wait a little</div>
      )}
    </div>
  );
};

export default Users;
