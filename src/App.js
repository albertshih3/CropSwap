import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CropRotation from './Pages/CropRotation';

const App = () => {
  return (
    <main className='column'>
      <h1>Auth0 Login</h1>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CropRotation" element={<CropRotation />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App