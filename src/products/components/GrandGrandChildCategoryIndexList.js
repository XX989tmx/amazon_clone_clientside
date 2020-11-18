import React from "react";
import GrandGrandChildCategoryIndexItem from "./GrandGrandChildCategoryIndexItem";

const GrandGrandChildCategoryIndexList = (props) => {
  //一部のみ
  return (
    <div>
      {props.GrandGrandChildCategoryMatchedProducts.map((v, i) => (
        <GrandGrandChildCategoryIndexItem
          key={i}
          ancestorCategories={v.ancestorCategories}
          brand={v.brand}
          categories={v.categories}
          id={v.id}
          isStock={v.isStock}
          name={v.name}
          parentCategory={v.parentCategory}
          price={v.price}
          reviews={v.reviews}
          seller={v.seller}
        />
      ))}
    </div>
  );
};

export default GrandGrandChildCategoryIndexList;
