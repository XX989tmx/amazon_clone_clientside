import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfDiyGarden from "./ItemOfDiyGarden";
import ItemOfHomeKitchen from "./ItemOfHomeKitchen";
import ItemOfPet from "./ItemOfPet";
const HomeKitchenPetCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfHomeKitchen />
        <ItemOfDiyGarden />
        <ItemOfPet />
      </Col>
    </Row>
  );
};

export default HomeKitchenPetCategoryItems;
