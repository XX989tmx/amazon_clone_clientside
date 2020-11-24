import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ContentsOfCart = (props) => {
  return (
    <Row>
      <Col style={{ height: "100%", padding: "10px 25px 10px 25px" }}>
        <Row>
          <Col style={{ height: "100px" }}>image</Col>
        </Row>
        <Row>
          <Col>name</Col>
        </Row>
        <Row>
          <Col>price</Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <select>
              <option>数量:1</option>{" "}
            </select>
          </Col>
          <Col md={12} lg={6}>delete</Col>
        </Row>
        {/* {props.CartItems.map((v, i) => (
          <Row>
            {" "}
            <Col> {v.productId.name}</Col> <Col>{v.productId.price}</Col>
          </Row>
        ))} */}
      </Col>
    </Row>
  );
};

export default ContentsOfCart;
