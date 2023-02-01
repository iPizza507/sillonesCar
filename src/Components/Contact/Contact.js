//styles
import "./styles.scss";
//components
import sillonFondo from "../../img/RLFLIA_Sillon.jpeg";
import Maps from "../Maps/Maps";
export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-header">
          <figure>
            <img src={sillonFondo} alt="" className="sillonFondo"></img>
            <figcaption className="text-img">
              <h1>SILLONES DE DISEÑO</h1>
              <h2>¡Colchones a tu medida! Y mucho más..</h2>
            </figcaption>
          </figure>
        </div>
        <div className="contact-footer">
          <h4>Contacto</h4>
          <h3>SILLONES CARMEN - CONTÁCANOS</h3>
          <hr />
          <p>
            Dejanos tus datos y un representante se comunicará con usted para
            darle el mejor asesoramiento.
          </p>
        </div>
      </div>
      <Maps />
    </>
  );
};

export default Contact;
