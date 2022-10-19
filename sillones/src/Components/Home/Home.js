//styles
import "./styles.scss";
//components
import sillonFondo from "../../img/sillonFondo.jpg";
import Maps from "../Maps/Maps";
export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-header">
          <img src={sillonFondo} alt="" className="sillonFondo"></img>
          <div className="text-img">
            <h1>Somos la empresa de los sillones</h1>
            <h2>¡Colchones a tu medida! Y mucho más..</h2>
          </div>
        </div>
        <div className="home-footer">
          <h4>homeo</h4>
          <h3>SILLONES CARMEN - CONTÁCANOS</h3>
          <hr />
          <p>
            Dejanos tus datos y un representante se comunicará con vos para
            darte el mejor asesoramiento.
          </p>
        </div>
      </div>
      <Maps />
    </>
  );
};

export default Home;
