//styles
import "./styles.scss";
//components
import { Link } from "react-router-dom";

//

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div>
          <h2>La Empresa</h2>
          <p>
            <Link to="">Quienes Somos</Link>
          </p>
          <p>
            <Link to="">Tienda</Link>
          </p>
          <p>
            <Link to="">Contacto</Link>
          </p>
          <hr />
          <p>Aviso legal</p>
          <p>ICONOSS</p>
        </div>
        <div>
          <h2>Buenos Aires</h2>
          <p>Dirección:</p>
          <p>Lunes a viernes:</p>
          <p>mail</p>
          <p>wpp</p>
        </div>
      </div>

      <div className="footer-footer">
        <Link to="">Copyright © 2022 | Aviso legal</Link>
        Alguna img
      </div>
    </div>
  );
};

export default Footer;
