import React from 'react';
import ProductItem from './ProductItem';
import { useProductFetch } from '../hooks/useProductFetch';
import { useSearch } from '../context/SearchContext';
import '../styles/ProductList.css';

function ProductList() {
  const { products = [], loading, error } = useProductFetch();
  const { searchTerm } = useSearch();

  const filteredProducts = products.filter(product => {
    if (!product) return false;
    const searchLower = searchTerm.toLowerCase();
    return (
      (product.title && product.title.toLowerCase().includes(searchLower)) ||
      (product.category && product.category.toLowerCase().includes(searchLower)) ||
      (product.brand && product.brand.toLowerCase().includes(searchLower))
    );
  });

  if (loading) return <div className="loading-container">Loading products...</div>;
  if (error) return <div className="error-container">Error: {error}</div>;

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Discover Our Collection</h1>
        <p>Find the perfect items that match your style</p>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            product && (
              <ProductItem 
                key={product.id} 
                product={product} 
              />
            )
          ))
        ) : (
          <div className="no-results">
            <p>No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;