import React from "react";

const cartContext = React.createContext({
  cartState: false,
  openCart: () => {},
  closeCart: () => {},
  medList: [],
  addMedList: (data) => {},
  removeMedList: (id) => {},
  cartList: [],
  addCartList: (data) => {},
  removeCartList: () => {},
  changeQuantity: () => {},
  printBill: () => {},
});

export default cartContext;
