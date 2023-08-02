import React, { useContext } from "react";
import cartContext from "../../cartContext";

function MedListItem(props) {
  const context = useContext(cartContext);
  return (
    <li className=" list-group-item d-flex justify-content-start text-capitalize">
      <div>
        <h5 className=" m-0">{props.data.name}</h5>
        <p className=" m-0 fst-italic">{props.data.dis}</p>
        <p className=" m-0 fw-semibold text-success">₹ {props.data.price}</p>
      </div>
      <button
        className=" align-self-center btn btn-sm btn-success fw-semibold ms-auto"
        onClick={(e) => {
          if (e.target.innerHTML === "View Cart") {
            return;
          }
          context.addCartList(props.data);
        }}
      >
        {!props.data.cart && "Add to Cart"}
        {props.data.cart && "View Cart"}
      </button>
      <button
        className="align-self-center btn btn-sm btn-danger ms-2 fw-semibold"
        onClick={() => {
          context.removeMedList(props.data.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default MedListItem;
