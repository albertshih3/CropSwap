// SeedSwap.js
import React from 'react';
import './Styles/SeedSwap.css';

// Import your images (replace these with your actual image paths)
import tomato from './Images/tomato.jpeg';
import carrot from './Images/carrot.jpeg';
import lettuce from './Images/lettuce.jpeg';
import broccoli from './Images/brocoli.jpeg';
import cucumber from './Images/cucumber.jpeg';
import spinach from './Images/spinach.jpeg';


const SeedList = () => {
  const seeds = [
    { name: "Tomato", image: tomato },
    { name: "Carrot", image: carrot },
    { name: "Lettuce", image: lettuce },
    { name: "Broccoli", image: broccoli },
    { name: "Cucumber", image: cucumber },
    { name: "Spinach", image: spinach }
  ];

  return (
    <div>
      {seeds.map(seed => (
        <div key={seed.name} className="seed">
          <img src={seed.image} alt={seed.name} className="seed-image" />
          <div className="seed-details">
            <h3>{seed.name}</h3>
            <button className="swap-button">Interested in Swapping</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const SeedSwap = () => {
  return (
    <div className="seed-swap-container">
      <h1>Seed Swap</h1>
      <SeedList />
    </div>
  );
};

export default SeedSwap;
