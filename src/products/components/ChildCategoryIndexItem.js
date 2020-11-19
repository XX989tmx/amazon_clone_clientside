import React from "react";
import { Link } from "react-router-dom";

const ChildCategoryIndexItem = (props) => {
  return (
    <div>
      <Link to={`/product/${props.id}`}>
        {" "}
        <div>
          {" "}
          {props.name}
          {props.price}
          {props.isStock ? <span>在庫有り</span> : <span>在庫無し</span>}
          {props.brand}
        </div>
      </Link>
    </div>
  );
};

export default ChildCategoryIndexItem;
