import React from 'react';
import {Link} from 'react-router-dom';

const sessionLinks = () => {
  return(
    <nav>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </nav>
  );
};

const welcome = (currentUser, logout) => {
  return(
    <nav>
      <h1>Welcome, {`${currentUser.username}`}</h1>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return(welcome(currentUser, logout));
  } else {
    return(sessionLinks);
  }
};

export default Greeting;
