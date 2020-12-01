import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const MainPicture = (props) => {
  return (
    <Row>
      <Col xs={{ offset: 1, span: 10 }} style={{ height: "220px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={process.env.REACT_APP_ASSET_URL + `/${props.image.imageUrl}`}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default MainPicture;
