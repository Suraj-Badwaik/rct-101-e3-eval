import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [prod, setProd] = useState([]);

  const count =   useContext(CartContext);
  console.log('count:', count)
  const HandleInc =  useContext(CartContext);
  const Handledec =  useContext(CartContext);

  useEffect(() => {
    const getData = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      console.log("d:", d);
      setProd(d);
    };
    getData();
  }, []);


  const HandleRemove = (id) => {
    let updatedData = prod.filter((p) => p.id !== id);
    fetch("http://localhost:8080/products", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        updatedData,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setProd(updatedData);
      });
  }

  const product = { id: 1 };
  return (
    <div>
      {prod.map((d) => (
        <div data-cy={`product-${product.id}`} key={d.id}>
          <h3 data-cy="product-name">{d.name}</h3>
          <h6 data-cy="product-description">{d.description}</h6>
          <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
           <div>
            <button data-cy="product-increment-cart-item-count-button" onClick={HandleInc}>+</button>
            <span data-cy="product-count">{count}</span>
            <button data-cy="product-decrement-cart-item-count-button" onClick={Handledec}>-</button>
            <button data-cy="product-remove-cart-item-button"onClick={HandleRemove}>Remove</button>
          </div> 
        </div>
      ))}
    </div>
  );
};

export { Products };
