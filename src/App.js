import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Brands from './pages/Brands';
import Skincare from './pages/Skincare';
import Fragrance from './pages/Fragrance';
import Makeup from './pages/Makeup';
import NavBar from './components/NavBar';
import Panier from './components/Panier'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/fragrance" element={<Fragrance />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/panier" element={<Panier />} /> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
