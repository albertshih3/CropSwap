// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Update Switch to Routes
import Navbar from './Components/Navbar/Navbar';
import CropRotation from './Pages/CropRotation';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes> {/* Change Switch to Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/crop-rotation" element={<CropRotation />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;