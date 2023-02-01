//styles
import "./styles.scss";
//components
import sillonFondo from "../../img/RLFLIA_Sillon10.jpeg";
import Products from "./Products";
export const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product-header">
          <figure>
            <img src={sillonFondo} alt="" className="sillonFondo"></img>
            <figcaption className="text-img">
              <h1>SILLONES DE DISEÑO</h1>
              <h2>¡Colchones a tu medida! Y mucho más..</h2>
            </figcaption>
          </figure>
        </div>
        <div className="product-text">
          <h4>Productos</h4>
          <h3>PRODUCTOS DE LOS CLIENTES A MEDIDA</h3>
          <hr />
          <p>
            Dejanos tus datos y un representante se comunicará con usted para
            darle el mejor asesoramiento.
          </p>
        </div>
        <div className="cards">
          {Products.map((e) => (
            <div className="card">
              <div className="card-top">
                <img src={e.url} alt=""></img>
              </div>
              <div className="card-bottom">
                <h3>{e.nombre}</h3>
                <h4>{e.textoInformativo}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
