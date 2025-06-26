import { useContext } from "react";
import { EcomContext } from "./UseContext";
import { Link } from "react-router-dom";
function Header() {
  const {cart}=useContext(EcomContext)
  return (
    <header>
      <h2>  <Link to={"/"}> Ecommerce</Link></h2>
      <ul>
        <li>
           <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
        <li>
           <Link to={"/Wishlist"}>Wishlist </Link>

        
        </li>
      </ul>
    </header>
  );
}

export default Header;
