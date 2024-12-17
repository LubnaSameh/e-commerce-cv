import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4">
      <div className="container">
        <div className="row">
        
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="small">
              We are dedicated to providing the best e-commerce experience with quality products and excellent service.
            </p>
          </div>
       
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none small">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-light text-decoration-none small">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none small">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none small">
                  Contact
                </a>
              </li>
            </ul>
          </div>
       
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p className="small">
              <i className="bi bi-telephone-fill me-2"></i>+123 456 7890
            </p>
            <p className="small">
              <i className="bi bi-envelope-fill me-2"></i>Lubna@gmail.com
            </p>
            <p className="small">
              <i className="bi bi-geo-alt-fill me-2"></i>123 E-commerce St, NY
            </p>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
