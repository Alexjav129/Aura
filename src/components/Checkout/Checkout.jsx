// import { useState, useEffect, useContext } from "react";
// import { CarritoContext } from "../../context/CarritoContext";
// import { db } from "../../services/config";
// import { collection, addDoc } from "firebase/firestore";

// const Checkout = () => {
//   const { carrito, vaciarCarrito, total, cantidadTotal } =
//     useContext(CarritoContext);

//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailConfirmacion, setEmailConfirmacion] = useState("");
//   const [orderId, setOrderId] = useState("");
//   const [error, setError] = useState("");

//   const manejadorSubmit = (event) => {
//     event.preventDefault(); // para que no se recargue la pagina

//     // se verifica que todos los campos estén completos
//     if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
//       setError("You did not check all the required fields");
//       return;
//     }

//     // Se valida que los campos de email sean iguales
//     if (email !== emailConfirmacion) {
//       setError("Emails do not match");
//       return;
//     }

//     // Si pasa las 2 validaciones se crea un objeto con todos los datos de la orden de compra

//     const orden = {
//       items: carrito.map((producto) => ({
//         id: producto.item.id,
//         nombre: producto.item.nombre,
//         cantidad: producto.cantidad,
//       })),
//       total: total,
//       fecha: new Date(),
//       nombre,
//       apellido,
//       telefono,
//       email,
//     };

//     // Guardar la orden de compras en al base de datos
//     addDoc(collection(db, "ordenes"), orden)
//       .then((docRef) => {
//         setOrderId(docRef.id);
//         // una vez que se termina la simulación de venta, se tiene que vaciar el carrito
//         vaciarCarrito();
//       })
//       .catch((error) => {
//         console.log("Unable to create your order", error);
//         setError("Unable to create your order");
//       });
//   };

//   return (
//     <div>
//       <h2>Checkout</h2>

//       <form onSubmit={manejadorSubmit}>
//         {carrito.map((producto) => (
//           <div key={producto.item.id}>
//             <p>
//               {producto.item.nombre} x {producto.cantidad}
//             </p>
//             <p>Precio: $ {producto.item.precio}</p>
//             <hr />
//           </div>
//         ))}
//         <hr />

//         <div>
//           <label htmlFor="">Name</label>
//           <input type="text" onChange={(e) => setNombre(e.target.value)} />
//         </div>

//         <div>
//           <label htmlFor="">Last Name</label>
//           <input type="text" onChange={(e) => setApellido(e.target.value)} />
//         </div>

//         <div>
//           <label htmlFor="">Phone</label>
//           <input type="text" onChange={(e) => setTelefono(e.target.value)} />
//         </div>

//         <div>
//           <label htmlFor="">Email</label>
//           <input type="email" onChange={(e) => setEmail(e.target.value)} />
//         </div>

//         <div>
//           <label htmlFor="">Email Confirmation</label>
//           <input
//             type="email"
//             onChange={(e) => setEmailConfirmacion(e.target.value)}
//           />
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submbit">Complete Order</button>

//         {orderId && (
//           <strong>
//             We are thrilled to have you as our customer. Your orderId is:
//             {orderId}
//           </strong>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Checkout;

// Descuenta Stock
import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";

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

    // Guardar la orden de compras en al base de datos
    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrderId(docRef.id);
        // una vez que se termina la simulación de venta, se tiene que vaciar el carrito
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Unable to create your order", error);
        setError("Unable to create your order");
      });
  };

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={manejadorSubmit}>
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
