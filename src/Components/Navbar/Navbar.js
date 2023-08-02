import React, { useContext } from "react";
import cartContext from "../../cartContext";

function Navbar() {
  const context = useContext(cartContext);

  return (
    <div className="text-bg-success p-3 w-100">
      <div
        style={{ width: "700px" }}
        className=" container d-flex justify-content-between align-items-center"
      >
        <h1>
          MedStore <i className="bi bi-capsule-pill"></i>
        </h1>
        <button
          className="btn btn-sm bg-white text-dark p-2 rounded-2 fs-6 shadow-lg"
          onClick={() => {
            context.openCart();
          }}
        >
          <h6 className=" d-inline">
            Cart <i className="bi bi-basket"></i>
          </h6>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
