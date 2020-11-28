import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const SubPicture = (props) => {
  return (
    <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
      {props.image && (
        <img
          style={{ width: "100%", height: "100%" }}
          src={`${process.env.REACT_APP_ASSET_URL}/${props.image.imageUrl}`}
          alt=""
        />
      )}
    </Col>
  );
};

export default SubPicture;
