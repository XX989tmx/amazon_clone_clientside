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

const UserLoginSection = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Row>
      <Col>
        こんにちは{" "}
        {auth.isLoggedIn ? "" : <Link to={`/user/auth/login`}>サインイン</Link>}
        　
      </Col>
    </Row>
  );
};

export default UserLoginSection;
