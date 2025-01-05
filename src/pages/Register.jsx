import React from 'react';
import { Footer, Navbar } from '../components';

const Register = () => {
  return (
    <>
   <Navbar/>
    <div className="d-flex align-items-center justify-content-center ">
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">         
              <div className="card-body">
                <h2 className="text-center mb-4">Create Account</h2>
                <form>                
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>              
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Create a password"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </div>
                 
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      Register
                    </button>
                  </div>
                 
                  <div className="mt-4 text-center">
                    <span>
                      Already have an account?{' '}
                      <a href="/login" className="text-primary fw-bold text-decoration-none">
                        Login
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
