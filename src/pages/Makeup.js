
import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../redux/slices/productSlice';

const Makeup = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsByCategory('Makeup'));
  }, [dispatch]);

  return (
    <div>
      <h1>Makeup</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products available for this category.</p>
      )}
    </div>
  );
};

export default Makeup;
