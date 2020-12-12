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
        <NameInput />
        <PriceInput />
        <DeliveryDateInput />
        <BrandInput />
        <StockQuantityInput />
        <IsStockInput />
        <GrandParentCategoryInitializerInput />
        <GrandParentCategoryInput />
        <ParentCategoryInput />
        <ChildCategoryInput />
        <GrandChildCategoryInput />
        <GrandGrandChildCategoryInput />
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
