import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategorySection from "./CategorySection";
import ProductIndexSection from "./ProductIndexSection";

const MainSectionOfGrandGrandChildCategoryIndex = (props) => {
  return (
    <Col md={10} lg={10} xl={10}>
      <Row>
        <CategorySection />
        <ProductIndexSection
          GrandGrandChildCategoryMatchedProducts={
            props.GrandGrandChildCategoryMatchedProducts
          } PaginationData={props.PaginationData}
        />
      </Row>
    </Col>
  );
};

export default MainSectionOfGrandGrandChildCategoryIndex;
