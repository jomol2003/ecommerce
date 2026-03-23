import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Form, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Rating from '../components/Rating';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import productsData from '../data/products.json';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = productsData.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) return <Container>Loading...</Container>;

  const inWishlist = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.info(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist`);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <div className="d-flex align-items-center mb-2">
            <Rating value={product.rating} text={`(${product.numReviews} reviews)`} />
          </div>
          <p className="text-muted">Category: {product.category}</p>
          {product.originalPrice ? (
            <>
              <h3 className="text-danger">${product.price}</h3>
              <p className="text-muted text-decoration-line-through">${product.originalPrice}</p>
              <Badge bg="success">{discount}% off</Badge>
            </>
          ) : (
            <h3 className="text-primary">${product.price}</h3>
          )}
          <p>{product.description}</p>
          <Form>
            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                style={{ width: '100px' }}
              />
            </Form.Group>
            <Button variant="success" onClick={handleAddToCart} className="me-2">
              Add to Cart
            </Button>
            <Button variant="outline-danger" onClick={handleWishlist}>
              {inWishlist ? <FaHeart /> : <FaRegHeart />} Wishlist
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;