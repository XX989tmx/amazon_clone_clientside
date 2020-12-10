import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import BookComicMagazineCategoryItems from "./BookComicMagazineCategoryItems";
const BookComicMagazine = (props) => {
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            本、コミック、雑誌 {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <BookComicMagazineCategoryItems />}
      </Col>
    </Row>
  );
};

export default BookComicMagazine;
