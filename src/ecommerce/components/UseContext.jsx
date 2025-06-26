import { createContext, useState ,useEffect } from "react";
export const EcomContext = createContext();

function UserContext({ children }) {
  // const [cart, setCart] = useState([]);



    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  function handleAddToCart(product) {
    if (productAlreadyExists(product.id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }


    function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
    );
  }
  function productAlreadyExists(isToFind) {
    const existingProduct = cart.find((cartItem) => cartItem.id === isToFind);
    return existingProduct ? true : false;
  }
  return (
    <EcomContext.Provider value={{ cart, setCart, handleAddToCart ,decreaseQuantity,increaseQuantity}}>
      {children}
    </EcomContext.Provider>
  );
}
export default UserContext;
