import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import SideBarToggleButton from "../SideBarToggleButton";
const HumbuggerIconSection = (props) => {
  return (
    <Col xs={1} md={1} xl={1} style={{ height: "50px" }}>
      <Row>
        <Col>
          <SideBarToggleButton
            sidebarToggleClickHandler={props.sidebarToggleClickHandler}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default HumbuggerIconSection;
