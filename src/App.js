import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-2qksybid6u0gy6vg.us.auth0.com"
        clientId="GnyjMW0GgzaM8akwiBtjHqYRp97n9MHa"
        redirectUri={window.location.origin}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Auth0Provider>
    </div>
  );
}

root.render(<App />);

export default App;
