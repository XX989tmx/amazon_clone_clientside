import React from "react";
import { Link } from "react-router-dom";

const GrandChildCategoryIndexItem = (props) => {
  return (
    <div>
      <Link to={`/product/${props.id}`}>
        <div>
          {" "}
          {props.name}
          {props.price}
        </div>
      </Link>
    </div>
  );
};

export default GrandChildCategoryIndexItem;
