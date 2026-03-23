import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="mb-4">
            <h5>MyStore</h5>
            <p>
              Your one-stop shop for the latest electronics, fashion, sports gear, and home decor.
              Quality products at unbeatable prices.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/wishlist" className="text-light text-decoration-none">Wishlist</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
            </ul>
          </Col>

          {/* Customer Service */}
          <Col md={3} className="mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
              <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
            </ul>
          </Col>

          {/* Social Media & Contact */}
          <Col md={3} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaYoutube size={24} />
              </a>
            </div>
            <p>
              <strong>Email:</strong> support@mystore.com<br />
              <strong>Phone:</strong> +1 234 567 890
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <hr className="bg-light" />
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MyStore. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;