import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>You have not add any products to your cart.</h2>
        <Link to={"/"}> View Products </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <hr />
      <div className="cartCheckout">
        <h3>Total: $ {total}</h3>
        <h3>Total Quantity: {cantidadTotal}</h3>
        <button className="btn" onClick={() => vaciarCarrito()}>
          Empty Cart
        </button>
        <div className="finalizeAndKeep">
          <Link className="finalizeBtn" to={"/checkout"}>
            Finalize Purchase
          </Link>
          <Link to={"/"}>
            <button className="keepBuyingBtn">Keep Buying ?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
