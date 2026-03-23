import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import CategoriesBar from './components/CategoriesBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WishlistPage from './pages/WishlistPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import ReturnsPage from './pages/ReturnsPage';
import ShippingPage from './pages/ShippingPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <Navbar />
              <CategoriesBar />
              <main className="flex-grow-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductListPage />} />
                  <Route path="/product/:id" element={<ProductDetailsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/returns" element={<ReturnsPage />} />
                  <Route path="/shipping" element={<ShippingPage />} />
                </Routes>
              </main>
              <Footer />
              <ToastContainer position="bottom-right" autoClose={3000} />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;