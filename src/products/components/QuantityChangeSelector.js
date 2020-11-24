import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const QuantityChangeSelector = (props) => {
  // 数量はStateで管理。デフォ１
  return (
    <Col md={12} lg={6}>
      <select>
        <option>数量:n</option>{" "}
      </select>
    </Col>
  );
};

export default QuantityChangeSelector;
