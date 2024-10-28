import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Card } from 'react-bootstrap'; 

const ProductAdded = ({ product, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Product Added to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={product.poster}
            alt="Product image not found"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
              <strong>Price: </strong>{product.price}<strong> TND</strong>
            </Card.Text>
            <div className="product-added-buttons">
              <Button variant="secondary" onClick={onHide}>
                Add More
              </Button>
              <Link to="/panier">
                <Button variant="btn btn-outline-success" style={{ marginLeft: '10px' }}>
                  Go to Panier
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default ProductAdded;
