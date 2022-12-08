import "./Navbar.css";
import { CartWidget } from "../cartWidget/CartWidget";


const NavBar = () => {
    const nombre = "Home"

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://img.icons8.com/fluency/48/null/nfc-logo.png"
          alt=""
        />
      </div>
      <ul className="navbar">
        <li className="navbar-item">{nombre}</li>
        <li className="navbar-item"> ┋Empresa </li>
        <li className="navbar-item"> ┋Soluciones </li>
        <li className="navbar-item"> ┋Precios </li>
        <li className="navbar-item"> ┋Contacto</li>
   
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
