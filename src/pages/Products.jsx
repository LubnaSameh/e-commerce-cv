import React from "react";
import Products from "../components/Products";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <div>
      <Navbar/>
      <Products /> {/* إعادة استخدام المكون */}
      <Footer/>
    </div>
  );
};

export default ProductsPage;
