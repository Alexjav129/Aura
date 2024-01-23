// Checkout que Descuenta Stock
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import "./Checkout.scss";

const Checkout = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault(); // para que no se recargue la pagina

    // se verifica que todos los campos estén completos
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("You did not check all the required fields");
      return;
    }

    // Se valida que los campos de email sean iguales
    if (email !== emailConfirmacion) {
      setError("Emails do not match");
      return;
    }

    // Si pasa las 2 validaciones se crea un objeto con todos los datos de la orden de compra

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    /* Se modifica el código para que ejecute varias promesas en paralelo,
    por un lado que pueda crear la orden de compra y por el otro que actualice el stock */
    //Promise.all ejecuta todas las promesas al mismo tiempo
    Promise.all(
      orden.items.map(async (productoOrden) => {
        // Por cada producto en la colección obtengo una referencia y a partir de esa referencia obtengo el DOC:
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        //data() nos permiter sacar la informacion del documento.

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
        // Modifico el stock y subo la info actualizada.
      })
    )
      // Guardamos la orden en la base de datos
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrderId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => console.log("Unable to create your order", error));
      })
      .catch((error) => {
        console.log("Unable to update Stock", error);
        setError("Unable to update Stock");
      });
  };

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={manejadorSubmit} className="formulario">
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Price per product: $ {producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <p>Total Items: {cantidadTotal}</p>
        <hr />

        <div className="labelsAndInputs">
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="labelsAndInputs">
          <label htmlFor="">Last Name</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div className="labelsAndInputs">
          <label htmlFor="">Phone</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className="labelsAndInputs">
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="labelsAndInputs">
          <label htmlFor="">Email Confirmation</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="submitBtn">
          Complete Order
        </button>

        {orderId && (
          <strong className="orderId">
            We are thrilled to have you as our customer.
            <br /> Your orderId is:
            {orderId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
