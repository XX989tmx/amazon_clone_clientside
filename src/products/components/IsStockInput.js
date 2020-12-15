import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const IsStockInput = (props) => {
    const [IsStockStatus, setIsStockStatus] = useState();
    const inputChangeHandler = (event) => {
        setIsStockStatus(event.target.value);
        props.isStockChangeHandler(IsStockStatus);
    }
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            在庫状況
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <select
              value={IsStockStatus}
              name=""
              id="isStock"
              onChange={inputChangeHandler}
            >
              <option value="">在庫の有無</option>
              <option value="true">あり</option>
              <option value="false">なし</option>
            </select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default IsStockInput;
