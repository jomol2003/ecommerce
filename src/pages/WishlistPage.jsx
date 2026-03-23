import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const WishlistPage = () => {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <Container className="text-center mt-5">
        <h2>Your wishlist is empty</h2>
        <Button as={Link} to="/products" variant="primary">
          Browse Products
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-4">Your Wishlist ❤️</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {wishlistItems.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WishlistPage;