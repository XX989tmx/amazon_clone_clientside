import React from "react";
import "./SideNavigation.css";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const SideNavigation = (props) => {
  // const category1 = [
  //     {category1:"家電、カメラ、AV機器"}
  // ];
  // const category2 = [
  //   {
  //     category2: "キッチン家電",
  //     link: `/product/productIndex/${キッチン家電}`,
  //   },
  //   {
  //     category2: "生活家電",
  //     link: `/product/productIndex/${生活家電}`,
  //   },
  // ];
  let sidebarClass = "sidebar";
  if (props.isSidebarOpen) {
    sidebarClass = "sidebar open";
  }

  return (
    <div className={sidebarClass}>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>こんにちはUser　サインイン</Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>トップ</Col>
                </Row>
                <Row>
                  <Col>注文履歴</Col>
                </Row>
                <Row>
                  <Col>欲しいものリスト</Col>
                </Row>
                <Row>
                  <Col>アカウントリスト</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>カテゴリー</Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <Row>
                          <Col>本、コミック、雑誌 click</Col>
                        </Row>
                        <Row>
                          <Col>
                            show close
                            <Row>
                              <Col>
                                <Row>
                                  <Col>本、コミック、雑誌</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>Kindleストア</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>Audibleオーディオブック</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>本、コミック、雑誌＆Audible</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
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
                          <Col>DVD、ミュージック、ゲーム click</Col>
                        </Row>
                        <Row>
                          <Col>
                            show close
                            <Row>
                              <Col>
                                <Row>
                                  <Col>DVD、Blue-Ray</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>ゲーム</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>DVD、ミュージック、ゲーム</Col>
                                </Row>
                                <Row>
                                  <Col>each child category map</Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>家電、カメラ、AV機器</Col>
                    </Row>
                    <Row>
                      <Col>パソコン、オフィス用品</Col>
                    </Row>
                    <Row>
                      <Col>ホーム＆キッチン、ペット、DIY</Col>
                    </Row>
                    <Row>
                      <Col>食品、飲料、お酒</Col>
                    </Row>
                    <Row>
                      <Col>ドラッグストア、ビューティー</Col>
                    </Row>
                    <Row>
                      <Col>ベビー、おもちゃ、ホビー</Col>
                    </Row>
                    <Row>
                      <Col>服、シューズ、バッグ、腕時計</Col>
                    </Row>
                    <Row>
                      <Col>スポーツ＆アウトドア</Col>
                    </Row>
                    <Row>
                      <Col>車、バイク、産業、研究開発</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>アカウントサービス</Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>ログアウト</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideNavigation;
