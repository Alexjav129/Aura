import Item from "../Item/Item";
import "./ItmeList.scss";

const ItemList = ({ productos }) => {
  return (
    <div className="ProductsContainer">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
