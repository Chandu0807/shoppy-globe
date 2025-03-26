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
    <div className="product-item-container" onClick={handleProductClick}>
      <div className="product-item-badge">
        {product.discountPercentage > 0 && (
          <span className="discount-badge">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>
      <div className="product-item-image">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
        />
      </div>
      <div className="product-item-details">
        <h3>{product.title}</h3>
        <div className="product-item-pricing">
          <span className="product-price">${product.price}</span>
          <div className="product-rating">
            <span>⭐</span>
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <button 
          className="add-to-cart-button" 
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;