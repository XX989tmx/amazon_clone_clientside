import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductImageOfCartItem = (props) => {
  return (
    <Row>
      <Col style={{ height: "100px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={process.env.REACT_APP_ASSET_URL + `/${props.image.imageUrl}`}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default ProductImageOfCartItem;
