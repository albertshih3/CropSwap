// Home.js
import React from 'react';
import "./Styles/Home.css";
import cr from "./Images/cr.jpeg";
import farm from "./Images/farm.png";

const Home = () => {
  return (
    <div className='home'>
      <header className='page-header'>
        <div className='header-overlay'>
          <img src={farm} alt="Farm Image" className='farm-image' />
          <div className='overlay-text-container'>
            <div className='overlay-text'>Crop Rotation</div>
          </div>
        </div>
      </header>

      <div className='content-container'>
        <div className='crop-image-container'>
          <img src={cr} alt="Crop Rotation Image" className='crop-image' />
          {/* <div className='white-box'></div> */}
        </div>
        <div className='content-text'>
          <h1>What is Crop Rotation?</h1>
          <p>
            Crop rotation is the practice of planting different crops sequentially on the same plot of land to improve soil health, optimize nutrients in the soil, and combat pest and weed pressure. For example, say a farmer has planted a field of corn. When the corn harvest is finished, he might plant beans, since corn consumes a lot of nitrogen and beans return nitrogen to the soil. A simple rotation might involve two or three crops, and complex rotations might incorporate a dozen or more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
