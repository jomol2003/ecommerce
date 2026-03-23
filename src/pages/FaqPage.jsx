import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FaqPage = () => {
  return (
    <Container className="my-5">
      <h2>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I place an order?</Accordion.Header>
          <Accordion.Body>
            Simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment details.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What payment methods do you accept?</Accordion.Header>
          <Accordion.Body>
            We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How long does shipping take?</Accordion.Header>
          <Accordion.Body>
            Standard shipping typically takes 5–7 business days. Expedited options are available at checkout.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Can I return an item?</Accordion.Header>
          <Accordion.Body>
            Yes, we accept returns within 30 days of delivery. Items must be unused and in original packaging.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FaqPage;

