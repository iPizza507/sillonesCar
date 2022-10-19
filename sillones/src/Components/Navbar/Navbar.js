//styles
import "./styles.css";
//components

//
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">IMAGEN</Link>
        </div>
        <div className="">
          <ul>
            <li>
              <Link to="">Quienes Somos</Link>
            </li>
            <li>
              <Link to="/services">Tienda</Link>
            </li>
            <li>
              <Link to="">Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="">
                <AiOutlineInstagram />
              </Link>
            </li>
            <li>
              <Link to="">
                <AiOutlineFacebook />
              </Link>
            </li>
            <li>
              <Link to="">
                <AiOutlineWhatsApp />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
