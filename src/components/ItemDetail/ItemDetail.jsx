import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  // Se crea un estado local con la cantidad de productos agregados

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // Se crea una funcion manejadora de la cantidad:
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

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
      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
