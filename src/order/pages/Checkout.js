import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import reactBootstrap, { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const Checkout = () => {
  const auth = useContext(AuthContext);
  const [PaymentMethod, setPaymentMethod] = useState();
  const history = useHistory();
  //useeffect でCartの中身をFetch *backendにロジック追加
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/users/getLatestContentOfCart/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const paymentMethodHandler = (event) => {
    setPaymentMethod(event.target.value);
  };

  const completePurchaseHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      nameOfPaymentMethod: PaymentMethod,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/orders/createOrder/${auth.userId}/5fb2be90be17035930da9466?token=${auth.token}`,
        body
      );
      console.log(response);
      const data = response.data;
      const orderId = data.createdOrder._id;
      // order cpmplete page へhistory.push
      history.push(`/order/orderComplete/${orderId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* checkout
      <form action="" onSubmit={completePurchaseHandler}>
        <select name="" id="paymentMethod" onChange={paymentMethodHandler}>
          <option value="">chose payment method</option>
          <option value="CreditCard">Credit Card</option>
        </select>
        <button type="submit">complete purchase</button>
      </form> */}
      <Container fluid="md">
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col>bread crums image</Col>
                </Row>
                <Row>
                  <Col>注文内容を確認変更する</Col>
                </Row>
                <Row>
                  <Col>purchase confirmation paragraph</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                main section
                <Row>
                  <Col>notification section</Col>
                </Row>
                <Row>
                  <Col xs={12} lg={4}>
                    <Row>
                      <Col>お届け先住所</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>zipcode</Col>
                        </Row>
                        <Row>
                          <Col>addressinfo1</Col>
                        </Row>
                        <Row>
                          <Col>addressinfo2</Col>
                        </Row>
                        <Row>
                          <Col>phonenumber</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} lg={8}>
                    <Row>
                      <Col>
                        <Row>
                          <Col>
                            <Row>
                              <Col>支払い方法</Col>
                            </Row>
                            <Row>
                              <Col>shimo4keta</Col>
                            </Row>
                            <Row>
                              <Col>bunkatu explanation</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Row>
                              <Col>お支払い方法に紐付いた住所</Col>
                            </Row>
                            <Row>
                              <Col>name</Col>
                            </Row>
                            <Row>
                              <Col>zipcode</Col>
                            </Row>
                            <Row>
                              <Col>addresinfo1</Col>
                            </Row>
                            <Row>
                              <Col>addressinfo2</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <Row>
                              <Col>Amazon points</Col>
                            </Row>
                            <Row>
                              <Col>point balance</Col>
                            </Row>
                            <Row>
                              <Col>point use inout</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    mainsection body section
                    <Row>
                      <Col>
                        <Row>
                          <Col>delivery date</Col>
                          <Col>delivery date explanation</Col>
                        </Row>
                        <Row>
                          <Col lg={6}>
                            <Row>
                              <Col xs={12} style={{ height: "200px" }}>
                                <Row>
                                  <Col xs={4}>
                                    <Row>
                                      <Col style={{ height: "200px" }}>img</Col>
                                    </Row>
                                  </Col>
                                  <Col xs={8} style={{ height: "200px" }}>
                                    <Row>
                                      <Col>product name</Col>
                                    </Row>
                                    <Row>
                                      <Col>price</Col>
                                    </Row>
                                    <Row>
                                      <Col>gettable point</Col>
                                    </Row>
                                    <Row>
                                      <Col>qantity</Col>
                                    </Row>
                                    <Row>
                                      <Col>seller</Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={12} style={{ height: "200px" }}>
                                <Row>
                                  <Col xs={4}>
                                    <Row>
                                      <Col style={{ height: "200px" }}>img</Col>
                                    </Row>
                                  </Col>
                                  <Col xs={8} style={{ height: "200px" }}>
                                    <Row>
                                      <Col>product name</Col>
                                    </Row>
                                    <Row>
                                      <Col>price</Col>
                                    </Row>
                                    <Row>
                                      <Col>gettable point</Col>
                                    </Row>
                                    <Row>
                                      <Col>qantity</Col>
                                    </Row>
                                    <Row>
                                      <Col>seller</Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={12} style={{ height: "200px" }}>
                                <Row>
                                  <Col xs={4}>
                                    <Row>
                                      <Col style={{ height: "200px" }}>img</Col>
                                    </Row>
                                  </Col>
                                  <Col xs={8} style={{ height: "200px" }}>
                                    <Row>
                                      <Col>product name</Col>
                                    </Row>
                                    <Row>
                                      <Col>price</Col>
                                    </Row>
                                    <Row>
                                      <Col>gettable point</Col>
                                    </Row>
                                    <Row>
                                      <Col>qantity</Col>
                                    </Row>
                                    <Row>
                                      <Col>seller</Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={6}>
                            <Row>
                              <Col>プライム配送オプション</Col>
                            </Row>
                            <Row>
                              <Col xs={1}></Col>
                              <Col xs={11}>
                                {" "}
                                <Row>
                                  <Col>tuuzyouhaisou explanation</Col>
                                </Row>
                                <Row>
                                  <Col>manebarai</Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={1}></Col>
                              <Col xs={5}>oisogibinn</Col>
                              <Col xs={5}>delivery date</Col>
                            </Row>
                            <Row>
                              <Col xs={1}></Col>
                              <Col xs={11}>
                                <Row>
                                  <Col>otodokenitizishiteibinn</Col>
                                </Row>
                                <Row>
                                  <Col>delivery date</Col>
                                </Row>
                                <Row>
                                  <Col>explanation</Col>
                                </Row>
                                <Row>
                                  <Col> link to detail</Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>side bar</Col>
            </Row>
            <Row>
              <Col>riyou kiyaku</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
