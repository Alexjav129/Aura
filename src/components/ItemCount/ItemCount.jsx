import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setCotnador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setCotnador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setCotnador(contador - 1);
    }
  };

  return (
    <>
      <div className="btns">
        <button onClick={restarContador}> - </button>
        <p>{contador}</p>
        <button onClick={sumarContador}> + </button>

        <button onClick={() => funcionAgregar(contador)}>
          {" "}
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
