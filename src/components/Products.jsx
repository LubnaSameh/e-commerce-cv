import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Products = ({ onSetProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ id: product.id, title: product.title, price: product.price, image: product.image }));
    
    // عرض إشعار "Added to Cart"
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

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);

        // تمرير البيانات إلى App.js
        if (onSetProducts) {
          onSetProducts(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.category.toLowerCase().trim() === category.toLowerCase().trim())
      );
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Products</h2>

      {/* Buttons for Filtering */}
      <div className="d-flex justify-content-center mb-4 flex-wrap">
        {['All', 'men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'].map(category => (
          <button
            key={category}
            className={`btn btn-outline-secondary mx-2 my-1 ${activeCategory.toLowerCase() === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => filterByCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border ">
              <div className="overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={product.image}
                  className="card-img-top img-fluid p-2"
                  alt={product.title}
                  style={{ objectFit: 'contain', height: '100%' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate text-center">
                  {product.title}
                </h5>
                <p className="card-text text-muted  text-center">
                  {product.description.substring(0, 50)}...
                </p>
                <div className="mt-auto text-center">
                  <p className="card-text fw-bold fs-5">${product.price}</p>
                  <div className="d-flex justify-content-around">
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>                
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
