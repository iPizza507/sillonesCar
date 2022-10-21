//styles
import "./styles.scss";
//components
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineArrowUp,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineClockCircle,
} from "react-icons/ai";

//

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div>
          <h2>La Empresa</h2>
          <p>
            <Link to="/">Quienes Somos</Link>
          </p>
          <p>
            <Link to="/product">Productos</Link>
          </p>
          <p>
            <Link to="contact">Contacto</Link>
          </p>
          <hr />
          <p>
            <Link to="">Avsio Legal</Link>
          </p>
          <p className="icons">
            <a href="https://www.instagram.com/">
              <AiOutlineInstagram />
            </a>

            <a href="https://www.facebook.com/">
              <AiOutlineFacebook />
            </a>

            <a href="https://web.whatsapp.com/">
              <AiOutlineWhatsApp />
            </a>
          </p>
        </div>
        <div>
          <h2>Buenos Aires</h2>
          <p className="icons-text">
            <AiOutlineEnvironment />
            Dirección: María Asunta 3351, Villa Lynch
          </p>
          <p className="icons-text">
            <AiOutlineClockCircle />
            Lunes a viernes: 8.30 - 17 hs.
          </p>
          <p className="icons-text">
            <AiOutlineMail />
            email@email.com
          </p>
          <p className="icons-text">
            <AiOutlineWhatsApp /> +56 9 1145424185
          </p>
        </div>
      </div>

      <div className="footer-footer">
        <Link to="">Copyright © 2022 | Aviso legal</Link>
        <a href="#Navbar">
          Scroll <AiOutlineArrowUp />
        </a>
      </div>
    </div>
  );
};

export default Footer;
