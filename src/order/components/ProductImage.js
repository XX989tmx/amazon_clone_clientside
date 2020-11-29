import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const ProductImage = (props) => {
  return (
    <Row>
      <Col style={{ height: "200px" }}>
        <img
          style={{ height: "100px", width: "100%" }}
          src={
            props.imageUrl &&
            process.env.REACT_APP_ASSET_URL + "/" + props.imageUrl
          }
          alt=""
        />
      </Col>
    </Row>
  );
};

export default ProductImage;
