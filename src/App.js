import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const cart = useSelector((state) => state);
  return (
    <>
      <div>Cart Count: {cart.qty}</div>
    </>
  );
}
