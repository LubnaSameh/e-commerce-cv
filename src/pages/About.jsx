import React from "react";
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
    <Navbar/>

    <div className="container my-5">
      {/* About Us Section */}
      <h1 className="text-center fw-bold mb-4">About Us</h1>
      <p className="text-center text-muted mx-auto" style={{ maxWidth: "800px" }}>
        Welcome to <strong>EasyMart</strong>, your ultimate destination for a seamless and enjoyable shopping experience. 
        At EasyMart, we believe in making your life easier by bringing together a wide range of high-quality products 
        at competitive prices, all in one convenient platform.
        <br /><br />
        Whether you're looking for the latest fashion trends, cutting-edge electronics, stunning jewelry, 
        or everyday essentials, EasyMart has got you covered. Our mission is to provide you with a shopping 
        experience that's fast, reliable, and, most importantly, stress-free.
        <br /><br />
        Thank you for choosing <strong>EasyMart</strong> as your trusted online shopping partner. 
        Let's make your shopping journey simple and enjoyable!
      </p>
      <hr className="my-4" />

      {/* Products Section */}
      <h2 className="text-center fw-bold mb-4">Our Products</h2>
      <div className="row">
  {/* Product Card 1 */}
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card shadow-sm">
      <img
        src="/images/shirts-591750.jpg"
        className="card-img-top"
        alt="Men's Clothing"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Men's Clothing</h5>
      </div>
    </div>
  </div>
  {/* Product Card 2 */}
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card shadow-sm">
      <img
        src="/images/pexels-borevina-1778412.jpg"
        className="card-img-top"
        alt="Women's Clothing"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Women's Clothing</h5>
      </div>
    </div>
  </div>
  {/* Product Card 3 */}
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card shadow-sm">
      <img
        src="/images/pexels-the-glorious-studio-3584518-6625939.jpg"
        className="card-img-top"
        alt="Jewelry"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Jewelry</h5>
      </div>
    </div>
  </div>
  {/* Product Card 4 */}
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card shadow-sm">
      <img
        src="/images/pexels-pixabay-356056.jpg"
        className="card-img-top"
        alt="Electronics"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Electronics</h5>
      </div>
    </div>
  </div>
</div>

      </div>

      <Footer/>
    </>
  );
};

export default AboutPage;
