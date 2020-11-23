import React from "react";
import ImageSection from "./ImageSection";
import ProductDescriptionSection from "./ProductDescriptionSection";
import PurchaseActionSection from "./PurchaseActionSection";

const UpperSection = (props) => {
  return (
    <div>
      <ImageSection images={props.images} />

      <ProductDescriptionSection
        name={props.name}
        seller={props.seller}
        price={props.price}
        reviews={props.reviews}
        id={props.id}
      />

      <PurchaseActionSection />
    </div>
  );
};

export default UpperSection;
