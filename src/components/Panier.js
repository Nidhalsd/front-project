import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductPanier from './ProductPanier';
import { clearPanier } from '../redux/slices/panierSlice';
import { createOrder } from '../redux/slices/orderSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Panier = () => {
  const { products } = useSelector(state => state.panier);
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Panier</h2>
      {products.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          Your panier is empty!
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-8">
              {products.map((product) => (
                <div key={product.name} className="card mb-3 shadow-sm">
                  <ProductPanier product={product} />
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="card p-3 shadow-sm">
                <h4 className="text-center">Order Summary</h4>
                <ul className="list-group list-group-flush">
                  {products.map((product) => (
                    <li key={product.name} className="list-group-item d-flex justify-content-between align-items-center">
                      {product.name} x {product.quantity}
                      <span>{(product.price * product.quantity).toFixed(2)} TND</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <h5 className="text-center">Total Price: {totalPrice.toFixed(2)} <strong>TND</strong></h5>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    onClick={() => dispatch(createOrder({ ProductList: products }))}
                    className="btn btn-success btn-block"
                  >
                    Add All Order
                  </button>
                  <button
                    onClick={() => dispatch(clearPanier())}
                    className="btn btn-danger btn-block"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
