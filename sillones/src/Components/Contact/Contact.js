//styles
import "./styles.scss";
//components
import sillonFondo from "../../img/sillonFondo.jpg";
import Maps from "../Maps/Maps";
export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-header">
          <img src={sillonFondo} alt="" className="sillonFondo"></img>
          <div className="text-img">
            <h1>SOMOS LA EMPRESA DE LOS SILLONES</h1>
            <h2>¡Colchones a tu medida! Y mucho más..</h2>
          </div>
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
