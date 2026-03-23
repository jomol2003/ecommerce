import React from 'react';
import { Container, Row, Col, Button, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container className="text-center mt-5">
        <Image src="https://via.placeholder.com/300x200?text=Empty+Cart" fluid className="mb-4" />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Button as={Link} to="/products" variant="primary">
          Start Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-4">Shopping Cart</h2>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                <CartItem item={item} />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="danger" onClick={clearCart} className="mt-3">
            Clear Cart
          </Button>
        </Col>
        <Col md={4}>
          <div className="border p-3 rounded">
            <h4>Order Summary</h4>
            <p>Subtotal: ${getCartTotal()}</p>
            <p>Shipping: Free</p>
            <hr />
            <h5>Total: ${getCartTotal()}</h5>
            <Button as={Link} to="/checkout" variant="success" className="w-100 mt-2">
              Proceed to Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;