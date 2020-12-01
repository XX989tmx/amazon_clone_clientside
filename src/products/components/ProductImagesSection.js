import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainPicture from "./MainPicture";
import SubPictures from "./SubPictures";

const ProductImagesSection = (props) => {
  return (
    <Col xs={5} lg={5} style={{ height: "100%" }}>
      <MainPicture image={props.images[0] ? props.images[0] : ""} />
      <SubPictures images={props.images} />
    </Col>
  );
};

export default ProductImagesSection;
