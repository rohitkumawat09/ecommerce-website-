import { useContext, useState } from "react";
import { EcomContext } from "./UseContext";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useContext(EcomContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <h2>
        <Link to={"/"} onClick={closeMenu}>
          Ecommerce
        </Link>
      </h2>
      
      {/* Mobile menu toggle button */}
      <button 
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      
      <ul className={isMenuOpen ? 'active' : ''}>
        <li>
          <Link to={"/about"} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={closeMenu}>
            Cart ({cart.length})
          </Link>
        </li>
        <li>
          <Link to={"/Wishlist"} onClick={closeMenu}>
            Wishlist
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;