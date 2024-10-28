
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={3} className="mb-4"> 
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
