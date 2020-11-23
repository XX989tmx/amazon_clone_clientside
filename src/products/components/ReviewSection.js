import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReviewMainSection from "./ReviewMainSection";
import ReviewSideSection from "./ReviewSideSection";

const ReviewSection = (props) => {
  return (
    <Row>
      <ReviewSideSection />
      <ReviewMainSection />
    </Row>
  );
};

export default ReviewSection;
