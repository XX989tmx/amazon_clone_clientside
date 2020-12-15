import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ParentCategoryInput = (props) => {
  const inputChangeHandler = (event) => {
    props.chosenParentCategoryOptionsChangeHandler(event.target.value);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            parent category
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            {/* parent category */}
            <select name="" id="" onChange={inputChangeHandler}>
              <option value="">parent category</option>
              {props.ChosenParentCategoryOptions}
            </select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ParentCategoryInput;
