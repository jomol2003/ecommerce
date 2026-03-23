import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FaShoppingCart, FaHeart, FaMoon, FaSun } from 'react-icons/fa';

const NavigationBar = () => {
  const { getCartCount } = useCart();
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-2">
      <Container>
        <Navbar.Brand as={Link} to="/">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search form - centered */}
          <Form className="d-flex mx-auto" style={{ width: '40%' }} onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>

          {/* Right icons */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/wishlist" className="position-relative">
              <FaHeart size={20} />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={20} />
              {getCartCount() > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {getCartCount()}
                </Badge>
              )}
            </Nav.Link>
            {user ? (
              <>
                <Navbar.Text className="me-2">Hi, {user.name}</Navbar.Text>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            <Nav.Link onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;