import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductPanier, incrementQuantity, decrementQuantity } from '../redux/slices/panierSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPanier = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={product.poster}
            alt={product.name}
            className="img-fluid"
            style={{ maxWidth: '120px' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: {product.price} <strong>TND</strong></p>
            <p className="card-text">Quantity: {product.quantity}</p>
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div>
                <button
                  onClick={() => dispatch(incrementQuantity({ name: product.name }))}
                  className="btn btn-outline-primary btn-sm me-1"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decrementQuantity({ name: product.name }))}
                  className="btn btn-outline-primary btn-sm"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => dispatch(removeProductPanier({ name: product.name }))}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPanier;
