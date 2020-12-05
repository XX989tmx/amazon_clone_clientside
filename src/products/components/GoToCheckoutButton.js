import React, { useContext } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const GoToCheckoutButton = (props) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const goToLogin = () => {
    history.push("/user/auth/login");
  };
  return (
    <Row>
      <Col xs={12}>
        <Link to={`/order/checkout`}>
          {" "}
          {auth.isLoggedIn ? (
            <Button>レジに進む</Button>
          ) : (
            <div>
              {" "}
              <Link>
                <Button onClick={goToLogin}> レジに進む</Button>
              </Link>
              <p>ご注文の前にログインしてください。</p>
            </div>
          )}
        </Link>
      </Col>
    </Row>
  );
};

export default GoToCheckoutButton;
