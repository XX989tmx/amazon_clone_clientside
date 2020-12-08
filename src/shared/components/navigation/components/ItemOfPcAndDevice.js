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
const ItemOfPcAndDevice = (props) => {
  let itemOfPcAndDevice = [
    "パソコン、タブレット",
    "ディスプレイ、モニタ－",
    "プリンター、インク",
    "キーボード、マウス、入力機器",
    "無線LAN、ネットワーク機器",
    "PCパーツ、CPU、内蔵HDD",
    "外付けドライブ、ストレージ",
    "SSD,microSDカード、USBメモリ",
    "PCアクセサリ、記録メディア",
    "ゲーミングPC、関連アクセサリ",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>パソコン、周辺機器</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべてのパソコン、周辺機器`}
            >
              すべてのパソコン、周辺機器
            </Link>
          </Col>
          {itemOfPcAndDevice.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfPcAndDevice;
