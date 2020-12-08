import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import FoodDrinkCategoryItems from "./FoodDrinkCategoryItems";
const FoodDrink = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>食品、飲料、お酒 click</Col>
        </Row>
        <FoodDrinkCategoryItems />
      </Col>
    </Row>
  );
};

export default FoodDrink;
