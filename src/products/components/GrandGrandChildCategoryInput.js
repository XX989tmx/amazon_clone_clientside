import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const GrandGrandChildCategoryInput = (props) => {
  const inputChangeHandler = (event) => {
    props.chosenGrandGrandChildCategoryOptionsChangeHandler(event.target.value);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            grand grand child category
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            {/* grand grand child category */}
            <select name="" id="" onChange={inputChangeHandler}>
              <option value="">grand grand child category</option>
              {props.ChosenGrandGrandChildOptions}
            </select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GrandGrandChildCategoryInput;
