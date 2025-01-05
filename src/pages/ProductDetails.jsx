import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Navbar } from "../components";
import Marquee from "react-fast-marquee";
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);

        // جلب بيانات المنتجات المرتبطة بنفس الفئة
        axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            const related = res.data.filter(
              (item) => item.category === fetchedProduct.category && item.id !== parseInt(id)
            );
            setRelatedProducts(related);
          })
          .catch((error) => {
            console.error("Error fetching related products:", error);
          });

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <h2 className="text-center mt-5">Product not found!</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addItem(product));
  
    toast.success(`${product.title} added to cart!`, {
      duration: 3000,
      style: {
        border: "1px solid #4caf50",
        padding: "16px",
        color: "#333",
        borderRadius: "8px",
        backgroundColor: "#d4edda",
      },
    });
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="text-center">
              <div className="ratio ratio-1x1 mb-5 mb-lg-0">
                <img src={product.image} alt={product.title} className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="text-uppercase text-muted fs-3">{product.category}</h4>
            <h2 className="fs-1 text-uppercase">{product.title}</h2>
            <div className="d-flex align-items-center mb-3 fs-5">
              <span className="me-4 fs-4">
                {product.rating.rate}
                <i className="bi bi-star-fill fs-5 ps-2"></i>
              </span>
              <small>({product.rating.count} reviews)</small>
            </div>
            <h4 className="text-muted fs-1 pb-2">${product.price}</h4>
            <p className="fs-5">{product.description}</p>
            
            <button
              className="btn btn-outline-primary me-3"
              onClick={handleAddToCart}
            >
              <i className="bi bi-cart-plus me-2"></i>Add to Cart
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleGoToCart}
            >
              Go To Cart
            </button>
          </div>
        </div>

        <div className="mt-5 pt-5">
          <h3 className="text-left mb-4 mt-3">You May Also Like</h3>
          <Marquee pauseOnHover gradient={false}>
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="card m-2"
                style={{ width: "290px" }}
              >
                <img
                  src={item.image}
                  className="card-img-top p-4"
                  alt={item.title}
                  style={{ height: "300px" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title text-truncate">{item.title}</h6>
                  <p className="text-muted">${item.price}</p>
                  <div className="d-flex justify-content-around">
                    <Link
                      to={`/products/${item.id}`}
                      className="btn btn-primary me-2"
                    >
                      <i className="bi bi-cart-plus me-2"></i>Buy Now
                    </Link>
                    <button
  className="btn btn-sm btn-outline-secondary"
  onClick={() => {
    dispatch(addItem(item)); // ده شغال
    toast.success(`${item.title || 'Item'} added to cart!`, {
      duration: 3000,
      style: {
        border: "1px solid #4caf50",
        padding: "16px",
        color: "#333",
        borderRadius: "8px",
        backgroundColor: "#d4edda",
      },
    });
  }}
>
  Add to Cart
</button>

                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
