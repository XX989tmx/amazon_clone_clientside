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
const ItemOfDrugStore = (props) => {
  let itemOfDrugStore = [
    "医薬品",
    "ヘルスケア、衛生用品",
    "コンタクトレンズ",
    "サプリメント",
    "ダイエット",
    "シニアサポート、介護",
    "おむつ、おしりふき",
    "日用品（掃除、洗濯、キッチン）",
    "ドラッグストアへ",
    "Amazonブランド",
    "バーチャルダッシュ",
    "Amazon Dash Replinishment",
    "Amazon パントリー",
    "Amazon定期おトク便",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>ドラッグストア</Col>
        </Row>
        <Row>
          {itemOfDrugStore.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDrugStore;
