import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';
import '../NavBar.css'; 

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.panier);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div className="logo">
        
          <h6>AROME </h6>
       
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/skincare">Skincare</Link>
        <Link to="/fragrance">Fragrance</Link>
        <Link to="/makeup">Makeup</Link>
      </div>
      <div className="auth-links">
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <Link to="/panier" className="panier-link">
          Panier ({products.reduce((total, product) => total + product.quantity, 0)})
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
