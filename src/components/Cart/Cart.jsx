import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>You haven't add any products to your cart.</h2>
        <Link to={"/"}> View Products </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <h3>Total: $ {total}</h3>
      <h3>Total Quantity: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()}>Empty Cart</button>
      <Link to={"/checkout"}>Finalize purchase</Link>
    </div>
  );
};

export default Cart;
