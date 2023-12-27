import "./ItemDetail.scss";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorItem">
      <h2>Product: {nombre} </h2>
      <p>Price: {precio} </p>
      <p>ID: {id}</p>
      <p>
        Aura bracelets transcend mere jewelry; they symbolize a philosophy
        centered on equilibrium, consciousness, and self-reflection.
      </p>
      <p>
        Embracing Harmony: In moments of triumph and accomplishment, Aura
        encourages staying grounded, fostering humility and appreciation,
        reminding us of our origins and the journey traveled.
      </p>
      <p>
        Aura bracelets act as daily cues for mindfulness, prompting us to
        embrace the present, treasure the peaks, and endure the valleys of life.
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
