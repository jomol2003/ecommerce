import React from 'react';
import { Container } from 'react-bootstrap';

const ReturnsPage = () => {
  return (
    <Container className="my-5">
      <h2>Returns & Exchanges</h2>
      <p>We want you to be completely satisfied with your purchase. If for any reason you're not, we offer a straightforward return policy.</p>
      <h5>Return Policy</h5>
      <ul>
        <li>Items must be returned within 30 days of delivery.</li>
        <li>Products must be unused, in original condition and packaging.</li>
        <li>Proof of purchase (order number) is required.</li>
        <li>Refunds will be issued to the original payment method within 5–7 business days after we receive the return.</li>
      </ul>
      <h5>How to Initiate a Return</h5>
      <p>Contact our customer service at <strong>returns@mystore.com</strong> with your order number and reason for return. We'll provide a return shipping label if applicable.</p>
    </Container>
  );
};

export default ReturnsPage;