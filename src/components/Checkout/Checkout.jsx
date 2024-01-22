import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <h2>Checkout</h2>

      <form>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio: $ {producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <hr />

        <div>
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Phone</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Email Confirmation</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submbit">Complete Order</button>

        {orderId && (
          <strong>
            We are thrilled to have you as our customer. Your orderId is:
            {orderId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
