import React, { useContext } from "react";
import { EcomContext } from "../components/UseContext";
import { FaTrashCan } from "react-icons/fa6";
function Cart() {
  const { cart, increaseQuantity, decreaseQuantity,setCart } = useContext(EcomContext);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
    
  function removeItem(id){

    const updatecart=cart.filter((item)=>item.id!==id)
    setCart(updatecart)

  }
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
                  <span onClick={()=>removeItem(item.id)}><FaTrashCan /></span>

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
