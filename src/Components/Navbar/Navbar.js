import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='button' onClick={() => loginWithRedirect()}>Log In</button>;
};

const Navbar = () => {
    const [menu, setMenu]= useState("Home")
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<h/>:<></>}</li>
        </ul>
        <LoginButton />
      
    </div>
  )
}

export default Navbar