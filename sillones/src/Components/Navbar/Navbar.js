//styles
import "./styles.css";
//components

//
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">IMAGEN</Link>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="">Agencia de diseño</Link>
            </li>
            <li>
              <Link to="/services">Portafolio</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="">Agencia de diseño</Link>
            </li>
            <li>
              <Link to="/services">Portafolio</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
