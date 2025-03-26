import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        <div className="product-images">
          {product.images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`${product.title} - view ${index + 1}`} 
            />
          ))}
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-pricing">
            <span className="price">${product.price}</span>
            <span className="discount">
              {product.discountPercentage}% OFF
            </span>
          </div>
          <div className="product-meta">
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating} / 5</p>
            <p>Stock: {product.stock} available</p>
          </div>
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

export default ProductDetail;