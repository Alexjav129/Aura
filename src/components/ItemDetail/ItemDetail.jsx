import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2>Nombre: {nombre} </h2>
      <p>Precio: {precio} </p>
      <p>ID: {id}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        veritatis rem cumque? Reiciendis nemo natus ducimus possimus
        reprehenderit blanditiis qui eligendi adipisci accusantium, quibusdam
        quisquam laudantium aspernatur voluptas non nostrum.
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
