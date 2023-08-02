import React, { useContext } from "react";
import MedListItem from "./MedListItem";
import cartContext from "../../cartContext";

function MedList() {
  const context = useContext(cartContext);
  return (
    <div className="card mt-3">
      <div className=" card-header">
        <h4 className=" mt-1">Available Medicine</h4>
      </div>
      <div className=" card-body">
        <ul className=" list-group">
          {context.medList.map((item) => {
            return <MedListItem data={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MedList;
