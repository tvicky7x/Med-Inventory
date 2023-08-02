import React from "react";

function CartList(props) {
  return (
    <li className=" list-group-item d-flex justify-content-between">
      <div>
        <h5 className=" m-0">{props.data.name}</h5>
        <p className=" m-0 fst-italic">{props.data.dis}</p>
        <p className=" m-0 fw-semibold text-success">₹ {props.data.price}</p>
      </div>
      <div className=" d-flex">
        <input
          type="number"
          className=" form-control align-self-center"
          style={{ width: "60px", height: "30px" }}
          value={props.data.quantity}
        />
        <button className=" align-self-center btn btn-sm btn-danger fw-semibold ms-2">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartList;
