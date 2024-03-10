import React from 'react';
import "./Styles/Home.css";
import cr from "./Images/cr.jpeg";

const Home = () => {
  return (
    <div className='home'> 
        <h1>Crop Rotation</h1>
        <img src={cr} alt="Crop Rotation Image" />
    </div>
  );
}

export default Home;
