import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [menu, setMenu]= useState("Home")
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<h/>:<></>}</li>
            <button>Login</button>
        </ul>
      
    </div>
  )
}

export default Navbar
