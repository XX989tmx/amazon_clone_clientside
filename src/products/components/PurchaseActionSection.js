import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PurchaseActionSection = (props) => {
  return (
    <Col
      xs={12}
      lg={3}
      style={{
        height: "100%",
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      <Row>
        <Col
          xs={{ span: 8, offset: 2 }}
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          price
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>gettable point</Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>delivery date</Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>stock status</Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <select>
            <option>quantity</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Button> add to cart</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Link> seller</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Link> your registered address</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Button> add to wishlist</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default PurchaseActionSection;
