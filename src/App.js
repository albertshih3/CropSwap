// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrouserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrouserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
      </Routes>
      </BrouserRouter>


    </div>
  );
}

export default App;
