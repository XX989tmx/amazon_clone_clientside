import React from "react";
import SpecificProductItem from "./SpecificProductItem";

const SpecificProductList = (props) => {
  return (
    <div>
      {/* {props.SpecificProduct.map((v, i) => (
        <SpecificProductItem
          key={i}
          ancestorCategories={v.ancestorCategories}
          brand={v.brand}
          categories={v.categories}
          deliveryDate={v.deliveryDate}
          id={v.id}
          isStock={v.isStock}
          seller={v.seller}
          name={v.name}
          price={v.price}
          parentCategory={v.parentCategory}
          reviews={v.reviews}
          StockQuantityOptions={props.StockQuantityOptions}
        />
      ))} */}
    </div>
  );
};

export default SpecificProductList;
