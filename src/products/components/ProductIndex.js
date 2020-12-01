import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductIndex = (props) => {
  // the role of this component is list of 'list and item'
  // row>col list item pattern. same pattern as ul>li list item.
  return (
    <Row>
      {props.GrandGrandChildCategoryMatchedProducts.map((v, i) => (
        <ProductItem
          key={i}
          name={v.name}
          price={v.price}
          images={v.images}
          brand={v.brand}
          id={v.id}
          changeCartHandler={props.changeCartHandler}
          isStock={v.isStock}
        />
      ))}
    </Row>
  );
};

export default ProductIndex;
