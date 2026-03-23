import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const SkeletonProductCard = () => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Loading" className="product-img" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={4} /> <Placeholder xs={4} />
        </Placeholder>
        <div className="d-flex justify-content-between">
          <Placeholder.Button variant="primary" xs={4} />
          <Placeholder.Button variant="success" xs={4} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SkeletonProductCard;