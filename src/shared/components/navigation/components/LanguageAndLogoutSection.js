import React, { useContext } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

const LanguageAndLogoutSection = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Row>
      <Col>
        <Row>
          <Col>アカウントサービス</Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col onClick={auth.logout}>
                {auth.isLoggedIn ? (
                  <Button> ログアウト</Button>
                ) : (
                  <Link to={`/user/auth/login`}>
                    <Button>サインイン</Button>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LanguageAndLogoutSection;
