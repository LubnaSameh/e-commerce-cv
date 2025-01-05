import React from 'react';
import { Footer, Navbar } from '../components';

const CheckoutPage = () => {
  return (
    <>
  <Navbar/>
    <div className="container my-5">
      <div className="row">
        {/* نموذج العنوان والفواتير */}
        <div className="col-lg-8">
          <h2 className="mb-4">Billing address</h2>
          <form className='border p-3 rounded'>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName ">First name</label>
                <input type="text" className="form-control" id="firstName" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 (Optional)</label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" required />
              </div>
            </div>

            <hr className="mb-4" />

            <h4 className="mb-4">Payment</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" required />
                <small className="text-muted">Full name as displayed on card</small>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" required />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" required />
              </div>
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>

        {/* ملخص الطلب */}
        <div className="col-lg-4">
          <h2 className="mb-4 pt-5 pt-lg-0">Order Summary</h2>
          <div className="border rounded p-4 shadow-sm bg-light">
            <p className="d-flex justify-content-between">
              <span>Products (10)</span>
              <span>$223</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>$30.00</span>
            </p>
            <hr />
            <p className="d-flex justify-content-between fw-bold">
              <span>Total Amount</span>
              <span>$253</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
