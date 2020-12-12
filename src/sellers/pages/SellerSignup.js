import Axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import reactBootstrap, {
  Alert,
  Button,
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const SellerSignup = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState({
    message: "",
    isSuccess: false,
    isError: false,
    variant: "",
  });

  const signupSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      name: Name,
      email: Email,
      password: Password,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL + "/sellers/signup",
        body
      );
      auth.sellerLogin(response.data.sellerId, response.data.token);
      console.log(response);
      setMessage({
        message: response.data.message,
        isSuccess: true,
        isError: false,
        variant: "success",
      });
      setTimeout(() => {
        history.goBack();
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage({
        message: error.message,
        isSuccess: false,
        isError: true,
        variant: "danger",
      });
    }
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container fluid="md">
      <Row>
        <Col xs={{ offset: 2, span: 8 }} lg={{ offset: 4, span: 4 }}>
          logo
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col xs={{ offset: 2, span: 8 }} lg={{ offset: 4, span: 4 }}>
              <Row>
                <Col>
                  <Alert variant={Message.variant}>{Message.message}</Alert>
                </Col>
              </Row>
              <Row>
                <Col>出品者アカウントを作成</Col>
              </Row>
              <Row>
                <Col>
                  <Form onSubmit={signupSubmitHandler}>
                    <Form.Group
                      controlId="name"
                      value={Name}
                      onChange={nameChangeHandler}
                    >
                      <Form.Label>お名前</Form.Label>
                      <Form.Control type="text" placeholder="お名前" />
                    </Form.Group>
                    <Form.Group
                      controlId="email"
                      value={Email}
                      onChange={emailChangeHandler}
                    >
                      <Form.Label>メールアドレス</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email@example.com"
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="password"
                      value={Password}
                      onChange={passwordChangeHandler}
                    >
                      <Form.Label>パスワード</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="半角英数字８文字以上"
                      />
                    </Form.Group>

                    <Button type="submit">出品者アカウントを作成する</Button>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  ログインする事により、利用規約に同意したものとみなされます。
                </Col>
              </Row>
              <Row>
                <Col>
                  すでにアカウントをお持ちですか？<Link>　サインイン</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 2, span: 8 }} lg={{ offset: 4, span: 4 }}>
          <Row>
            <Col>利用規約</Col>
          </Row>
          <Row>
            <Col>company logo</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SellerSignup;
