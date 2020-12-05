import React from "react";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
const SearchFormSection = (props) => {
  return (
    <Col xs={10} md={10} xl={6}>
      <Row>
        <Col>
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Col>
      </Row>
    </Col>
  );
};

export default SearchFormSection;
