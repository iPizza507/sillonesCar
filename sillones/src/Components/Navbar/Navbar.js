//styles
import "./styles.css";
//components

//
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Navbar = () => {
  const [view, setView] = useState();

  window.addEventListener("load", () => {
    setView(window.innerWidth);
  });
  window.addEventListener("resize", () => {
    setView(window.innerWidth);
  });

  return (
    <>
      {view > 767 ? (
        <nav className="navbar" id="Navbar">
          <div>
            <Link to="/">IMAGEN</Link>
          </div>
          <div className="">
            <ul>
              <li>
                <Link to="">Quienes Somos</Link>
              </li>
              <li>
                <Link to="/product">Productos</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://www.instagram.com/">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href="https://web.whatsapp.com/">
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div>ALGO</div>
      )}
    </>
  );
};

export default Navbar;
