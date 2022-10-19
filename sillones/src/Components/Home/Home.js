//styles
import "./styles.scss";
//components
import sillonFondo from "../../img/sillonFondo.jpg";
import sillonHome from "../../img/sillonHome.jpg";
import Maps from "../Maps/Maps";
export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-header">
          <img src={sillonFondo} alt="" className="sillonFondo"></img>
          <div className="text-img">
            <h1>SILLONES DE DISEÑO</h1>
            <h2>¡Colchones a tu medida! Y mucho más..</h2>
          </div>
        </div>
        <div className="home-text">
          <h4>Quiénes Somos</h4>
          <h3>VENTA DE SILLONES DE DISEÑO</h3>
          <hr />
          <p>
            Dejanos tus datos y un representante se comunicará con vos para
            darte el mejor asesoramiento.
          </p>
        </div>
        <div className="home-text-image">
          <div>
            <h1>Una tradición que se cumple desde hace mucho..</h1>
            <h2>A LA TALLA DE TU HOGAR</h2>
            <button type="button">Ver productos</button>
          </div>

          <div>
            <img src={sillonHome} alt="" id="image1"></img>
          </div>
        </div>
        <div className="home-images">
          <img src={sillonHome} alt="" id="image1"></img>
          <img src={sillonHome} alt="" id="image2"></img>
          <img src={sillonHome} alt="" id="image3"></img>
          <img src={sillonHome} alt="" id="image4"></img>
          <img src={sillonHome} alt="" id="image5"></img>
        </div>
      </div>
    </>
  );
};

export default Home;
