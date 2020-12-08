import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import BabyToy from "./BabyToy";
import BookComicMagazine from "./BookComicMagazine";
import DrugStoreBeauty from "./DrugStoreBeauty";
import DvdMusicGame from "./DvdMusicGame";
import FoodDrink from "./FoodDrink";
import HomeElectronicsAndCamera from "./HomeElectronicsAndCamera";
import HomeKitchenPet from "./HomeKitchenPet";
import PcAndOffice from "./PcAndOffice";
const CategoryBody = (props) => {
  return (
    <Row>
      <Col>
        <BookComicMagazine />
        <DvdMusicGame />
        <HomeElectronicsAndCamera />
        <PcAndOffice />
        <HomeKitchenPet />
        <FoodDrink />
        <DrugStoreBeauty />
        <BabyToy />
        <Row>
          <Col>
            <Row>
              <Col>服、シューズ、バッグ、腕時計 click</Col>
            </Row>
            <Row>
              <Col>
                show close
                <Row>
                  <Col>
                    <Row>
                      <Col>Amazon Fashion</Col>
                    </Row>
                    <Row>
                      <Col xs={12}>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>スポーツ＆アウトドア click</Col>
            </Row>
            <Row>
              <Col>
                show close
                <Row>
                  <Col>
                    <Row>
                      <Col>スポーツ＆アウトドア</Col>
                    </Row>
                    <Row>
                      <Col xs={12}>すべてのスポーツ＆アウトドア</Col>
                      <Col xs={12}>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>車、バイク、産業、研究開発 click</Col>
            </Row>
            <Row>
              <Col>
                show close
                <Row>
                  <Col>
                    <Row>
                      <Col>車、バイク、産業、研究開発</Col>
                    </Row>
                    <Row>
                      <Col xs={12}>すべての産業、研究開発用品</Col>
                      <Col xs={12}>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CategoryBody;
