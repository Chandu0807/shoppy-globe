import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProductFetch } from '../hooks/useProductFetch';
import { addToCart } from '../redux/actions/cartActions';
import '../styles/ProductList.css';

function ProductList() {
  const { products, loading, error } = useProductFetch();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list-container">
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              onClick={() => handleProductClick(product.id)}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;