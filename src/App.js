import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
      domain="dev-2qksybid6u0gy6vg.us.auth0.com"
      clientId="GnyjMW0GgzaM8akwiBtjHqYRp97n9MHa"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
