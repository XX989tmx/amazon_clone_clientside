import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import CartItem from "./CartItem";
const CartItems = (props) => {
  // li of ul>li
  // item of list > item
  // col of Row>Col
  return (
    <Col lg={6}>
      <Row>
        {props.cartItems.map((v, i) => (
          <CartItem
            id={v.id}
            key={i}
            name={v.productId.name}
            price={v.productId.price}
            images={v.productId.images}
            quantity={v.quantity}
          />
        ))}

        {/* <Col xs={12} style={{ height: "200px" }}>
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
        </Col> */}
      </Row>
    </Col>
  );
};

export default CartItems;
