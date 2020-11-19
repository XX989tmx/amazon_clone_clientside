import React from "react";
import GetProductsByBrandItem from "./GetProductsByBrandItem";

const GetProductsByBrandList = (props) => {
  return (
    <div>
      {props.BrandMatchedProducts.map((v, i) => (
        <GetProductsByBrandItem
          key={v.id}
          id={v.id}
          parentCategory={v.parentCategory}
          ancestorCategories={v.ancestorCategories}
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

export default GetProductsByBrandList;
