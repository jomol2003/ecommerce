import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SkeletonProductCard from '../components/SkeletonProductCard';
import FilterSidebar from '../components/FilterSidebar';
import productsData from '../data/products.json';
import { useDebounce } from '../hooks/useDebounce';

const ProductListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  // Initialize state from URL query parameters
  const [searchTerm, setSearchTerm] = useState(queryParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || '');
  const [selectedGender, setSelectedGender] = useState(queryParams.get('gender') || '');
  const [priceRange, setPriceRange] = useState({
    min: queryParams.get('minPrice') || '',
    max: queryParams.get('maxPrice') || '',
  });
  const [selectedRating, setSelectedRating] = useState(queryParams.get('rating') || '');
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(searchTerm, 500);

  // Whenever the URL changes, update the local state
  useEffect(() => {
    setSearchTerm(queryParams.get('search') || '');
    setSelectedCategory(queryParams.get('category') || '');
    setSelectedGender(queryParams.get('gender') || '');
    setPriceRange({
      min: queryParams.get('minPrice') || '',
      max: queryParams.get('maxPrice') || '',
    });
    setSelectedRating(queryParams.get('rating') || '');
  }, [location.search]);

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [debouncedSearch, selectedCategory, selectedGender, priceRange, selectedRating]);

  const categories = [...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesGender = selectedGender === '' || product.gender === selectedGender;
    const matchesMin = priceRange.min === '' || product.price >= Number(priceRange.min);
    const matchesMax = priceRange.max === '' || product.price <= Number(priceRange.max);
    const matchesRating = selectedRating === '' || product.rating >= Number(selectedRating);
    return matchesSearch && matchesCategory && matchesGender && matchesMin && matchesMax && matchesRating;
  });

  // Optional: update URL when filters change (if you want the URL to reflect filter changes)
  // Not required for navigation from categories to work, but can be added for consistency.

  return (
    <Container>
      <h2 className="my-4">Products</h2>
      <Row>
        <Col md={3}>
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
            selectedGender={selectedGender}
            onGenderChange={setSelectedGender}
          />
        </Col>
        <Col md={9}>
          {loading ? (
            <Row xs={1} sm={2} lg={3} className="g-4">
              {[...Array(6)].map((_, i) => (
                <Col key={i}>
                  <SkeletonProductCard />
                </Col>
              ))}
            </Row>
          ) : (
            <>
              <Row xs={1} sm={2} lg={3} className="g-4">
                {filteredProducts.map(product => (
                  <Col key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
              {filteredProducts.length === 0 && (
                <p className="text-center mt-4">No products match your criteria.</p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;