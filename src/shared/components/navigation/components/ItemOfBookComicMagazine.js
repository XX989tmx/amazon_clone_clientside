import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemOfBookComicMagazine = (props) => {
  let itemOfBookComicMagazine = [
    "本",
    "洋書",
    "コミック",
    "雑誌",
    "単行本",
    "文庫",
    "新書",
    "絵本、児童書",
    "新刊、予約",
    "まとめ買い、セット本",
    "アウトレット本",
    "古本（古本、古書）",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>本、コミック、雑誌</Col>
        </Row>
        <Row>
          {itemOfBookComicMagazine.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}> {v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfBookComicMagazine;
