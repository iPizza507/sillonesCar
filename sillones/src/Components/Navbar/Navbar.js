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
  AiOutlineMenu,
  AiOutlineMenuFold,
} from "react-icons/ai";

export const Navbar = () => {
  const [view, setView] = useState();

  window.addEventListener("load", () => {
    setView(window.innerWidth);
  });
  window.addEventListener("resize", () => {
    setView(window.innerWidth);
  });

  let MenuHambur = document.getElementById("MenuHambur");
  let ShowButton = document.getElementById("ShowButton");
  let HideButton = document.getElementById("HideButton");

  function SlideMenu() {
    if (MenuHambur.style.display === "none") {
      MenuHambur.style.display = "block";
      HideButton.style.display = "none";
      ShowButton.style.display = "block";
    } else {
      MenuHambur.style.display = "none";
      HideButton.style.display = "block";
      ShowButton.style.display = "none";
    }
  }
  return (
    <>
      {view > 678 ? (
        <nav className="navbar" id="Navbar">
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
                <a
                  href="https://www.instagram.com/rlfliasouza/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5491127262628&text=Hola,%20me%20gustó%20este%20sillón.%20¿Me%20darías%20más%20info?"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div className="navbar-button-hambur">
          <button
            className="button-hambur"
            id="HideButton"
            onClick={() => SlideMenu()}
          >
            <AiOutlineMenu />
          </button>
          <button
            className="button-hambur"
            id="ShowButton"
            onClick={() => SlideMenu()}
          >
            <AiOutlineMenuFold />
          </button>

          <nav className="navbar" id="MenuHambur">
            <div>
              <div className="navbar-hambur">
                <ul className="navbar-hambur-list">
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
                <ul className="navbar-hambur-list-red">
                  <li>
                    <a
                      href="https://www.instagram.com/rlfliasouza/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=5491127262628&text=Hola,%20me%20gustó%20este%20sillón.%20¿Me%20darías%20más%20info?"
                      target="_blank"
                      rel="noreferrer"
                    >
                      aca
                      <AiOutlineWhatsApp />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
