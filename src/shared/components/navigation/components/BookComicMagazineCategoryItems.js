import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfAudible from "./ItemOfAudible";
import ItemOfBookComicAudible from "./ItemOfBookComicAudible";
import ItemOfBookComicMagazine from "./ItemOfBookComicMagazine";
import ItemOfKindleStore from "./ItemOfKindleStore";
const BookComicMagazineCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfBookComicMagazine />
        <ItemOfKindleStore />
        <ItemOfAudible />
        <ItemOfBookComicAudible />
      </Col>
    </Row>
  );
};

export default BookComicMagazineCategoryItems;
