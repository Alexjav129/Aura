import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4> {item.nombre}</h4>
      <p>Quantity: {cantidad}</p>
      <p>Precio: {item.precio}</p>
      <button
        onClick={() => {
          eliminarProducto(item.id);
        }}
      >
        Delete Product
      </button>
      <hr />
    </div>
  );
};

export default CartItem;
