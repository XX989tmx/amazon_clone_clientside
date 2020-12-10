import React from "react";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SearchFormSection = (props) => {
  const history = useHistory();
  const moveToSearchResultPageHandler = (params) => {
    history.push("/search");
  };

  return (
    <Col xs={10} md={10} xl={6}>
      <Row>
        <Col>
          <Form
            onChange={props.searchFormChangeHandler}
            onFocus={moveToSearchResultPageHandler}
          >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Col>
      </Row>
    </Col>
  );
};

export default SearchFormSection;
