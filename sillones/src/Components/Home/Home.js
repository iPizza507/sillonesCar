//styles
import "./styles.scss";
//components
import sillonFondo from "../../img/sillonFondo.jpg";
import sillonHome from "../../img/sillonHome.jpg";
import sillonHome1 from "../../img/sillonFondo1.jpg";
import sillonHome2 from "../../img/sillonFondo2.jpg";
import sillonHome3 from "../../img/sillonHome3.jpg";
import sillonHome4 from "../../img/sillonHome4.jpg";
import sillonHome6 from "../../img/sillonHome6.jpg";
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
            Dejanos tus datos y un representante se comunicará con usted para
            darle el mejor asesoramiento.
          </p>
        </div>
        <div className="home-text-image">
          <div className="home-text2">
            <h1>Una tradición que se cumple desde hace mucho..</h1>
            <h2>A LA TALLA DE TU HOGAR</h2>
            <button type="button">Ver productos</button>
          </div>

          <div>
            <img src={sillonHome6} alt="" id="image1"></img>
          </div>
        </div>
        <div className="home-images">
          <img src={sillonHome2} alt="" id="image1"></img>
          <img src={sillonHome} alt="" id="image2"></img>
          <img src={sillonHome4} alt="" id="image3"></img>
          <img src={sillonHome3} alt="" id="image4"></img>
          <img src={sillonHome1} alt="" id="image5"></img>
        </div>
      </div>
    </>
  );
};

export default Home;
