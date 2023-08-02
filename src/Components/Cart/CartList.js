import React, { useContext, useRef } from "react";
import cartContext from "../../cartContext";

function CartList(props) {
  const context = useContext(cartContext);
  const inputQuantity = useRef();
  return (
    <li className=" list-group-item d-flex justify-content-between">
      <div>
        <h5 className=" m-0">{props.data.name}</h5>
        <p className=" m-0 fst-italic">{props.data.dis}</p>
        <p className=" m-0 fw-semibold text-success">₹ {props.data.price}</p>
      </div>
      <div className=" d-flex">
        <input
          ref={inputQuantity}
          type="number"
          className=" form-control align-self-center"
          style={{ width: "60px", height: "30px" }}
          defaultValue={props.data.quantity}
          onChange={() => {
            context.changeQuantity(props.data.id, inputQuantity.current.value);
          }}
        />
        <button
          className=" align-self-center btn btn-sm btn-danger fw-semibold ms-2"
          onClick={() => {
            context.removeCartList(props.data.id);
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartList;
