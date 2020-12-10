import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import PcAndOfficeCategoryItems from "./PcAndOfficeCategoryItems";

const PcAndOffice = (props) => {
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            パソコン、オフィス用品 {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <PcAndOfficeCategoryItems />}
      </Col>
    </Row>
  );
};

export default PcAndOffice;
