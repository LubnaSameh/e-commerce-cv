import React from 'react';

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center  bg-light">
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="card-body">
                <h3 className="text-center mb-4">Login</h3>
                <form>
                
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
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
                      placeholder="Password"
                    />
                  </div>
                
                  <div className="mb-3 text-center">
                    <span>
                      New Here?{' '}
                      <a href="/register" className="text-primary">
                        Register
                      </a>
                    </span>
                  </div>
                 
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </div>
                </form>
              </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
