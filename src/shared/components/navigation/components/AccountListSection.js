import React, { useContext } from "react";
import reactBootstrap, {
  Col,
  Row,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

const AccountListSection = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Col xs={5}>
      {auth.isLoggedIn ? (
        <div>
          <span>usernameさん</span>
          <br /> アカウントリスト
        </div>
      ) : (
        <div>
          <Link to="/user/auth/login">
            <Button>ログイン </Button>
          </Link>
        </div>
      )}
    </Col>
  );
};

export default AccountListSection;
