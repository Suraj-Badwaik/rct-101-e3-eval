import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";


// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
const isAuth = useContext(AuthContext);
const count = useContext(CartContext)
  return (
    <div data-cy="navbar" className='Navbar'>
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">Count:{count}</span>
      <Link to="/login"><button data-cy="navbar-login-logout-button">{!isAuth ? "Login" : "Logout"}</button></Link>
    </div>
  );
};

export default Navbar;
