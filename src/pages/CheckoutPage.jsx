import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Mock order placement
      setOrderPlaced(true);
      clearCart();
      setTimeout(() => navigate('/'), 3000);
    }
    setValidated(true);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <Container className="text-center mt-5">
        <h2>Your cart is empty</h2>
        <Button onClick={() => navigate('/products')}>Shop Now</Button>
      </Container>
    );
  }

  if (orderPlaced) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="success">Order placed successfully! Thank you for shopping with us.</Alert>
        <p>Redirecting to home...</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-4">Checkout</h2>
      <Row>
        <Col md={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h4>Shipping Address</h4>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required type="text" placeholder="John Doe" />
              <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control required type="text" placeholder="123 Main St" />
              <Form.Control.Feedback type="invalid">Please enter your address.</Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control required type="text" />
                  <Form.Control.Feedback type="invalid">City is required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control required type="text" />
                  <Form.Control.Feedback type="invalid">State required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="zip">
                  <Form.Label>ZIP</Form.Label>
                  <Form.Control required type="text" />
                  <Form.Control.Feedback type="invalid">ZIP required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <h4>Payment</h4>
            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control required type="text" placeholder="**** **** **** ****" />
              <Form.Control.Feedback type="invalid">Card number is required.</Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="expiry">
                  <Form.Label>Expiry (MM/YY)</Form.Label>
                  <Form.Control required type="text" placeholder="MM/YY" />
                  <Form.Control.Feedback type="invalid">Expiry required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control required type="text" placeholder="123" />
                  <Form.Control.Feedback type="invalid">CVV required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Place Order
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <div className="border p-3 rounded">
            <h4>Order Summary</h4>
            {cartItems.map(item => (
              <p key={item.id}>
                {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </p>
            ))}
            <hr />
            <h5>Total: ${getCartTotal()}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;