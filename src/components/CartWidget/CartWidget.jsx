import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div>
      <img
        className="imgCarrito"
        src="./img/carrito.png"
        alt="Shopping Cart Widget"
      />
      <strong className="cartNumber">7</strong>
    </div>
  );
};

export default CartWidget;
