import React from 'react';
import { Form } from 'react-bootstrap';

const FilterSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  priceRange,
  onPriceChange,
  selectedRating,
  onRatingChange,
  selectedGender,          // new prop
  onGenderChange,          // new prop
}) => {
  return (
    <div className="p-3 border rounded bg-light">
      <h5>Search</h5>
      <Form.Control
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="mb-3"
      />
      <h5>Categories</h5>
      <Form.Check
        type="radio"
        label="All"
        name="category"
        value=""
        checked={selectedCategory === ''}
        onChange={() => onCategoryChange('')}
      />
      {categories.map(cat => (
        <Form.Check
          key={cat}
          type="radio"
          label={cat}
          name="category"
          value={cat}
          checked={selectedCategory === cat}
          onChange={() => onCategoryChange(cat)}
        />
      ))}
      <hr />
      <h5>Gender</h5>
      <Form.Check
        type="radio"
        label="All"
        name="gender"
        value=""
        checked={selectedGender === ''}
        onChange={() => onGenderChange('')}
      />
      <Form.Check
        type="radio"
        label="Men"
        name="gender"
        value="male"
        checked={selectedGender === 'male'}
        onChange={() => onGenderChange('male')}
      />
      <Form.Check
        type="radio"
        label="Women"
        name="gender"
        value="female"
        checked={selectedGender === 'female'}
        onChange={() => onGenderChange('female')}
      />
      <hr />
      <h5>Price Range</h5>
      <Form.Group className="mb-2">
        <Form.Label>Min</Form.Label>
        <Form.Control
          type="number"
          placeholder="0"
          value={priceRange.min}
          onChange={(e) => onPriceChange({ ...priceRange, min: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Max</Form.Label>
        <Form.Control
          type="number"
          placeholder="1000"
          value={priceRange.max}
          onChange={(e) => onPriceChange({ ...priceRange, max: e.target.value })}
        />
      </Form.Group>
      <hr />
      <h5>Minimum Rating</h5>
      {[4, 3, 2, 1].map(rating => (
        <Form.Check
          key={rating}
          type="radio"
          label={`${rating} ★ & up`}
          name="rating"
          value={rating}
          checked={selectedRating === rating}
          onChange={() => onRatingChange(rating)}
        />
      ))}
      <Form.Check
        type="radio"
        label="All"
        name="rating"
        value=""
        checked={selectedRating === ''}
        onChange={() => onRatingChange('')}
      />
    </div>
  );
};

export default FilterSidebar;