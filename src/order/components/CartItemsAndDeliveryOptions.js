import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const CartItemsAndDeliveryOptions = (props) => {
  return (
    <Row>
      <Col lg={6}>
        <Row>
          <Col xs={12} style={{ height: "200px" }}>
            <Row>
              <Col xs={4}>
                <Row>
                  <Col style={{ height: "200px" }}>img</Col>
                </Row>
              </Col>
              <Col xs={8} style={{ height: "200px" }}>
                <Row>
                  <Col>product name</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                </Row>
                <Row>
                  <Col>gettable point</Col>
                </Row>
                <Row>
                  <Col>qantity</Col>
                </Row>
                <Row>
                  <Col>seller</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} style={{ height: "200px" }}>
            <Row>
              <Col xs={4}>
                <Row>
                  <Col style={{ height: "200px" }}>img</Col>
                </Row>
              </Col>
              <Col xs={8} style={{ height: "200px" }}>
                <Row>
                  <Col>product name</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                </Row>
                <Row>
                  <Col>gettable point</Col>
                </Row>
                <Row>
                  <Col>qantity</Col>
                </Row>
                <Row>
                  <Col>seller</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} style={{ height: "200px" }}>
            <Row>
              <Col xs={4}>
                <Row>
                  <Col style={{ height: "200px" }}>img</Col>
                </Row>
              </Col>
              <Col xs={8} style={{ height: "200px" }}>
                <Row>
                  <Col>product name</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                </Row>
                <Row>
                  <Col>gettable point</Col>
                </Row>
                <Row>
                  <Col>qantity</Col>
                </Row>
                <Row>
                  <Col>seller</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={6}>
        <Row>
          <Col>プライム配送オプション</Col>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={11}>
            {" "}
            <Row>
              <Col>tuuzyouhaisou explanation</Col>
            </Row>
            <Row>
              <Col>manebarai</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={5}>oisogibinn</Col>
          <Col xs={5}>delivery date</Col>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={11}>
            <Row>
              <Col>otodokenitizishiteibinn</Col>
            </Row>
            <Row>
              <Col>delivery date</Col>
            </Row>
            <Row>
              <Col>explanation</Col>
            </Row>
            <Row>
              <Col> link to detail</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItemsAndDeliveryOptions;
