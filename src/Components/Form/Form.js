import React, { useContext, useRef } from "react";
import cartContext from "../../cartContext";

function Form() {
  const context = useContext(cartContext);
  const inputName = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();

  function submitMed(e) {
    e.preventDefault();
    const data = {
      name: inputName.current.value,
      dis: inputDescription.current.value,
      price: inputPrice.current.value,
      id: Math.random().toString(),
      quantity: 1,
      cart: false,
    };
    context.addMedList(data);
    e.target.reset();
  }

  return (
    <div className="card mt-3">
      <div className=" card-header">
        <h4 className=" mt-1">Add Medicines</h4>
      </div>
      <div className=" card-body">
        <form action="#" onSubmit={submitMed}>
          <div>
            <label htmlFor="medName" className=" form-label">
              Medicine Name
            </label>
            <input
              ref={inputName}
              type="text"
              name="medName"
              id="medName"
              className=" form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="medDescription" className=" form-label">
              Medicine Description
            </label>
            <input
              ref={inputDescription}
              type="text"
              name="medDescription"
              id="medDescription"
              className=" form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="medPrice" className=" form-label">
              Medicine Price
            </label>
            <input
              ref={inputPrice}
              type="number"
              name="medPrice"
              id="medPrice"
              className=" form-control"
              required
            />
          </div>
          <div className="d-grid mt-3">
            <button
              className="btn btn-sm btn-success fw-semibold"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
