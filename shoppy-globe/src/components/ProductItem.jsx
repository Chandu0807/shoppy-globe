import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import '../styles/ProductItem.css';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item-card" onClick={handleProductClick}>
      <div className="product-badge">
        {product.discountPercentage > 0 && (
          <span className="discount-tag">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price-section">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">
            ⭐ {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="product-actions">
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;