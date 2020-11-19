import React from "react";
import { Link } from "react-router-dom";

const SpecificProductItem = (props) => {
  return (
    <div>
      {props.name}
      {props.price}
      {props.isStock ? <span>在庫有り</span> : <span>在庫無し</span>}
      {props.deliveryDate}
      <Link to={`/product/brand/${props.brand}?page=1`}>
        <span> {props.brand}</span>
      </Link>
      <select name="" id="">
        <option value="">数量</option>
        {props.StockQuantityOptions}
      </select>
    </div>
  );
};

export default SpecificProductItem;
