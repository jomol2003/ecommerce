import React from 'react';
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Row className="align-items-center mb-3 border-bottom pb-2">
      <Col xs={3} md={2}>
        <Image src={item.image} fluid rounded />
      </Col>
      <Col xs={5} md={4}>
        <h6>{item.name}</h6>
        <p className="text-muted">${item.price} each</p>
      </Col>
      <Col xs={2}>
        <Form.Control
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        />
      </Col>
      <Col xs={2}>
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
      </Col>
      <Col xs={1}>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
          <FaTrash />
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;