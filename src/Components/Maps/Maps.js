//styles
import "./styles.scss";
//components

//

export const Maps = () => {
  return (
    <div className="Maps">
      <div>
        <h2>Buenos Aires</h2>
        <p>María Asunta 3351, Villa Lynch</p>
        <p>011 2137 1948</p>
        <p>sillones@sillones.com.ar</p>
        <p>Lunes a Viernes</p>
        <p>de 8.30 a 12.30 y de 15 a 17 hs.</p>
      </div>
      <div>
        <iframe
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.811307401158!2d-58.526129184237384!3d-34.583640763944025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7a4269105d3%3A0x3d70a3c3076b261c!2sMar%C3%ADa%20Asunta%203351%2C%20Villa%20Lynch%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1666195038757!5m2!1ses-419!2sar"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
