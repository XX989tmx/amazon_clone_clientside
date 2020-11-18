import React from "react";
import GrandChildCategoryIndexItem from "./GrandChildCategoryIndexItem";

const GrandChildCategoryIndexList = (props) => {
  return (
    <div>
      {props.GrandChildCategoryMatchedProducts.map((v, i) => (
        <GrandChildCategoryIndexItem
          key={i}
          ancestorCategories={v.ancestorCategories}
          brand={v.brand}
          categories={v.categories}
          deliveryDate={v.deliveryDate}
          id={v.id}
          isStock={v.isStock}
          name={v.name}
          parentCategory={v.parentCategory}
          price={v.price}
          seller={v.seller}
        />
      ))}
    </div>
  );
};

export default GrandChildCategoryIndexList;
