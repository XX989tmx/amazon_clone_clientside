import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfDrink from "./ItemOfDrink";
import ItemOfFoodAndBeverage from "./ItemOfFoodAndBeverage";
const FoodDrinkCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfFoodAndBeverage />
        <ItemOfDrink />
      </Col>
    </Row>
  );
};

export default FoodDrinkCategoryItems;
