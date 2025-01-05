import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, loadCartFromLocalStorage } from '../redux/cartSlice';
import { Footer, Navbar } from '../components';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          {/* قائمة العناصر */}

<div className="col-lg-8">
  <h2 className="mb-4 ">Shopping Cart</h2>
  <div className="border rounded p-4 shadow-sm bg-light">
    {items.length === 0 && (
      <p className="text-muted">Your cart is empty. Start adding items!</p>
    )}
    {items.map((item) => (
      <div
        key={item.id}
        className="d-flex flex-column flex-md-row justify-content-between align-items-center border-bottom py-3"
      >
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <img
            src={item.image}
            alt={item.title}
            className="rounded"
            style={{
              width: '80px',
              marginRight: '15px',
              objectFit: 'cover',
            }}
          />
          <div>
            <h5 className="mb-1">{item.title}</h5>
            <p className="mb-0 text-muted">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary mx-2"
              onClick={() => dispatch(decrementQuantity(item.id))}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-outline-secondary mx-2"
              onClick={() => dispatch(incrementQuantity(item.id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



          {/* ملخص الطلب */}
          <div className="col-lg-4">
            <h2 className="mb-4 mt-5 mt-lg-0">Order Summary</h2>
            <div className="border rounded p-4 shadow-sm bg-light">
              <p className="d-flex justify-content-between">
                <span>Products ({totalQuantity})</span>
                <span>${totalAmount.toFixed(2)}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>$30.00</span>
              </p>
              <hr />
              <p className="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span>${(totalAmount + 30).toFixed(2)}</span>
              </p>
              <button className="btn btn-primary w-100 mt-3 shadow-sm"  
               onClick={() => navigate('/checkout')}>
            
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CartPage;
