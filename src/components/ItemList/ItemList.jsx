import Item from "../Item/item";
import "./ItmeList.scss";

const ItemList = ({ productos }) => {
  return (
    <div className="contenedorProductos">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
