import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { useProductFetch } from '../hooks/useProductFetch';
import '../styles/ProductList.css';

function ProductList() {
  const { products, loading, error } = useProductFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading-container">Loading products...</div>;
  if (error) return <div className="error-container">Error: {error}</div>;

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Discover Our Collection</h1>
        <p>Find the perfect items that match your style</p>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductItem 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;