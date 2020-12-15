import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const GrandParentCategoryInput = (props) => {
  const inputChangeHandler = (event) => {
    props.chosenGrandParentCategoryOptionsChangeHandler(event.target.value);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            grand parent category
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            {/* grand parent category */}
            <select name="" id="" onChange={inputChangeHandler}>
              <option value="">grand parent category</option>
              {props.ChosenGrandParentCategoryOptions}
            </select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GrandParentCategoryInput;
