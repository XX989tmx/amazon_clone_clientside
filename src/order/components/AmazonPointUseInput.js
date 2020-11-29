import React, { useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";

const AmazonPointUseInput = (props) => {
  const [amazonPointUsed, setAmazonPointUsed] = useState();

  const amazonPointUsedChangeHandler = (event) => {
    setAmazonPointUsed(event.target.value);
    props.amazonPointChangeHandler(event.target.value);
  };
  return (
    <Row>
      <Col>
        <input value={amazonPointUsed} type="number" placeholder="ご利用額" onChange={amazonPointUsedChangeHandler} />
      </Col>
    </Row>
  );
};

export default AmazonPointUseInput;
