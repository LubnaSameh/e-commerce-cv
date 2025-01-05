import React from "react";

const Main = () => {
  return (
    <div
      className="position-relative bg-dark text-white text-center d-flex align-items-center justify-content-start"
      style={{
        backgroundImage: "url('/images/215311.jpg')", // مسار الصورة
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "86vh",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.09)",
          zIndex: 1, // يجعل التراكب تحت النص
        }}
      ></div>

      {/* النص */}
      <div className="px-5 mx-5 text-start position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold">Welcome to our store</h1>
        <p className="lead mt-3 fw-bold ">
          Welcome to our store! Discover an extensive collection of premium
          products, unbeatable prices, exclusive discounts, fast delivery, and
          seamless shopping tailored to meet your every need.
        </p>
      </div>
    </div>
  );
};

export default Main;
