import { useState, useEffect } from "react";
import { getProducts, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContianer.scss";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProducts;

    funcionProductos(idCategoria).then((respuesta) => setProductos(respuesta));
  }, [idCategoria]);

  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
