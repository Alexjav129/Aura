import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { CarritoContext, vaciarCarrito } = useContext;
  return <div>Checkout</div>;
};

export default Checkout;
