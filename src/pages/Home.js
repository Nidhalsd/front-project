
import React from 'react';
import { Carousel, Card, Row, Col, Container, Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <Container fluid className="hero-section">
        <h1>Welcome to AROME Store</h1>
        <p>Discover the best in skincare, makeup, and fragrance.</p>
      </Container>

      <Container fluid className="carousel-wrapper">
        <Carousel className="custom-carousel">
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fr.svr.com/cdn/shop/files/ABC2.png?crop=center&height=713&v=1727875148&width=1920"
              alt="Promo 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://fr.svr.com/cdn/shop/files/ABC2.png?crop=center&height=713&v=1727875148&width=1920"
              alt="Promo 2"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="category-section">
        <h2>Shop by Category</h2>
        <Row className="category-row">
           
        <Col md={3} className="category-item">
            <Card onClick={() => handleNavigate('/brands')} className="category-card">
              <Card.Img variant="top" src="https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dwcc042d09/pd_homepages/24_WK30/oskia-elixir.jpg" alt="Skincare" />
              <Card.Body>
                <Card.Title>Our Brand</Card.Title>
                <Button
                 style={{ backgroundColor: '#d9534f', borderColor: '#d9534f' }}
                 onClick={() => handleNavigate('/brands')}
                > Shop Brands </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="category-item">
            <Card onClick={() => handleNavigate('/skincare')} className="category-card">
              <Card.Img variant="top" src="https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dwde0f39ae/pd_homepages/24_WK30/malin-goetz-hands.jpg" alt="Skincare" />
              <Card.Body>
                <Card.Title>Skincare</Card.Title>
                <Button
                 style={{ backgroundColor: '#d9534f', borderColor: '#d9534f' }}
                 onClick={() => handleNavigate('/skincare')}
                > Shop Skincare </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="category-item">
            <Card onClick={() => handleNavigate('/makeup')} className="category-card">
              <Card.Img variant="top" src="https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dw2bc10633/pd_homepages/24_WK30/vieve.jpg" alt="Makeup" />
              <Card.Body>
                <Card.Title>Makeup</Card.Title>
                <Button
                 style={{ backgroundColor: '#d9534f', borderColor: '#d9534f' }}
                 onClick={() => handleNavigate('/makeup')}
                >Shop Makeup</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="category-item">
            <Card onClick={() => handleNavigate('/fragrance')} className="category-card">
              <Card.Img variant="top" src="https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dwbde05347/pd_homepages/24_WK30/byredo-ghost.jpg" alt="Fragrance" />
              <Card.Body>
                <Card.Title>Fragrance</Card.Title>
                <Button
                 style={{ backgroundColor: '#d9534f', borderColor: '#d9534f' }}
                 onClick={() => handleNavigate('/fragrance')}> Shop Fragrance </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="featured-products">
      <h2>Featured Products</h2>
      <Row>
       
        <Col md={4}>
          <video
            className="card-video"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
          >
            <source
              src="//fr.svr.com/cdn/shop/videos/c/vp/38d8c042cc84488a8f41db95f9df3e05/38d8c042cc84488a8f41db95f9df3e05.HD-1080p-7.2Mbps-27195502.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h5>SEBIACLEAR</h5>
          <p>Acne-prone skin</p>
        </Col>

        <Col md={4}>
          <video
            className="card-video"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
          >
            <source
              src="//fr.svr.com/cdn/shop/videos/c/vp/df265ad230184e72af02dfd37770e28c/df265ad230184e72af02dfd37770e28c.HD-1080p-7.2Mbps-27195413.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h5>HYDRALIANE</h5>
          <p>Dehydrated skin</p>
        </Col>

        <Col md={4}>
          <video
            className="card-video"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
          >
            <source
              src="//fr.svr.com/cdn/shop/videos/c/vp/4993965deadf4dc0bd9b501df650693a/4993965deadf4dc0bd9b501df650693a.HD-1080p-7.2Mbps-27195347.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h5>TOPIALYSE</h5>
          <p>Dry to atopic skin
          </p>

        </Col>


      </Row>
    </Container>

    <footer className="footer-container">
      <Container fluid className="footer-top">
        <Row className="footer-row">
          {/* Customer Service Section */}
          <Col md={3} sm={6} className="footer-col">
            <h5>Customer Service</h5>
            <ul className="footer-list">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/shipping">Shipping Information</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="footer-col">
            <h5>My Account</h5>
            <ul className="footer-list">
              <li><a href="/login">Sign In</a></li>
              <li><a href="/register">Create Account</a></li>
              <li><a href="/orders">Order History</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="footer-col">
            <h5>About Us</h5>
            <ul className="footer-list">
              <li><a href="/about">Our Story</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="footer-col">
            <h5>Stay Connected</h5>
            <Form className="newsletter-form">
              <Form.Group controlId="formNewsletter">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="dark" type="submit">Subscribe</Button>
            </Form>
            <div className="social-media-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      
      
      <Container fluid className="footer-bottom text-center">
        <Row>
          <Col>
            <p>&copy; 2024 AROME Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Home;
