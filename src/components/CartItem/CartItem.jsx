import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.scss";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cartContent">
      <h4> {item.nombre}</h4>
      <p>Quantity: {cantidad}</p>
      <p>Price per product: {item.precio}</p>
      <button
        className="btn"
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
