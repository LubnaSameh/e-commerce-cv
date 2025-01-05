import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow sticky-top py-4">
    <div className="container">
  
      <NavLink
        className="navbar-brand fw-bold text-uppercase text-light"
        to="/"
      >
       EasyMart
      </NavLink>
    
      <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{ borderColor: "white" }} // تغيير لون الحدود إلى الأبيض
>
  <span
    className="navbar-toggler-icon"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
    }}
  ></span>
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
              to="/ContactUs"
            >
              Contact
            </NavLink>
            </li>
          </ul>
       
          <div className="d-flex gap-3">
            <NavLink to="/login" className="btn btn-outline-light">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-light">
              <i className="bi bi-person-plus"></i> Register
            </NavLink>

            {/* رابط Cart */}
            <NavLink to="/cart" className="btn btn-outline-light d-flex align-items-center gap-1">
              <i className="bi bi-cart"></i> Cart ({totalQuantity})
            </NavLink>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
