import React, { useContext } from "react";
import Container from "../UI/Container";
import CartList from "./CartList";
import cartContext from "../../cartContext";

function Cart() {
  const context = useContext(cartContext);
  const total = context.cartList.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div
        className="fixed-top h-100 bg-success opacity-50"
        onClick={() => {
          context.closeCart();
        }}
      ></div>
      <div className="fixed-top top-50 start-0 translate-middle-y">
        <Container>
          <div className="card">
            <div className="card-header">
              <h4 className=" mt-1">Add Medicines</h4>
            </div>
            <div className=" card-body">
              <ul className=" list-group">
                {context.cartList.map((item) => {
                  return <CartList data={item} key={item.id} />;
                })}
              </ul>
              <div className=" mt-3 border-2 border-top  p-2">
                <div className=" d-flex justify-content-between">
                  <h5>Total</h5>
                  <h5 className=" text-success">₹ {total}</h5>
                </div>
                <div className=" d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-success fw-semibold"
                    onClick={() => {
                      context.closeCart();
                    }}
                  >
                    Close
                  </button>
                  <button className="btn btn-success fw-semibold ms-2">
                    Print Bill
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Cart;
