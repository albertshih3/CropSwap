// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Update Switch to Routes
import Navbar from './Components/Navbar/Navbar';
import CropRotation from './Pages/CropRotation';
import Home from './Pages/Home';
import SeedSwap from './Pages/SeedSwap';
import Network from './Pages/Network';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes> {}
        <Route path="/" element={<Home />} />
        <Route path="/crop-rotation" element={<CropRotation />} />
        <Route path="/SeedSwap" element={<SeedSwap />} />
        <Route path="/Network" element={<Network />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
