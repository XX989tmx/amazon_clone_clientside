import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ChildCategoryInput = (props) => {
  const inputChangeHandler = (event) => {
    props.chosenChildCategoryOptionsChangeHandler(event.target.value);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            child category
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            {/* child category */}
            <select name="" id="" onChange={inputChangeHandler}>
              <option value="">child category</option>
              {props.ChosenChildCategoryOptions}
            </select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ChildCategoryInput;
