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
        <button className="menos" onClick={restarContador}>
          {" "}
          -{" "}
        </button>
        <p className="contador">{contador}</p>
        <button className="mas" onClick={sumarContador}>
          {" "}
          +{" "}
        </button>

        <button className="btn" onClick={() => funcionAgregar(contador)}>
          {" "}
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
