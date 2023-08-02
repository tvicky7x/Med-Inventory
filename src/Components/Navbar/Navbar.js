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
          MedStore <i class="bi bi-capsule-pill"></i>
        </h1>
        <span className=" bg-white text-dark p-2 rounded-2 fs-6 shadow-lg">
          <h6
            className=" d-inline"
            onClick={() => {
              context.openCart();
            }}
          >
            Cart <i class="bi bi-basket"></i>
          </h6>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
