import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/actions/cartActions';
import '../styles/CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateCartQuantity(item.id, newQuantity));
    }
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-image">
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
        <div className="cart-item-quantity">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item-total">
          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <button 
          className="cart-item-remove" 
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;