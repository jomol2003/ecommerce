import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoriesBar = () => {
  return (
    <div className="bg-light py-2 border-bottom" style={{ position: 'sticky', top: '56px', zIndex: 1020 }}>
      <Nav className="justify-content-center" variant="pills">
        {/* Use Link directly with nav-link class */}
        <Nav.Item>
          <Link to="/products?category=Home" className="nav-link">Home</Link>
        </Nav.Item>

        <NavDropdown title="Fashion" id="fashion-dropdown">
          <NavDropdown.Item as={Link} to="/products?category=Fashion&gender=male">
            👔 Men
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/products?category=Fashion&gender=female">
            👗 Women
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Item>
          <Link to="/products?category=Sports" className="nav-link">Sports</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products?category=Electronics" className="nav-link">Electronics</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CategoriesBar;