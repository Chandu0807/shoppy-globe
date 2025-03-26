import React from 'react';
import { useProductFetch } from '../hooks/useProductFetch';
import '../styles/Categories.css';

function Categories() {
  const { products, loading, error } = useProductFetch();

  // Extract unique categories
  const categories = [...new Set(products.map(product => product.category))];

  if (loading) return <div className="loading-container">Loading categories...</div>;
  if (error) return <div className="error-container">Error: {error}</div>;

  return (
    <div className="categories-container">
      <h1>Product Categories</h1>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <p>
              Explore our wide range of {category} products 
              and find exactly what you're looking for.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;