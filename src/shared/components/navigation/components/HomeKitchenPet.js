import React, { useState } from "react";
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
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            ホーム＆キッチン、ペット、DIY{" "}
            {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <HomeKitchenPetCategoryItems />}
      </Col>
    </Row>
  );
};

export default HomeKitchenPet;
