import { useState, useEffect } from "react";

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
    <div>
      <button>- </button>
      <p></p>
      <button></button>
    </div>
  );
};

export default ItemCount;
