import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ClothShoesBagCategoryItems from "./ClothShoesBagCategoryItems";

const ClothShoesBag = (props) => {
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            服、シューズ、バッグ、腕時計 {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <ClothShoesBagCategoryItems />}
      </Col>
    </Row>
  );
};

export default ClothShoesBag;
