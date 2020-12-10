import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import DrugStoreBeautyCategoryItems from "./DrugStoreBeautyCategoryItems";

const DrugStoreBeauty = (props) => {
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            ドラッグストア、ビューティー {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <DrugStoreBeautyCategoryItems />}
      </Col>
    </Row>
  );
};

export default DrugStoreBeauty;
