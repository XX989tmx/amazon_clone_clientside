import React from "react";

const SpecificProductItem = (props) => {
  return (
    <div>
      {props.name}
      {props.price}
      {props.isStock ? <span>在庫有り</span> : <span>在庫無し</span>}
      {props.deliveryDate}
      {props.brand}
      <select name="" id="">
        <option value="">数量</option>
        {props.StockQuantityOptions}
      </select>
    </div>
  );
};

export default SpecificProductItem;
