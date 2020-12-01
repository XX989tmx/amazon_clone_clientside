import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductImageOfOrderItem = (props) => {
  return (
    <Row>
      <Col style={{ height: "120px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={process.env.REACT_APP_ASSET_URL + `/${props.image.imageUrl}`}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default ProductImageOfOrderItem;
