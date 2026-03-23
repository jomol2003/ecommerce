import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ShippingPage = () => {
  return (
    <Container className="my-5">
      <h2>Shipping Information</h2>
      <p>We offer several shipping options to meet your needs. Orders are processed within 1–2 business days.</p>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Shipping Method</th>
            <th>Estimated Delivery Time</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard</td>
            <td>5–7 business days</td>
            <td>Free on orders over $50, otherwise $4.99</td>
          </tr>
          <tr>
            <td>Expedited</td>
            <td>2–3 business days</td>
            <td>$9.99</td>
          </tr>
          <tr>
            <td>Next Day</td>
            <td>1 business day</td>
            <td>$19.99</td>
          </tr>
        </tbody>
      </Table>
      <p className="mt-3"><strong>International Shipping:</strong> Currently we only ship within the United States.</p>
    </Container>
  );
};

export default ShippingPage;