import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import TotalPriceOfOrder from "./TotalPriceOfOrder";
import TotalPriceOfOrderHeader from "./TotalPriceOfOrderHeader";
const TotalPriceOfItemsSection = (props) => {
  return (
    <Row>
      <TotalPriceOfOrderHeader />
      <TotalPriceOfOrder />
    </Row>
  );
};

export default TotalPriceOfItemsSection;
