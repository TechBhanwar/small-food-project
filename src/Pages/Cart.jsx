// Cart.jsx
import React from 'react';
import Navbar from '../Component/Navbar'

const Cart = ({ cartItems = [] }) => { // Default to an empty array
  return (
    <div>
<Navbar />
    <div className="cart-container">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price}</span>
            <span>{item.category}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default Cart;
