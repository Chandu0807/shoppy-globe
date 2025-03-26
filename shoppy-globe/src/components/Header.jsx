import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../redux/selectors/cartSelectors';
import '../styles/Header.css';

function Header() {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className="creative-header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">
            <span className="logo-text">ShopSphere</span>
            <span className="logo-tagline">Discover. Shop. Enjoy.</span>
          </Link>
        </div>
        <nav className="creative-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input" 
            />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <Link to="/cart" className="cart-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;