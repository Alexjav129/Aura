import { useState } from "react";

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
      <button onClick={restarContador}> - </button>
      <p>{contador}</p>
      <button onClick={sumarContador}> + </button>

      <button onClick={() => funcionAgregar(contador)}>
        {" "}
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
