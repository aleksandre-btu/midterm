import React, { useContext, useState } from 'react';
import './users.css';
import classes from './App.module.css';
import classnames from 'classnames';
import { context } from './context/context';
import Users from './Users';

const YourPage = () => {
  const { setUsers, setShow, show, users } = useContext(context);
  const [canSee, setCanSee] = useState(false);
  const formClass = classnames('users', {
    'canSee': canSee,
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=${event.target[1].value}&_gender=${event.target[0].value}&`,
    )
      .then((response) => response.json())
      .then((data) => setUsers(data), setShow(true), console.log(users));
  };

  return (
    <div className={classes.yourPage}>
      <ul classNames={classes.yourPage__ul}>
        <li>Home</li>
        <li>Dashboard</li>
        <li>orders</li>
        <li>Products</li>
        <li
          onClick={() => {
            setCanSee(!canSee);
            console.log(canSee);
          }}>
          Costumers
        </li>
      </ul>
      <div className={formClass}>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <h3>select gender</h3>
          <select>
            <option value="">Any</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <h3>select amount</h3>
          <input type="number" min="1" step="1" />
          <button type="submit">Submit</button>
        </form>
        <div className={classes.data}></div>
      </div>
      {show ? <Users /> : null}
    </div>
  );
};

export default YourPage;
