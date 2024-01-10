import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import "./ItemListContianer.scss";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "inventario"), where("idCat", "==", idCategoria))
      : collection(db, "inventario");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) =>
        console.log("Something went wrong, try again later", error)
      );
  }, [idCategoria]);

  // ! Este codigo se va porque ahora se tiene que levantar la información ya no de asynmock.js sino de Firebase
  // useEffect(() => {
  //   const funcionProductos = idCategoria
  //     ? getProductosPorCategoria
  //     : getProducts;

  //   funcionProductos(idCategoria).then((respuesta) => setProductos(respuesta));
  // }, [idCategoria]);

  return (
    <div>
      <h2>Products</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
