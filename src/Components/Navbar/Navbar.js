// Navbar.js

import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button className='button' onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
};

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button
        className='button'
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    )
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li onClick={() => setMenu('Home')}>
          <Link to="/">Home</Link>
          {menu === 'Home' ? <h /> : <></>}
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/crop-rotation">Crop Rotation</Link>
          </li>
        )}
      </ul>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default Navbar;