import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import SubPicture from "./SubPicture";
const SubPictures = (props) => {
  return (
    <Row>
      <SubPicture image={props.images[0]}/>
      <SubPicture image={props.images[1]}/>
      <SubPicture image={props.images[2]}/>
      <SubPicture image={props.images[4]}/>
      <SubPicture image={props.images[5]}/>
      {/* <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic2
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic3
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic4
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic5
      </Col> */}
    </Row>
  );
};

export default SubPictures;
