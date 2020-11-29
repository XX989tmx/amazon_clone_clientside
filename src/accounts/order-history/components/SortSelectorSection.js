import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import SortSelector from "./SortSelector";
import SortSelectorParagraph from "./SortSelectorParagraph";
const SortSelectorSection = (props) => {
  return (
    <Row>
      <SortSelector />
      <SortSelectorParagraph />
    </Row>
  );
};

export default SortSelectorSection;
