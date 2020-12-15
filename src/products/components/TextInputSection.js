import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import BrandInput from "./BrandInput";
import ChildCategoryInput from "./ChildCategoryInput";
import DeliveryDateInput from "./DeliveryDateInput";
import GrandChildCategoryInput from "./GrandChildCategoryInput";
import GrandGrandChildCategoryInput from "./GrandGrandChildCategoryInput";
import GrandParentCategoryInitializerInput from "./GrandParentCategoryInitializerInput";
import GrandParentCategoryInput from "./GrandParentCategoryInput";
import IsStockInput from "./IsStockInput";
import NameInput from "./NameInput";
import ParentCategoryInput from "./ParentCategoryInput";
import PriceInput from "./PriceInput";
import StockQuantityInput from "./StockQuantityInput";
const TextInputSection = (props) => {
  return (
    <Row>
      <Col>
        text
        <NameInput nameChangeHandler={props.nameChangeHandler} />
        <PriceInput priceChangeHandler={props.priceChangeHandler} />
        <DeliveryDateInput
          deliveryDateChangeHandler={props.deliveryDateChangeHandler}
        />
        <BrandInput brandChangeHandler={props.brandChangeHandler} />
        <StockQuantityInput
          stockQuantityChangeHandler={props.stockQuantityChangeHandler}
        />
        <IsStockInput isStockChangeHandler={props.isStockChangeHandler} />
        <GrandParentCategoryInitializerInput
          grandParentCategoryInitializerChangeHandler={
            props.grandParentCategoryInitializerChangeHandler
          }
          GrandParentCategories={props.GrandParentCategories}
        />
        <GrandParentCategoryInput
          chosenGrandParentCategoryOptionsChangeHandler={
            props.chosenGrandParentCategoryOptionsChangeHandler
          }
          ChosenGrandParentCategoryOptions={
            props.ChosenGrandParentCategoryOptions
          }
        />
        <ParentCategoryInput
          chosenParentCategoryOptionsChangeHandler={
            props.chosenParentCategoryOptionsChangeHandler
          }
          ChosenParentCategoryOptions={props.ChosenParentCategoryOptions}
        />
        <ChildCategoryInput
          ChosenChildCategoryOptions={props.ChosenChildCategoryOptions}
          chosenChildCategoryOptionsChangeHandler={
            props.chosenChildCategoryOptionsChangeHandler
          }
        />
        <GrandChildCategoryInput
          chosenGrandChildCategoryOptionsChangeHandler={
            props.chosenGrandChildCategoryOptionsChangeHandler
          }
          ChosenGrandChildOptions={props.ChosenGrandChildOptions}
        />
        <GrandGrandChildCategoryInput
          chosenGrandGrandChildCategoryOptionsChangeHandler={
            props.chosenGrandGrandChildCategoryOptionsChangeHandler
          }
          ChosenGrandGrandChildOptions={props.ChosenGrandGrandChildOptions}
        />
        <Row>
          <Col>
            <Row>
              <Col>label</Col>
            </Row>
            <Row>
              <Col>input</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>label</Col>
            </Row>
            <Row>
              <Col>input</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TextInputSection;
