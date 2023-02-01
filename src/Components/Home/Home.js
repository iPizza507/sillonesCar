//styles
import "./styles.scss";
//dependecies
import { Link } from "react-router-dom";
//components
import sillonFondo from "../../img/RLFLIA_Sillon.jpeg";
import sillonHome from "../../img/RLFLIA_Sillon10.jpeg";
import sillonHome1 from "../../img/RLFLIA_Sillon11.jpeg";
import sillonHome2 from "../../img/RLFLIA_Sillon12.jpeg";
import sillonHome3 from "../../img/RLFLIA_Sillon13.jpeg";
import sillonHome4 from "../../img/RLFLIA_Sillon14.jpeg";
import sillonHome6 from "../../img/RLFLIA_Sillon15.jpeg";
export const Home = () => {
  const elementos = document.getElementsByClassName("img");
  const pantalla = window.innerHeight / 3.5;

  window.addEventListener("scroll", () => {
    //un array con las imagenes
    //preguntar si esta cerca de cada una de ellas
    //si esta cerca de una de ellas, darle la animaciona a esa cosa
    for (const item in elementos) {
      if (elementos[item].getBoundingClientRect().top < pantalla) {
        elementos[item].classList.remove("opacity");
        elementos[item].style.animation = `opaci 2s`;
        console.log(elementos[item].classList);
      }
    }
  });
  return (
    <>
      <div className="home">
        <div className="home-header">
          <figure>
            <img src={sillonFondo} alt="" className="sillonFondo"></img>
            <figcaption className="text-img">
              <h1>SILLONES DE DISEÑO</h1>
              <h2>¡Colchones a tu medida! Y mucho más..</h2>
            </figcaption>
          </figure>
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
            <Link to="/product">Ver productos</Link>
          </div>

          <div className="home-text-image-fond">
            <img
              src={sillonHome6}
              alt=""
              id="image1"
              className="opacity img"
            ></img>
          </div>
        </div>
        <div className="home-images">
          <img
            src={sillonHome2}
            alt=""
            id="image1"
            className="opacity img"
          ></img>
          <img
            src={sillonHome}
            alt=""
            id="image2"
            className="opacity img"
          ></img>
          <img
            src={sillonHome4}
            alt=""
            id="image3"
            className="opacity img"
          ></img>
          <img
            src={sillonHome3}
            alt=""
            id="image4"
            className="opacity img"
          ></img>
          <img
            src={sillonHome1}
            alt=""
            id="image5"
            className="opacity img"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
