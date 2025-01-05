//npm install bootstrap
// npm install react-router-dom
// npm install axios
//npm install react-fast-marquee
//npm install react-redux @reduxjs/toolkit
//npm install react-hot-toast

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CollectComponents,
  Login,
  Register,
  ProductDetails,
  ProductsPage,
  CartPage,
  CheckoutPage,
} from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CollectComponents />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
