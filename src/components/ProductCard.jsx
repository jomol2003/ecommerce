import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Rating from './Rating';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

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
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="product-card">
      <div className="position-relative">
        <Card.Img variant="top" src={product.image} className="product-img" />
        <div className="product-badge">
          {product.isNew && <Badge bg="primary" className="me-1">New</Badge>}
          {product.isSale && <Badge bg="warning" className="me-1">Sale</Badge>}
          {product.deal && <Badge bg="info" className="me-1">{product.deal}</Badge>}
        </div>
        <Button
  variant="link"
  className="wishlist-btn position-absolute top-0 end-0"
  onClick={handleWishlist}
  style={{ color: inWishlist ? '#1d9974' : '#6c757d' }}
>
  {inWishlist ? <FaHeart /> : <FaRegHeart />}
</Button>
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <div className="d-flex align-items-center mb-2">
          <Rating value={product.rating} text={`(${product.numReviews})`} />
        </div>
        <Card.Text>
          {product.originalPrice ? (
            <>
              <span className="text-muted text-decoration-line-through me-2">
                ${product.originalPrice}
              </span>
              <strong className="text-gold">${product.price}</strong>
              <span className="badge bg-secondary ms-2">{discount}% off</span>
            </>
          ) : (
            <strong className="text-gold">${product.price}</strong>
          )}
        </Card.Text>
        <div className="d-flex gap-2">
          <Button
            variant="outline-primary"
            className="btn-outline-gold"
            as={Link}
            to={`/product/${product.id}`}
            size="sm"
          >
            View
          </Button>
          <Button
            variant="primary"
            className="btn-gold"
            onClick={handleAddToCart}
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;