import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow sticky-top">
    <div className="container">
  
      <NavLink
        className="navbar-brand fw-bold text-uppercase text-light"
        to="/"
      >
        E-commerce
      </NavLink>
    
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link text-light ${isActive ? 'fw-bold' : ''}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link text-light ${isActive ? 'fw-bold' : ''}`
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link text-light ${isActive ? 'fw-bold' : ''}`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link text-light ${isActive ? 'fw-bold' : ''}`
              }
              to="/contact"
            >
              Contact
            </NavLink>
            </li>
          </ul>
       
          <div className="d-flex gap-2">
            <NavLink
              to="/login"
              className="btn btn-outline-light"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-light"
            >
              Register
            </NavLink>
            <button className="btn btn-primary">
              Cart (0)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
