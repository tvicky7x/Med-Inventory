import React, { useState } from "react";
import cartContext from "./cartContext";

function CartProvider(props) {
  const [cartState, setCartState] = useState(false);
  const [medList, setMedList] = useState([]);
  const [cartList, setCartList] = useState([]);

  function openCart() {
    setCartState(true);
  }

  function closeCart() {
    setCartState(false);
  }

  function addMedList(data) {
    setMedList((oldMedList) => {
      return [...oldMedList, data];
    });
  }

  function removeMedList(id) {
    setMedList((oldMedList) => {
      return oldMedList.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function addCartList(data) {
    data.cart = true;
    setCartList((oldCartList) => {
      return [...oldCartList, data];
    });
  }

  return (
    <cartContext.Provider
      value={{
        cartState: cartState,
        openCart: openCart,
        closeCart: closeCart,
        medList: medList,
        addMedList: addMedList,
        removeMedList: removeMedList,
        cartList: cartList,
        addCartList: addCartList,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default CartProvider;
