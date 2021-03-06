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
          chosenParentCategoryOptionsChangeHandler={
            props.chosenParentCategoryOptionsChangeHandler
          }
          ChosenParentCategoryOptions={props.ChosenParentCategoryOptions}
          ChosenChildCategoryOptions={props.ChosenChildCategoryOptions}
          chosenChildCategoryOptionsChangeHandler={
            props.chosenChildCategoryOptionsChangeHandler
          }
          chosenGrandChildCategoryOptionsChangeHandler={
            props.chosenGrandChildCategoryOptionsChangeHandler
          }
          ChosenGrandChildOptions={props.ChosenGrandChildOptions}
          chosenGrandGrandChildCategoryOptionsChangeHandler={
            props.chosenGrandGrandChildCategoryOptionsChangeHandler
          }
          ChosenGrandGrandChildOptions={props.ChosenGrandGrandChildOptions}
        />
        <ImageInputSection
          previewUrl1={props.previewUrl1}
          image1ChangeHandler={props.image1ChangeHandler}
          PreviewUrl2={props.PreviewUrl2}
          image2ChangeHandler={props.image2ChangeHandler}
          PreviewUrl3={props.PreviewUrl3}
          image3ChangeHandler={props.image3ChangeHandler}
          PreviewUrl4={props.PreviewUrl4}
          image4ChangeHandler={props.image4ChangeHandler}
          PreviewUrl5={props.PreviewUrl5}
          image5ChangeHandler={props.image5ChangeHandler}
        />
      </Col>
    </Row>
  );
};

export default ProductInformationInputSection;
