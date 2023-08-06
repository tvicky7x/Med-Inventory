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
    alert("Are you Sure?");
    setCartList((oldCartList) => {
      return oldCartList.filter((item) => {
        return item.id !== id;
      });
    });
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

  function removeCartList(id) {
    setMedList((oldMedList) => {
      return oldMedList.map((item) => {
        if (item.id === id) {
          item.quantity = 1;
          item.cart = false;
        }
        return item;
      });
    });
    setCartList((oldCartList) => {
      return oldCartList.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function changeQuantity(id, value) {
    if (value > 1) {
      setCartList((oldCartList) => {
        return oldCartList.map((item) => {
          if (item.id === id) {
            item.quantity = value;
          }
          return item;
        });
      });
    }
  }

  function printBill(id) {
    console.log("Printing Bill...");
    setMedList((oldMedList) => {
      return oldMedList.map((item) => {
        item.quantity = 1;
        item.cart = false;
        return item;
      });
    });
    setCartList([]);
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
        removeCartList: removeCartList,
        changeQuantity: changeQuantity,
        printBill: printBill,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default CartProvider;
