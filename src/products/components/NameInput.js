import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const NameInput = (props) => {
  const [ProductName, setProductName] = useState();

  const nameInputHandler = (event) => {
    setProductName(event.target.value);
    props.nameChangeHandler(ProductName);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            商品名
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <input
              type="text"
              value={ProductName}
              placeholder="商品名"
              onChange={nameInputHandler}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NameInput;
