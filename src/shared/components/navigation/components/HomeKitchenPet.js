import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import HomeKitchenPetCategoryItems from "./HomeKitchenPetCategoryItems";
const HomeKitchenPet = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ホーム＆キッチン、ペット、DIY click</Col>
        </Row>
        <HomeKitchenPetCategoryItems />
      </Col>
    </Row>
  );
};

export default HomeKitchenPet;
