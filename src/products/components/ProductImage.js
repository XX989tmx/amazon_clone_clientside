import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const ProductImage = (props) => {
  return (
    <Row>
      <Col style={{ height: "230px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={process.env.REACT_APP_ASSET_URL + `/${props.image.imageUrl}`}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default ProductImage;
