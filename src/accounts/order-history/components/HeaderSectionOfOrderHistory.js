import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import HeaderSection from "./HeaderSection";
import SearchBarSection from "./SearchBarSection";
const HeaderSectionOfOrderHistory = (props) => {
  return (
    <Row>
      <HeaderSection />
      <SearchBarSection />
    </Row>
  );
};

export default HeaderSectionOfOrderHistory;
