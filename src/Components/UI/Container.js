import React from "react";

function Container(props) {
  return (
    <div className=" container" style={{ width: "600px" }}>
      {props.children}
    </div>
  );
}

export default Container;
