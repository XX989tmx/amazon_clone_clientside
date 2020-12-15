import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ImageInputSection from "./ImageInputSection";
import TextInputSection from "./TextInputSection";
const ProductInformationInputSection = (props) => {
  return (
    <Row>
      <Col>
        <TextInputSection
          nameChangeHandler={props.nameChangeHandler}
          priceChangeHandler={props.priceChangeHandler}
          deliveryDateChangeHandler={props.deliveryDateChangeHandler}
          brandChangeHandler={props.brandChangeHandler}
          stockQuantityChangeHandler={props.stockQuantityChangeHandler}
          isStockChangeHandler={props.isStockChangeHandler}
          grandParentCategoryInitializerChangeHandler={
            props.grandParentCategoryInitializerChangeHandler
          }
          GrandParentCategories={props.GrandParentCategories}
          chosenGrandParentCategoryOptionsChangeHandler={
            props.chosenGrandParentCategoryOptionsChangeHandler
          }
          ChosenGrandParentCategoryOptions={
            props.ChosenGrandParentCategoryOptions
          }
        />
        <ImageInputSection />
      </Col>
    </Row>
  );
};

export default ProductInformationInputSection;
