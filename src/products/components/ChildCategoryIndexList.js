import React from "react";
import ChildCategoryIndexItem from "./ChildCategoryIndexItem";

const ChildCategoryIndexList = (props) => {
  return (
    <div>
      {props.ChildCategoryMatchedProducts.map((v, i) => (
        <ChildCategoryIndexItem
          key={i}
          ancestorCategories={v.ancestorCategories}
          parentCategory={v.parentCategory}
          categories={v.categories}
          reviews={v.reviews}
          name={v.name}
          price={v.price}
          deliveryDate={v.deliveryDate}
          brand={v.brand}
          isStock={v.isStock}
          seller={v.seller}
        />
      ))}
    </div>
  );
};

export default ChildCategoryIndexList;
