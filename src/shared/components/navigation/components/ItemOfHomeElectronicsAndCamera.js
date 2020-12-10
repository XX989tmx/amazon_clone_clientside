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
const ItemOfHomeElectronicsAndCamera = (props) => {
  let itemOfHomeElectronicsAndCamera = [
    "キッチン家電",
    "生活家電",
    "理美容家電",
    "空調、季節家電",
    "照明",
    "大型家電",
    "カメラ、ビデオカメラ",
    "アクションカメラ",
    "双眼鏡、望遠鏡、光学機器",
    "携帯電話、スマートフォン",
    "テレビ、レコーダー",
    "オーディオ",
    "イヤホン、ヘッドホン",
    "ウェアラブルデバイス",
    "アクセサリ",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>家電、カメラ、AV機器</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to={`/product/index/parentCategory/すべての家電?page=1`}>
              すべての家電
            </Link>
          </Col>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべてのカメラ、AV機器?page=1`}
            >
              すべてのカメラ、AV機器
            </Link>
          </Col>
          {itemOfHomeElectronicsAndCamera.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfHomeElectronicsAndCamera;
