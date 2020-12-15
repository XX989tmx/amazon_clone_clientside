import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const GrandParentCategoryInitializerInput = (props) => {
  const inputChangeHandler = (event) => {
    props.grandParentCategoryInitializerChangeHandler(event.target.value);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            大カテゴリーの選択
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <select name="" id="" onChange={inputChangeHandler}>
              <option value="">カテゴリーを選択してください</option>
              {props.GrandParentCategories}
            </select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GrandParentCategoryInitializerInput;
