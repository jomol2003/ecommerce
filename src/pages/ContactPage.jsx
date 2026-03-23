import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="my-5">
      <h2>Contact Us</h2>
      <Row>
        <Col md={6}>
          <p>Have questions or need assistance? Fill out the form and we'll get back to you soon.</p>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can we help?" />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h5>Our Office</h5>
          <p>123 Main Street<br />City, ST 12345</p>
          <p><strong>Email:</strong> support@mystore.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;