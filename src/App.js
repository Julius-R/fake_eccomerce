import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/reducers/cartReducer";
import Axios from "axios";
import Product from "./Product";

export default function App() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      {products.length <= 0 ? (
        <p>no items</p>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>
          </div>
          {console.log(cart)}
        </section>
      )}
    </>
  );
}
