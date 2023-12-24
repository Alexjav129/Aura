const productos = [
  {
    id: "1",
    nombre: "Necklace 1",
    precio: 500,
    img: "./img/prod1.jpeg",
    idCat: "2",
  },
  {
    id: "2",
    nombre: "Necklace 2",
    precio: 500,
    img: "./img/prod2.jpeg",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "Ring 1",
    precio: 500,
    img: "./img/prod3.jpeg",
    idCat: "2",
  },
  {
    id: "4",
    nombre: "Water Bottle 1",
    precio: 500,
    img: "./img/prod4.jpeg",
    idCat: "3",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

/* Actividad N°3 Detalle de un producto I*/

/*Crear una función similar a la anterior pero que solo nos retorne un item */

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((item) => item.id === id);
      resolve(producto);
    }, 2000);
  });
};

// Se tiene que crear una nueva función que retorne toda un categoría

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 2000);
  });
};
