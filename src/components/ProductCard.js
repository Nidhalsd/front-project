import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductPanier } from '../redux/slices/panierSlice';
import { Card, Button } from 'react-bootstrap';
import ProductAdded from './ProductAdded';
import '../ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showAddedModal, setShowAddedModal] = useState(false);

  const handleAddToCart = () => {
    dispatch(addProductPanier(product));
    setShowAddedModal(true);
  };

  return (
    <>
      <Card className="custom-card text-center">
        <Card.Img
          variant="top"
          src={product.poster}
          alt="Product image not found"
          className="custom-card-img"
        />
        <Card.Body className="custom-card-body">
          <Card.Title className="custom-card-title">{product.name}</Card.Title>
          <Card.Text className="custom-card-description">
            {product.description}
          </Card.Text>
          <Card.Text className="custom-card-price">
            <strong>Price: </strong>{product.price}<strong> TND</strong>
          </Card.Text>
          <Button           style={{ backgroundColor: '#d9534f', borderColor: '#d9534f' }}
 onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      <ProductAdded
        product={product}
        show={showAddedModal}
        onHide={() => setShowAddedModal(false)}
      />
    </>
  );
};

export default ProductCard;
