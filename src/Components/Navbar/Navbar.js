import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css"

const LoginButton = () => {
  const{loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (
        <button class='button' onClick={() => loginWithRedirect()}>Log In</button>
    )
  )
}

const LogoutButton = () => {
  const{logout, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
        <button class = 'button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    )
  )
}

const Navbar = () => {
  const [menu, setMenu]= useState("Home")
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log("User: " + user + ", isAuthenticated: " + isAuthenticated + ", isLoading: " + isLoading)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<h/>:<></>}</li>
      </ul>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}


export default Navbar
