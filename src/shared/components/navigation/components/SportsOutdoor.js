import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import SportsOutdoorCategoryItems from "./SportsOutdoorCategoryItems";

const SportsOutdoor = (props) => {
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            スポーツ＆アウトドア {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <SportsOutdoorCategoryItems />}
      </Col>
    </Row>
  );
};

export default SportsOutdoor;
