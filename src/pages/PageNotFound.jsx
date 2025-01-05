import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
    
      <div className="container-fluid d-flex pt-5 justify-content-center align-items-center ">
        <div className="text-center">
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-2"></i> Go Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
