import React from "react";

const ChildCategoryIndexItem = (props) => {
  return (
    <div>
      {props.name}
      {props.price}
      {props.isStock ? <span>在庫有り</span> : <span>在庫無し</span>}
      {props.brand}
    </div>
  );
};

export default ChildCategoryIndexItem;
