import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import AddressList from "../components/AddressList";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const Addresses = () => {
  const auth = useContext(AuthContext);
  const [Addresses, setAddresses] = useState([]);
  useEffect(() => {
    async function getAllAddress(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/addresses/getAllAddresses/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
        const data = response.data;
        setAddresses(data.addresses);
      } catch (error) {
        console.log(error);
      }
    }
    getAllAddress();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>breadclums</Col>
              </Row>
              <Row>
                <Col>住所</Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col xs={6} lg={4} style={{ height: "300px" }}>
                      <Link to="/account/addresses/new"> 新しい住所を追加</Link>
                    </Col>
                    <Col xs={6} lg={4} style={{ height: "300px" }}>
                      <Row>
                        <Col>
                          <Row>
                            <Col>既定の住所</Col>
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
                                <Col>address1</Col>
                              </Row>
                              <Row>
                                <Col>address2</Col>
                              </Row>
                              <Row>
                                <Col>country</Col>
                              </Row>
                              <Row>
                                <Col>phone number</Col>
                              </Row>
                              <Row>
                                <Col>email</Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Row>
                                <Col>
                                  <Link to="/account/addresses/update/:addressId">
                                    変更
                                  </Link>
                                  <Link>削除</Link>
                                  <Link>既定の住所に設定</Link>
                                </Col>
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
          </Row>
        </Col>
      </Row>

      <h1>Addresses</h1>
      <Link to={"/account/addresses/new"}>
        {" "}
        <p>Create New Address</p>
      </Link>
      <div>
        <AddressList />
      </div>
    </Container>
  );
};

export default Addresses;
