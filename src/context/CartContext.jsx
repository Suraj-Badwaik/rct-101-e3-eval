import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const HandleInc = () => {
    setCount(count+1);
  }

  const Handledec = () => {
    setCount(count-1);
  }
  return <CartContext.Provider value={{count,HandleInc,Handledec}}>{children}</CartContext.Provider>;
};
