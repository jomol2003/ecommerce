import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const HomePage = () => {
  const deals = productsData.filter(p => p.isSale).slice(0, 4);
  const newArrivals = productsData.filter(p => p.isNew).slice(0, 4);
  const topRated = [...productsData].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <>
      <HeroBanner />
      <Container className="py-4">
        {deals.length > 0 && (
          <section className="mb-5">
            <div className="section-heading mb-4">
              <h3 className="section-title">Hot Deals</h3>
              <p className="section-subtitle">Limited time offers you don't want to miss</p>
            </div>
            <Row xs={1} sm={2} md={4} className="g-4">
              {deals.map(product => (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </section>
        )}

        {newArrivals.length > 0 && (
          <section className="mb-5">
            <div className="section-heading mb-4">
              <h3 className="section-title">New Arrivals</h3>
              <p className="section-subtitle">Fresh styles just landed</p>
            </div>
            <Row xs={1} sm={2} md={4} className="g-4">
              {newArrivals.map(product => (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </section>
        )}

        <section className="mb-5">
          <div className="section-heading mb-4">
            <h3 className="section-title">Top Rated</h3>
            <p className="section-subtitle">Customer favorites – highly recommended</p>
          </div>
          <Row xs={1} sm={2} md={4} className="g-4">
            {topRated.map(product => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
};

export default HomePage;