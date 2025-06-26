import React, { useContext } from "react";
import { EcomContext } from "../components/UseContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(EcomContext);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <p><strong>Total: ₹{item.price * item.quantity}</strong></p>
              </div>
            </div>
          ))}

          <div className="total-amount">Total: ₹{totalAmount}</div>
        </>
      )}
    </div>
  );
}

export default Cart;
